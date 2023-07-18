import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "elizielx: contact",
    description: "A Indonesian university student majoring in informatics and a full-stack developer.",
    openGraph: {
        title: "elizielx: contact",
        siteName: "elizielx",
        description: "A Indonesian university student majoring in informatics and a full-stack developer.",
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
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
