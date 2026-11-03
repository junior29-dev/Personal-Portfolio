/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060B",
          900: "#0A0E1A",
          800: "#0F1424",
          700: "#161C30",
          600: "#1F2740",
        },
        mist: {
          100: "#F3F5FC",
          300: "#C7CCE0",
          500: "#8A91B0",
        },
        signal: {
          blue: "#3B6CF6",
          violet: "#8B5CF6",
          cyan: "#28E0D6",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(59,108,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,108,246,0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(5, 6, 11, 0.45)",
        glow: "0 0 40px -10px rgba(59,108,246,0.5)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
