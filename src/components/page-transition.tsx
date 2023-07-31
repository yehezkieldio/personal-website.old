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
    delay?: number;
    key?: string;
}

export default function PageTransition(props: React.PropsWithChildren<PageTransitionProps>) {
    return (
        <AnimatePresence>
            <motion.div
                className="page-transition"
                key={props.key || "page-transition"}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                    type: "spring",
                    stiffness: 80,
                    duration: 0.5,
                    delay: props.delay || 0,
                }}
            >
                {props.children}
            </motion.div>
        </AnimatePresence>
    );
}
