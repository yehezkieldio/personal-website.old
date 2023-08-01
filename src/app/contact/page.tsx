"use client";

import ContactItem, { ContactItemProps } from "#/src/components/contact-item";
import PageTransition from "#/src/components/page-transition";

export default function Contact() {
    const contacts: ContactItemProps[] = [
        {
            delay: 0.5,
            handle: "yehezkieldio@proton.me",
            name: "Email",
            url: "mailto:yehezkieldio@proton.me",
            iconPath: "/svgs/mail.svg",
        },
        {
            delay: 0.6,
            handle: "@yhezkiel.dio",
            name: "Instagram",
            url: "https://www.instagram.com/yhezkiel.dio",
            iconPath: "/svgs/instagram.svg",
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
            <div className="page-container">
                <PageTransition delay={0.5}>
                    <header>
                        <h1>Contact</h1>
                        <p>Get in touch with me through my social media or email me anytime.</p>
                    </header>
                </PageTransition>
                <div className="seperator"></div>
                <article>
                    {contacts.map((contact) => (
                        <ContactItem key={contact.name} {...contact} />
                    ))}
                </article>
            </div>
        </main>
    );
}
