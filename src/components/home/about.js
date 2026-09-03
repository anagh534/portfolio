import { motion } from 'framer-motion';
import { ArrowRight, Layers, Zap, ShieldCheck, Users, Code2, CheckCircle2, MapPin } from 'lucide-react';

export default function About() {
    const transition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] };

    return (
        <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={transition}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Left Column: Profile Card Showcase */}
                    <motion.div
                        className="lg:col-span-5 relative flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={transition}
                    >
                        <div className="relative group w-full max-w-[400px]">
                            {/* Ambient Glow */}
                            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-600/15 blur-3xl rounded-full -z-10" />
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600/15 blur-3xl rounded-full -z-10" />

                            {/* Image Container Card */}
                            <div className="relative rounded-[36px] p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                                <div className="relative overflow-hidden rounded-[30px] aspect-[4/5] bg-slate-950">
                                    <img
                                        src="/assets/about-500.webp"
                                        alt="Anagh K R - Freelance Web & Software Developer in Kerala"
                                        srcSet="/assets/about-320.webp 320w, /assets/about-500.webp 500w, /assets/about-640.webp 640w, /assets/about.webp 924w"
                                        width={500}
                                        height={625}
                                        sizes="(max-width: 640px) calc(100vw - 3rem), 400px"
                                        loading="lazy"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    {/* Overlay Card Details */}
                                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-base leading-tight">Anagh K R</h3>
                                                <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                                                    <MapPin size={12} className="text-blue-400" />
                                                    <span>Kerala, India &bull; Remote Worldwide</span>
                                                </p>
                                            </div>
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Available for hire" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Top-Right Stat Badge */}
                            <div className="absolute -top-3 -right-3 sm:-right-4 px-4 py-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 shadow-xl flex items-center gap-2">
                                <div className="w-7 h-7 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Code2 size={16} />
                                </div>
                                <div>
                                    <div className="text-white font-black text-xs">3+ Years</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Experience</div>
                                </div>
                            </div>

                            {/* Floating Bottom-Left Stat Badge */}
                            <div className="absolute -bottom-3 -left-3 sm:-left-4 px-4 py-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 shadow-xl flex items-center gap-2">
                                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div>
                                    <div className="text-white font-black text-xs">24+ Projects</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Delivered</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Story & Quality Pillars */}
                    <motion.div
                        className="lg:col-span-7 space-y-6"
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={transition}
                    >
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3">
                                Engineering scalable digital products for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">startups &amp; growing businesses</span>.
                            </h3>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-3">
                                I'm a senior full-stack developer and software consultant based in Kerala. Over the last 3+ years, I have partnered directly with founders, local startups in Kochi and Calicut, and international businesses across the UAE and Canada to build reliable, high-converting digital products.
                            </p>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                From brand web experiences and eCommerce platforms to custom SaaS software, mobile applications, and cloud APIs—I take full ownership from initial concept through production deployment and post-launch maintenance.
                            </p>
                        </div>

                        {/* 4 Delivery & Engineering Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-start gap-3.5 group hover:border-blue-500/30 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Layers size={18} />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">Full-Lifecycle Delivery</div>
                                    <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">Complete execution across frontend, backend, database, and cloud setup.</div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-start gap-3.5 group hover:border-indigo-500/30 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <Zap size={18} />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">High Performance &amp; SEO</div>
                                    <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">Sub-second load times, 95+ Core Web Vitals, and search visibility.</div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-start gap-3.5 group hover:border-cyan-500/30 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                                    <ShieldCheck size={18} />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">Clean &amp; Maintainable Code</div>
                                    <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">Modular architecture designed for rapid iteration and long-term scaling.</div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-start gap-3.5 group hover:border-emerald-500/30 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                    <Users size={18} />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">Direct Collaboration</div>
                                    <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">Work directly with the senior engineer building your product. Zero agency fluff.</div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3.5 pt-2">
                            <a
                                href="/services/"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-lg shadow-blue-500/25 group"
                            >
                                <span>Explore All Services</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/about/"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 active:scale-95 group"
                            >
                                <span>Read Full Journey</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
