import { Metadata } from "next";
import { NavLine } from "#/src/components/nav-line";
import { TechStack } from "#/src/components/tech-stack";

export const metadata: Metadata = {
    title: "Yehezkiel Dio (elizielx): Technology Stack",
    description: "My technology stack, including languages, frameworks, and tools.",
};

export default function Stack() {
    return (
        <article className="container">
            <h1>Tech Stack</h1>
            <NavLine />
            <TechStack />
        </article>
    );
}
