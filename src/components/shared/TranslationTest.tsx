import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TranslationTest: React.FC = () => {
  const { t: tHome, i18n: i18nHome } = useTranslation('home');
  const { t: tCommon, i18n: i18nCommon } = useTranslation('common');

  useEffect(() => {
    // Log translation debug info
    console.log('Translation Test Component Debug:', {
      currentLanguage: i18nHome.language,
      isInitialized: i18nHome.isInitialized,
      homeTranslation: tHome('services.title'),
      commonTranslation: tCommon('buttons.learn_more'),
      availableLanguages: i18nHome.languages,
      resourceStore: i18nHome.store.data
    });
  }, [tHome, tCommon, i18nHome, i18nCommon]);

  return (
    <div className="p-4 my-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-bold mb-4">Translation Test</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold">Home Namespace:</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <span className="font-medium">services.title: </span>
              <span className="text-green-600">{tHome('services.title')}</span>
            </li>
            <li>
              <span className="font-medium">services.description: </span>
              <span className="text-green-600">{tHome('services.description')}</span>
            </li>
            <li>
              <span className="font-medium">services.telemedicine.title: </span>
              <span className="text-green-600">{tHome('services.telemedicine.title')}</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold">Common Namespace:</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <span className="font-medium">buttons.learn_more: </span>
              <span className="text-green-600">{tCommon('buttons.learn_more')}</span>
            </li>
            <li>
              <span className="font-medium">navigation.home: </span>
              <span className="text-green-600">{tCommon('navigation.home')}</span>
            </li>
            <li>
              <span className="font-medium">footer.company: </span>
              <span className="text-green-600">{tCommon('footer.company')}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="font-bold">Language Controls:</h3>
        <div className="flex space-x-4 mt-2">
          <button 
            className="px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => i18nHome.changeLanguage('en')}
          >
            English
          </button>
          <button 
            className="px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => i18nHome.changeLanguage('es')}
          >
            Spanish
          </button>
          <button 
            className="px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => i18nHome.changeLanguage('ar')}
          >
            Arabic
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationTest; 