/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
            "primary": "#000000",
            "secondary": "#F000B8",
            "accent": "#37CDBE",
            "neutral": "#3D4451",
            "base-100": "#F8FAFC",
            "info": "#EFF6FF",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
        },
      },
    ] 
  },
plugins: [require("daisyui")],

}
