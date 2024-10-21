/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neuemontreallight: ['NeueMontrealLight', 'sans-serif'],
        neueMontrealregular: ['NeueMontrealRegular', 'sans-serif'],
        neueMontrealmedium: ['NeueMontrealMedium', 'sans-serif'],
        neueMontrealbold: ['NeueMontrealBold', 'sans-serif'],
      },
      fontWeight: {
        lighter:"lighter",
        regular: '400',
        medium: '500',
        bold: '700',
      },
    },
  },

  plugins: [],
}

