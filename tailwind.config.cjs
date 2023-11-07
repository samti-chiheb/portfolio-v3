/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      backgroundImage: {
        gradientBg:
          "linear-gradient(0deg, rgba(63,94,251,0) 0%, rgba(5,8,22,1) 100%)",
        gradientSecondary:
          "linear-gradient(222deg, rgba(54,38,133,0.33) 0%, rgba(92,34,128,0.33) 25%, rgba(125,30,129,0.33) 50%, rgba(225,117,170,0.33) 100%)",
      },
    },
  },
  plugins: [],
};
