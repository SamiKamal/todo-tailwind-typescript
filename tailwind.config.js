const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    FontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Open Sans', 'serif']
    },
    extend: { },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
