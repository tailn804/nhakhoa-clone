/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,scss}",
    "./assets/**/*.{vue,js,scss}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      listStyleType:{
        square: 'square',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true
  }
}

