"use client";

import { ReactNode } from "react";
import PageTransition from "./page-transition";

interface TemplateBaseProps {
    children: ReactNode;
}

export default function TemplateBase(props: TemplateBaseProps) {
    return (
        <>
            <PageTransition>{props.children}</PageTransition>
        </>
    );
}
