module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'serif': ['Playfair Display', 'serif'],
    },
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1800px',
      },
    }
  },
  plugins: [],
}
