/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-dark': "url('./src/assets/images/bg-mobile-dark.jpg')",
        'mobile-light': "url('./src/assets/images/bg-mobile-light.jpg')",
        'desktop-dark': "url('./src/assets/images/bg-desktop-dark.jpg')",
        'desktop-light': "url('./src/assets/images/bg-desktop-light.jpg')",
      }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.4em',
    }
  },
  plugins: [],
  darkMode: 'class',
}

