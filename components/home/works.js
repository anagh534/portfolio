'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import projects from "./loadImage";

export default function Works() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative py-24 overflow-hidden" id="works">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
                        <Briefcase size={14} />
                        <span>Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Works</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        A showcase of my recent projects, spanning web development, mobile apps, and custom digital solutions.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative rounded-[32px] bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500"
                            variants={itemVariants}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading="lazy"
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-2xl bg-white text-black hover:bg-blue-600 hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-xl"
                                        aria-label={`View ${project.title}`}
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                        {project.year}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors uppercase">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {project.technologies.slice(0, 3).map((tech, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="text-[10px] font-bold text-gray-500 group-hover:text-gray-300 transition-colors"
                                        >
                                            #{tech.toUpperCase()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400 mb-6 font-medium">Want to see more?</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-black font-black hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95 shadow-xl shadow-white/5"
                    >
                        <span>DISCUSS YOUR PROJECT</span>
                        <Monitor size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}