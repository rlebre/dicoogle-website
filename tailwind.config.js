const colors = require('tailwindcss/colors')

// workaround until tailwind address the issue https://github.com/tailwindlabs/tailwindcss/issues/4690
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      ...colors,
      'dicoogle': {
        100: '#cbe0f2',
        200: '#337ab7',
        300: '#2e6da4',
        400: '#286090',
        500: '#204d74',
        600: '#eff6ff',
      },
      'dicoogle-gray': {
        100: '#888888',
        200: '#333333',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['hover'],
      textColor: ['active'],
      animation: ['ease-in', 'ease-out']
    },
  },
  plugins: [],
}