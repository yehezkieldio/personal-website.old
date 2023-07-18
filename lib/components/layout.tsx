"use client";

import PageContainer from "./page-container";
import PageNavigation from "./page-navigation";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout(props: React.PropsWithChildren<LayoutProps>) {
    return (
        <>
            <PageNavigation
                title="yehezkieldio (elizielx)"
                links={[
                    {
                        title: "home",
                        href: "/",
                    },
                    {
                        title: "about",
                        href: "/about",
                    },
                    {
                        title: "contact",
                        href: "/contact",
                    },
                ]}
            />
            <PageContainer>{props.children}</PageContainer>
        </>
    );
}
