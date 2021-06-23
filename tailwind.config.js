module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'iPhone': '375px',
      'tablet': '640px',
      'desktop': '1024px'
    },
    fontSize: {
      'tiny': '.5rem',
      'xs': '.75rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '2.5xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      'theme': 'DM Serif Display, serif'
    },
    maxWidth: {
      '1/2': '50%',
      '3/4': '75%',
      '90': '90%'
    },
    maxHeight: {
      '1/2': '50%',
      '3/4': '75%',
      '90': '90%'
    },
    minHeight: {
      '1/4': '25%'
    },
    height: {
      '25vh': '25vh',
      '33vh': '33vh',
      '50vh': '50vh'
    },
    extend: {
      gridTemplateColumns: {
        'projectLabel': 'auto 1fr'
      },
      gridTemplateRows: {
        'projects': 'auto 1fr',
        'footerRows': 'repeat(2, minmax(0, .75fr))'
      },
      animation: {
        fadein : 'fadein 2s ease-in'
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
