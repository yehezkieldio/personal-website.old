"use client";

import PageLayout from "#/lib/layout/PageLayout";

export default function Home() {
    return (
        <PageLayout>
            <header className="hero">
                <div className="hero__content">
                    <h1 className="hero__title">Your Title</h1>
                    <h2 className="hero__subtitle">Your Subtitle</h2>
                </div>
            </header>
        </PageLayout>
    );
}
