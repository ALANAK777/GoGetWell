import React from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../../store/themeStore';
import { ThemeSpecialty } from '../../@types/theme';
import { defaultTheme, organTransplantTheme, cosmeticSurgeryTheme } from '../../configs/theme.config';

const ThemeSelector: React.FC = () => {
  const { mode, specialty, setSpecialty, toggleMode } = useThemeStore();
  const { t } = useTranslation('common');

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecialty(e.target.value as ThemeSpecialty);
  };

  return (
    <div className="flex items-center space-x-4">
      <select
        value={specialty}
        onChange={handleSpecialtyChange}
        className="bg-background text-text-primary px-3 py-2 rounded-md border border-primary-mild cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-mild"
      >
        <option value="default">{defaultTheme.name}</option>
        <option value="organ-transplant">{organTransplantTheme.name}</option>
        <option value="cosmetic-surgery">{cosmeticSurgeryTheme.name}</option>
      </select>

      <button
        onClick={toggleMode}
        className="p-2 rounded-full bg-primary-mild hover:bg-primary-deep transition-colors flex items-center justify-center w-10 h-10"
        aria-label={mode === 'light' ? t('theme.switch_to_dark') : t('theme.switch_to_light')}
      >
        {mode === 'light' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeSelector; 