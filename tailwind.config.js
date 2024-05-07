/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': '"Inter", sans-serif',
      },
    },
    colors: {
      'dark-1': '#151515',
      'dark-2': '#444444',
      'dark-3': '#737373',
      'dark-4': '#A2A2A2',
      'dark-5': '#D0D0D0',
      'dark-6': '#E8E8E8',
      'dark-7': '#F3F3F3',
      'white': '#FFFFFF',
      'red': '#FF3811',

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

