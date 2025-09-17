# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# Qiskit Fall Fest 2025 Website

A responsive website for the Qiskit Fall Fest 2025 event, built with React, Vite, TailwindCSS, and Framer Motion.

## Features

- Responsive design that works on all device sizes
- Beautiful animations powered by Framer Motion
- Quantum-themed UI
- Registration button that opens a Google Form in a new tab
- Various sections: Hero, About, Schedule, Speakers, and more

## Project Structure

We've set up a modular structure that will allow us to build out the website piece by piece:

- `/src/components` - All UI components
  - `/layout` - Layout components (Header, Footer)
  - `/common` - Reusable UI components like buttons
- `/src/pages` - Page components
- `/src/hooks` - Custom React hooks
- `/src/utils` - Utility functions
- `/src/assets` - Images, fonts, and other static assets
- `/src/styles` - Global styles and theme

## How to Use

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Customizing the Registration Form

To update the Google Form URL, edit the `RegisterButton.jsx` component:

1. Open `/src/components/common/RegisterButton.jsx`
2. Replace the `window.open()` URL with your actual Google Form URL:
   ```javascript
   window.open('https://forms.google.com/your-actual-form-url-here', '_blank');
   ```

## Technologies Used

- React - UI library
- Vite - Build tool
- TailwindCSS - Styling
- Framer Motion - Animations
- React Icons - Icon library

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
