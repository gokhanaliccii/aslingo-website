/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        cora: "#ff7a4f",
        cora2: "#dc643c",
        bgColor: "#fffaf3",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.visible': {
          display: 'block !important', // Override display to block and use !important
        },
        '.image-cora': {
          filter:  'invert(100%) sepia(100%) saturate(10000%) hue-rotate(15deg)',
          mixBlendMode: 'multiply',
        },
        // Add more custom utilities as needed
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};