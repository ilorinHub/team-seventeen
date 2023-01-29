/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005453",
        secondary: "#00CC77",
        inputtext: "#D9D9D9",
        inputlabeltext: "#1F1E22",
        lightgreen: "#F7FEF8",
        emerald: "#D3FFED",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        Raleway: 'Raleway',
        libreBaskerville: 'Libre Baskerville'
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      }
    },
  },
  plugins: [
  ],
}