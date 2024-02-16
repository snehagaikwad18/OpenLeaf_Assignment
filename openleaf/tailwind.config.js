/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#F4F7FE',
        'hover-color-menu': '#F4F7FE',
        'active' :'#4318FF',
        'menu' :'#A3AED0',
        'openleaf' :'#9098C1',
      }
    },

  },
  plugins: [],
}