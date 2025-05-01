import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';

// Arabic translations
import arCommon from './locales/ar/common.json';
import arHome from './locales/ar/home.json';

// Spanish translations
import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
  },
  ar: {
    common: arCommon,
    home: arHome,
  },
  es: {
    common: esCommon,
    home: esHome,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true, // Enable debugging
    defaultNS: 'common',
    ns: ['common', 'home'],
    fallbackNS: 'common',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Force language to English initially for debugging
i18n.changeLanguage('en');

export default i18n; 