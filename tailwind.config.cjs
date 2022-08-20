/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Epilogue": ["Epilogue", "sans-serif"]
    },


    extend: {
      colors: {
        "Almost-white": "hsl(0, 0%, 98%)",
        "Medium-Gray": "hsl(0, 0%, 41%)",
        "Almost-black": "hsl(0, 0%, 8%)"
      },

      screens: {
        "Mobile": "375px",
        "Desktop": "1440px"
      }
    },
  },
  plugins: [],
}