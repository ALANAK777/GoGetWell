import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../../store/themeStore';
import ThemeSelector from './ThemeSelector';
import LanguageSelector from './LanguageSelector';

const MenuBar: React.FC = () => {
  const location = useLocation();
  const { specialty } = useThemeStore();
  const { t } = useTranslation('common');
  
  return (
    <nav className="nav-container sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-8 me-8 ms-0 flex items-center">
            <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-2 me-2 ms-0">
              <span className="text-white font-bold">G</span>
            </span>
            GoGetWell.ai
          </div>
          <div className="flex space-x-4">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
            >
              {t('navigation.home')}
            </Link>
            <Link 
              to="/themes" 
              className={`nav-link ${location.pathname === '/themes' ? 'nav-link-active' : ''}`}
            >
              {t('navigation.themes')}
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <a href="#" className="nav-link hidden md:block">{t('navigation.docs')}</a>
          <a href="#" className="nav-link hidden md:block">{t('navigation.support')}</a>
          <LanguageSelector />
          <ThemeSelector />
        </div>
      </div>
    </nav>
  );
};

export default MenuBar; 