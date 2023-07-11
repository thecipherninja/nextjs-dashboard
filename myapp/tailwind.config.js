/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "var(--background, #F5F5F5);",
        secondary: "var(--secondary-text, #858585);",
        link: "var(--link, #346BD4);",
        grey: "var(--light-grey, #B0B0B0);",
        green: "var(--green, #DDEFE0);",
        yellow: "var(--yellow, #F4ECDD);",
        pink: "var(--pink, #EFDADA);",
        purple: "var(--purple, #DEE0EF);",

      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

