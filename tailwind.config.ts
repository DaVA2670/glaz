import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#07090f",
        panel: "#0f1422",
        neon: "#5be7ff",
        violet: "#8f7dff",
        accent: "#ff3f7d"
      },
      boxShadow: {
        glow: "0 0 20px rgba(91, 231, 255, 0.35)"
      },
      backgroundImage: {
        "city-grid":
          "radial-gradient(circle at 20% 20%, rgba(91,231,255,0.16) 0, transparent 42%), radial-gradient(circle at 80% 0%, rgba(143,125,255,0.18) 0, transparent 38%), linear-gradient(135deg, #06080f 0%, #0e1220 45%, #06080f 100%)"
      }
    }
  },
  plugins: []
} satisfies Config;
