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
        primary: '#FBFBFB',  // Warna primary
        secondary: '#181C14',  // Warna secondary
      },
    },
  },

  plugins: [require('daisyui')],  // Daisy UI plugin

  daisyui: {
    themes: false,  // Matikan tema bawaan DaisyUI
  },
};
