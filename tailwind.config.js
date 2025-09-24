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
        brand: {
          'red-pastel': '#FF6961',
          'yellow-pastel': '#F7CB45',
          'blue-pastel': '#9BB7D4',
          'green-pastel': '#8CC0A2',
          "pink-pastel": '#FF91E8',
          'cream-pastel': '#F9F5F2',
          'whitist-pastel': '#F2F7F5'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
