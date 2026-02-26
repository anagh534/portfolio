'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Server,
    Smartphone,
    Cloud,
    Palette,
    Monitor,
    CheckCircle2
} from 'lucide-react';
const skillCategories = [
    {
        title: 'Frontend Development',
        icon: <Code2 size={24} />,
        description: 'Building immersive, high-performance web interfaces.',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Three.js']
    },
    {
        title: 'Backend Development',
        icon: <Server size={24} />,
        description: 'Architecting scalable server-side systems and APIs.',
        skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
        title: 'Mobile App Development',
        icon: <Smartphone size={24} />,
        description: 'Native-feel cross-platform apps with Flutter.',
        skills: ['Flutter', 'Dart', 'BLoC', 'Provider', 'Rest API']
    },
    {
        title: 'Cloud & Infrastructure',
        icon: <Cloud size={24} />,
        description: 'Deploying and optimizing cloud environments.',
        skills: ['AWS', 'Docker', 'Vercel', 'Netlify', 'CI/CD']
    },
    {
        title: 'WordPress Development',
        icon: <Palette size={24} />,
        description: 'Custom WordPress websites, themes, and plugin integrations.',
        skills: ['WordPress', 'WooCommerce', 'Custom Themes', 'Plugins', 'Elementor']
    },
    {
        title: 'Custom Solutions',
        icon: <Monitor size={24} />,
        description: 'Tailored software for unique business needs.',
        skills: ['LMS', 'E-commerce', 'CRM', 'CMS', 'Dashboards']
    }
];

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="relative py-24 overflow-hidden" id="skills">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
                        <CheckCircle2 size={14} />
                        <span>Excellence</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Expertise</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        Leveraging modern tools and frameworks to build exceptional digital products across web and mobile platforms.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
                            variants={itemVariants}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -z-10 group-hover:bg-blue-500/10 transition-colors"></div>

                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                {category.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{category.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6">{category.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIndex) => (
                                    <span
                                        key={sIndex}
                                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-gray-300 group-hover:bg-white/10 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}