import React from 'react';
import { useTranslation } from 'react-i18next';

interface ErrorMessageProps {
  error?: string;
  type?: 'default' | 'network' | 'not_found' | 'unauthorized';
  retry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  error, 
  type = 'default', 
  retry 
}) => {
  const { t } = useTranslation('common');
  
  const getMessage = () => {
    if (error) return error;
    
    return t(`error.${type}`);
  };

  return (
    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-900/30 dark:text-red-300 rtl:text-right" role="alert">
      <div className="flex items-center">
        <svg 
          className="w-5 h-5 me-2 rtl:ms-2" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
            clipRule="evenodd" 
          />
        </svg>
        <span className="font-medium">{getMessage()}</span>
      </div>
      
      {retry && (
        <div className="mt-2 text-right">
          <button
            onClick={retry}
            className="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded-md hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
          >
            {t('buttons.retry', 'Retry')}
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorMessage; 