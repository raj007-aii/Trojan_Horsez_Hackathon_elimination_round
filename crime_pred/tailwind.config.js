/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dimgray: "#727272",
        gray: "#0a0505",
        aquamarine: "#b7ffcb",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      xl: "20px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
