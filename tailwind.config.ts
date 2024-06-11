import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        "center": true,
        "padding": "1.25rem",
        "screens": {
          "md": "40rem",
          "lg": "46rem",
          "xl": "52rem",
          "2xl": "58rem"
        },
      },
      fontSize: {
        "md": [ "1.0625rem", "1.625rem" ]
      }
    },
  },
  plugins: [],
};
export default config;
