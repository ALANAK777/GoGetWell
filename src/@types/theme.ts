export type ThemeMode = 'light' | 'dark';
export type ThemeSpecialty = 'default' | 'organ-transplant' | 'cosmetic-surgery';

export interface Theme {
  mode: ThemeMode;
  specialty: ThemeSpecialty;
}

export interface ThemeColors {
  primary: string;
  primaryDeep: string;
  primaryMild: string;
  secondary: string;
  secondaryDeep: string;
  secondaryMild: string;
  accent: string;
  background: string;
  textPrimary: string;
  textSecondary: string;
}

export interface ThemeTypography {
  fontFamily: string;
  headingFont: string;
  baseSize: string;
  lineHeight: string;
  fontWeight: {
    normal: string;
    medium: string;
    bold: string;
  };
}

export interface ThemeConfig {
  colors: ThemeColors;
  typography: ThemeTypography;
  name: string;
  description: string;
} 