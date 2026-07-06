import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F6",
        ink: "#171B21",
        teal: {
          50: "#EAF3F2",
          100: "#CFE4E2",
          400: "#1C7A75",
          500: "#0F5257",
          600: "#0B3E42",
          900: "#082C2F",
        },
        amber: {
          400: "#E8A33D",
          500: "#D8901F",
        },
        grid: "#D8D4C8",
        night: "#0E1420",
        nightgrid: "#1C2333",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
