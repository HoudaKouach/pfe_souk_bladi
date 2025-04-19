/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#B99470",
        secondary: "#B5C18E",
        // accent: "#E03C31",
        // dark: "#333333",
        // light: "#F9F9F9",
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm:"3rem",
          // lg:"3rem",
          // xl:"5rem",
          // "2xl":"6rem",
        },
      },
    },
  },
  plugins: [],
}