'use client';
import React from 'react';
import {
    MapPin,
    CheckCircle,
    ArrowRight,
    ExternalLink,
    Star,
    Home,
    Languages,
    Users,
    Laptop,
    Smartphone,
    ShoppingCart,
    Store,
    Megaphone,
    Globe,
    Heart,
    Handshake,
    Clock,
    IndianRupee,
    Stethoscope,
    GraduationCap,
    Utensils,
    ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumb from '../Breadcrumb';

const iconMap = {
    'fas fa-home': <Home />,
    'fas fa-language': <Languages />,
    'fas fa-user-friends': <Users />,
    'fas fa-map-pin': <MapPin />,
    'fas fa-laptop-code': <Laptop />,
    'fab fa-flutter': <Smartphone />,
    'fas fa-shopping-cart': <ShoppingCart />,
    'fas fa-store': <Store />,
    'fas fa-bullhorn': <Megaphone />,
    'fas fa-globe': <Globe />,
    'fas fa-heart': <Heart />,
    'fas fa-handshake': <Handshake />,
    'fas fa-clock': <Clock />,
    'fas fa-rupee-sign': <IndianRupee />,
    'fas fa-clinic-medical': <Stethoscope />,
    'fas fa-graduation-cap': <GraduationCap />,
    'fas fa-utensils': <Utensils />,
    'fas fa-map-marker-alt': <MapPin />,
    'fab fa-wordpress': <Globe />,
};

export default function LocationTemplate({
    cityName,
    cityHighlights,
    services,
    benefits,
    portfolio,
    description
}) {
    const hasWordPressService = services.some((service) =>
        service.title?.toLowerCase().includes('wordpress')
    );

    const displayServices = hasWordPressService
        ? services
        : [
            ...services,
            {
                icon: 'fab fa-wordpress',
                title: 'WordPress Development',
                description: `Custom WordPress websites and landing pages for businesses in ${cityName}`,
                features: ['Custom Themes', 'Plugin Integration', 'Easy Content Updates', 'SEO Friendly Setup']
            }
        ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden" aria-labelledby="hero-heading">
                <div className="max-w-7xl mx-auto relative z-10">
                    <Breadcrumb items={[
                        { label: 'Home', url: '/' },
                        { label: 'Locations', url: '/locations' },
                        { label: cityName }
                    ]} />

                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
                        >
                            <MapPin size={14} />
                            <span>{cityName}, Kerala</span>
                        </motion.div>

                        <motion.h1
                            id="hero-heading"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-8xl font-black mb-6 leading-tight uppercase tracking-tight"
                        >
                            Web Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{cityName}</span>
                            <br />
                            <span className="text-4xl md:text-6xl">Flutter App Development Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
                        >
                            {description}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="text-blue-400 text-sm md:text-base max-w-3xl mx-auto mb-16"
                        >
                            WordPress development services are also available in {cityName}.
                        </motion.p>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                        >
                            {cityHighlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                        {iconMap[highlight.icon] || <Star size={20} />}
                                    </div>
                                    <div className="text-lg font-bold mb-2 uppercase tracking-tight">{highlight.title}</div>
                                    <p className="text-gray-500 text-sm leading-relaxed">{highlight.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Background Decorations */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10 animate-pulse delay-700"></div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5 relative" aria-labelledby="services-heading">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 id="services-heading" className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Solutions</span>
                        </h2>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                            Tailored digital services for {cityName}'s growing businesses
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-[48px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-500/20">
                                    {iconMap[service.icon] || <Laptop size={24} />}
                                </div>
                                <div className="text-2xl font-bold mb-4 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{service.title}</div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full group-hover:bg-blue-600/10 transition-colors"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 overflow-hidden" aria-labelledby="benefits-heading">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <article className="flex-1 space-y-8">
                            <h2 id="benefits-heading" className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Local Expertise</span>?
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Empowering businesses in {cityName} with a deep understanding of the local market
                                and specialized digital capabilities that drive real growth.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="p-6 rounded-[32px] bg-white/5 border border-white/10 flex items-start gap-4 group hover:border-blue-500/20 transition-all">
                                        <div className="text-blue-400 group-hover:scale-110 transition-transform">{iconMap[benefit.icon] || <CheckCircle size={20} />}</div>
                                        <div>
                                            <div className="font-bold text-white text-sm mb-1 uppercase tracking-tight">{benefit.title}</div>
                                            <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-widest">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <aside className="flex-1 w-full lg:w-auto relative">
                            <div className="aspect-square rounded-[60px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 p-1 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/5 blur-3xl -z-10 group-hover:bg-blue-600/10 transition-colors duration-1000"></div>
                                <div className="text-center space-y-4">
                                    <div className="text-7xl font-black text-white uppercase tracking-tighter mb-2">100%</div>
                                    <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Commitment to {cityName}</div>
                                </div>
                                {/* Decorative circles */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/5 rounded-full"></div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Solution Concepts */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5" aria-labelledby="portfolio-heading">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 id="portfolio-heading" className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                            Sample <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Solution Concepts</span>
                        </h2>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                            Example implementation ideas for {cityName}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolio.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="group relative flex flex-col h-full p-1 rounded-[50px] bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/20 transition-all duration-700 overflow-hidden"
                            >
                                <div className="flex-1 p-10 bg-black rounded-[48px] m-0.5 space-y-8 flex flex-col relative overflow-hidden">
                                    <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl shadow-blue-500/5">
                                        {iconMap[project.icon] || <ExternalLink size={24} />}
                                    </div>

                                    <div className="space-y-3">
                                        <div className="text-2xl font-black uppercase tracking-tight group-hover:text-blue-400 transition-colors">Demo: {project.title}</div>
                                        <p className="text-gray-500 text-sm leading-relaxed">Demo concept: {project.description}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-gray-500 uppercase tracking-widest group-hover:border-blue-500/30 transition-all">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/5 blur-2xl rounded-full group-hover:bg-blue-600/10 transition-all duration-700"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5" aria-labelledby="faq-heading">
                <div className="max-w-4xl mx-auto px-6">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": `What web development services are available in ${cityName}?`,
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": `In ${cityName}, I offer comprehensive web development services including custom website development, Flutter mobile app development, MERN stack development, WordPress development, e-commerce solutions, and React-based web applications. All services are optimized for local businesses with SEO and mobile-first design.`
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": `How much does web development cost in ${cityName}?`,
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": `Web development costs in ${cityName} vary based on project scope. Basic websites start from ₹15,000, custom business websites from ₹30,000, e-commerce solutions from ₹50,000, and mobile apps from ₹60,000. Contact for a detailed quote tailored to your needs.`
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": `Why choose a local developer in ${cityName}?`,
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": `Choosing a local developer in ${cityName} ensures better understanding of the regional market, easier communication in your timezone, faster response times, face-to-face meetings when needed, and familiarity with local business practices and customer preferences.`
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": `What is the timeline for web development projects in ${cityName}?`,
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": `Project timelines vary by complexity: Landing pages take 5-7 days, business websites 2-3 weeks, e-commerce sites 4-6 weeks, and custom web applications 6-12 weeks. Flutter mobile apps typically take 8-12 weeks. Rush delivery available for urgent projects in ${cityName}.`
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": `Do you provide ongoing support and maintenance for ${cityName} clients?`,
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": `Yes, I provide comprehensive ongoing support including regular updates, security patches, performance optimization, content updates, technical support, and hosting management. Flexible monthly maintenance packages are available for ${cityName} businesses.`
                                        }
                                    }
                                ]
                            })
                        }}
                    />
                    <div className="text-center mb-16 space-y-4">
                        <h2 id="faq-heading" className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Questions</span>
                        </h2>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                            Common questions about web development in {cityName}
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: `What web development services are available in ${cityName}?`,
                                a: `In ${cityName}, I offer comprehensive web development services including custom website development, Flutter mobile app development, MERN stack development, WordPress development, e-commerce solutions, and React-based web applications. All services are optimized for local businesses with SEO and mobile-first design.`
                            },
                            {
                                q: `How much does web development cost in ${cityName}?`,
                                a: `Web development costs in ${cityName} vary based on project scope. Basic websites start from ₹15,000, custom business websites from ₹30,000, e-commerce solutions from ₹50,000, and mobile apps from ₹60,000. Contact for a detailed quote tailored to your needs.`
                            },
                            {
                                q: `Why choose a local developer in ${cityName}?`,
                                a: `Choosing a local developer in ${cityName} ensures better understanding of the regional market, easier communication in your timezone, faster response times, face-to-face meetings when needed, and familiarity with local business practices and customer preferences.`
                            },
                            {
                                q: `What is the timeline for web development projects in ${cityName}?`,
                                a: `Project timelines vary by complexity: Landing pages take 5-7 days, business websites 2-3 weeks, e-commerce sites 4-6 weeks, and custom web applications 6-12 weeks. Flutter mobile apps typically take 8-12 weeks. Rush delivery available for urgent projects in ${cityName}.`
                            },
                            {
                                q: `Do you provide ongoing support and maintenance for ${cityName} clients?`,
                                a: `Yes, I provide comprehensive ongoing support including regular updates, security patches, performance optimization, content updates, technical support, and hosting management. Flexible monthly maintenance packages are available for ${cityName} businesses.`
                            }
                        ].map((faq, index) => (
                            <details
                                key={index}
                                className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <span className="text-lg font-bold pr-4">{faq.q}</span>
                                    <ChevronRight className="text-blue-400 group-open:rotate-90 transition-transform" size={20} />
                                </summary>
                                <p className="mt-6 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[70px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 backdrop-blur-3xl text-center space-y-12 relative overflow-hidden group">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full -z-10 animate-pulse"></div>

                    <h2 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tight">
                        Ready to Lead in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{cityName}?</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Partner with a professional developer who understands {cityName}'s market
                        and delivers cutting-edge digital growth.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <a href="/contact" className="w-full sm:w-auto px-12 py-6 rounded-3xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-2xl shadow-white/5 group/btn">
                            <span className="uppercase tracking-widest text-sm">Get Started in {cityName}</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/services" className="w-full sm:w-auto px-12 py-6 rounded-3xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95 group/btn-sec">
                            <span className="uppercase tracking-widest text-sm">Our Expertise</span>
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-white/40" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
