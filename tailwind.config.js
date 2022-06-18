const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      metal: {
        500: "#a9adc1",
      },
      midnight: {
        200: "#848b9a",
        400: "#2f3542",
        500: "#282c35",
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },

    extend: {},
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme("colors.midnight.500"),
          p: {
            color: theme("colors.midnight.500"),
            marginTop: "2rem",
          },
          ul: {
            li: {
              listStyleType: "disc",
              marginLeft: "1rem",
            },
          },
          a: {
            "&:hover": {
              color: "#F7941E",
            },
            color: theme("colors.midnight.500"),
            fontWeight: "bold",
            textDecoration: "underline",
          },
        },
      },
    }),
  },
  plugins: [require("@tailwindcss/typography")],
};
