/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "BG-Gray": "#CBD9E3",
        "BG-Secundary-Green": "#1CC8A0",
        "BG-Blue-Marine": "#102B3E",
      },
      fontFamily: {
        "Gothic-A1": "sans-serif",
        "Nanum-Gothic": "sans-serif",
        "Poppins": "sans-serif",
      },
    },
  },
  plugins: [],
}

