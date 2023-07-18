import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface PageNavigationProps {
    title: string;
    links: LinkItem[];
}

interface LinkItem {
    title: string;
    href: string;
}

export default function PageNavigation(props: React.PropsWithoutRef<PageNavigationProps>) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavigationMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="page-navigation-header">
            <nav className="page-navigation" role="navigation">
                <div className="page-navigation--start">
                    <Link href="/" className="page-navigation--start-item">
                        {props.title}
                    </Link>
                </div>
                <div className="page-navigation--end">
                    {props.links.map((link) => (
                        <Link href={link.href} key={link.href} className="page-navigation--end-item">
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className="page-navigation--hamburger" onClick={toggleNavigationMenu}>
                    <div className="page-navigation--hamburger-line"></div>
                    <div className="page-navigation--hamburger-line"></div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="page-navigation--overlay"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{
                                type: "tween",
                            }}
                        >
                            <div className="page-navigation--overlay-exit" onClick={toggleNavigationMenu}>
                                &#10005;
                            </div>
                            <div className="page-navigation--overlay-items">
                                {props.links.map((link) => (
                                    <Link
                                        href={link.href}
                                        key={link.href}
                                        className="page-navigation--overlay-items-item"
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
