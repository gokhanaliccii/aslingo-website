/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        cora: "#ff7a4f",
        cora2: "#dc643c",
        bgColor: "#fffaf3",
        slateGray:"#2F4F4F"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.visible': {
          display: 'block !important', 
        },
        '.visible-flex':{
          display:'flex !important'
        },
        '.hiddenImp':{
          display:'none !important'
        },
        "visibleUnimp": {
          display: 'block ', 
        },
        '.image-cora': {
          filter:  'invert(100%) sepia(100%) saturate(10000%) hue-rotate(15deg)',
          mixBlendMode: 'multiply',
        },

      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
