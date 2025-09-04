/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      colors: {
        primary: {
          50: '#e6f7f5',
          100: '#ccefeb',
          200: '#99dfd7',
          300: '#66cfc3',
          400: '#33bfaf',
          500: '#0d9488', // Main teal color
          600: '#0a766d',
          700: '#085952',
          800: '#053c36',
          900: '#031e1b',
        },
        secondary: {
          50: '#e6f1fa',
          100: '#cce3f5',
          200: '#99c7eb',
          300: '#66abe1',
          400: '#338fd7',
          500: '#0073cd', // Main blue color
          600: '#005ca4',
          700: '#00457b',
          800: '#002e52',
          900: '#001729',
        },
        accent: {
          50: '#f5f7e6',
          100: '#ebefcc',
          200: '#d7df99',
          300: '#c3cf66',
          400: '#afbf33',
          500: '#88940d',
          600: '#6d760a',
          700: '#525908',
          800: '#363c05',
          900: '#1b1e03',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
        'elevated': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            h1: {
              fontFamily: 'Montserrat, sans-serif',
            },
            h2: {
              fontFamily: 'Montserrat, sans-serif',
            },
            h3: {
              fontFamily: 'Montserrat, sans-serif',
            },
            a: {
              color: '#0d9488',
              '&:hover': {
                color: '#0a766d',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function({ addBase, theme }) {
      addBase({
        'html': { fontSize: '16px' },
        '@media (max-width: 640px)': {
          'html': { fontSize: '14px' },
        },
        'body': {
          backgroundColor: theme('colors.gray.50'),
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: theme('fontFamily.heading'),
        },
      });
    },
  ],
};

module.exports = config;
