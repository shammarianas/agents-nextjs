import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        surface: "#f6f7f9",
        surface2: "#edeef2",
        border: "#e2e4ea",
        text: "#14161c",
        textDim: "#5b6270",
        accent: "#6c5ce7",
        accent2: "#0f9d67",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        site: "1180px",
      },
      borderRadius: {
        card: "14px",
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        dash: {
          to: { strokeDashoffset: "-24" },
        },
      },
      animation: {
        pulse2: "pulse2 1.8s infinite",
        dash: "dash 2.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
