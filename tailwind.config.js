/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        aboutHead: ["clamp(24rem, 28.3vw, 36rem)"],
        aboutText: ["clamp(1rem, 1.5vw, 1.5rem)"],
      },
      fontFamily: {
        boldMono: ["var(--font-neuemontreal-bold)"],
        boldItalic: ["var(--font-neuemontreal-bold-italic)"],
        italic: ["var(--font-neuemontreal-italic)"],
        light: ["var(--font-neuemontreal-light)"],
        lightItalic: ["var(--font-neuemontreal-light-italic)"],
        medium: ["var(--font-neuemontreal-medium)"],
        mediumItalic: ["var(--font-neuemontreal-medium-italic)"],
        regular: ["var(--font-neuemontreal-regular)"],
        gothic: ["var(--font-champion-gothic-mono)"],
      },
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
