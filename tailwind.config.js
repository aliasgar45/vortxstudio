/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        neutral: "var(--neutral-color)",
      },
      fontFamily: {
        "instagram-sans": ["Instagram Sans Regular", "sans-serif"],
        "instagram-sans-light": ["Instagram Sans Light", "sans-serif"],
        "instagram-sans-bold": ["Instagram Sans Bold", "sans-serif"],
        "instagram-sans-medium": ["Instagram Sans Medium", "sans-serif"],
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
