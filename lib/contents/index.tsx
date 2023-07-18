import Link from "next/link";
import PageContainer from "../components/page-container";
import PageNavigation from "../components/page-navigation";

export default function IndexContents() {
    return (
        <>
            <PageNavigation
                title="yehezkieldio (elizielx)"
                links={[
                    {
                        title: "Home",
                        href: "/",
                    },
                ]}
            />
            <PageContainer>
                <div className="page-index">
                    <div className="pattern-dots"></div>
                    <div className="introduction">
                        <p className="pretitle">Hi-ya! I am</p>
                        <h1 className="title">Yehezkiel Dio,</h1>
                        <p className="subtitle">
                            a <strong>full-stack developer</strong> based in Balikpapan, Indonesia.
                        </p>
                        <div className="call-to-action">
                            <Link href="/" className="button button--solid">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </>
    );
}
