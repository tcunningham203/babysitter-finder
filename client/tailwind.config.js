/** @type {import('tailwindcss').Config} */



module.exports = {
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif']
    }
  },


  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [ require('flowbite/plugin')],
  darkMode: "class"
  
};