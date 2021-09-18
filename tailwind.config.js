const { purple } = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: purple,
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    margin: ["responsive", "last"],
    filter: ["group-hover", "hover"],
  },
  plugins: [],
};
