import type { Config } from "tailwindcss";

export default {
  darkMode: 'selector',
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./UI/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackPure: "#000",
        black: "#171718",
        sectionBg: '#252526',
        border: '#26292d',
        white: '#fff',
        purple: '#5c62ec'
      },
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        DEFAULT: '1200px'
      }
    }
  },
  plugins: [],
} satisfies Config;
