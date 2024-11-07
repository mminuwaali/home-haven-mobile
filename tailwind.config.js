/** @type {import("tailwindcss").Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        red: "#E44A4A",
        text: "#404040",
        primary: "#156651",
        secondary: "#E3AD33",
      },
      fontSize:{
        h1:"40px",
        h2:"32px",
        h3:"24px",
        h4:"18px",
        h5:"16px",
      }
    },
  },
  plugins: [
    ({ addComponents }) => void addComponents({
      ".cointainer": {
        width: "100%",
        padding: "5%",
        height: "100%",
      },
    })

  ],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
}
