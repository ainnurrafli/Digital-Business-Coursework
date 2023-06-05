/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-heavy': ['Gilroy-Heavy', 'sans-serif'],
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium','sans-serif'],
        'gilroy-reguler' : ['Gilroy-Regular', 'sans-serif'],
        'hind-Jalandhar': ['Hind Jalandhar', 'sans-serif']
                                                
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        warna1 : {"warna1":"#FFAF6E"}
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

