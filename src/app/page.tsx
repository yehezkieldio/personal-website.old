"use client";

import Link from "next/link";

export default function Main() {
    return (
        <main className="page-main">
            <div className="page-container">
                <div className="page-main-content">
                    <article>
                        <h1>I&apos;M YEHEZKIEL DIO</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente culpa pariatur,
                            nam rem nostrum, distinctio, omnis placeat eligendi dignissimos labore magnam saepe
                            exercitationem voluptate est aperiam sit!
                        </p>
                    </article>
                    <div>
                        <Link href="/about">
                            More About Me{" "}
                            <svg
                                width="114"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
