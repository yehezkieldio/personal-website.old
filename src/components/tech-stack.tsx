import Image from "next/image";

const sluggify = (text: string) => text.toLowerCase().replace(/[ /]/g, "-");

export const Technologies = ({ tag, technologies }: { tag: string; technologies: string[] }) => {
    const isDarkLogo = (technology: string) =>
        ["next.js", "express", "fastify", "apachekafka", "goland"].includes(technology.toLowerCase());

    const technologyNameMapping: { [key: string]: string } = {
        apachekafka: "apache kafka",
        visualstudiocode: "visual studio code",
        githubactions: "gitHub actions",
    };

    const formatTechnologyName = (technology: string) => {
        const lowercaseTech = technology.toLowerCase();
        return technologyNameMapping[lowercaseTech] || lowercaseTech;
    };

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
                        <span>{formatTechnologyName(technology)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const TechStack = ({
    techData,
}: {
    techData: {
        tag: string;
        technologies: string[];
    }[];
}) => {
    return (
        <div className="stack-container">
            {techData.map((techItem, index) => (
                <Technologies key={index} tag={techItem.tag} technologies={techItem.technologies} />
            ))}
        </div>
    );
};
