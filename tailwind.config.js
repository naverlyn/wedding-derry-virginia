const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero':  "url('https://unsplash.com/photos/2a1GNZZaVHk')",
      },
      fontFamily: {
        'Dancing': ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [daisyui],
}
