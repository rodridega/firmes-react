/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#203F3C',
        'gold-crayola': '#EBC991',
        'fire-opal': '#E4504B',
        'light-blue': '#BDD9DF'
      },
      fontFamily: {
        'big-shoulder': ['big-shoulder'],
        'roboto': ['roboto']
      },
    },
  },
  plugins: [],
}
