/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        cabin: ["var(--font-cabin)"]
      },
      colors: {
        'text': '#CAD2C5',
        'background': '#2F3E46',
        'primary': '#52796F',
        'secondary': '#84A98C',
        'accent': '#354F52'
      },      
      height: {
        'screen-minus-nav': 'calc(100vh - 6rem)',
      },
    },
  },
  plugins: [],
}
