"use client";

import PageTransition from "#/lib/components/page-transition";
import ProjectItem, { ProjectItemProps } from "#/lib/components/projects/project-item";

export default function Projects() {
    const projects: ProjectItemProps[] = [
        {
            delay: 0.5,
            title: "Administrare",
            description:
                "Administrare is a web application that aims to facilitate the management of internal data such as financial reports, office inventory, and and records archives of an organization.",
            url: "administrare",
            tags: ["Next.js", "Nest.js", "FastAPI"],
            isHighlight: true,
        },
    ];
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
            <div className="page-projects--list">
                {projects.map((project, index) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </main>
    );
}
