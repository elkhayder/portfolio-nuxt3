const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
   ],
   theme: {
      extend: {
         fontFamily: {
            mono: ['"Roboto Mono"', defaultTheme.fontFamily.mono],
            sans: ["Lato", defaultTheme.fontFamily.sans],
            cairo: ["Cairo", defaultTheme.fontFamily.sans],
         },
         colors: {
            accent: colors.orange,
         },
         screens: {
            xs: "380px",
            // print: { raw: "print" },
         },
      },
   },
   plugins: [],
};
