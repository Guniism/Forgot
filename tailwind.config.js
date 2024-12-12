/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'base': '#161618',
      'bd': '#333333',
      'con': '#222222',
      'wht': '#ffffff',
      'gray': '#343434',
      'green': '#40C173',
      'lgreen': '#52eb73',
      'ph': '#666666',
      'swap': '#444444'
    },
  },
  plugins: [],
}

