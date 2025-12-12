import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dirtydog: {
          green: "#23D94E",
          greenSoft: "#34E36F",
          black: "#050608",
          gray: "#1A1A1F",
          offwhite: "#F8F8F0",
          silver: "#C8C8C8",
        },
      },
    },
  },
  plugins: [],
};

export default config;

