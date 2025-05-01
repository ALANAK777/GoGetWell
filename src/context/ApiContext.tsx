import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import apiService from '../services/api';

// Define the context type
interface ApiContextType {
  api: typeof apiService;
  isAuthenticated: boolean;
  setAuthToken: (token: string) => void;
  clearAuthToken: () => void;
}

// Create the context with a default value
const ApiContext = createContext<ApiContextType | undefined>(undefined);

// Props for the provider component
interface ApiProviderProps {
  children: ReactNode;
}

// Custom hook for using the API context
export const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

// Provider component
export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // Set the auth token in the API instance and localStorage
  const setAuthToken = (token: string) => {
    localStorage.setItem('auth_token', token);
    setIsAuthenticated(true);
  };

  // Clear the auth token from API instance and localStorage
  const clearAuthToken = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
  };

  // Load token from localStorage on mount
  React.useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  // Set the Accept-Language header based on the current language
  React.useEffect(() => {
    if (i18n && i18n.language) {
      localStorage.setItem('app_language', i18n.language);
    }
  }, [i18n.language]);

  // Create the value object for the context
  const contextValue: ApiContextType = {
    api: apiService,
    isAuthenticated,
    setAuthToken,
    clearAuthToken,
  };

  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext; 