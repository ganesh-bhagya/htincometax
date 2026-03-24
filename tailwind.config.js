/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        jksans: ["Plus Jakarta Sans", "sans-serif"],
        monda: ["Monda", "sans-serif"],
        molengo: ["Molengo", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        kulim : ["Kulim Park", "sans-serif"],
      },
      colors: {
        "theme-blue-color": "#07255E",
        "theme-red-color": "#CA0000"
      },
      screens: {
        "3xl": "1400px",
        ...defaultTheme.screens
      },
      boxShadow: {
        custom: "0px 0px 60px 0px rgba(0, 0, 0, 0.05)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
