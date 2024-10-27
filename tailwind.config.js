/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust this path as necessary
    darkMode: 'class',
    theme: {
        extend: {
            flex: {
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px"
                },
                colors: {
                    current: "currentColor",
                    transparent: "transparent",
                    black: "#000",
                    white: "#fff",
                    gray: {
                        50: "#f9fafb",
                        100: "#f3f4f6",
                        200: "#e5e7eb",
                        300: "#d1d5db",
                        400: "#9ca3af",
                        500: "#6b7280",
                        600: "#4b5563",
                        700: "#374151",
                        800: "#1e2d40",
                        900: "#111827"
                    },
                    blueGray: {
                        50: "#edf1f8",
                        100: "#F1F5F9",
                        200: "#E2E8F0",
                        300: "#CBD5E1",
                        400: "#94A3B8",
                        500: "#64748B",
                        600: "#475569",
                        700: "#334155",
                        800: "#1E293B",
                        900: "#0F172A"
                    },
                    red: {
                        50: "#fef2f2",
                        100: "#fee2e2",
                        200: "#fecaca",
                        300: "#fca5a5",
                        400: "#f87171",
                        500: "#ef4444",
                        600: "#dc2626",
                        700: "#b91c1c",
                        800: "#991b1b",
                        900: "#7f1d1d"
                    },
                    yellow: {
                        50: "#fffbeb",
                        100: "#fef3c7",
                        200: "#fde68a",
                        300: "#fcd34d",
                        400: "#fbbf24",
                        500: "#f59e0b",
                        600: "#d97706",
                        700: "#b45309",
                        800: "#92400e",
                        900: "#78350f"
                    },
                    green: {
                        50: "#ecfdf5",
                        100: "#d1fae5",
                        200: "#a7f3d0",
                        300: "#6ee7b7",
                        400: "#34d399",
                        500: "#10b981",
                        600: "#059669",
                        700: "#047857",
                        800: "#065f46",
                        900: "#064e3b"
                    },
                    blue: {
                        50: "#eff6ff",
                        100: "#dbeafe",
                        200: "#bfdbfe",
                        300: "#93c5fd",
                        400: "#60a5fa",
                        500: "#3b82f6",
                        600: "#2563eb",
                        700: "#1d4ed8",
                        800: "#1e40af",
                        900: "#1e3a8a"
                    },
                    indigo: {
                        50: "#eef2ff",
                        100: "#e0e7ff",
                        200: "#c3dafe",
                        300: "#a5b4fc",
                        400: "#818cf8",
                        500: "#6366f1",
                        600: "#4f46e5",
                        700: "#4338ca",
                        800: "#3730a3",
                        900: "#312e81"
                    },
                    purple: {
                        50: "#f5f3ff",
                        100: "#ede9fe",
                        200: "#ddd6fe",
                        300: "#c4b5fd",
                        400: "#a78bfa",
                        500: "#8b5cf6",
                        600: "#7c3aed",
                        700: "#6d28d9",
                        800: "#5b21b6",
                        900: "#4c1d95"
                    },
                    pink: {
                        50: "#fdf2f8",
                        100: "#fce7f3",
                        200: "#fbcfe8",
                        300: "#f9a8d4",
                        400: "#f472b6",
                        500: "#ec4899",
                        600: "#db2777",
                        700: "#be185d",
                        800: "#9d174d",
                        900: "#831843"
                    }
                },
                '1': '1 1 0%',
                auto: '1 1 auto',
                initial: '0 1 auto',
                none: 'none',
            },
            flexGrow: {
                '0': '0',
                DEFAULT: '1',
            },
            flexShrink: {
                '0': '0',
                DEFAULT: '1',
            },
            transitionDelay: {
                '2000': '2000ms',
            }
        },
    },
    plugins: [],
}