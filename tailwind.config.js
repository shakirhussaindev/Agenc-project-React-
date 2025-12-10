/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      colors: {
        ash: "#737373",
        dark3: "#7B7B7B",
        primary: "#6A4DF4",
        dark: "#151515",
        dark7: "#F3F3F3",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      borderRadius: {
        20: "20px",
      },
      spacing: {
        150: '150px',
        50: '50px',
      }
    },
  },
  plugins: [],
};
