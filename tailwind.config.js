/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'burger-orange': '#FF6B35',
        'burger-red': '#D32F2F',
        'burger-dark': '#1A1A1A',
      },
    },
  },
  plugins: [],
}
