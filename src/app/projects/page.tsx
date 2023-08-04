"use client";

import ProjectItem, { ProjectItemProps } from "#/src/components/project-item";
import PageTransition from "#/src/components/page-transition";
import { useState } from "react";
import Filter from "#/src/components/filter";
import FilterButton from "#/src/components/filter-button";

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");
    const buttons = [{ text: "All", category: "all" }];
    const categories = ["all", "open-source", "closed-source"];
    const filteredButtons =
        activeFilter === "all" ? buttons : buttons.filter((button) => button.category === activeFilter);

    const projects: ProjectItemProps[] = [
        {
            name: "Administrare",
            summary: "A website application with the aim of managing an organization's office inventory.",
            description: "N/A",
            technologies: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "MongoDB"],
            url: {
                image: "https://irswanda.com/img/project/inventory-management.png",
                github: "https://github.com/astrantialabs/administrare",
            },
            filters: ["open-source"],
        },
        {
            name: "Placeholder Closed Source",
            summary: "Placeholder 2",
            description: "N/A",
            technologies: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "MongoDB"],
            url: {
                image: "https://irswanda.com/img/project/inventory-management.png",
            },
            filters: ["closed-source"],
        },
        {
            name: "Placeholder Open Source",
            summary: "Placeholder 2",
            description: "N/A",
            technologies: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "MongoDB"],
            url: {
                image: "https://irswanda.com/img/project/inventory-management.png",
            },
            filters: ["open-source"],
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
                    {void console.log(activeFilter)}
                    <div className="project-items">
                        {projects
                            .filter((project) => activeFilter === "all" || project.filters?.includes(activeFilter))
                            .map((project) => (
                                <ProjectItem key={project.name} {...project} />
                            ))}
                    </div>
                </article>
            </div>
        </main>
    );
}
