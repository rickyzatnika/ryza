/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    textShadow: {
      default: "1px 1px 1px #777",
      md: "0 2px 2px #000",
      h2: "0 0 3px #FF0000, 0 0 5px #0000FF",
      h1: "0 3px 8px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
    },
    extend: {
      animation: {
        spin: "spin 3s linear infinite",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-150%)", opacity: "0" },
          "100%": { transform: "translateX(160%)", opacity: "0.5" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
