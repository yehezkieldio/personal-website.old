import Image from "next/image";

const sluggify = (text: string) => text.toLowerCase().replace(/[ /]/g, "-");

export const Technologies = ({ tag, technologies }: { tag: string; technologies: string[] }) => {
    const isDarkLogo = (technology: string) =>
        ["next.js", "express", "fastify", "apachekafka", "goland"].includes(technology.toLowerCase());

    return (
        <div className="tech-stack" id={sluggify(tag)}>
            <h2>{tag}</h2>
            <div className="technologies">
                {technologies.map((technology: string) => (
                    <div className="technology" key={technology}>
                        <Image
                            alt={technology}
                            src={`https://cdn.simpleicons.org/${technology}/${isDarkLogo(technology) ? "fff" : ""}`}
                            width={20}
                            height={20}
                        />
                        <span>{technology.toLowerCase()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const TechStack = () => {
    return (
        <div className="stack-container">
            <Technologies
                tag="languages"
                technologies={["html5", "css3", "sass", "javascript", "typescript", "go", "php"]}
            />
            <Technologies
                tag="nodejs"
                technologies={["node.js", "react", "next.js", "vite", "nestjs", "express", "fastify", "electron"]}
            />
            <Technologies
                tag="databases"
                technologies={["prisma", "mysql", "mariadb", "postgresql", "mongodb", "sqlite"]}
            />
            <Technologies tag="others" technologies={["laravel", "flutter"]} />
            <Technologies tag="message brokers/queues" technologies={["redis", "apachekafka", "rabbitmq"]} />
            <Technologies tag="css frameworks" technologies={["bootstrap", "bulma", "tailwindcss", "chakraui"]} />
            <Technologies tag="operating systems/containers" technologies={["windows", "archlinux", "docker"]} />
            <Technologies tag="devops/build systems" technologies={["nx", "githubactions", "circleci"]} />
            <Technologies tag="code editors" technologies={["visualstudiocode", "goland"]} />
        </div>
    );
};
