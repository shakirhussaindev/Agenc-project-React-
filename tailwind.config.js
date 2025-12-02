/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'ash': '#737373',
        'primary': '#6A4DF4',
      },
       fontFamily: {
      'inter':'Inter, sans-serif'
    },
  },},
  plugins: [],
}

