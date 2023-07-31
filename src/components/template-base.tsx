"use client";

import { ReactNode } from "react";
import PageTransition from "./page-transition";
import { usePathname } from "next/navigation";
import PageFooter from "./page-footer";
import PageNavigation from "./page-navigation";

interface TemplateBaseProps {
    children: ReactNode;
}

export default function TemplateBase(props: TemplateBaseProps) {
    const pathname = usePathname();

    // Hide page navigation on the home page
    const isPageNavigationVisible = pathname.startsWith("/projects") || pathname === "/contact";

    return (
        <>
            {isPageNavigationVisible && <PageNavigation />}
            <PageTransition key={pathname}>{props.children}</PageTransition>
            <PageFooter />
        </>
    );
}
