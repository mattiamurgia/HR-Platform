/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "dirty-white": "#f6f8ff",
        "main-green": "#cafdc6",
        "dirty-pink": "#fec1ae",
        "second-green": "#013e39",
        "dirty-yellow": "#feeeca",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
