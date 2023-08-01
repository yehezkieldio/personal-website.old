"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import PageTransition from "./page-transition";
import PageFooter from "./page-footer";
import PageNavigation from "./page-navigation";

interface TemplateBaseProps {
    children: ReactNode;
}

export default function TemplateBase(props: TemplateBaseProps) {
    let pathname = usePathname();

    // Hide page navigation on the home page
    const isPageNavigationVisible =
        pathname.startsWith("/projects") || pathname === "/contact" || pathname === "/about";

    return (
        <>
            {isPageNavigationVisible && <PageNavigation />}
            <PageTransition>{props.children}</PageTransition>
            <PageFooter />
        </>
    );
}
