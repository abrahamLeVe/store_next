import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      l: "1220px",
      xl: "1440px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        600: "#2563eb",
        700: "#1d4ed8",
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: {
        500: "#84cc16",
        600: "#65a30d",
      },
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      "gray-light": "#d3dce6",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        200: "#e5e7eb",
        400: "#9ca3af",
        500: "#6b7280",
        700: "#374151",
        800: "#1f2937",
        900: "#1a202c",
      },
      indigo: {
        600: "#4f46e5",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
