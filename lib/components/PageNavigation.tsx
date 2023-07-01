import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageNavigationProps {
    title: string;
}

export default function PageNavigation(props: React.PropsWithChildren<PageNavigationProps>) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__title">Your Title</div>
            <div className="navbar__items">
                <div className="navbar__item">Item 1</div>
                <div className="navbar__item">Item 2</div>
                <div className="navbar__item">Item 3</div>
            </div>
            <div className="navbar__hamburger" onClick={toggleMenu}>
                <div className="navbar__hamburger-line"></div>
                <div className="navbar__hamburger-line"></div>
                <div className="navbar__hamburger-line"></div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="navbar__overlay"
                        initial={{ opacity: 0, y: -100 }} // Initial position above the screen
                        animate={{ opacity: 1, y: 0 }} // Final position at the top of the screen
                        exit={{ opacity: 0, y: -100 }} // Exit position above the screen
                        transition={{
                            type: "tween",
                        }}
                    >
                        <div className="navbar__overlay-exit" onClick={toggleMenu}>
                            &#10005;
                        </div>
                        <div className="navbar__overlay-items">
                            <div className="navbar__overlay-item">Item 1</div>
                            <div className="navbar__overlay-item">Item 2</div>
                            <div className="navbar__overlay-item">Item 3</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
