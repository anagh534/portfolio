import { motion } from 'framer-motion';
import {
    Globe,
    ShoppingCart,
    Smartphone,
    Palette,
    RefreshCw,
    CodeXml,
    GraduationCap,
    MessageCircleMore,
    Rocket,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

const springTransition = { duration: 0.38, ease: [0.16, 1, 0.3, 1] };

const services = [
    {
        id: 1,
        title: "Full-Stack Web Development",
        icon: <Globe size={24} />,
        shortDesc: "Professional MERN stack development services for businesses across Kerala. Building scalable, secure web applications with React, Next.js, Node.js, and MongoDB.",
        technologies: ["React", "Next.js", "Node.js", "MongoDB"],
        href: "/mern-stack-development/",
        cta: "View MERN service",
    },
    {
        id: 3,
        title: "Mobile App Developer Kerala",
        icon: <Smartphone size={24} />,
        shortDesc: "Looking for an app developer in Kerala? Cross-platform iOS and Android app development using Flutter. Available for direct meetings in Kochi and Calicut.",
        technologies: ["Flutter", "Dart", "Firebase", "App Store"],
        href: "/flutter-app-development/",
        cta: "Hire Flutter developer Kerala",
    },
    {
        id: 4,
        title: "Website Developer Kerala",
        icon: <Palette size={24} />,
        shortDesc: "Get a free website consultation. I build affordable, responsive, and SEO-optimized business websites for clients across Kerala.",
        technologies: ["React", "Next.js", "SEO", "Responsive"],
        href: "/web-design/",
        cta: "Hire website developer Kerala",
    },
    {
        id: 2,
        title: "E-Commerce Development",
        icon: <ShoppingCart size={24} />,
        shortDesc: "Launch your online store with secure payment gateways like Razorpay and Stripe. Full-featured eCommerce solutions tailored for Kerala businesses.",
        technologies: ["Next.js", "Shopify", "Stripe", "Razorpay"],
        href: "/ecommerce-development/",
        cta: "Start your online store",
    },
    {
        id: 5,
        title: "Next.js Development",
        icon: <CodeXml size={24} />,
        shortDesc: "Server-side rendered and static websites with incredible speed and top-tier SEO performance for maximum Google visibility.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
        href: "/nextjs-development/",
        cta: "Explore Next.js service",
    },
    {
        id: 14,
        title: "Custom Software Development",
        icon: <RefreshCw size={24} />,
        shortDesc: "Tailor-made software solutions including billing software and restaurant applications to streamline your business operations and automate processes.",
        technologies: ["MERN", "NestJS", "PostgreSQL"],
        href: "/services/",
        cta: "View Custom Software",
    }
];

export default function WhatWeOffer() {
    return (
        <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden" id="services">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header - glides in from TOP */}
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: -24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.08 }}
                    transition={springTransition}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Services</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        Comprehensive digital solutions for businesses across Kerala. From custom web development and Flutter mobile apps
                        to web applications - delivered with quality, efficiency, and measurable results.
                    </p>
                </motion.div>

                {/* Services Grid with snappy wave entrance */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.08 }}
                            transition={{ ...springTransition, delay: index * 0.04 }}
                            className="p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group relative flex flex-col h-full hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/10">
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
                                href={service.href || "/contact/"}
                                className="inline-flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group/link hover:text-blue-400 transition-colors"
                            >
                                <span>{service.cta || "Discuss Project"}</span>
                                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
