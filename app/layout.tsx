import type { Metadata } from "next";
import { Be_Vietnam_Pro, Space_Mono } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    variable: "--font-be-vietnam-pro",
});

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL(`http://localhost:${process.env.PORT || 3000}`),
    title: "elizielx",
    description: "A Indonesian university student majoring in computer science and a full-stack developer.",
    openGraph: {
        title: "elizielx",
        siteName: "elizielx",
        description: "A Indonesian university student majoring in computer science and a full-stack developer.",
        images: [
            {
                url: "/android-chrome-192x192.png",
                width: 192,
                height: 192,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            "index": true,
            "follow": false,
            "noimageindex": true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            {
                url: "/favicon.ico",
            },
            {
                url: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                url: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

import "#/lib/styles/main.scss";

import Layout from "#/lib/components/layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${beVietnamPro.variable} ${spaceMono.variable}`}>{children}</body>
        </html>
    );
}
