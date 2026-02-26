'use client';

import React from 'react';
import Link from 'next/link';
import {
    Github,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    ArrowUp,
    Heart,
    ExternalLink
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Logo & Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-black tracking-tighter text-white">
                                ANAGH<span className="text-blue-500">.KR</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Crafting high-performance digital experiences with a focus on innovation,
                            quality, and user-centric design.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/anagh534" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/anagh-k-r/" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://instagram.com/mr._uni_que___" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Works', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link href={link === 'Home' ? '/' : `/#${link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-all"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Pages */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'Web Development', href: '/web-development' },
                                { label: 'MERN Stack', href: '/mern-stack-development' },
                                { label: 'Flutter Apps', href: '/flutter-app-development' },
                                { label: 'WordPress', href: '/wordpress-development' },
                                { label: 'E-commerce', href: '/ecommerce-development' },
                                { label: 'Next.js Dev', href: '/nextjs-development' },
                                { label: 'React Dev', href: '/react-development' },
                                { label: 'Node.js Dev', href: '/nodejs-development' },
                                { label: 'Mobile Apps', href: '/mobile-app-development' },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-all"></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:anaghkrkkl@gmail.com" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-3">
                                    <Mail size={18} className="text-blue-500 shrink-0" />
                                    <span>anaghkrkkl@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+917034151740" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-3">
                                    <Phone size={18} className="text-blue-500 shrink-0" />
                                    <span>+91 8075541805</span>
                                </a>
                            </li>
                            <li className="text-sm text-gray-400 flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 shrink-0" />
                                <span>Kerala, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
                        <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider leading-relaxed">
                            Available for new projects and collaborations worldwide.
                        </p>
                        <Link href="/contact" className="w-full py-4 rounded-2xl bg-white text-black font-black text-sm flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5">
                            <span>GET IN TOUCH</span>
                            <ExternalLink size={16} />
                        </Link>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-400 font-medium">
                        © {new Date().getFullYear()} ANAGH K R. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-xs text-gray-400 flex items-center gap-2">
                        MADE WITH <Heart size={12} className="text-red-500 fill-current" /> BY ANAGH
                    </p>
                </div>
            </div>

            {/* Back to Top */}
            <button
                className="fixed bottom-8 right-8 p-4 rounded-2xl bg-blue-600 text-white shadow-2xl shadow-blue-500/20 hover:bg-blue-500 hover:-translate-y-1 transition-all z-40 active:scale-95"
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                <ArrowUp size={20} />
            </button>

            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
        </footer>
    );
};

export default Footer;
