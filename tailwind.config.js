/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        full: "4px 6px black",
      },
      colors: {
        peach: "#FEF2E8",
        yellow: "#FFE959",
        blue: "#CAF2FB",
        pink: "#FCB6F5",
        green: "#7AFF8F",
      },
      fontFamily: {
        "public-sans": ['"Public Sans"', "sans-serif"],
        syne: ['"Syne"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
