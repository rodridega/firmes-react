/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "firmes-black": "#111111",
        "firmes-violet": "#8B56FA"
      },
      fontFamily: {
        'avant': ['avant'],
      },
    },
  },
  plugins: [],
}
