"use client";

import PageLayout from "#/lib/layout/PageLayout";

export default function Home() {
    return (
        <PageLayout>
            <div className="page-main">
                <div className="introduction">
                    <p className="intro-text">Hi-ya! I am</p>
                    <h1 className="main-title">Yehezkiel Dio,</h1>
                    <p className="sub-title">
                        a <strong>full-stack developer</strong> based in Balikpapan, Indonesia.
                    </p>
                    <div className="call-to-action">
                        <a href="" className="button button--solid">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="inner-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima iusto odit mollitia, nihil
                    quaerat sunt corrupti fuga?
                </div>
            </div>
        </PageLayout>
    );
}
