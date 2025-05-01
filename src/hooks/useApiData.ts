import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

interface UseApiDataProps<T> {
  fetcher: () => Promise<T>;
  initialData?: T | null;
  autoFetch?: boolean;
  retryCount?: number;
}

interface UseApiDataResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetch: () => Promise<void>;
  setData: React.Dispatch<React.SetStateAction<T | null>>;
}

function useApiData<T>({
  fetcher,
  initialData = null,
  autoFetch = true,
  retryCount = 0,
}: UseApiDataProps<T>): UseApiDataResult<T> {
  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState<string | null>(null);
  const [retries, setRetries] = useState(0);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetcher();
      setData(result);
      setRetries(0); // Reset retries on success
    } catch (err) {
      console.error('API data fetching error:', err);
      
      // Determine specific error type for better error handling
      if (axios.isAxiosError(err)) {
        if (err.code === 'ECONNABORTED') {
          setError('timeout');
        } else if (!err.response) {
          setError('network');
        } else {
          setError(`${err.response.status}`);
        }
      } else {
        setError(err instanceof Error ? err.message : 'network');
      }
      
      // Auto-retry for timeout errors if retryCount is set
      if (axios.isAxiosError(err) && 
          err.code === 'ECONNABORTED' && 
          retries < retryCount) {
        setRetries(prev => prev + 1);
        // Wait a bit before retrying
        setTimeout(() => {
          fetch();
        }, 1000); // 1 second delay before retry
      }
    } finally {
      setLoading(false);
    }
  }, [fetcher, retryCount, retries]);

  useEffect(() => {
    if (autoFetch) {
      fetch();
    }
  }, [fetch, autoFetch]);

  return { data, loading, error, fetch, setData };
}

export default useApiData; 