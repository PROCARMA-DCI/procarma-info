/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "400px",
        xs: "480px", // Extra small devices (phones)
        sm: "640px", // Small devices (landscape phones)
        md: "800px",
        lg: "1024px",
        xlg: "1152px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
};
