"use client";

import PageTransition from "#/lib/components/page-transition";
import Link from "next/link";

export default function Projects() {
    return (
        <main className="page-projects">
            <PageTransition key="page-projects--header" delay={0.5}>
                <header className="page-projects--header">
                    <h1 className="page-projects--header-title">Projects</h1>
                    <p className="page-projects--header-subtitle">
                        A collection of projects I&apos;ve worked on, some of which are from work and others are
                        personal or open source.
                    </p>
                </header>
            </PageTransition>
            <div className="page-projects--seperator"></div>
            <div className="page-projects-list">
                <span className="wip">This section is still under construction. Please check back later.</span>
            </div>
        </main>
    );
}
