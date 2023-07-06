/** @type {import('tailwindcss').Config} */



module.exports = {
  theme: {
    fontFamily: {
      smart: ['smart', "sans-serif"],
      neat: ['neat', "sans-serif"],
      resume: ['resume', "sans-serif"],
      cool: ['cool', "sans-serif"],
      thin: ['thin', "sans-serif"],
      evo: ['evo', "sans-serif"],
    },
    extend: {},
  },

  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [ require('flowbite/plugin')],
  darkMode: "class"
  
};