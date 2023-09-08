import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    title: "Yehezkiel Dio (elizielx)",
    description: "Fullstack Developer and Software Architect based in Indonesia.",
};

import { beVietnamPro, martianMono } from "./fonts";
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
