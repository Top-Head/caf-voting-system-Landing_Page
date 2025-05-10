/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          koulen: ['var(--font-koulen)'],
        },
      },
    },
    plugins: [],
    module.exports = {
      content: ["./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"],
      presets: [require("@relume_io/relume-tailwind")],
    };
  }
  