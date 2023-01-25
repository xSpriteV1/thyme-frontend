/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#695853",
        "brand-secondary": "#988780",
        "brand-light": "#E7DED9",
      },
      backgroundImage: {
        'primary': "url('/background.svg')",
      },
    },
    fontFamily: {
      'primary': ['Inter'],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    }
  },
  plugins: [],
}
