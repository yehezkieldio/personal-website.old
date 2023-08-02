import Link from "next/link";
import Image from "next/image";
import PageTransition from "./page-transition";

export interface ContactItemProps {
    delay: number;
    handle: string;
    name: string;
    url: string;
    iconPath: string;
}

export default function ContactItem(props: React.PropsWithChildren<ContactItemProps>) {
    return (
        <div className="contact-item">
            <PageTransition delay={props.delay}>
                <Link className="item-container" href={props.url} target="_blank" rel="noreferrer nofollow">
                    <div className="icon">
                        <Image src={props.iconPath} alt={props.name} height={25} width={25} />
                    </div>
                    <div className="item-content">
                        <span>{props.handle}</span>
                        <span>{props.name}</span>
                    </div>
                </Link>
            </PageTransition>
        </div>
    );
}
