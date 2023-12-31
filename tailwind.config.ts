import { Config } from 'tailwindcss';

export default {
  darkMode: 'media', // media support dark default ???
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/react-plum/index.tsx',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  corePlugins: {
    preflight: true
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            h1: {
              marginTop: '1.3em'
            },
            li: {
              margin: 0
            },
            img: {
              margin: 'auto',
              borderRadius: theme('borderRadius.lg')
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;
