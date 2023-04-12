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
        Satisfy: ["Satisfy", "cursive"],
        Pacifico: ["Pacifico", "cursive"],
      },
      backgroundImage: {
        'background': "url('../images/bg.jpg')",
        'background2': "url('../images/bg2.jpg')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        tada: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'scale(0.9)' },
          '20%, 40%, 60%, 80%': { transform: 'scale(1.1)' },
        },
        jello: {
          'from, 11.1%,to': {
            transform: 'translate3d(0, 0, 0)',
          },

          '22.2%': {
            transform: 'skewX(-12.5deg) skewY(-12.5deg)',
          },

          '33.3%': {
            transform: 'skewX(6.25deg) skewY(6.25deg)',
          },

          '44.4%': {
            transform: 'skewX(-3.125deg) skewY(-3.125deg)',
          },

          '55.5%': {
            transform: 'skewX(1.5625deg) skewY(1.5625deg)',
          },

          '66.6%': {
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
          },

          '77.7%': {
            transform: 'skewX(0.390625deg) skewY(0.390625deg)',
          },

          '88.8%': {
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        swipeLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        tada: 'tada 10s ease-in-out',
        jello: 'jello 1s',
        fadeIn: 'fadeIn 1s ease-in-out, swipeLeft 1s ease-in-out forwards',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light"
  },
}
