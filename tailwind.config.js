/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors:{
        primary:'#D71921',
        secondary:'#B5B9BD',
        tertiary:"#DEE2E6",
        fourth:"#828A90",
        fifth:"#E9ECEF",
        sixth:'#FFC02E',
        
      },
      fontFamily:{
        font1:["Outfit", 'san-serif'],
        font2:["Poppins", 'sans-serif']

      }
    },
  },
  plugins: [],
}

