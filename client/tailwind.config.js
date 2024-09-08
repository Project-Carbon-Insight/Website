/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: "800px",
      lg: "1000px",
      sm: "200px",
    },
  },
  plugins: [],
};
