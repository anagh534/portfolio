'use client';

import React from 'react';
import Link from '@/compat/link';
import Image from '@/compat/image';
import { motion } from 'framer-motion';
import { ArrowRight, User, Terminal, Globe } from 'lucide-react';

export default function About() {
    const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

    return (
        <section className="relative py-24 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={transition}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
                        <User size={14} />
                        <span>Discover</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={transition}
                    >
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-[30px] border border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
                                <Image
                                    src="/assets/about-500.webp"
                                    alt="Anagh K R"
                                    srcSet="/assets/about-320.webp 320w, /assets/about-500.webp 500w, /assets/about-640.webp 640w, /assets/about.webp 924w"
                                    width={500}
                                    height={500}
                                    sizes="(max-width: 640px) calc(100vw - 3rem), 500px"
                                    loading="lazy"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="absolute -bottom-6 -right-6 md:-right-8 p-6 md:p-8 rounded-3xl bg-blue-600/90 backdrop-blur-md border border-white/20 shadow-2xl">
                                <div className="text-white text-center">
                                    <span className="block text-3xl md:text-4xl font-black mb-1">3+</span>
                                    <span className="block text-[10px] md:text-xs font-bold uppercase tracking-widest leading-none">Years of <br /> Experience</span>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full -z-10"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={transition}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                            Your trusted <span className="text-blue-400">Flutter & MERN Stack Developer Kerala</span> partner.
                        </h3>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            I'm Anagh K R, a professional <strong className="text-white">Flutter & MERN Stack Developer</strong> with <strong className="text-white">3+ years experience</strong> as a <strong className="text-white">freelance web developer</strong> and <strong className="text-white">mobile app developer</strong> serving businesses throughout Kerala.
                            I've successfully delivered 24+ projects ranging from
                            responsive websites and e-commerce platforms to custom Flutter mobile applications and complex MERN stack solutions.
                        </p>

                        <p className="text-base text-gray-400 leading-relaxed">
                            Whether you're a startup in Kochi needing an MVP, a business in Calicut requiring a modern website,
                            or an entrepreneur in Trivandrum looking for a mobile app, I bring technical expertise,
                            creative problem-solving, and a commitment to delivering digital solutions that drive real business results.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Terminal size={22} />
                                </div>
                                <h4 className="text-white font-bold mb-2">Full-Stack Web Development</h4>
                                <p className="text-xs text-gray-300 leading-relaxed uppercase tracking-wider">Expert in React, Next.js, Node.js, and MongoDB for scalable web applications.</p>
                            </div>

                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <Globe size={22} />
                                </div>
                                <h4 className="text-white font-bold mb-2">Cross-Platform Mobile Apps</h4>
                                <p className="text-xs text-gray-300 leading-relaxed uppercase tracking-wider">Building high-performance Flutter apps for iOS and Android platforms.</p>
                            </div>
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all active:scale-95 group"
                        >
                            <span>More about my journey</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
