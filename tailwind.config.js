/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Подключаем все файлы в src для применения Tailwind
  ],
  theme: {
    extend: {
      screens: {
        'xl-max': { 'max': '1475px' },   // До 1475px
        'xl-min': '1200px',              // От 1200px
        'xl-range': { 'min': '1200px', 'max': '1475px' }, // В диапазоне
      }
    },
  },
  plugins: [],
}