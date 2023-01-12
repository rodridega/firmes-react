/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "firmes-black": "#111111"
      },
      fontFamily: {
        'big-shoulder': ['big-shoulder'],
        'roboto': ['roboto']
      },
    },
  },
  plugins: [],
}
