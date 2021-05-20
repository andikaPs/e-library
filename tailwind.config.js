module.exports = {
  purge: {
    enabled: true,
    content: ["./index.html", "./src/**/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["poppins"],
      },
      colors: {
        primary: {
          100: "#2459C6",
          200: "#2A86E2",
        },
        secondary: {
          100: "#1B1C1E",
          200: "#D0D0D037",
          300: "#FDFDFD",
          400: "#F5F2F2",
        },
        warning: {
          100: "#FFA50085",
          200: "#FFA500",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
