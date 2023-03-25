/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#00AD6A",
        secondary: "#EAFAF1",
        darker: "#080C16",
      },
      fontFamily: {
        sans: "'Work Sans', sans-serif;",
      },
    },
  },
  plugins: [],
};
