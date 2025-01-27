/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#eeeeee",
          text: "#156064",
          primary: "#156064",
        },
        dark: {
          background: "#121212",
          text: "#eeeeee",
          primary: "#156064",
        }
      },
    },
  },
  plugins: [],
}

