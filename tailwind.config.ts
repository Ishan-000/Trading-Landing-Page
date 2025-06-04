import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class", "media"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        background: "hsl(var(--background))", // Will be dark
        foreground: "hsl(var(--foreground))", // Will be light
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'brand-purple': 'rgb(159, 139, 207)',
        'brand-purple-dark': 'rgb(98, 66, 165)',
        'brand-pink': 'rgb(163, 92, 162)', 
        'dark-bg': '#060710',
        'dark-bg-secondary': 'rgb(1, 4, 13)',
        'text-muted-foreground-light': 'rgba(255, 255, 255, 0.75)',
        'text-muted-foreground-lighter': 'rgba(255, 255, 255, 0.5)',
        'pricing-card-bg': '#0D020D',
        'pricing-card-vintage-pro-bg': '#000000', // For the other two cards
        'divider-line': '#736496',
        'payouts-glow-center': '#574c70', // color for the divider lines
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
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
        "conic-glow": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        "conic-glow-border": {
          '0%': { 
            backgroundPosition: '-100% 0%'
          },
          '100%': { 
            backgroundPosition: '200% 0%'
          }
        },
        "border-glow-crawl": {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 100%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "conic-glow": "conic-glow 5s linear infinite",
        "conic-glow-border": "conic-glow-border 10s linear infinite",
        "conic-glow-border-anim": "conic-glow 3s linear infinite",
        "border-glow-crawl-anim": "border-glow-crawl 4s linear infinite",
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(91deg, rgb(200, 186, 232) 0%, rgb(177, 149, 240) 98.2475%)',
        'conic-glow-gradient': 'conic-gradient(from 180deg at 50% 50%, #9f8acf00 0deg, #cbb6fa 180deg, #0000 360deg)',
        'conic-glow-border': 'linear-gradient(90deg, #9f8acf00 0%, #9f8acf00 45%, #cbb6fa 50%, #9f8acf00 55%, #9f8acf00 100%)',
        'gradient-pricing-cent': 'linear-gradient(154deg, #000, #0d020d 129%)',
        'gradient-pricing-vintage-pro': 'linear-gradient(156deg, #3811387d, #000 72%)',
        'gradient-divider': 'linear-gradient(270deg, #000, var(--tw-gradient-stops))',
        'radial-payouts-glow': 'radial-gradient(16% 29% at 50% 50%, var(--tw-gradient-stops))', 
        'crawl-glow-gradient': 'conic-gradient(from 90deg at 50% 50%, rgba(203,182,250,0) 0%, rgba(203,182,250,0) 40%, #cbb6fa 50%, rgba(203,182,250,0) 60%, rgba(203,182,250,0) 100%)',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'tighter': '1.15',
        'tight': '1.2',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;