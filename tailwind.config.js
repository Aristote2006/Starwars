/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'star-wars-yellow': '#FFE81F',
        'star-wars-black': '#121212',
        'star-wars-space': '#1A1A1A',
      },
      fontFamily: {
        'star-wars': ['Star Wars', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundColor: {
        'light-mode': '#f8fafc',
        'dark-mode': '#121212',
      },
      textColor: {
        'light-mode': '#1e293b',
        'dark-mode': '#f8fafc',
      },
      spacing: {
        'navbar': '5rem',
        'navbar-lg': '6rem',
        'section': '4rem',
        'section-lg': '6rem',
      },
      margin: {
        'navbar-offset': '5rem',
        'navbar-offset-lg': '6rem',
      },
      padding: {
        'content': '2rem',
        'content-lg': '3rem',
      }
    },
  },
  plugins: [],
}