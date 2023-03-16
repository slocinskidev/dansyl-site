const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      xxs: '280px',
      xs: '360px',
      sm: '576px',
      md: '768px',
      lg: '1240px',
      xl: '1420px',
      '2xl': '1920px',
    },
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        lochmara: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e7fe',
          300: '#7cd5fd',
          400: '#36c1fa',
          500: '#0ca9eb',
          600: '#0085c5',
          700: '#016ba3',
          800: '#065b86',
          900: '#0b4c6f',
        },
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwind-clip-path')],
};
