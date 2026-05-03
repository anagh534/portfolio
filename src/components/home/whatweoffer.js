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
        id: 2,
        title: "E-commerce Solutions",
        icon: <ShoppingCart size={24} />,
        shortDesc: "Complete online store development with secure payment integration, inventory management, and SEO optimization. Shopify, WooCommerce, and custom solutions available.",
        technologies: ["Shopify", "WooCommerce", "Stripe", "Next.js"],
        href: "/ecommerce-development/",
        cta: "View ecommerce service",
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
        href: "/web-development/",
        cta: "View web design service",
    },
    {
        id: 5,
        title: "WordPress Development",
        icon: <RefreshCw size={24} />,
        shortDesc: "Custom WordPress website development and theme customization. Easy content management with plugin integration and WooCommerce e-commerce setup.",
        technologies: ["WordPress", "WooCommerce", "Custom Themes"],
        href: "/wordpress-development/",
        cta: "View WordPress service",
    },
    {
        id: 6,
        title: "Design to Code Conversion",
        icon: <CodeXml size={24} />,
        shortDesc: "Converting your Figma, PSD, or XD designs into clean, production-ready HTML, CSS, and React code with perfect attention to detail.",
        technologies: ["HTML5", "CSS3", "JavaScript", "React"],
        href: "/react-development/",
        cta: "View frontend service",
    },
    {
        id: 7,
        title: "Academic & Startup MVP",
        icon: <GraduationCap size={24} />,
        shortDesc: "Helping students with academic projects and startups with MVP development. Fast turnaround, mentoring included, and affordable pricing.",
        technologies: ["Fast MVP", "Documentation", "Mentoring"],
        href: "/mobile-app-development/",
        cta: "View MVP service",
    },
    {
        id: 8,
        title: "SEO & Performance",
        icon: <Rocket size={24} />,
        shortDesc: "Website optimization for better search rankings and faster load times. Technical SEO, performance audits, and Google Analytics integration.",
        technologies: ["SEO", "Performance", "Analytics"],
        href: "/services/",
        cta: "View SEO service",
    },
    {
        id: 9,
        title: "Instagram & Shopify Stores",
        icon: <MessageCircleMore size={24} />,
        shortDesc: "Launch social-commerce ready stores with Instagram catalog setup, Shopify storefronts, and WhatsApp-first lead conversion.",
        technologies: ["Instagram Shop", "Shopify", "Social Commerce"],
        href: "/instagram-store-development/",
        cta: "View Instagram store service",
    },
    {
        id: 10,
        title: "Dropshipping & Trend Stores",
        icon: <ShoppingCart size={24} />,
        shortDesc: "Build dropshipping websites and trend-product stores with high-converting pages, offer flows, and scalable order operations.",
        technologies: ["Dropshipping", "Checkout", "Automation"],
        href: "/dropshipping-website-development/",
        cta: "View dropshipping service",
    },
    {
        id: 11,
        title: " Ecommerce Websites",
        icon: <Globe size={24} />,
        shortDesc: "Specialized ecommerce websites for clothing, shoe stores, and electronics with product-focused UX and faster mobile shopping.",
        technologies: ["Clothing", "Shoes", "Electronics"],
        href: "/electronics-ecommerce-website-development/",
        cta: "View ecommerce s",
    },
    {
        id: 12,
        title: "Dating & Chat App Development",
        icon: <Smartphone size={24} />,
        shortDesc: "Develop secure dating and realtime chat apps with moderation features, scalable messaging architecture, and growth-ready roadmaps.",
        technologies: ["Flutter", "Node.js", "Realtime Chat"],
        href: "/chat-app-development/",
        cta: "View chat app service",
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
                        Professional Web &amp; Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Development Services</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        Comprehensive digital solutions for businesses across Kerala. From custom web development and Flutter mobile apps
                        to e-commerce platforms and WordPress websites - delivered with quality, efficiency, and measurable results.
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
                                href={service.href || "/contact/"}
                                className="inline-flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group/link hover:text-blue-400 transition-colors"
                            >
                                <span>{service.cta || "Discuss Project"}</span>
                                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
