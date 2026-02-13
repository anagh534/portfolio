'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Award,
    Users,
    Code2,
    Sparkles,
    Cpu,
    ShieldCheck,
    Smartphone,
    Zap
} from 'lucide-react';

const features = [
    {
        icon: <Sparkles className="icon-accent" />,
        title: "Premium Quality",
        desc: "Crafting pixel-perfect, high-end digital experiences that stand out."
    },
    {
        icon: <Zap className="icon-accent" />,
        title: "Fast Performance",
        desc: "Optimized code for blazing fast load times and smooth interactions."
    },
    {
        icon: <ShieldCheck className="icon-accent" />,
        title: "Secure & Scalable",
        desc: "Building robust architectures that grow with your business needs."
    },
    {
        icon: <Smartphone className="icon-accent" />,
        title: "Mobile First",
        desc: "Flawless performance across all devices and screen sizes."
    }
];

const stats = [
    { label: "Experience", value: "5+", icon: <Award size={20} /> },
    { label: "Projects", value: "24", icon: <Code2 size={20} /> },
    { label: "Clients", value: "18+", icon: <Users size={20} /> }
];

export default function WhyChooseMe() {
    return (
        <section className="relative py-24 overflow-hidden" id="why-me">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
                                <Cpu size={14} />
                                <span>Features</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white">
                                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Choose Me?</span>
                            </h2>
                        </div>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            Combining technical expertise with creative vision to deliver
                            exceptional digital solutions tailored to your unique requirements.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 rounded-[28px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-white font-bold mb-2 uppercase tracking-tight">{feature.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Visuals/Stats */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -z-10"></div>

                            <div className="text-center mb-10">
                                <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">5+</span>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Years of Excellence</p>
                            </div>

                            <div className="w-full h-px bg-white/5 mb-10"></div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center space-y-3">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 mx-auto border border-white/5">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-white">{stat.value}</div>
                                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating cards for desktop */}
                        <div className="hidden xl:block">
                            <motion.div
                                className="absolute -top-10 -right-10 p-6 rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-4 group"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-black text-black">JS</div>
                                <div>
                                    <div className="text-white font-bold text-sm">React Expert</div>
                                    <div className="w-24 h-1.5 bg-white/5 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full bg-blue-500" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-10 -left-10 p-6 rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-4 group"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center font-black text-black">FL</div>
                                <div>
                                    <div className="text-white font-bold text-sm">Flutter Pro</div>
                                    <div className="w-24 h-1.5 bg-white/5 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full bg-cyan-500" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
