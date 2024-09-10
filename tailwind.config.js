import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addBase }) {
      addBase({
        ":root": {
          "--primary": "#fc6f00",
          "--secondary": "#260d2d",
        },
        ".dark": {
          "--primary": "#BEF264",
          "--secondary": "#260d2d",
        },
      });
    },
    nextui({
      themes: {
        light: {
          colors: {
            background: "#EEEEEE",
            foreground: "#000000",
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#FFFFFF",
          },
        },
      },
    }),
  ],
};

export default config;
