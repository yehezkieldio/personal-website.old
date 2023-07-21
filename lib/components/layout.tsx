"use client";

import PageFooter from "./page-footer";
import PageTransition from "./page-transition";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout(props: React.PropsWithChildren<LayoutProps>) {
    return (
        <>
            <PageTransition>{props.children}</PageTransition>
            <PageFooter />
        </>
    );
}
