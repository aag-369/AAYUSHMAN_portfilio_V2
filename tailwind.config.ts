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
        quantum: "#00FFFF",
        cyber: "#10B981",
        neural: "#A855F7",
        void: "#030712",
        surface: "#0F172A",
        panel: "#1E293B",
        ghost: "#334155",
        "glow-q": "#00FFFF1A",
        "glow-n": "#A855F71A",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      keyframes: {
        meshDrift: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "8% 8%" },
        },
      },
      animation: {
        meshDrift: "meshDrift 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
