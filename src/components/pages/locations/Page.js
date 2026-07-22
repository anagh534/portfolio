export const metadata = {
    title: "Web & Mobile App Development Services in Kerala | ANAGH K R",
    description: "Professional web and mobile app development services across Kerala. Serving Kochi, Trivandrum, Kozhikode, and all major cities with custom digital solutions.",
    keywords: "web development Kerala, website developer Kerala, mobile app development Kerala, React developer Kerala, web developer Kochi, web developer Kozhikode, web developer Trivandrum, web developer Thrissur",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/",
    },
    openGraph: {
        title: "Web & Mobile App Development Services in Kerala | ANAGH K R",
        description: "Professional web and mobile app development services across Kerala. Serving Kochi, Trivandrum, Kozhikode, and all major cities with custom digital solutions.",
        url: "https://www.anaghkr.in/locations/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web & Mobile App Development Services in Kerala | ANAGH K R",
        description: "Professional web and mobile app development services across Kerala. Serving Kochi, Trivandrum, Kozhikode, and all major cities with custom digital solutions.",
    },
};

import { MapPin, CheckCircle, ArrowRight, Laptop, Smartphone, ShoppingCart, Code, Search, Layout, Send } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function Locations() {
    const cities = [
        {
            name: "Kochi",
            district: "Ernakulam",
            description: "Premium website development, custom web apps stores, and high-performance Flutter mobile apps in Kochi. Powering IT startups and trade brands with sub-second speeds.",
            services: ["Business Websites", "custom web apps Development", "Mobile App Development"],
            highlights: ["Commercial Hub", "Startup Activity", "Digital Growth"]
        },
        {
            name: "Thiruvananthapuram",
            district: "Thiruvananthapuram",
            description: "Professional Next.js web systems and Flutter mobile apps optimized for Technopark startups, corporate entities, and Trivandrum's premium service brands.",
            services: ["Web Applications", "Web Apps", "Mobile Apps"],
            highlights: ["IT Ecosystem", "Service Sector", "Local SEO Demand"]
        },
        {
            name: "Kozhikode",
            district: "Kozhikode",
            description: "Custom web portals and Flutter mobile apps tailored for Kozhikode's trading houses, retail networks, Cyberpark startups, and food brands.",
            services: ["Website Development", "custom web apps Setup", "SEO Optimization"],
            highlights: ["Malabar Market", "Retail Growth", "Mobile-First Audience"]
        },
        {
            name: "Thrissur",
            district: "Thrissur",
            description: "Stunning custom website designs, fast custom web apps setups, and Flutter mobile apps for Thrissur's gold showrooms, textile leaders, and academies.",
            services: ["Custom Websites", "Mobile App Development", "Business Automation"],
            highlights: ["Retail Economy", "Service Sector", "Digital Expansion"]
        },
        {
            name: "Ernakulam",
            district: "Ernakulam",
            description: "Custom web development and local SEO campaigns for Ernakulam companies. Get top rankings, MERN stack dashboards, and clean, modular code.",
            services: ["Web Development", "MERN Stack Apps", "Technical SEO"],
            highlights: ["Urban Business Base", "High Competition", "SEO Opportunity"]
        },
        {
            name: "Calicut",
            district: "Kozhikode",
            description: "High-performance React/Next.js corporate sites and secure local custom web apps stores in Calicut. Engineered to rank first and convert visits into sales.",
            services: ["Business Websites", "custom web apps Stores", "Performance Optimization"],
            highlights: ["Local Commerce", "Online Selling", "Search Visibility"]
        },
        {
            name: "Kannur",
            district: "Kannur",
            description: "Custom website development, fast Web Appss, and regional lead generation campaigns for local handlooms, exports, and academies in Kannur.",
            services: ["Website Development", "App MVPs", "Web Apps"],
            highlights: ["Regional Businesses", "Growing Digital Demand", "Lead Generation"]
        },
        {
            name: "Kasaragod",
            district: "Kasaragod",
            description: "SEO-optimized websites and Flutter apps for Kasaragod brands. Leverage local search tactics to drive inquiries from Kasaragod to Kanhangad.",
            services: ["Responsive Websites", "custom web apps Setup", "SEO Foundations"],
            highlights: ["Local Brand Growth", "Affordable Digital Entry", "Regional SEO"]
        },
        {
            name: "Kollam",
            district: "Kollam",
            description: "Custom business websites and responsive Flutter applications for Kollam cashew exporters, clay product developers, and Ashtamudi lakeside resorts.",
            services: ["Business Websites", "Mobile Apps", "Workflow Tools"],
            highlights: ["Industry + Services", "Operational Efficiency", "Digital Presence"]
        },
        {
            name: "Palakkad",
            district: "Palakkad",
            description: "Fast-loading corporate portals and custom web apps checkouts for Palakkad agricultural processors, factories, and town retail hubs.",
            services: ["Website Development", "Web Apps", "Custom Software"],
            highlights: ["SME Growth", "Service Demand", "SEO Opportunity"]
        },
        {
            name: "Kanhangad",
            district: "Kasaragod",
            description: "Targeted digital websites and local SEO setups designed specifically for retail stores and commercial centers in Kanhangad.",
            services: ["Business Websites", "App MVPs", "SEO Setup"],
            highlights: ["Local Market", "Digital Adoption", "Lead-Focused Websites"]
        },
        {
            name: "Mangalore",
            district: "Dakshina Kannada",
            description: "Professional website development, mobile app development, and technical local SEO services in Mangalore. High-performance custom digital growth solutions.",
            services: ["Custom Websites", "Flutter Mobile Apps", "Local SEO Campaign"],
            highlights: ["Port City Hub", "Banking & Education", "Coastal Commerce"]
        },
        {
            name: "Coimbatore",
            district: "Coimbatore",
            description: "Professional website development, mobile app development, and technical local SEO services in Coimbatore. Scaling industrial and digital enterprises.",
            services: ["Industrial Portals", "Flutter Mobile Apps", "Web Apps"],
            highlights: ["Manchester of South", "Industrial Base", "IT SEZ Presence"]
        },
        {
            name: "Chennai",
            district: "Chennai",
            description: "Professional web application development, Flutter mobile app engineering, and technical local SEO in Chennai. Enterprise-grade custom digital solutions.",
            services: ["Full Stack SaaS", "Flutter App Engineering", "Web Apps"],
            highlights: ["Detroit of Asia", "Major IT Ecosystem", "SaaS Innovation"]
        }
    ];

    const services = [
        { icon: <Laptop size={24} />, title: "Custom Web Development", desc: "Business-focused websites with clean UI, responsive design, and conversion-oriented layout." },
        
        { icon: <Smartphone size={24} />, title: "Flutter App Development", desc: "Flutter app development for iOS and Android with practical business-ready features." },
        { icon: <ShoppingCart size={24} />, title: "custom web apps Development", desc: "Online stores with product management, checkout, and payment integration." },
        { icon: <Code size={24} />, title: "MERN Stack Applications", desc: "Custom web applications and dashboards built with modern full-stack technologies." },
        { icon: <Search size={24} />, title: "Technical SEO & Speed", desc: "Technical SEO setup including metadata, schema, internal links, and performance improvements." }
    ];

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Web Development Services Across Kerala",
                        "description": "City-focused website, and app development services across Kerala.",
                        "url": "https://www.anaghkr.in/locations/",
                        "provider": {
                            "@type": "Person",
                            "name": "ANAGH K R",
                            "jobTitle": "Web and App Developer",
                            "address": {
                                "@type": "PostalAddress",
                                "addressRegion": "Kerala",
                                "addressCountry": "IN"
                            }
                        }
                    })
                }}
            />

            <section className="relative pt-32 pb-20 px-6 overflow-hidden" aria-labelledby="main-heading">
                <div className="max-w-7xl mx-auto relative z-10">
                    <Breadcrumb items={[
                        { label: 'Home', url: '/' },
                        { label: 'Locations' }
                    ]} />

                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                            <MapPin size={14} />
                            <span>Kerala-Wide Services</span>
                        </div>
                        <h1 id="main-heading" className="text-5xl md:text-8xl font-black mb-6 leading-tight uppercase tracking-tight">
                            Web Development Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Across Kerala</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
                            Professional website development, custom web apps, and mobile app development for businesses across major Kerala cities.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                            {[
                                { num: '11+', label: 'City Pages' },
                                { num: 'Web', label: 'Development Focus' },
                                { num: 'App', label: 'Mobile Solutions' },
                                { num: 'SEO', label: 'Local Optimization' }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-blue-500/30 transition-all">
                                    <div className="text-3xl font-black mb-1 group-hover:text-blue-400 transition-colors">{stat.num}</div>
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10 animate-pulse delay-700"></div>
            </section>

            <section className="py-24 bg-white/[0.02] border-y border-white/5" aria-labelledby="services-heading">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 id="services-heading" className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Services</span>
                        </h2>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                            Practical digital solutions for local business growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <div className="text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</div>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24" aria-labelledby="cities-heading">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 id="cities-heading" className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                            Cities <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Served</span>
                        </h2>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                            City-specific pages optimized for local SEO intent
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {cities.map((city, index) => (
                            <div key={index} className="flex flex-col p-8 rounded-[48px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden">
                                <div className="flex items-start justify-between mb-8 relative z-10">
                                    <div>
                                        <div className="text-2xl font-black mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{city.name}</div>
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
                                    </ul>
                                </div>

                                <a
                                    href={`/locations/${city.name.toLowerCase().replace(/\s+/g, '-')}/`}
                                    className="inline-flex items-center justify-between gap-4 mt-auto text-sm font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors"
                                >
                                    <span>View {city.name} Page</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 backdrop-blur-3xl text-center space-y-8 relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full -z-10" />
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                        Need a City-Focused <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Website Strategy?</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Get a practical plan for your website or app with Kerala-focused SEO structure and conversion-first content.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a href="https://wa.me/918281571805" className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-2xl">
                            <Send size={18} />
                            <span className="uppercase tracking-widest text-sm">WhatsApp Now</span>
                        </a>
                        <a href="/contact/" className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                            <span className="uppercase tracking-widest text-sm">Get Free Quote</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
