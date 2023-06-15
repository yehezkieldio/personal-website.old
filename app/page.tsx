"use client";

import { MotionValue, motion, motionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function LoadingBar({ onComplete }: { onComplete: () => void }) {
    return (
        <motion.div
            style={{ height: "5px", backgroundColor: "#ccc" }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
            onAnimationComplete={onComplete}
        />
    );
}

interface MyComponentProps {
    scrollY: MotionValue<number>;
    documentHeight: number;
}

export function MyComponent({ scrollY, documentHeight }: MyComponentProps) {
    const y = useTransform(scrollY, [0, 1000], [0, documentHeight], {
        clamp: false,
    });

    return (
        <motion.div
            className="relative w-screen"
            style={{ y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <div className="relative pr-3">
                <div className="relative inset-2 opacity-100">
                    <motion.div
                        animate={{
                            color: ["#80b3ff", "#99ccff", "#b380ff", "#cc99ff", "#ff99ff", "#b380ff", "#99ccff"],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <p className="text-9xl font-medium mt-8 mb-8">elizielx</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Home() {
    const scrollY = motionValue(0);
    const documentHeight = motionValue(0);
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoadingComplete(true);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        documentHeight.set(document.documentElement.scrollHeight);
    }, [documentHeight]);

    useEffect(() => {
        const handleScroll = () => {
            scrollY.set(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    return (
        <div>
            {isLoadingComplete && (
                <div className="min-h-screen">
                    <MyComponent scrollY={scrollY} documentHeight={documentHeight.get()} />
                    <div className="p-2">
                        <div className="h-screen">
                            <div className="bg-[#111] bg-opacity-80 backdrop-blur-xl py-6 sm:py-12  rounded-xl h-full">
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <div className="mx-auto max-w-2xl lg:mx-0">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi obcaecati
                                            voluptatum necessitatibus enim deleniti ad at, ullam accusantium voluptates.
                                            Suscipit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!isLoadingComplete && <LoadingBar onComplete={() => setIsLoadingComplete(true)} />}
        </div>
    );
}
