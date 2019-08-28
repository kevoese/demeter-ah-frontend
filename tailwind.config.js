const {
  colors,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  fontSize,
  inset,
} = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      sm: '300px',
      md: '830px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      montserrat: ['Montserrat'],
    },
    fontSize: {
      ...fontSize,
      '1.5xl': '1.2em',
      '1.6xl': '5em',
      'xs-2': '0.85em',
      xs2: '0.85rem',
      xxs: '0.7em',
      '1xl': '1.1rem'
    },
    inset: {
      ...inset,
      1.5: '1.5rem',
    },
    extend: {
      colors: {
        purple: {
          ...colors.purple,
          150: '#835bd815',
          650: '#835BD8',
          250: '#AD93E6',
          200: '#A88CE4',
          220: 'rgb(199, 175, 252)',
          50: 'rgba(197, 172, 250, 0.05)',
          80: '#F7F4FC'
        },
        gray: {
          ...colors.gray,
          150: '#EAEAEA',
          250: '#606060',
          350: '#d4d4d4',
          400: '#80808024',
          450: '#A9A8A8',
          550: 'rgba(0, 0, 0, 0.5)',
          50: '#c4c4c4',
          80: '#c8c8c8',
          40: '#c4c4c450',
          30: '#f4f4f4',
          20: '#c4c4c430',
          10: '#c4c4c410',
          5: '#f9f9f9',
        },
        yellow: {
          ...colors.yellow,
          650: '#FAAD18',
        },
      },
      maxWidth: {
        ...maxWidth,
        56: '13rem',
        85: '17rem',
        42: '11em',
        86: '22rem',
        108: '26rem',
        112: '28rem',
        118: '32rem',
        150: '36rem',
        122: '38rem',
        180: '50rem',
        220: '60rem',
        xl: '48rem',
        page: '1800px'
      },
      maxHeight: {
        ...maxHeight,
        48: '14rem',
        85: '17rem',
        85.5: '19.1rem',
        86: '22rem',
        108: '26rem',
        112: '28rem',
        118: '32rem',
        220: '60rem',
        440: '120rem',
        64: '200rem',
      },
      minWidth: {
        ...minWidth,
        40: '10rem',
        32: '8rem',
        48: '14rem',
        min: '20rem',
        84: '21rem',
        96: '24rem',
        108: '26rem',
        112: '30rem',
        118: '32rem',
      },
      minHeight: {
        ...minHeight,
        10: '4rem',
        46: '13rem',
        48: '14rem',
        83: '20rem',
        84: '21rem',
        96: '24rem',
        108: '26rem',
        120: '35rem',
      },
      spacing: {
        0.5: '0.1em',
        '5.5/12': '45%',
        7: '1.75rem',
        9: '2.2rem',
        14: '3.5rem',
        60: '9rem',
        72: '17rem',
        84: '21rem',
        86: '22rem',
        96: '24rem',
        100: '25rem',
        108: '26rem',
        112: '28rem',
        118: '32rem',
      },
      borderRadius: {
        xs: '0.5rem',
        md: '0.3rem',
        '1xl': '0.9rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
        lg: '3rem',
        up: '100%',
      },
      boxShadow: {
        lg: '2px 5px 5px 3px rgba(0, 0, 0, .2)',
      },
      margin: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        lgx1: '40px',
        lgx2: '120px',
        xls0: '140px',
        xls1: '180px',
        xls2: '210px',
        ' xls2x': '170px',
        xls3: '295px',
        xlx1: '400px',
        xl4: '3rem',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        xlx1: '18rem',
        xlx2: '24rem',
        xlx3: '420px',
        xlx4: '150px',
        82: '82%'
      },
      width: {
        xl: '1125px',
      },
      inset: {
        0: 0,
        auto: 'auto',
        '1/2': '50%',
        '2em': '2em',
      }
    },
  },
  variants: {
    // ...
    inset: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
