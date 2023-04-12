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
      fontFamily: {
        Dancing: ["Dancing Script", "cursive"],
        Allura: ["Allura", "cursive"],
        Sacramento: ["Sacramento", "cursive"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero':  "url('https://unsplash.com/photos/2a1GNZZaVHk')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'swipe-right': 'swipeRight 1s ease-in-out',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: "light"
  }
}
