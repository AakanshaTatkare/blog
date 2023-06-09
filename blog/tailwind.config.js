/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [],
  backgroundImage: {
    'insta': "url('/components/insta.png')",
    'footer-texture': "url('/img/footer-texture.png')",
  },
  animation: {
    'bounce-slow': 'bounce 8s linear infinite',
  }
};
