/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F5F0',
        ink: '#1A1A1A',
        camel: '#C4A882',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.08em',
      },
    },
  },
  plugins: [],
}
