module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#655CED",
        textColor: " #303033",
        bgGradient:
          "linear-gradient(190.75deg, #655CED -6.35%, rgba(42, 146, 252, 0.493425) 53.14%, rgba(153, 36, 228, 0.421742) 111.43%, rgba(156, 33, 227, 0.42) 123.43%);",
      },
    },
  },
  plugins: [],
};
