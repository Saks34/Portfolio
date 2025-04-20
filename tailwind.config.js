/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class', // class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        "primary-dark": "#1a1a2e",
        secondary: "#aaa6c3",
        "secondary-light": "#6b7280",
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
        "hero-light": "url('/src/assets/herobg-light.png')",  // <-- light mode
        "hero-dark": "url('/src/assets/herobg.png')",         // <-- dark mode
      },
    },
  },
  plugins: [],
};
