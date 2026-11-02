import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#faf9fa",
        surface: "#faf9fa",
        "surface-bright": "#faf9fa",
        "surface-dim": "#dbdadb",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f3f4",
        "surface-container": "#efedee",
        "surface-container-high": "#e9e8e9",
        "surface-container-highest": "#e3e2e3",
        "surface-variant": "#e3e2e3",
        "surface-tint": "#2259bf",
        "inverse-surface": "#303031",
        "inverse-on-surface": "#f2f0f1",

        primary: "#094cb2",
        "primary-container": "#3366cc",
        "primary-fixed": "#d9e2ff",
        "primary-fixed-dim": "#b1c5ff",
        "on-primary": "#ffffff",
        "on-primary-container": "#e7ebff",
        "on-primary-fixed": "#001946",
        "on-primary-fixed-variant": "#00419d",
        "inverse-primary": "#b1c5ff",

        secondary: "#5a5f63",
        "secondary-container": "#dfe3e8",
        "secondary-fixed": "#dfe3e8",
        "secondary-fixed-dim": "#c2c7cc",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#606569",
        "on-secondary-fixed": "#171c20",
        "on-secondary-fixed-variant": "#42474b",

        tertiary: "#6d5e00",
        "tertiary-container": "#bfab49",
        "tertiary-fixed": "#f9e37a",
        "tertiary-fixed-dim": "#dcc661",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#4a3f00",
        "on-tertiary-fixed": "#211b00",
        "on-tertiary-fixed-variant": "#524600",

        "on-surface": "#1b1c1d",
        "on-surface-variant": "#434653",
        "on-background": "#1b1c1d",

        outline: "#737784",
        "outline-variant": "#c3c6d5",

        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
      },
      fontFamily: {
        headline: ["Noto Serif", "Georgia", "serif"],
        display: ["Noto Serif", "Georgia", "serif"],
        body: ["Inter", "-apple-system", "sans-serif"],
        label: ["Public Sans", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
