/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Semua file dalam src dengan ekstensi js, jsx, ts, tsx
    "./src/Components/**/*.{js,jsx}", // Semua komponen di folder Components
    "./src/Pages/**/*.{js,jsx}", // Semua halaman di folder Pages
    "./src/Hooks/**/*.{js,jsx}", // Semua hook di folder Hooks
    "./src/Services/**/*.{js,jsx}", // Semua file di folder Services
    "./src/Utils/**/*.{js,jsx}", // Semua file di folder Utils
  ],

  theme: {
    extend: {
      screens: {
        'xs': '320px', // Tambahkan breakpoint custom untuk 320px
      },
      colors: {
        primary: '#FBFBFB',
        secondary: '#131112',
        candleLight: '#FFF574',
        darkInk: '#131112',
        sonsBlue: '#00e1f3',
        liliac: '#F5EFFF',
      },
    },
  },

  plugins: [require('daisyui')],  // Daisy UI plugin

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ]
  },
};


