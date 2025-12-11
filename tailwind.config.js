/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: ["class"],

  theme: {
    container: {
      center: true,
      padding: "24px",
    },

    extend: {
      /* -----------------------------
       * FONT FAMILY
       * ----------------------------- */
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      /* -----------------------------
       * CUSTOM COLORS (punya kamu)
       * ----------------------------- */
      colors: {
        primaryIconColor: "#0f766e",
        secondaryIconColor: "#0d9488",
        primary: "#475569",
        secondary: "#656d72",

        // background
        bgPrimary: "#fff",
        bgSecondary: "#fbfbfb",
        bgThird: "#a9c3b619",

        // dark mode
        darkPrimaryIconColor: "#e2e8f0",
        darkPrimary: "#cbd5e1",
        darkSecondary: "#94a3b8",
        bgDarkPrimary: "#0f172a",
        bgDarkSecondary: "rgba(15,23,42,0.99)",

        /* -----------------------------
         * SHADCN THEME COLORS (WAJIB)
         * ----------------------------- */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary_shad: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary_shad: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
      },

      /* -----------------------------
       * SHADCN RADII
       * ----------------------------- */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* -----------------------------
       * CUSTOM EFFECTS (punya kamu)
       * ----------------------------- */
      dropShadow: {
        mdCustom: "0 2px 2px #dbeafe",
      },
      boxShadow: {
        lg: ["0 9px 15px -3px #e2e8f0", "0 4px 6px -4px #e2e8f0"],
        portfolioImg: "7px 8px 4px 0px rgb(0 0 0 / 0.2)",
      },

      letterSpacing: {
        titleSpacing: "6px",
      },

      screens: {
        "2xl": "1320px",
      },

      /* -----------------------------
       * SHADCN ANIMATIONS (WAJIB)
       * ----------------------------- */
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [],
};
