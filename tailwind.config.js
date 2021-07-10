const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      boxShadow: {
        primary: 'var(--shadow-primary)',
        secondary: 'var(--shadow-secondary)',
      },
    },
  },
}
