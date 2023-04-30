/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      sepia: {
        25: ".25",
        50: ".50",
        75: ".75",
      },
      fontFamily: {
        display: ["Roboto", "sans-serif"],
        display: ["Roboto", "sans-serif"],
      },
      colors: {
        darkBrown: {
          100: "#392820",
          200: "#382820",
        },
        whiteColor: "white",
        bg: "#413f54",
        ultraViolet: "#5f5aa2",
        brightViolet: "#9089F2",
        yinBlue: "#355691",
        onyx: "#3f4045",
        darkerThanBg: "#30292f",
        lightBrown: {
          100: "#a67651",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
