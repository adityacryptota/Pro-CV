/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./back.jpg')",
      },
    },
  },
  plugins: [],
};
