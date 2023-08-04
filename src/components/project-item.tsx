import Link from "next/link";
import Image from "next/image";
import PageTransition from "./page-transition";

export interface ProjectItemProps {
    name: string;
    summary: string;
    description?: string;
    technologies?: string[];
    filters?: string[];
    urls: {
        image?: string;
        github?: string;
        website?: string;
    };
}

export default function ProjectItem(props: React.PropsWithChildren<ProjectItemProps>) {
    return (
        <div className="project-item">
            <PageTransition>
                <div className={props.urls.image ? "" : "item-container"}>
                    <Image src={props.urls.image as string} alt={props.name} width={350} height={200} />
                    <div className="overlay">
                        <div className="item-content">
                            <span>{props.name}</span>
                            <p>{props.summary}</p>
                        </div>
                    </div>
                </div>
            </PageTransition>
        </div>
    );
}
