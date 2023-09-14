"use client";

import { usePathname } from "next/navigation";

const NavItem = ({ href, label }: { href: string; label: string }) => {
    let pathname = usePathname();

    const isActive = href === pathname;

    return (
        <>
            {isActive ? (
                <span className="nav-link">{label}</span>
            ) : (
                <a href={href} className="nav-link">
                    {label}
                </a>
            )}
        </>
    );
};

const links = [
    { href: "/", label: "About" },
    { href: "/stack", label: "Tech Stack" },
    // { href: "/portfolio", label: "Portfolio" },
];

export const NavLine = () => {
    return (
        <div className="nav-container">
            <div className="nav-line">
                {links.map((link) => (
                    <NavItem key={link.label} href={link.href} label={link.label} />
                ))}
            </div>
        </div>
    );
};
