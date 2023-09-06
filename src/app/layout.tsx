import type { Metadata } from "next";
import { Be_Vietnam_Pro, Martian_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    title: "elizielx",
    description: "a full-stack developer.",
};

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    variable: "--font-be-vietnam-pro",
});
const martianMono = Martian_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${beVietnamPro.variable} ${martianMono.variable}`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
