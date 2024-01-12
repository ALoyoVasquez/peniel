/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#928387',
        'secondary': '#1d2cf9',//'#f4ecec',
        'highlight': '#ded9df',// '#ffd6a5',
        'light-bg':'#d5c2a2',
        'light-text':'rgba(255,255,255)',
        'code-background':'#1e1e1e',
        'dark-text':'#1A1A1A',
        'MidnightBlue':'#192046',
        'LightSlateGray':'#7797b4',
        

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       fontFamily: {
       /* sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        marck: ['Marck Script', 'cursive'],
        good:['Great Vibes',  'cursive'],
        cormorant : ['Cormorant Garamond','serif'],*/
        montserrat : ['Montserrat', 'sans-serif']
      }, 
    },
  },
  plugins: [],
});
