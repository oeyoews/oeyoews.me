/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    theme: false,
    darkTheme: 'light',
  },
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      fontFamily: {},
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              marginTop: '1.3em',
            },
            li: {
              margin: 0,
            },
            img: {
              margin: 'auto',
              borderRadius: theme('borderRadius.lg'),
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
