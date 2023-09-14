import { Metadata } from "next";
import dynamic from 'next/dynamic'
import { NavLine } from "#/src/components/nav-line";

const TechStack = dynamic(() => import("../../components/tech-stack"), { ssr: false })

export const metadata: Metadata = {
    title: "Yehezkiel Dio (elizielx): Technology Stack",
    description: "My technology stack, including languages, frameworks, and tools.",
};

const techData = [
    {
        tag: "languages",
        technologies: ["html5", "css3", "sass", "javascript", "typescript", "go", "php"],
    },
    {
        tag: "nodejs",
        technologies: ["node.js", "react", "next.js", "vite", "nestjs", "express", "fastify", "electron"],
    },
    {
        tag: "databases",
        technologies: ["prisma", "mysql", "mariadb", "postgresql", "mongodb", "sqlite"],
    },
    {
        tag: "others",
        technologies: ["laravel", "flutter"],
    },
    {
        tag: "message brokers/queues",
        technologies: ["redis", "apachekafka", "rabbitmq"],
    },
    {
        tag: "css frameworks",
        technologies: ["bootstrap", "bulma", "tailwindcss", "chakraui"],
    },
    {
        tag: "operating systems/containers",
        technologies: ["windows", "archlinux", "docker"],
    },
    {
        tag: "devops/build systems",
        technologies: ["nx", "githubactions", "circleci"],
    },
    {
        tag: "code editors",
        technologies: ["visualstudiocode", "goland"],
    },
];

export default function Stack() {
    return (
        <article className="container">
            <h1>Tech Stack</h1>
            <NavLine />
            <TechStack techData={techData} />
        </article>
    );
}
