import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "elizielx: contact",
    description: "A Indonesian university student majoring in informatics and a full-stack developer.",
    openGraph: {
        title: "elizielx: contact",
        siteName: "elizielx",
        description: "A Indonesian university student majoring in informatics and a full-stack developer.",
        locale: "en_US",
        type: "website",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
