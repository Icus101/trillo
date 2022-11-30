/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   'sm': {'min': '576px', 'max': '540px'},
      //   // => @media (min-width: 640px and max-width: 767px) { ... }
  
      //   'md': {'min': '768px', 'max': '720px'},
      //   // => @media (min-width: 768px and max-width: 1023px) { ... }
  
      //   'lg': {'min': '992px', 'max': '960px'},
      //   // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
      //   'xl': {'min': '1200px', 'max': '1140px'},
      //   // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
      //   '2xl': {'min': '1400px', 'max': '1320'},
      //   // => @media (min-width: 1536px) { ... }
      // },
    },
  },
  plugins: [],
}
