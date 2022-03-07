module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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