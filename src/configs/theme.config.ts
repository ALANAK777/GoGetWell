import { ThemeConfig } from "../@types/theme";

// Default Theme Configuration - General Medical
export const defaultTheme: ThemeConfig = {
  name: "Default",
  description: "General medical theme with a professional and clean appearance",
  colors: {
    primary: "#1976d2",
    primaryDeep: "#1565c0",
    primaryMild: "#64b5f6",
    secondary: "#388e3c",
    secondaryDeep: "#2e7d32",
    secondaryMild: "#81c784",
    accent: "#f57c00",
    background: "#f5f5f5",
    textPrimary: "#212121",
    textSecondary: "#757575",
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    headingFont: "'Inter', system-ui, -apple-system, sans-serif",
    baseSize: "16px",
    lineHeight: "1.5",
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
  },
};

// Organ Transplant Theme Configuration
export const organTransplantTheme: ThemeConfig = {
  name: "Organ Transplant",
  description: "Specialized theme for organ transplant services and information",
  colors: {
    primary: "#6200ea",
    primaryDeep: "#5600e8",
    primaryMild: "#9d46ff",
    secondary: "#304ffe",
    secondaryDeep: "#283593",
    secondaryMild: "#8c9eff",
    accent: "#d50000",
    background: "#fafafa",
    textPrimary: "#263238",
    textSecondary: "#546e7a",
  },
  typography: {
    fontFamily: "'Roboto', system-ui, -apple-system, sans-serif",
    headingFont: "'Roboto Slab', serif",
    baseSize: "16px",
    lineHeight: "1.6",
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
  },
};

// Cosmetic Surgery Theme Configuration
export const cosmeticSurgeryTheme: ThemeConfig = {
  name: "Cosmetic Surgery",
  description: "Elegant theme for cosmetic surgery and aesthetic procedures",
  colors: {
    primary: "#ad1457",
    primaryDeep: "#880e4f",
    primaryMild: "#ec407a",
    secondary: "#26a69a",
    secondaryDeep: "#00897b",
    secondaryMild: "#80cbc4",
    accent: "#ff6f00",
    background: "#fff8f8",
    textPrimary: "#424242",
    textSecondary: "#757575",
  },
  typography: {
    fontFamily: "'Nunito', system-ui, -apple-system, sans-serif",
    headingFont: "'Playfair Display', serif",
    baseSize: "16px",
    lineHeight: "1.7",
    fontWeight: {
      normal: "300",
      medium: "500",
      bold: "700",
    },
  },
};

// Get theme configuration based on specialty
export const getThemeBySpecialty = (specialty: string): ThemeConfig => {
  switch (specialty) {
    case "organ-transplant":
      return organTransplantTheme;
    case "cosmetic-surgery":
      return cosmeticSurgeryTheme;
    default:
      return defaultTheme;
  }
}; 