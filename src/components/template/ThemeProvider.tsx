import React, { useEffect } from 'react';
import { useThemeStore } from '../../store/themeStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { mode, specialty } = useThemeStore();
  
  useEffect(() => {
    // Apply theme classes to the root element
    document.documentElement.className = '';
    document.documentElement.classList.add(mode);
    document.documentElement.classList.add(`theme-${specialty}`);
    
    // For debugging
    console.log(`Applied theme: ${mode} theme-${specialty}`);
  }, [mode, specialty]);
  
  return <>{children}</>;
};

export default ThemeProvider; 