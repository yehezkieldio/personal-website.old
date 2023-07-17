import PageContainer from "../components/PageContainer";
import PageNavigation from "../components/PageNavigation";

interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout(props: React.PropsWithChildren<PageLayoutProps>) {
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
                        title: "contact",
                        href: "/contact",
                    },
                ]}
            />
            <PageContainer>{props.children}</PageContainer>
        </>
    );
}
