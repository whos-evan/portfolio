/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        fontFamily: {
          pixeloid: ['Pixeloid']
        },
        cursor: {
          default: 'url(/images/cursor.png), default',
        }
    },
  },
  plugins: [],
}
