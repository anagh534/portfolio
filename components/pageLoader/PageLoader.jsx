'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ isLoading = true, loadingText = "Initializing Systems" }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!isLoading) {
            setProgress(100);
            return;
        }

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) return prev;
                return prev + Math.random() * 10;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
                >
                    {/* Background Gradient Animation */}
                    <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-blue-900/40 via-transparent to-purple-900/40 animate-pulse" />

                    {/* Content Overlay */}
                    <div className="relative z-10 flex flex-col items-center text-center px-6">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <span className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                                ANAGH<span className="text-blue-500">.KR</span>
                            </span>
                        </motion.div>

                        <div className="space-y-4 w-64 md:w-80">
                            <div className="flex justify-between items-end mb-1">
                                <span className="text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">
                                    {loadingText}
                                </span>
                                <span className="text-[10px] font-black text-gray-500">
                                    {Math.round(progress)}%
                                </span>
                            </div>

                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                    className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ type: "spring", damping: 20 }}
                                />
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                            >
                                Digital Experience Designer
                            </motion.p>
                        </div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10" />
                    <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
