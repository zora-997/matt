/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      // Add your custom size here
      xsm: "400px",
      "2xsm": "300px",
    },
    extend: {
      keyframes: {
        textReveal: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "text-reveal": "textReveal 1s ease-in-out forwards",
      },
    },
    fontFamily: {
      arfont: ["Noto Kufi Arabic", "sans-serif"],
    },
  },
  plugins: [],
};