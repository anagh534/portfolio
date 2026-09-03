import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import projects from '../../../public/data/works.json';

const springTransition = { duration: 0.38, ease: [0.16, 1, 0.3, 1] };

export default function Works() {
    // Only 4 items in a single row on laptop view
    const featuredProjects = projects.slice(0, 4);

    return (
        <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden" id="works">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header with integrated 'View All Works' button - glides in from TOP */}
                <motion.div
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-16"
                    initial={{ opacity: 0, y: -24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.08 }}
                    transition={springTransition}
                >
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Works</span>
                        </h2>
                        <p className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed">
                            A showcase of my recent projects, spanning web development, mobile apps, and custom digital solutions.
                        </p>
                    </div>

                    <a
                        href="/portfolio/"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-lg group shrink-0 self-start sm:self-auto"
                    >
                        <span>View All Portfolio</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Projects Grid: exactly 4 items in 1 single row on laptop/desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.08 }}
                            transition={{ ...springTransition, delay: index * 0.04 }}
                            className="group relative rounded-[28px] sm:rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5"
                        >
                            {/* Project Preview Image with Floating Tags */}
                            <div className="relative aspect-[16/11] overflow-hidden bg-slate-900/60">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    srcSet={project.srcSet}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    loading="lazy"
                                    decoding="async"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                {/* Top-Right Direct Link Button */}
                                {project.url && project.url !== '#' && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 hover:bg-blue-600 hover:border-blue-500 shadow-xl"
                                        aria-label={`View live site for ${project.title}`}
                                    >
                                        <ArrowUpRight size={16} />
                                    </a>
                                )}

                                {/* Category & Year Pills */}
                                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <span className="text-[10px] font-bold text-gray-400 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                                        {project.year}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies Tag Pills */}
                                <div className="pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5">
                                    {project.technologies.slice(0, 3).map((tech, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-medium text-gray-400 group-hover:text-gray-300 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}