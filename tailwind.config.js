/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '360px',
      '5xl': '412px',
      '4xl': '540px',
      'sm': '640px',
      'md': '785px',
      'lg': '1024px',
      'xl': '1280px',
      '3xl': '1350px',
      '2xl': '1536px',
      '6xl': '1450px'
    },
  },

  plugins: [require('tw-elements/dist/plugin')],
}
