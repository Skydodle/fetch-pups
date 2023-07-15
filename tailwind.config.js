/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1976D2',
        'vibrant-orange': '#FF5722',
        'off-white': '#F9F7F2',
      },
    },
    fontFamily: {
      IBM: ['IBM Plex Sans Condensed', 'sans-serif'],
      syne: ['Syne', 'sans-serif'],
      lexend: ['Lexend', 'san-serif'],
      roboto: ['Roboto', 'san-serif'],
    },
  },
  plugins: [],
};
