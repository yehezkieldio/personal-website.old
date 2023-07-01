import { ReactNode } from "react";
import PageTransition from "./PageTransition";

interface PageContainerProps {
    children: React.ReactNode;
}

export default function PageContainer(props: React.PropsWithChildren<PageContainerProps>) {
    return (
        <>
            <PageTransition>{props.children}</PageTransition>
        </>
    );
}
