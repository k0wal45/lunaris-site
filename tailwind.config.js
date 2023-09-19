/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        brightTheme: {        
          "primary": "#003CFF",
          "secondary": "#f97316",
          "accent": "#1fb2a6",
          "neutral": "#4B4B4B",
          "base-100": "#fff",
          "info": "#3abff8",
          "success": "#6F7",
          "warning": "#F80",
          "error": "#F00",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hussar': ['hussar', 'sans-serif'],
        'hussar-italic': ['hussar-italic', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite reverse',
      }
    },
  },
  plugins: [require('daisyui')],
}