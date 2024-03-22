/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#4C5FD5',
        secondary: '#dadbf1',
      },
      fontFamily: {
        sans: ['GT America Trial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
