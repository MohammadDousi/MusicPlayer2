/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        primeryColor : "",
        seconedColor : "",
      },

      keyframes: {
        animbounce: {
          "0%": { transform: "translateY(-8px)" },
          "50%": { transform: "translateY(8px)" },
          "100%": { transform: "translateY(-8px)" },
        },
      },

      animation: {
        animBounceCustom: "animbounce 1s ease-in-out infinite both",
      },
    },
  },
  plugins: [],
};
