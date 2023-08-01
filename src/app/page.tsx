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
                            Hi, my name is <span className="highlight">Yehezkiel Dio</span>, but you can call me{" "}
                            <span className="highlight">Eliziel</span> or <span className="highlight">Liz</span>.
                            I&apos;m a student at <span className="highlight">Universitas Mulia</span> majoring in{" "}
                            <span className="highlight">Informatics</span> and a self-taught full-stack developer from
                            Indonesia.
                        </p>
                        <p>
                            I have been programming for 5 years now, and I have an interest in{" "}
                            <span className="highlight">web development</span> and{" "}
                            <span className="highlight">software architecture</span>. I&apos;ve mostly worked with{" "}
                            <span className="highlight">TypeScript</span> in the past, but I&apos;m also familiar with{" "}
                            <span className="highlight">PHP</span> and also currently learning{" "}
                            <span className="highlight">Go</span>.
                        </p>
                    </article>
                    <div>
                        <Link href="/about">
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
                        </Link>
                    </div>
                    <div>
                        <Link href="/projects">Projects</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
