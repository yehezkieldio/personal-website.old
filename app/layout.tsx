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

export const metadata = {
    title: "elizielx",
    description: "",
};

import "#/lib/styles/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${beVietnamPro.variable} ${spaceMono.variable}`}>{children}</body>
        </html>
    );
}
