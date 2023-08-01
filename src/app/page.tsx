"use client";

import Link from "next/link";

export default function Main() {
    return (
        <main className="page-main">
            <div className="page-container">
                <div className="main-content">
                    <article className="page-content">
                        <h1 className="content-title">I&apos;M YEHEZKIEL DIO</h1>
                        <p className="content-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates inventore nulla illum
                            deleniti sit placeat consequuntur rerum vero tenetur minus soluta ipsum ut nisi assumenda
                            corrupti est laborum, ratione natus numquam molestiae optio et!
                        </p>
                    </article>
                    <div className="page-more-about-me">
                        <Link className="call-to-action" href="/about">
                            <p>
                                More About Me
                                <svg
                                    width="114"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                                </svg>
                            </p>
                        </Link>
                    </div>
                    <div className="page-socials"></div>
                </div>
            </div>
        </main>
    );
}
