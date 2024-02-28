/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primeryBack: "#092327",
        primeryBackDarker: "#051E21",
        textColor: "#ffffff",
        primeryColor: "#eab308",
        /////////////
        secondeColor: "#80ffdb",
        accentColor: "#48bfe3",
      },
    },
  },
  plugins: [],
};
