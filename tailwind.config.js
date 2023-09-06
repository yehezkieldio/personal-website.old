/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            aztec: {
                50: "#f4f9f7",
                100: "#daede6",
                200: "#b4dbcd",
                300: "#87c1b0",
                400: "#5ea391",
                500: "#448877",
                600: "#346d60",
                700: "#2d584f",
                800: "#274841",
                900: "#243d37",
                950: "#0b1715",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-be-vietnam-pro)"],
                mono: ["var(--font-space-mono)"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
