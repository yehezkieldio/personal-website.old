"use client";

import Link from "next/link";

export default function Main() {
    return (
        <main className="page-main">
            <h1 className="page-main--title">elizielx</h1>
            <p className="page-main--subtitle">
                Hi, my name is <span className="highlight">Yehezkiel Dio</span>, but you can call me{" "}
                <span className="highlight">Eliziel</span> or <span className="highlight">Liz</span>. I&apos;m a
                full-stack dev from Indonesia.
            </p>
            <div className="page-main--actions">
                <Link className="page-main--actions-item" href="/projects">
                    Projects
                </Link>
                <Link className="page-main--actions-item" href="https://github.com/elizielx">
                    GitHub
                </Link>
                <Link className="page-main--actions-item" href="https://github.com/elizielx">
                    Resume
                </Link>
                <Link className="page-main--actions-item" href="/contact">
                    Contact
                </Link>
            </div>
        </main>
    );
}
