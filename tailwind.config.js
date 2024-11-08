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
      fontSize: {
        h1: "40px",
        h2: "32px",
        h3: "24px",
        h4: "18px",
        h5: "16px",
        h6: "12px",
      },
      padding: {
        "1/2": "50%",
        "1/3": "33%",
        "1/4": "25%",
        "1/5": "20%",
        "1/20": "5%",
        "1/10": "10%",
      },
      margin: {
        "1/2": "50%",
        "1/3": "33%",
        "1/4": "25%",
        "1/5": "20%",
        "1/20": "5%",
        "1/10": "10%",
      },
    },
  },
  plugins: [
    ({ addComponents }) => void addComponents({
      ".wrapper": {
        width: "100%",
        height: "100%",
      },
      ".cover": {
        width: "100%",
        height: "100%",
        padding: "10%",
      },
    })

  ],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
}
