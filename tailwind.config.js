/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'donation': "url('https://i.ibb.co/JtNc5L7/donation.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

