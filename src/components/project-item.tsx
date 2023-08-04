import Link from "next/link";
import Image from "next/image";
import PageTransition from "./page-transition";

export interface ProjectItemProps {
    name: string;
    summary: string;
    description: string;
    technologies: string[];
    url: {
        image?: string;
        website?: string;
        github?: string;
    };
    filters?: string[];
}

export default function ProjectItem(props: React.PropsWithChildren<ProjectItemProps>) {
    return (
        <div className="project-item">
            <Image src={props.url.image as string} alt={props.name} width={400} height={200} />
            <div className="overlay">
                <div className="item-content">
                    <span>{props.name}</span>
                    <p>{props.summary}</p>
                </div>
            </div>
        </div>
    );
}
