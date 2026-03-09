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
                primary: {
                    DEFAULT: "#FFD600",
                    50: "#FFFDE7",
                    100: "#FFF9C4",
                    200: "#FFF59D",
                    300: "#FFF176",
                    400: "#FFEE58",
                    500: "#FFD600",
                    600: "#FDD835",
                    700: "#F9A825",
                    800: "#F57F17",
                    900: "#E65100",
                },
                background: "#000000",
                surface: "#0A0A0A",
                card: "#111111",
                border: "#1E1E1E",
                muted: "#888888",
                accent: "#FFD600",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                display: ["var(--font-bebas)", "Impact", "sans-serif"],
            },
            animation: {
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "spin-slow": "spin 8s linear infinite",
                float: "float 6s ease-in-out infinite",
                shimmer: "shimmer 2s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "yellow-glow":
                    "radial-gradient(ellipse at center, rgba(255,214,0,0.15) 0%, transparent 70%)",
            },
            boxShadow: {
                yellow: "0 0 30px rgba(255,214,0,0.3)",
                "yellow-lg": "0 0 60px rgba(255,214,0,0.4)",
                "yellow-sm": "0 0 10px rgba(255,214,0,0.2)",
                card: "0 4px 24px rgba(0,0,0,0.6)",
            },
        },
    },
    plugins: [],
};

export default config;
