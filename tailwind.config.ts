import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0c10',
          900: '#11151b',
          800: '#1a2230',
          700: '#242f3f',
          500: '#4e5b70',
          300: '#9aa6b2'
        },
        linen: {
          50: '#f7f5f2',
          100: '#f1eee8',
          200: '#e7e1d8'
        },
        aurum: {
          500: '#d6b36a',
          600: '#c29c4b'
        }
      },
      fontFamily: {
        display: ['"Canela"', '"Times New Roman"', 'serif'],
        sans: ['"Suisse"', '"Helvetica Neue"', 'Arial', 'sans-serif']
      },
      boxShadow: {
        glow: '0 18px 60px rgba(12, 16, 22, 0.35)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      }
    }
  },
  plugins: []
};

export default config;
