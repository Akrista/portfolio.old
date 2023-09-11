const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // dtext: "#ffffff",
        // dbackground: "#0e0c0c",
        // dprimary: "#4b353b",
        // dsecondary: "#231f20",
        // daccent: "#679386",
        // text: "#121212",
        // background: "#ffffff",
        // primary: "#4b353b",
        // secondary: "#ecd8b1",
        // accent: "#283934",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
