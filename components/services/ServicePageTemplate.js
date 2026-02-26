'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, CheckCircle, ChevronDown, ChevronUp, Send, MapPin, Star, Zap
} from 'lucide-react';

export default function ServicePageTemplate({
    badge,
    title,
    titleHighlight,
    description,
    heroStats,
    whatYouGet,
    technologies,
    process,
    faqs,
    relatedServices,
    schemaData
}) {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {schemaData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            )}

            {/* ── Hero ── */}
            <section className="relative pt-36 pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Zap size={14} />
                            <span>{badge}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase tracking-tight">
                            {title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                {titleHighlight}
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <a href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5">
                                <Send size={18} />
                                <span className="uppercase tracking-widest text-sm">Start Your Project</span>
                            </a>
                            <a href="/services" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                                <span className="uppercase tracking-widest text-sm">All Services</span>
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {heroStats && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16"
                        >
                            {heroStats.map((s, i) => (
                                <div key={i} className="p-6 rounded-[28px] bg-white/5 border border-white/10 text-center group hover:border-blue-500/30 transition-all">
                                    <div className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">{s.number}</div>
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10 animate-pulse delay-700" />
            </section>

            {/* ── What You Get ── */}
            {whatYouGet && (
                <section className="py-24 bg-white/[0.02] border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                                What You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Get</span>
                            </h2>
                            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">
                                Everything included in every project
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whatYouGet.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group space-y-4"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Technologies ── */}
            {technologies && (
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                                Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Used</span>
                            </h2>
                            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">
                                Industry-leading stack for maximum performance
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {technologies.map((group, i) => (
                                <div key={i} className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group space-y-4">
                                    <h3 className="text-white font-bold uppercase tracking-tight">{group.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((tech, j) => (
                                            <span key={j} className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Process ── */}
            {process && (
                <section className="py-24 bg-white/[0.02] border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                                How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Works</span>
                            </h2>
                            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">
                                A proven process from idea to launch
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {process.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group space-y-4 relative"
                                >
                                    <div className="absolute top-6 right-6 text-5xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors leading-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-black">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-white font-bold uppercase tracking-tight">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── FAQ ── */}
            {faqs && (
                <section className="py-24">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Questions</span>
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="rounded-[28px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                                >
                                    <button
                                        className="w-full flex items-center justify-between p-8 text-left gap-4"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        <span className="text-white font-bold leading-snug">{faq.question}</span>
                                        {openFaq === i
                                            ? <ChevronUp size={20} className="text-blue-400 shrink-0" />
                                            : <ChevronDown size={20} className="text-gray-500 shrink-0" />}
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Related Services ── */}
            {relatedServices && (
                <section className="py-24 bg-white/[0.02] border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl font-black uppercase tracking-tight">
                                Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Services</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedServices.map((s, i) => (
                                <a key={i} href={s.href} className="p-6 rounded-[28px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group flex items-center justify-between gap-4">
                                    <div>
                                        <div className="text-white font-bold uppercase tracking-tight text-sm group-hover:text-blue-400 transition-colors">{s.title}</div>
                                        <div className="text-gray-500 text-xs mt-1">{s.desc}</div>
                                    </div>
                                    <ArrowRight size={18} className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── CTA ── */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 backdrop-blur-3xl text-center space-y-8 relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full -z-10" />
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                        <MapPin size={14} /> <span>Kerala & Remote</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Get Started?</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Get a free consultation and custom quote for your project. Serving businesses across Kerala and remotely worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a href="/contact" className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-2xl">
                            <Send size={18} />
                            <span className="uppercase tracking-widest text-sm">Get Free Quote</span>
                        </a>
                        <a href="/locations" className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                            <span className="uppercase tracking-widest text-sm">View Locations</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
