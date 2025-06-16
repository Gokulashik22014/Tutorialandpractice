/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#020617'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["dark", "light"],
  },
}

