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
        primary: "#E75325",
        "gray-light": "#232028",
        "yellow-hover": "#FFB703",
        "color-contrast": "#A0AAB2",
      },
      boxShadow: {
        custom: "0 25px 50px -12px rgba(255, 245, 235, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
