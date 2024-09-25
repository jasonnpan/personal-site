/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        babyblue: '#F6FBFF',
        tearblue: '#90CAF9',
        darkblue: '#1976D2',
        forestgreen: '#226F68',
      },
      fontFamily: {
        oxygen: ['Oxygen Mono', 'sans-serif']
      }
    },
  },
  plugins: [],
}

