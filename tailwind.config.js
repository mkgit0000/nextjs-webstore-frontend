/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src`, `app` directory:
    // './app/**/*.{js,ts,jsx,tsx}',
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      oswald: 'Oswald, sans-serif',
      urbanist: 'Urbanist, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}
