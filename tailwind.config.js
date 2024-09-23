/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        babyblue: '#F6FBFF',
        darkblue: '#1976D2',
        mintteal: '#3CAEA3',
      }
    },
  },
  plugins: [],
}

