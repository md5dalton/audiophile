/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            "brown": "#D87D4A",
            "light-brown": "#FBAF85",
            
            "light-black": "#101010",

            "grey": "#979797",
            "dark-grey": "#4C4C4C",
            "light-grey": "#F1F1F1",
            "very-light-grey": "#FAFAFA",
            
            "border": "#CFCFCF",
            "error": "#CD2C2C",
        },
        backgroundImage: {
            "header-mobile": "url(/assets/home/mobile/image-header.jpg)",
            "header-tablet": "url(/assets/home/tablet/image-header.jpg)",
            "header-desktop": "url(/assets/home/desktop/image-hero.jpg)",
        }
    },
  },
  plugins: [],
}