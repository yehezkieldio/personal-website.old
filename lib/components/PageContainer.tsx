import PageTransition from "./PageTransition";

interface PageContainerProps {
    children: React.ReactNode;
}

export default function PageContainer(props: React.PropsWithChildren<PageContainerProps>) {
    return (
        <div className="page-container">
            <PageTransition>{props.children}</PageTransition>
        </div>
    );
}
