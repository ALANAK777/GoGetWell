# GoGetWell.ai Theme System

A comprehensive multi-theme system that adapts the entire interface based on different medical specialties.

## Features

- **Multiple Specialty Themes**: Default, Organ Transplant, and Cosmetic Surgery themes with distinct styles and content
- **Dark/Light Mode**: Toggle between dark and light mode for any theme
- **Persistent Theme Selection**: Theme choice is saved in localStorage
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean, professional design with tailored medical focus

## Tech Stack

- React with TypeScript
- React Router for navigation
- Zustand for state management
- Tailwind CSS for styling
- Vite for development and building

## Getting Started

### Prerequisites

- Docker
- Node.js (v14+)
- npm (v6+)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Docker Caddy server for subdomain handling:
   ```bash
   docker-compose up -d
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the application via subdomains:
   - https://demo.localhost
   - https://demo5.localhost
   - https://seostore.localhost

## Project Structure

```
src/
├── @types/
│   └── theme.ts              # Theme type definitions
├── assets/
│   └── styles/
│       ├── app.css           # Main CSS file
│       └── themes.css        # Theme CSS variables
├── components/
│   ├── shared/
│   │   ├── MenuBar.tsx       # Navigation menu
│   │   └── ThemeSelector.tsx # Theme switching component
│   └── template/
│       └── ThemeProvider.tsx # Theme provider component
├── configs/
│   └── theme.config.ts       # Theme configuration
├── store/
│   └── themeStore.ts         # Zustand theme store
└── views/
    └── Home/
        ├── components/       # Shared components
        │   ├── GetInTouch.tsx
        │   ├── Hero.tsx
        │   └── Home.tsx
        ├── themes/           # Theme specific components
        │   ├── base/         # Default theme
        │   │   └── Hero.tsx
        │   ├── theme1/       # Organ Transplant theme
        │   │   └── Hero.tsx
        │   ├── theme2/       # Cosmetic Surgery theme
        │   │   └── Hero.tsx
        │   └── index.tsx     # Themes page
        └── index.tsx
```

## Theme Customization

Each theme includes customizations for:

- Color scheme
- Typography
- UI element styling
- Marketing copy
- Hero sections
- Layout variations

## License

[License information] 