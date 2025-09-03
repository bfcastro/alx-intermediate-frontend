/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // scan root-level HTML files
    "./src/**/*.{js,html}" // scan anything in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
