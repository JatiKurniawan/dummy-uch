/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: ["url('/bg-main.png')"],
      },
      colors: {
        blue: ["#5956E9"],
        gray: ["#6C6C72"]
      }
    },
    fontFamily: {
      jof: ["Josefin Sans", "sans-serif"]
    }
  },
  plugins: [],
}

