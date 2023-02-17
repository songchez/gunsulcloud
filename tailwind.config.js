module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mg: '1024px',
      mm: '650px',
      ss: '450px',
      sx: '375px',
    },
    extend: {
      colors: {
        primary: {
          100: '#efffff',
          200: '#cdf9ff',
          300: '#c3fbf9',
          400: '#acf5fb',
          500: '#035AA6',
          600: '#2063A7',
          700: '#213c6c',
          800: '#010D26',
          900: '#010D00',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#98BFDE',
          700: '#94A4C4',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
