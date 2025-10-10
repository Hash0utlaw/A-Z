import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          // Navy Blue
          DEFAULT: "hsl(var(--primary))", // #1e3a8a
          foreground: "hsl(var(--primary-foreground))", // white
          50: "#e8edf5",
          100: "#d1d9eb",
          200: "#a3b3d7",
          300: "#768ecf",
          400: "#4869c7",
          500: "#1A44BF",
          600: "#173aa6",
          DEFAULT: "#1e3a8a", // Actual default
          700: "#163076",
          800: "#0F255D",
          900: "#081A45",
          950: "#040D2A",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          // Kelly Green
          DEFAULT: "hsl(var(--accent))", // #22c55e
          foreground: "hsl(var(--accent-foreground))", // white
          50: "#e9f9ef",
          100: "#d3f4df",
          200: "#a6e8bf",
          300: "#79dc9f",
          400: "#4dd07f",
          DEFAULT: "#22c55e", // Actual default
          500: "#22c55e",
          600: "#1db053",
          700: "#178c43",
          800: "#116733",
          900: "#0b4323",
          950: "#062a15",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Update existing kelly and navy to reflect new scheme
        // kelly will now be the new accent green
        kelly: {
          DEFAULT: "#22c55e",
          foreground: "#ffffff",
          50: "#e9f9ef",
          100: "#d3f4df",
          200: "#a6e8bf",
          300: "#79dc9f",
          400: "#4dd07f",
          500: "#22c55e",
          600: "#1db053",
          700: "#178c43",
          800: "#116733",
          900: "#0b4323",
          950: "#062a15",
        },
        // navy will now be the new primary navy
        navy: {
          DEFAULT: "#1e3a8a",
          foreground: "#ffffff",
          50: "#e8edf5",
          100: "#d1d9eb",
          200: "#a3b3d7",
          300: "#768ecf",
          400: "#4869c7",
          500: "#1A44BF",
          600: "#173aa6",
          700: "#1e3a8a", // Matching DEFAULT with a specific shade
          800: "#0F255D",
          900: "#081A45",
          950: "#040D2A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
