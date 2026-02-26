export const metadata = {
    title: "Web Development Services Across Kerala | Flutter Developer in Major Cities - Anagh K R",
    description: "Professional web development, WordPress development, and Flutter app development services across Kerala. Serving Kochi, Thiruvananthapuram, Kozhikode, Thrissur, Ernakulam, Calicut, Kannur, Kasaragod, Kollam, Palakkad, and Kanhangad with custom website development, mobile app development, and digital solutions.",
    keywords: "Web development services Kerala, Flutter developer Kerala, Mobile app development Kerala, Custom website development Kerala, Kochi web developer, Thiruvananthapuram app development, Kozhikode website design, Thrissur web development, Ernakulam mobile app developer, Calicut Flutter developer, Kannur web services, Kasaragod app development, Kollam website development, Palakkad web design, Kanhangad digital solutions, Kerala web development company, Professional web developer Kerala, Best Flutter developer Kerala, MERN stack developer Kerala, Responsive web design Kerala, E-commerce development Kerala, WordPress development Kerala, React developer Kerala, Node.js developer Kerala",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations",
    ogTitle: "Web Development Services Across Kerala | Flutter Developer in Major Cities",
    ogDescription: "Professional web development, WordPress development, and Flutter app development services across Kerala. Serving all major cities with custom website development, mobile app development, and digital solutions.",
    ogUrl: "https://www.anaghkr.in/locations",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Web Development Services Across Kerala | Flutter Developer",
    twitterDescription: "Professional web development, WordPress development, and mobile app development services across all major cities in Kerala."
};

import { MapPin, CheckCircle, Rocket, ArrowRight, Laptop, Smartphone, ShoppingCart, Code, Globe, Search, Users, Layout, Clock, Award, Send } from 'lucide-react';

