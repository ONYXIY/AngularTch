/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,ts}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        lightColorForBg: 'ffffff',
        orangeColor: 'ff7f50',
        darkColorForBg: '#1e293b'
      }
    },  },
  plugins: [],
}

