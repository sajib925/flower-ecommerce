/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      rubik: ["var(--font-rubik)"],
    },
    extend: {
      colors: {
        "primary": "#df4246",
        "secondary": "#232323",
        "bg-overlay": "rgba(0,0,0,.2)",
        "border-color": "hsla(0,0%,87%,.5)",
        "search-border": "#f0f3f8",
        "search-icon": "#7e7e7e",
        "box-shadow": "3.346px 3.716px 22.5px rgb(0 0 0 / 7%)",
      },
    },
  },
  plugins: [],
};
