module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
