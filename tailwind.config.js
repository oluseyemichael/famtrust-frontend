/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2452D6',
          red: '#C50016',
          green: '#00710B',
        },
        secondary: {
          grey: '#777',
          grey2: '#F9F8FF',
        },

        'darkGrey': '#C0BDFF',
        'hover-bg': '#4567F7',
        'text-color': '#14183B',
        'hover-text': '#F9F8FF',
        'up-arrow': '#00710B',
        'add-sub-acc': '#2452D6',
        // 'gray': '#E2E2E2'
        gray: '#bdbdbd',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
