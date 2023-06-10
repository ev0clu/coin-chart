/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        themeButtonColor: '#FCD535',
        themeLightColor: '#FAFAFA',
        themeDarkColor: '#161A1E'
      }
    }
  },
  plugins: []
};
