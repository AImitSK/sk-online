/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        grey: '#F5F5F5',
        dunkel: '#44474C',
        darkblue: '#005FAB',
        lightblue: '#E7F5FD',
        blue: '#0693E3',
        green: '#203204',
        lightgreen: '#D7FF9C',
        purple: '#3D0089',
        lightpurple: '#E3DAFE',
        blueberry: '#53003F',
        lightblueberry: '#EFCEFD',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        bricolage: ['var(--font-bricolage-grotesque)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};