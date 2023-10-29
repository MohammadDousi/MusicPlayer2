/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      // keyframes: {
      //   animMenuOpen: {
      //     "100%": { left: "0" },
      //   },
      // },

      // animation: {
      //   menuHOpen: "animMenuOpen .5s 1 forwards",
      // },

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
