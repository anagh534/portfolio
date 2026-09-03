import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Briefcase } from 'lucide-react';
import projects from '../../../public/data/works.json';

export default function Works() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden" id="works">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Works</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        A showcase of my recent projects, spanning web development, mobile apps, and custom digital solutions.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative rounded-[32px] bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500"
                            variants={itemVariants}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    srcSet={project.srcSet}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading="lazy"
                                    decoding="async"
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
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

                            <div className="p-6 sm:p-8">
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
            </div>
        </section>
    );
}