import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
    hidden: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition(props: React.PropsWithChildren<PageTransitionProps>) {
    return (
        <AnimatePresence>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                    type: "spring",
                    stiffness: 80,
                }}
            >
                {props.children}
            </motion.div>
        </AnimatePresence>
    );
}
