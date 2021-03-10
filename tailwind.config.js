module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      opacity: ["disabled"],
      pointerEvents: ["hover", "focus"],
      colors: {
        amber: {
          title: "#cbbd8e",
          text: "#4a4847"
        },
        pink: {
          title: "#63434e",
          border: "#4b2633"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
