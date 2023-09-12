/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/service/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["corporate", "luxury"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
