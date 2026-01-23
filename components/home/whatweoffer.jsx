'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    ShoppingCart,
    Smartphone,
    Palette,
    RefreshCw,
    CodeXml,
    GraduationCap,
    Rocket,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
const services = [
    {
        id: 1,
        title: "Full-Stack Web Development",
        icon: <Globe size={24} />,
        shortDesc: "Custom MERN stack solutions for scalable, high-performance web applications.",
        technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    },
    {
        id: 2,
        title: "E-commerce Solutions",
        icon: <ShoppingCart size={24} />,
        shortDesc: "Comprehensive online stores with secure payments and inventory management.",
        technologies: ["Shopify", "WooCommerce", "Stripe", "Next.js"],
    },
    {
        id: 3,
        title: "Flutter App Development",
        icon: <Smartphone size={24} />,
        shortDesc: "Native performance cross-platform mobile apps for iOS and Android.",
        technologies: ["Flutter", "Dart", "Firebase", "App Store"],
    },
    {
        id: 4,
        title: "Responsive Web Design",
        icon: <Palette size={24} />,
        shortDesc: "Beautiful, user-centric designs that work flawlessly on every screen.",
        technologies: ["Figma", "Tailwind", "Framer Motion", "UI/UX"],
    },
    {
        id: 5,
        title: "Website Modernization",
        icon: <RefreshCw size={24} />,
        shortDesc: "Breathing new life into outdated platforms with modern tech and UI.",
        technologies: ["Refactoring", "Optimization", "Redesign"],
    },
    {
        id: 6,
        title: "Design to Code Conversion",
        icon: <CodeXml size={24} />,
        shortDesc: "Pixel-perfect conversion from Figma/PSD to clean, functional code.",
        technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    },
    {
        id: 7,
        title: "Academic & Startup MVP",
        icon: <GraduationCap size={24} />,
        shortDesc: "Tailored solutions for students and early-stage startup prototypes.",
        technologies: ["Fast MVP", "Documentation", "Mentoring"],
    },
    {
        id: 8,
        title: "Basic SEO",
        icon: <Rocket size={24} />,
        shortDesc: "Boosting visibility and conversion with data-driven optimization.",
        technologies: ["SEO", "Performance", "Analytics"],
    }
];

export default function WhatWeOffer() {
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
        <section className="relative py-24 overflow-hidden" id="services">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
                        <CheckCircle2 size={14} />
                        <span>Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Solutions</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        Providing end-to-end expertise to transform your ideas into successful digital products with cutting-edge tech.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group relative flex flex-col h-full"
                            variants={itemVariants}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-500/10">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors uppercase">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-grow">
                                {service.shortDesc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {service.technologies.map((tech, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-gray-500 uppercase tracking-widest"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group/link hover:text-blue-400 transition-colors"
                            >
                                <span>Discuss Project</span>
                                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
