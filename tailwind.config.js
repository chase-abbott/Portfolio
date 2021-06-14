module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '2/3': '66%'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
