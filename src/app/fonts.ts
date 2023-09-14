import { Be_Vietnam_Pro, Martian_Mono } from "next/font/google";

export const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    variable: "--font-be-vietnam-pro",
});

export const martianMono = Martian_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});
