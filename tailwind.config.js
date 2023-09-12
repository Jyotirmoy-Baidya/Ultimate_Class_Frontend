/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarygreen: {
          400: "#2FB2AC",
          200: "#4ccfc9"
        },
        mainBlue: {
          400: "rgb(37 99 235)",
        }

      }
    },
  },
  plugins: [],
}