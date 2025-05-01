import React from 'react';
import { useThemeStore } from '../../../store/themeStore';
import { defaultTheme, organTransplantTheme, cosmeticSurgeryTheme } from '../../../configs/theme.config';
import { ThemeSpecialty } from '../../../@types/theme';

const ThemesPage: React.FC = () => {
  const { setSpecialty, specialty, toggleMode, mode } = useThemeStore();

  const themes = [
    {
      id: 'default' as ThemeSpecialty,
      config: defaultTheme,
      previewImage: 'https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?w=740',
      description: 'A professional and clean theme for general medical services and healthcare information.',
    },
    {
      id: 'organ-transplant' as ThemeSpecialty,
      config: organTransplantTheme,
      previewImage: 'https://img.freepik.com/free-vector/human-internal-organ-heart-anatomy-cardiology-concept-illustration_284092-277.jpg?w=740',
      description: 'Specialized theme focused on organ transplantation with a professional, trustworthy appearance.',
    },
    {
      id: 'cosmetic-surgery' as ThemeSpecialty,
      config: cosmeticSurgeryTheme,
      previewImage: 'https://img.freepik.com/free-vector/plastic-surgery-concept-illustration_114360-2525.jpg?w=740',
      description: 'Elegant and refined theme designed for cosmetic surgery and aesthetic procedures.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Theme Selection</h1>
      <p className="mb-8">Customize your experience by selecting a theme that suits your needs.</p>
      
      <div className="mb-12 bg-background/50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Display Mode</h2>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleMode}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-deep transition-colors flex items-center space-x-2"
          >
            {mode === 'light' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <span>Switch to Dark Mode</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                <span>Switch to Light Mode</span>
              </>
            )}
          </button>
          <span className="text-text-secondary">Current mode: <span className="font-semibold">{mode === 'light' ? 'Light' : 'Dark'}</span></span>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6">Available Themes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <div 
            key={theme.id} 
            className={`
              rounded-xl overflow-hidden transition-all bg-white shadow-lg hover:shadow-xl
              ${specialty === theme.id ? 'ring-4 ring-primary ring-opacity-50' : ''}
            `}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={theme.previewImage} 
                alt={`${theme.config.name} theme preview`} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
              {specialty === theme.id && (
                <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{theme.config.name}</h3>
              <p className="text-text-secondary mb-4">{theme.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: theme.config.colors.primary }}></span>
                <span className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: theme.config.colors.secondary }}></span>
                <span className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: theme.config.colors.accent }}></span>
              </div>
              <button
                onClick={() => setSpecialty(theme.id)}
                className={`w-full py-2.5 rounded-md transition-colors text-center font-medium ${
                  specialty === theme.id
                    ? 'bg-primary-deep text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {specialty === theme.id ? 'Currently Active' : 'Apply Theme'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-background/60 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Theme Information</h2>
        <p className="mb-4">Each theme is designed for a specific medical specialty with its own unique:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Color scheme</li>
          <li>Typography</li>
          <li>UI element styling</li>
          <li>Layout structure</li>
          <li>Marketing content</li>
        </ul>
        <p>Choose the theme that best matches your specific needs and preferences.</p>
      </div>
    </div>
  );
};

export default ThemesPage; 