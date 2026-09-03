export const metadata = {
    title: "Portfolio & Selected Projects | Anagh K R | Developer Kerala",
    description: "Explore the portfolio of Anagh K R, freelance Flutter & MERN stack developer in Kerala. Featuring real estate platforms, college portals, and mobile apps.",
    keywords: "Anagh K R portfolio, freelance web developer projects Kerala, Flutter app developer portfolio, MERN stack projects Kochi, web development works Kerala",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/portfolio/",
    },
    openGraph: {
        title: "Portfolio & Works | Anagh K R - Web & Flutter Developer Kerala",
        description: "Explore real-world projects delivered by Anagh K R, featuring full-stack websites, mobile apps, and custom business solutions.",
        url: "https://www.anaghkr.in/portfolio/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio | Anagh K R - Freelance Web & Flutter Developer",
        description: "Explore real-world projects delivered by Anagh K R, featuring full-stack websites, mobile apps, and custom business solutions.",
    },
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, MessageSquare, ArrowRight, Layers, Sparkles } from 'lucide-react';
import projects from '../../../../public/data/works.json';

const categories = [
    "All",
    "Web Development",
    "Educational Platform",
    "Event Platform",
    "custom web apps",
    "Utility App"
];

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className="min-h-screen bg-black overflow-hidden relative pt-28 sm:pt-32 pb-24">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/15 blur-[140px] rounded-full -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/10 blur-[140px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Portfolio</span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                        A curated showcase of real-world web applications, Flutter mobile apps, and custom digital platforms built for businesses across Kerala, Canada, UAE, and beyond.
                    </p>
                </motion.div>

                {/* Category Filter Pills */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    {categories.map((category) => {
                        const isSelected = selectedCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 active:scale-95 ${
                                    isSelected
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500"
                                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35 }}
                                className="group rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden transition-all duration-500 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5"
                            >
                                {/* Thumbnail Frame */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900/60">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        srcSet={project.srcSet}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        loading="lazy"
                                        decoding="async"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                    {/* Top-Right Link */}
                                    {project.url && project.url !== '#' && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:border-blue-500 shadow-xl"
                                            aria-label={`View live website for ${project.title}`}
                                        >
                                            <ArrowUpRight size={18} />
                                        </a>
                                    )}

                                    {/* Category Pill */}
                                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between pointer-events-none">
                                        <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <span className="text-[10px] font-bold text-gray-400 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                                            {project.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Tags & Link */}
                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.slice(0, 3).map((tech, tIndex) => (
                                                <span
                                                    key={tIndex}
                                                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-semibold text-gray-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {project.url && project.url !== '#' && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
                                            >
                                                <span>Live</span>
                                                <ArrowUpRight size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA Box */}
                <motion.div
                    className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-xl text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                        Have a Project in Mind?
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                        Whether you need a custom website, a scalable MERN application, or a cross-platform Flutter mobile app — let's build something exceptional together.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://wa.me/918281571805"
                            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-xl shadow-blue-500/25"
                        >
                            <span>Discuss Your Project</span>
                            <MessageSquare size={18} />
                        </a>
                        <a
                            href="/contact/"
                            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 active:scale-95"
                        >
                            <span>Contact Me</span>
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
