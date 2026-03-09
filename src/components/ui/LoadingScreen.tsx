"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Printer } from "lucide-react";

export default function LoadingScreen() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                        className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-yellow-lg mb-6"
                    >
                        <Printer className="w-10 h-10 text-black" />
                    </motion.div>

                    {/* Brand name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-center mb-8"
                    >
                        <h1 className="font-display text-5xl text-white tracking-widest">RAGHU ADS</h1>
                        <p className="text-primary text-sm tracking-widest uppercase mt-1 font-medium">
                            Digital Ads & Flex Printing
                        </p>
                    </motion.div>

                    {/* Loading bar */}
                    <motion.div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
