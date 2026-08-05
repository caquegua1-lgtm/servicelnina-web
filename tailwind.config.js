/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#0d1117',
        accent: '#22c55e',
        gold: '#d4af37',
      },
      backdropFilter: {
        'blur-20': 'blur(20px)',
      },
    },
  },
  plugins: [],
}
