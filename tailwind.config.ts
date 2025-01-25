import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CUSTOM COLORS
        amethyst: {
          950: "#39074B",
          900: "#5C1E71",
          800: "#6C1E8A",
          700: "#8222A9",
          600: "#9A2DCC",
          500: "#AE3EE6",
          400: "#CC7EF4",
          300: "#DFAEF9",
          200: "#EBD2FC",
          100: "#F5E9FE",
          50: "#FBF4FF",
        },
        scorpion: {
          950: "#282829",
          900: "#3E3C3E",
          800: "#474448",
          700: "#535054",
          600: "#5D595E",
          500: "#7D787F",
          400: "#9A959B",
          300: "#BDBBBE",
          200: "#DBDBDC",
          100: "#EFEFEF",
          50: "#F7F7F8",
        },
        // SHACN COLORS
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        XS: "40rem",
        SM: "48rem",
        MD: "64rem",
        LG: "90rem",
        XL: "120rem",
      },
      fontSize: {
        h1: "4.188rem",
        h2: "3.188rem",
        h3: "2.375rem",
        h4: "1.75rem",
        h5: "1.313rem",
        button: "1rem",
        normal: "1rem",
        large: "1.125rem",
        small: "0.875rem",
        caption: "0.75rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;