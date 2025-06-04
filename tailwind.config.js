/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: '#effcfb',
          100: '#d0f7f5',
          200: '#a4eeec',
          300: '#70e1de',
          400: '#43d0cd',
          500: '#26b8b4',
          600: '#0ABAB5', // Primary color
          700: '#128e8a',
          800: '#116e6a',
          900: '#115957',
          950: '#07403e',
        },
      },
      boxShadow: {
        'glow-turquoise': '0 0 15px rgba(10, 186, 181, 0.6)',
        'glow-blue': '0 0 15px rgba(59, 130, 246, 0.6)',
        'glow-yellow': '0 0 15px rgba(250, 204, 21, 0.6)',
      },
    },
  },
  plugins: [],
};