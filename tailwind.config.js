/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@mui/material/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        dark_100: "#0D0E0F",
        dark_50: "#464A4D",
        dak_20: "#7A7E80",

        ligt_10: "#F6F6F6",
        light_100: "#FFFFFF",
        light_20: "#DADADA",

        light_80: "#FBFBFB",
        violet_100: "#7F3DFF",
        violet_20: "#EEE5FF",
        red_100: "#FD3C4A",
        green_100: "#00A86B",
        green_20: "#CFFAEA",
        yellow_100: "#FCAC12",
        yellow_20: "#FCEED4",
        blue_100: "#0077FF",
        blue_20: "#BDDCFF",
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgba(255, 255, 255, 1)",
        myShadow2: "-4.1px -5px 0 0 rgba(255, 255, 255, 1)",
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
};
