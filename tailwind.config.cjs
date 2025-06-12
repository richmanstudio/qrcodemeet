/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Токены iOS 26
        primary: "#5E5CE6",
        primaryHover: "#5048C8",
        secondary: "#FF6F61",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      backdropBlur: {
        md: "12px",
      },
    },
  },
  plugins: [],
};