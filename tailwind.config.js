/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f6f8fa',
          100: '#e1e4e8',
          200: '#d1d5da',
          300: '#c6cbd1',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#586069',
          700: '#424750',
          800: '#24292e',
          850: '#1f2428',
          900: '#0d1117',
        }
      }
    },
  },
  plugins: [],
}
