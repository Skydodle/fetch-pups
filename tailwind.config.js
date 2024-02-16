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
      backgroundSize: {
        '1400px': '1400px',
      },
      minHeight: {
        'screen-minus-nav': 'calc(100vh - 112px)',
      },
      height: {
        'screen-minus-nav': 'calc(100vh - 112px)',
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '100% 0%' },
        },
      },
      fontFamily: {
        IBM: ['IBM Plex Sans Condensed', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        lexend: ['Lexend', 'san-serif'],
        roboto: ['Roboto', 'san-serif'],
      },
    },
    variants: {
      extend: {
        position: ['responsive', 'sticky'], // enabling the position variant for responsive design
      },
    },
  },
  plugins: [],
};
