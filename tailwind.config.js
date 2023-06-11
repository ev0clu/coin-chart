/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#FCD535',
        hover: 'rgb(168, 162, 158,0.2)',
        themeLightColor: '#FAFAFA',
        themeDarkColor: '#161A1E',
        blue: '#0ea5e9'
      }
    }
  },
  plugins: []
};
