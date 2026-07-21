import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f5fb",
          100: "#dbe7f5",
          200: "#bcd2ec",
          300: "#8db4df",
          400: "#578ecd",
          500: "#3370b7",
          600: "#25599b",
          700: "#1f477d",
          800: "#153561",
          900: "#0d2444",
          950: "#08182f",
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#ea8a04",
          700: "#c2710c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -6px rgba(8, 24, 47, 0.14)",
        lift: "0 12px 40px -12px rgba(8, 24, 47, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
