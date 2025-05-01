import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from './i18n'; // Import i18n initialization 

// Debug i18n initialization
console.log('i18n initialized:', {
  language: i18n.language,
  languages: i18n.languages,
  isInitialized: i18n.isInitialized,
  resourceStore: i18n.store.data
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); 