/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4c8dc2",
          "secondary": "#c24c4c",
          "accent": "#AACde9",
          "neutral": "#3D4451",
          "base-100": "#104978",
          "info": "#77adda",
          "success": "#296699",
          "warning": "#9e2929",
          "error": "#781010",
        },
      },
    ],
  },
};
