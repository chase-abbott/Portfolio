module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'theme': 'DM Serif Display, serif'
    },
    maxWidth: {
      '1/2': '50%'
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
