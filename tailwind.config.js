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
        pelorous: {
          50: '#effcfc',
          100: '#d7f6f6',
          200: '#b4eded',
          300: '#80dfe0',
          400: '#3bc5c9',
          500: '#29abb1',
          600: '#258b95',
          700: '#24717a',
          800: '#255d65',
          900: '#234d56',
        },
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwind-clip-path')],
};
