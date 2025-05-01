import React from 'react';
import { useThemeStore } from '../../../store/themeStore';
import DefaultHero from '../themes/base/Hero';
import OrganTransplantHero from '../themes/theme1/Hero';
import CosmeticSurgeryHero from '../themes/theme2/Hero';

const Hero: React.FC = () => {
  const { specialty } = useThemeStore();

  // Render the appropriate hero component based on the selected theme
  switch (specialty) {
    case 'organ-transplant':
      return <OrganTransplantHero />;
    case 'cosmetic-surgery':
      return <CosmeticSurgeryHero />;
    default:
      return <DefaultHero />;
  }
};

export default Hero; 