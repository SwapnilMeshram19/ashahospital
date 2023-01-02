/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': 'Manrope, sans-serif',
      },
      animation: {
        'ping-one': 'ping-animation 0.11s ease-in 1',
      },
      keyframes: {
        'ping-animation': {
        '0%, 0%': { transform: 'scale(0)', opacity:0 }
        }
      },

      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
