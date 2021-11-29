module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        tap: {
          "0%, 100%": { transform: "scale(0.99)" },
        },
      },
      animation: {
        tap: "tap 200ms ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