export default function Locations() {
    const cities = [
        {
            name: "Kochi",
            district: "Ernakulam",
            description: "Professional web development and Flutter app development services in Kochi. Offering custom website development, e-commerce solutions, and mobile app development for businesses in the commercial capital of Kerala.",
            services: ["Custom Website Development", "E-commerce Solutions", "Flutter App Development"],
            highlights: ["Commercial Hub", "Tech Startups", "Business Solutions"]
        },
        {
            name: "Thiruvananthapuram",
            district: "Thiruvananthapuram",
            description: "Expert web development and mobile app development services in Thiruvananthapuram. Specialized in government projects, educational platforms, and enterprise solutions for the capital city.",
            services: ["Government Web Solutions", "Educational Platforms", "Enterprise Development"],
            highlights: ["Capital City", "Government Projects", "IT Hub"]
        },
        {
            name: "Kozhikode",
            district: "Kozhikode",
            description: "Professional web development and Flutter app development services in Kozhikode. Providing modern website solutions, mobile applications, and digital transformation services.",
            services: ["Modern Website Development", "Mobile App Solutions", "Digital Transformation"],
            highlights: ["Cultural Center", "Business Hub", "Export Industry"]
        },
        {
            name: "Thrissur",
            district: "Thrissur",
            description: "Custom web development and mobile app development services in Thrissur. Specializing in cultural websites, event management platforms, and business solutions.",
            services: ["Cultural Web Platforms", "Event Management Systems", "Business Websites"],
            highlights: ["Cultural Capital", "Event Management", "Heritage Sites"]
        },
        {
            name: "Ernakulam",
            district: "Ernakulam",
            description: "Expert web development and Flutter app development services in Ernakulam district. Offering comprehensive digital solutions including responsive websites and e-commerce platforms.",
            services: ["Responsive Web Design", "Mobile App Development", "E-commerce Solutions"],
            highlights: ["Urban Center", "Business District", "Tech Companies"]
        },
        {
            name: "Calicut",
            district: "Kozhikode",
            description: "Professional web development and mobile app development services in Calicut. Providing innovative digital solutions and custom applications for businesses.",
            services: ["Innovative Web Solutions", "Custom Applications", "Trading Platforms"],
            highlights: ["Historic Trading City", "Business Networks", "Digital Commerce"]
        },
        {
            name: "Kannur",
            district: "Kannur",
            description: "Expert web development and Flutter app development services in Kannur. Specializing in industry-specific websites and tourism platforms.",
            services: ["Industry-Specific Websites", "Tourism Platforms", "Local Business Solutions"],
            highlights: ["Handloom Industry", "Cultural Heritage", "Tourism Destination"]
        },
        {
            name: "Kasaragod",
            district: "Kasaragod",
            description: "Local web development and Flutter app development services in Kasaragod. Offering personalized digital solutions for businesses in Kerala's northernmost district.",
            services: ["Personalized Web Solutions", "Custom Mobile Apps", "E-commerce Development"],
            highlights: ["Local Expertise", "Personalized Service", "Multilingual Solutions"]
        },
        {
            name: "Kollam",
            district: "Kollam",
            description: "Professional web development and mobile app development services in Kollam. Providing port-related solutions and industrial websites.",
            services: ["Port-Related Solutions", "Industrial Websites", "Business Platforms"],
            highlights: ["Commercial Port", "Industrial Center", "Maritime Solutions"]
        },
        {
            name: "Palakkad",
            district: "Palakkad",
            description: "Expert web development and Flutter app development services in Palakkad. Specializing in agricultural websites and educational platforms.",
            services: ["Agricultural Platforms", "Educational Websites", "Business Solutions"],
            highlights: ["Gateway of Kerala", "Agricultural Hub", "Educational Center"]
        },
        {
            name: "Kanhangad",
            district: "Kasaragod",
            description: "Local web development and mobile app development services in Kanhangad. Offering custom digital solutions for local businesses and startups.",
            services: ["Local Digital Solutions", "Responsive Websites", "Mobile Applications"],
            highlights: ["Local Business Focus", "Startup Solutions", "Custom Development"]
        }
    ];

    const services = [
        { icon: <Laptop size={24} />, title: "Custom Website Development", desc: "Responsive, modern websites tailored to your business needs across Kerala" },
        { icon: <Layout size={24} />, title: "WordPress Development", desc: "Custom WordPress websites, landing pages, and business sites for every city in Kerala" },
        { icon: <Smartphone size={24} />, title: "Flutter App Development", desc: "Cross-platform mobile applications for iOS and Android platforms" },
        { icon: <ShoppingCart size={24} />, title: "E-commerce Solutions", desc: "Complete online store development with payment integration" },
        { icon: <Code size={24} />, title: "MERN Stack Development", desc: "Full-stack web applications using MongoDB, Express, React, and Node.js" },
        { icon: <Search size={24} />, title: "SEO Optimization", desc: "Search engine optimization to improve your online visibility" }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <MapPin size={14} />
                        <span>Kerala-Wide Services</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 uppercase tracking-tight">
                        Web Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Across Kerala</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                        Professional web development and Flutter app development services
                        available across all major cities. WordPress development is also available in every location.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-600">
                        {[
                            { num: '11+', label: 'Cities Served' },
                            { num: '24+', label: 'Projects Done' },
                            { num: '100%', label: 'Satisfaction' },
                            { num: '24/7', label: 'Tech Support' }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-blue-500/30 transition-all">
                                <div className="text-3xl font-black mb-1 group-hover:text-blue-400 transition-colors uppercaseTracking-tight">{stat.num}</div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorations */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10 animate-pulse delay-700"></div>
            </section>

            {/* Services Overview */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Services</span>
                        </h2>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                            Comprehensive digital solutions across all Kerala cities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                            Cities We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Serve</span>
                        </h2>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                            Major hubs and districts where we deliver premium digital excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {cities.map((city, index) => (
                            <div key={index} className="flex flex-col p-8 rounded-[48px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden">
                                <div className="flex items-start justify-between mb-8 relative z-10">
                                    <div>
                                        <h3 className="text-2xl font-black mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{city.name}</h3>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{city.district} District</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                        <MapPin size={18} />
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{city.description}</p>

                                <div className="space-y-6 mb-8 relative z-10">
                                    <div className="flex flex-wrap gap-2">
                                        {city.highlights.map((h, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-gray-500 uppercase tracking-widest group-hover:border-blue-500/20 transition-all">
                                                {h}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="space-y-2">
                                        {city.services.map((s, i) => (
                                            <li key={i} className="flex items-center gap-3 text-xs text-gray-400 group/item">
                                                <CheckCircle size={14} className="text-blue-500/40 group-hover/item:text-blue-500 transition-colors" />
                                                {s}
                                            </li>
                                        ))}
                                        <li className="flex items-center gap-3 text-xs text-gray-400 group/item">
                                            <CheckCircle size={14} className="text-blue-500/40 group-hover/item:text-blue-500 transition-colors" />
                                            WordPress Development
                                        </li>
                                    </ul>
                                </div>

                                <a href={`/locations/${city.name.toLowerCase()}`} className="mt-auto px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all active:scale-95 text-xs uppercase tracking-widest relative z-10">
                                    Explore {city.name} <ArrowRight size={14} />
                                </a>

                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full group-hover:bg-blue-600/10 transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Local Section */}
            <section className="py-24 bg-white/[0.02] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                                    Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Local Expertise</span>?
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Working with a Kerala-based developer means deep empathy for local
                                    business needs and mastery of regional market nuances.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: <Globe size={20} />, title: "Market Insight", desc: "Native understanding of Kerala business landscape" },
                                    { icon: <Users size={20} />, title: "Personal Focus", desc: "Direct collaboration with zero communication gap" },
                                    { icon: <Clock size={20} />, title: "Quick Reach", desc: "Rapid response and local timezone alignment" },
                                    { icon: <Award size={20} />, title: "Top Quality", desc: "Global standards at competitive regional rates" }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-bold text-white uppercase tracking-tight text-sm">{item.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="p-10 md:p-16 rounded-[60px] bg-gradient-to-br from-blue-600/20 to-indigo-600/5 border border-white/10 backdrop-blur-3xl space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 blur-[80px] rounded-full -z-10"></div>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: 'Happy Clients', num: '50+', icon: <Users size={16} /> },
                                        { label: 'Live Projects', num: '100+', icon: <Rocket size={16} /> },
                                        { label: 'Years Exp', num: '5+', icon: <Clock size={16} /> },
                                        { label: 'Success Rate', num: '100%', icon: <Award size={16} /> }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center space-y-2 group hover:border-blue-500/30 transition-all">
                                            <div className="text-blue-400">{stat.icon}</div>
                                            <div className="text-2xl font-black text-white">{stat.num}</div>
                                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 backdrop-blur-3xl text-center space-y-10 relative group">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>

                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
                        Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Project?</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Get in touch for professional web development and mobile app
                        development services anywhere in Kerala.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <a href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5">
                            <Send size={18} />
                            <span className="uppercase tracking-widest text-sm">Start Your Project</span>
                        </a>
                        <a href="/services" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                            <Rocket size={18} />
                            <span className="uppercase tracking-widest text-sm">View All Services</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
