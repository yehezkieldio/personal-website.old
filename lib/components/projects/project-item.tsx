import Link from "next/link";
import Image from "next/image";
import PageTransition from "../page-transition";

export interface ProjectItemProps {
    delay: number;
    title: string;
    description: string;
    url: string;
    tags: string[];
    isHighlight?: boolean;
}

export default function ProjectItem(props: React.PropsWithChildren<ProjectItemProps>) {
    return (
        <div className={`project-item ${props.isHighlight ? "highlight" : ""}`}>
            <PageTransition delay={props.delay}>
                <Link className="project-item--container" href={props.url} target="_blank" rel="noreferrer nofollow">
                    <div className="project-item--content">
                        <h2 className="project-item--content-title">{props.title}</h2>
                        <div className="project-item--content-tags">
                            {props.tags.map((tag, index) => (
                                <span key={index} className="project-item--content-tags-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="project-item--content-description">{props.description}</p>
                        {props.isHighlight && <span className="project-item--content-read-more">Read more</span>}
                    </div>
                </Link>
            </PageTransition>
        </div>
    );
}
