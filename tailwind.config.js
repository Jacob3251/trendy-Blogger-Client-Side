/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["business"],
  },
  theme: {
    extend: {
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
        Kablam: ["Kablammo", "cursive"],
      },
      colors: {
        primary: "#ff0000",
        secondary: "#00ff00",
      },
    },
  },
  plugins: [require("daisyui")],
};
