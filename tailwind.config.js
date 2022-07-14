/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ff9e80',
        secondary: '#ffd0b0',
        dark: '#0f172a',
        ybc: '#c96f53',
      },
      // screens: {
      //   '2xl': '1320px',
      // },
    },
  },
  plugins: [],
}
