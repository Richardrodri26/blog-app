/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'wallpaper': "url('./src/assets/wallpaper.jpg')",
        'picHome': "url('./src/assets/picHome.svg')"
      },
  },
  plugins: [],
}
}