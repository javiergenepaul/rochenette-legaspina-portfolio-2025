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
        amethyst: {
          "50": "var(--amethyst-50)",
          "100": "var(--amethyst-100)",
          "200": "var(--amethyst-200)",
          "300": "var(--amethyst-300)",
          "400": "var(--amethyst-400)",
          "500": "var(--amethyst-500)",
          "600": "var(--amethyst-600)",
          "700": "var(--amethyst-700)",
          "800": "var(--amethyst-800)",
          "900": "var(--amethyst-900)",
          "950": "var(--amethyst-950)",
        },
        scorpion: {
          "50": "var(--scorpion-50)",
          "100": "var(--scorpion-100)",
          "200": "var(--scorpion-200)",
          "300": "var(--scorpion-300)",
          "400": "var(--scorpion-400)",
          "500": "var(--scorpion-500)",
          "600": "var(--scorpion-600)",
          "700": "var(--scorpion-700)",
          "800": "var(--scorpion-800)",
          "900": "var(--scorpion-900)",
          "950": "var(--scorpion-950)",
        },
        woodsmoke: {
          "50": "var(--woodsmoke-50)",
          "100": "var(--woodsmoke-100)",
          "200": "var(--woodsmoke-200)",
          "300": "var(--woodsmoke-300)",
          "400": "var(--woodsmoke-400)",
          "500": "var(--woodsmoke-500)",
          "600": "var(--woodsmoke-600)",
          "700": "var(--woodsmoke-700)",
          "800": "var(--woodsmoke-800)",
          "900": "var(--woodsmoke-900)",
          "950": "var(--woodsmoke-950)",
        },
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
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
