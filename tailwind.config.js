const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#49deff",

          secondary: "#ffbd59",

          accent: "#FFF133",

          neutral: "#1b263b",

          "base-100": "#0d1b2a",

          info: "#4AA8BF",

          success: "#81328F",

          warning: "#EF8234",

          error: "#EA4034",
        },
      },
    ],
  },
};
