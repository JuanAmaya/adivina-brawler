/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primaryBlue: "#3999FF",
        secondaryBlue: "#162932",
        softPurple: "#C4A6CD",
        softYellow: "#D4D987",
        softGray: "#353535",
        softWhite: "#EFEBE5",
        softCream: "#D0CABC",
        softGreen: "#A2DABD",
        softBlue: "#87CFD9",
        softRed: "#E2A998",
        rareInitial: "#87D4D9",
        rareRare: "#87D98A",
        rareSuper: "#879ED9",
        rareEpic: "#AB87D9",
        rareMythic: "#D98787",
        rareLegend: "#D4D987",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};