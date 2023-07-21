"use client";

import PageNavigation from "#/lib/components/page-navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="page-container">
            <PageNavigation />
            {children}
        </div>
    );
}
