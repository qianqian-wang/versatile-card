/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom': ' 0px 5px 15px 0px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        primary: '#0694A3',
        secondary: '#0E9AB0',
        third: '#26B2E4',
        grey: '#4F4764',
        'grey-10': '#666'
      },
      background: {
        primary: '#0694A3',
        secondary: '#0E9AB0',
        third: '#26B2E4',
      },
      borderColor: {
        primary: '#0694A3',
        secondary: '#0E9AB0',
        third: '#26B2E4',
      }
    },
  },
  plugins: [],
}