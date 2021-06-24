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
    extend: {
      gridTemplateColumns: {
        'projectLabel': 'auto 1fr'
      },
      gridTemplateRows: {
        'projects': 'auto 1fr',
        'footerRows': 'repeat(2, minmax(0, .75fr))'
      },
      height: {
        '.5vh': '50vh'
      },
      animation: {
        fadein: 'fadein .4s ease-in',
        fadein1_1s: 'fadein .5s ease-in',
        fadein1_2s: 'fadein .6s ease-in',
        fadein1_3s: 'fadein .8s ease-in',
        wavey: 'wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite',
        waveydelay: 'wave 6.5s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 2s infinite, swell 6.5s ease -1.25s infinite',
        waveymoredelay: 'wave 6s cubic-bezier( 0.36, 0.45, 0.63, 0.53) 2s infinite, swell 6s ease -1.25s infinite',
      },
      keyframes: {
        fadein: {
          '0%': {
            opacity: 0,
            transform: 'translateY(24px)'
          },
          '100%': { opacity: 1 }
        },
        wave: {
          '0%': { marginleft: '0px' },
          '100%': { marginleft: '-1600px' }
        },
        swell: {
          '0%': { transform: 'translate3d(0, -5px ,0)' },
          '50%': { transform: 'translate3d(0, 2px , 0)' },
          '100%': { transform: 'translate3d(0, -5px, 0)' }
        }
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover']
    },
  },
  plugins: [],
};
