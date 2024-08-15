/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonBg: "rgba(29,155,240,255)",
        buttonBgHover: "rgba(24,140,217,255)",
        xborder: "rgba(47,51,54,255)",
        searchbg: "rgba(32,35,38,255)",
        searchplaceholder: "rgba(116,116,117,255)",
      },
    },
  },
  plugins: [],
};
