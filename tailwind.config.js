/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#0C0B07",
      white: "#FFFFFF",
      grey: "#AAAAAA",
      crimson: "#F5EFDB",
      golden: "#DCCA87",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      cor: ["Cormorant Upright", "z"],
    },
  },
  plugins: [],
};
