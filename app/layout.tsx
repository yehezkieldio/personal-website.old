import { cn } from "#/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "elizielx",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "bg-black", "overflow-x-hidden", "text-white")}>{children}</body>
        </html>
    );
}
