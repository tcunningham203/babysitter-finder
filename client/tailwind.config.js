/** @type {import('tailwindcss').Config} */



module.exports = {
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif']
    }
  },


  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
  
};