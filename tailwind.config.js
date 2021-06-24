module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans'],
        header: ['Raleway'],
      },
      colors: {
        darkblue: 'hsl(243, 87%, 12%)',
        lightblue: 'hsl(238, 22%, 44%)',
        brightblue: 'hsl(224, 93%, 58%)',
        cyan: 'hsl(170, 45%, 43%)',
        lightgray: 'hsl(240, 75%, 98%)',
        gray: 'hsl(0, 0%, 75%)'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
