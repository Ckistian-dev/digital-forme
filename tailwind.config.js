/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tema Escuro (ativado com a classe 'dark')
        primary: '#60c8b7',
        'primary-hover': '#2c9e8b',
        background: '#282a2e',
        surface: '#282a2e',
        'text-primary': '#E5E7EB',
        'text-secondary': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

