/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        rema: "#FF0420",
      },
      colors: {
        rema: "#FF0420",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        marquee: "marquee 10s infinite linear",
      },
    },
  },
  plugins: [],
};
