"use client";

import PageFooter from "./page-footer";
import PageNavigation from "./page-navigation";
import PageTransition from "./page-transition";

interface LayoutProps {
    children: React.ReactNode;
    withNavigation?: boolean;
}

export default function Layout(props: React.PropsWithChildren<LayoutProps>) {
    return (
        <>
            {props.withNavigation && (
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
            )}
            <PageTransition>{props.children}</PageTransition>
            <PageFooter />
        </>
    );
}
