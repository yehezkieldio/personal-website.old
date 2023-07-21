"use client";

import PageTransition from "#/lib/components/page-transition";
import ContactItem from "#/lib/components/contact/contact-item";
import Link from "next/link";

interface Contacts {
    delay: number;
    handle: string;
    name: string;
    url: string;
    iconPath: string;
}

export default function Contact() {
    const contacts: Contacts[] = [
        {
            delay: 0.5,
            handle: "@yhezkiel.dio",
            name: "Instagram",
            url: "https://www.instagram.com/yhezkiel.dio",
            iconPath: "/svgs/instagram.svg",
        },
        {
            delay: 0.6,
            handle: "yehezkieldio@proton.me",
            name: "Email",
            url: "mailto:yehezkieldio@proton.me",
            iconPath: "/svgs/mail.svg",
        },
        {
            delay: 0.7,
            handle: "elizielx",
            name: "GitHub",
            url: "https://github.com/elizielx",
            iconPath: "/svgs/github.svg",
        },
        {
            delay: 0.8,
            handle: "elizielx",
            name: "Discord",
            url: "https://discord.com/users/327849142774923266",
            iconPath: "/svgs/discord-mark-white.svg",
        },
    ];
    return (
        <main className="page-contact">
            <PageTransition key="page-contact--header" delay={0.5}>
                <header className="page-contact--header">
                    <h1 className="page-contact--header-title">Contact</h1>
                    <p className="page-contact--header-subtitle">
                        Get in touch with me through my social media or email me anytime.
                    </p>
                    <p className="page-contact--header-notice">
                        The information provided here is for <span className="highlight">business inquiries only</span>.
                        If you want to contact me for other reasons, feel free to chat with me on my social media.
                    </p>
                </header>
            </PageTransition>
            <div className="page-contact--seperator"></div>
            <div className="page-contact--list">
                {contacts.map((contact) => (
                    <ContactItem key={contact.name} {...contact} />
                ))}
            </div>
        </main>
    );
}
