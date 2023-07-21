import Link from "next/link";
import Image from "next/image";
import PageTransition from "../page-transition";

interface ContactItemProps {
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
                <Link className="contact-item--container" href={props.url}>
                    <div className="contact-item--icon">
                        <Image src={props.iconPath} alt={props.name} height={25} width={25} />
                    </div>
                    <div className="contact-item--content">
                        <span className="contact-item--content-handle">{props.handle}</span>
                        <span className="contact-item--content-name">{props.name}</span>
                    </div>
                </Link>
            </PageTransition>
        </div>
    );
}
