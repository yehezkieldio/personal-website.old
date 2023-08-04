"use client";

import { useState } from "react";
import ProjectItem, { ProjectItemProps } from "#/src/components/project-item";
import PageTransition from "#/src/components/page-transition";
import Filter from "#/src/components/filter";

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const categories = ["All", "Open Source"];

    const projects: ProjectItemProps[] = [
        {
            name: "Administrare",
            summary: "Web application that aims to facilitate the management of an organization's office inventory.",
            description:
                "Administrare is a website-based application that aims to facilitate the management of internal data such as financial reports, office inventory, and records archives of an organization.",
            filters: [""],
            technologies: ["React", "TypeScript", "Next.js", "Nest.js", "Python", "FastAPI", "MongoDB"],
            urls: {
                image: "/projects/administrare.png",
            },
        },
        {
            name: "Finance Recap",
            summary: "Web application for the purpose of viewing an organization's Excel financial report on the web.",
            description:
                "Finance Recap is a website-based application that aims to extract data in an excel spreadsheet to be manipulated and displayed on the website.",
            filters: [""],
            technologies: ["PHP", "Laravel", "Python", "FastAPI", "MongoDB"],
            urls: {
                image: "/projects/finance-recap.png",
            },
        },
        {
            name: "Placeholder",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis cupiditate eum.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            filters: ["Open Source"],
            technologies: ["Next.js"],
            urls: {},
        },
    ];

    return (
        <main className="page-projects">
            <div className="page-container">
                <PageTransition delay={0.5}>
                    <header>
                        <h1>Projects</h1>
                        <p>Some of my personal projects, commissions, and work.</p>
                    </header>
                </PageTransition>
                <div className="seperator"></div>
                <article>
                    <Filter categories={categories} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                    <div className="project-items">
                        {projects
                            .filter((project) => activeFilter === "All" || project.filters?.includes(activeFilter))
                            .map((project) => (
                                <ProjectItem key={project.name} {...project} />
                            ))}
                    </div>
                </article>
            </div>
        </main>
    );
}
