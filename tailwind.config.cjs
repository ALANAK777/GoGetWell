/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'primary-deep': 'var(--primary-deep)',
        'primary-mild': 'var(--primary-mild)',
        'secondary': 'var(--secondary)',
        'secondary-deep': 'var(--secondary-deep)',
        'secondary-mild': 'var(--secondary-mild)',
        'accent': 'var(--accent)',
        'background': 'var(--background)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
      },
      fontFamily: {
        sans: 'var(--font-family)',
        heading: 'var(--heading-font)',
      },
      spacing: {
        // RTL support - use defaultTheme to avoid recursion
        ...Object.fromEntries(
          Object.entries(defaultTheme.spacing).map(([key, value]) => [`start-${key}`, value])
        ),
        ...Object.fromEntries(
          Object.entries(defaultTheme.spacing).map(([key, value]) => [`end-${key}`, value])
        ),
      },
      margin: {
        // RTL support - use defaultTheme to avoid recursion
        ...Object.fromEntries(
          Object.entries(defaultTheme.spacing).map(([key, value]) => [`s-${key}`, value])
        ),
        ...Object.fromEntries(
          Object.entries(defaultTheme.spacing).map(([key, value]) => [`e-${key}`, value])
        ),
      },
      padding: {
        // RTL support - use defaultTheme to avoid recursion
        ...Object.fromEntries(
          Object.entries(defaultTheme.spacing).map(([key, value]) => [`s-${key}`, value])
        ),
        ...Object.fromEntries(
          Object.entries(defaultTheme.spacing).map(([key, value]) => [`e-${key}`, value])
        ),
      },
    },
  },
  plugins: [],
  safelist: [
    'theme-default',
    'theme-organ-transplant',
    'theme-cosmetic-surgery',
    'light',
    'dark',
    'rtl',
    'ltr',
  ],
} 