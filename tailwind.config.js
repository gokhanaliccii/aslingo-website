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
  plugins: [],
};
