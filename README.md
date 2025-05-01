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

## Screenshots

### Default Theme
![Default Theme - Light Mode](screenshots/default_light.png)
![Default Theme - Dark Mode](screenshots/default_dark.png)
![Default Theme - Mobile View](screenshots/default_mobile.png)

### Organ Transplant Theme
![Organ Transplant Theme - Light Mode](screenshots/organ_transplant_light.png)
![Organ Transplant Theme - Dark Mode](screenshots/organ_transplant_dark.png)
![Organ Transplant Theme - Mobile View](screenshots/organ_transplant_mobile.png)

### Cosmetic Surgery Theme
![Cosmetic Surgery Theme - Light Mode](screenshots/cosmetic_surgery_light.png)
![Cosmetic Surgery Theme - Dark Mode](screenshots/cosmetic_surgery_dark.png)
![Cosmetic Surgery Theme - Mobile View](screenshots/cosmetic_surgery_mobile.png)

## Deployment to Vercel

### Prerequisites

- A Vercel account
- Git repository for your project

### Deployment Steps

1. Fork or push your repository to GitHub, GitLab, or Bitbucket.

2. Log in to your Vercel account and click on "New Project".

3. Import your repository from GitHub, GitLab, or Bitbucket.

4. Configure the project:
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. Set up environment variables:
   - Add the variables from `env.example` to your Vercel project settings.
   - Go to Settings > Environment Variables and add each variable.

6. Click "Deploy" to build and deploy your application.

7. Once deployment is complete, Vercel will provide you with a URL to access your application.

### Troubleshooting

- If you encounter build issues, check the Vercel build logs for errors.
- Make sure all environment variables are properly set.
- Verify that the application works locally with `npm run build` before deploying.

## License

[License information] 