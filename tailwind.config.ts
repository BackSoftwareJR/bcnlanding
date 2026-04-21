import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        "primary-soft": "#1E293B",
        accent: "#F97316",
        surface: "#F8FAFC"
      },
      boxShadow: {
        soft: "0 10px 30px -15px rgba(15, 23, 42, 0.3)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
};

export default config;
