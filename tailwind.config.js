/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // IBM Quantum colors
        quantum: {
          primary: '#6929c4', // Purple
          secondary: '#1192e8', // Blue
          dark: '#161616', // Dark gray/almost black
          light: '#f4f4f4', // Light gray
          accent: '#42be65', // Green
        },
        blue: {
          600: '#1192e8',
        },
        purple: {
          600: '#6929c4',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}