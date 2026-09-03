import ServiceComponent from "./ServiceComponent";
import { Rocket, Target, Users, Zap, ArrowRight, User as UserIcon, Send, Check, Monitor, Code, Smartphone, Globe } from 'lucide-react';

const detailPages = [
    { title: "Hire Kerala Developer Remotely (NRI & Gulf)", href: "/hire-kerala-developer-remotely/", desc: "Remote Flutter & MERN app developer for UAE, UK, US & Canada" },
    { title: "Best Website Development Company in Kerala", href: "/web-development/", desc: "Custom websites & web apps with SEO optimization" },
    { title: "Professional Web Design Services Kerala", href: "/web-design/", desc: "UI/UX design, responsive & mobile-first websites" },
    { title: "MERN Stack Development Services India", href: "/mern-stack-development/", desc: "MongoDB · Express · React · Node.js full-stack" },
    { title: "Next.js Development Company Kerala", href: "/nextjs-development/", desc: "SSR & SSG React apps for fast performance" },
    { title: "React.js Development Services Kochi", href: "/react-development/", desc: "SPAs, interactive UIs & design-to-code conversion" },
    { title: "Node.js Backend Development Kerala", href: "/nodejs-development/", desc: "Scalable REST APIs & real-time backends" },
    { title: "NestJS Enterprise Development India", href: "/nestjs-development/", desc: "Enterprise TypeScript backend solutions" },
    { title: "Laravel Development Company Kerala", href: "/laravel-development/", desc: "Robust PHP backend & admin panel systems" },
    { title: "Best Flutter App Development Company Kerala", href: "/flutter-app-development/", desc: "Cross-platform iOS & Android apps" },
    { title: "Mobile App Development Agency Kerala", href: "/mobile-app-development/", desc: "Full mobile app development & deployment" },
    { title: "Dating App Development Services India", href: "/dating-app-development/", desc: "Safety-first social & dating app builds" },
    { title: "Chat App Development Company Kerala", href: "/chat-app-development/", desc: "Realtime messaging & communication apps" },
    { title: "E-Commerce Website Development Kochi", href: "/ecommerce-development/", desc: "Online stores with payment gateway integration" },
    { title: "Custom Software Development Kerala", href: "/services/", desc: "Billing, restaurant & business management systems" },
];

export const metadata = {
    title: "Professional Web & Mobile Development Services | ANAGH K R",
    description: "Explore professional web development services in Kerala. Custom websites, MERN stack solutions, and native Flutter applications.",
    keywords: "web development services Kerala, website design services Kerala, freelance web developer Kerala, web designer Kerala, dating app development Kerala, chat app development Kerala, MERN stack developer Kerala, Flutter app development Kerala, mobile app development Kerala, React developer Kerala, Node.js developer Kerala, web developer Kochi, web developer Calicut, web development services near me, website designer near me, custom web apps developer near me, mobile app developer near me",
    alternates: { canonical: "https://www.anaghkr.in/services/" },
    openGraph: {
        title: "Professional Web & Mobile Development Services | ANAGH K R",
        description: "Explore professional web development services in Kerala. Custom websites, MERN stack solutions, and native Flutter applications.",
        url: "https://www.anaghkr.in/services/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Professional Web & Mobile Development Services | ANAGH K R",
        description: "Explore professional web development services in Kerala. Custom websites, MERN stack solutions, and native Flutter applications.",
    },
};

export default function Services() {
    const stats = [
        { number: '24', label: 'Projects Completed', icon: <Target size={20} /> },
        { number: '16+', label: 'Services Offered', icon: <Zap size={20} /> },
        { number: '100%', label: 'Client Satisfaction', icon: <Users size={20} /> }
    ];

    return (
        <div className="min-h-screen bg-black pt-32 pb-24 relative overflow-hidden">
            {/* Structured Data - Service Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify([
                    "Web Development",
                    "Mobile App Development",
                    "Custom Software Development",
                    "Static Website Development",
                    "Landing Page Development",
                    "Ecommerce Website Development",
                    "Shopping Website Development",
                    "College Project Development",
                    "Billing Software Development",
                    "Restaurant Application Development",
                    "MERN Stack Development",
                    "Next.js Development",
                    "React Development",
                    "Node.js Development",
                    "Laravel Development",
                    "Dating App Development",
                    "Chat App Development",

                    "API Development",
                    "Website Redesign",
                    "Flutter App Development"
                ].map(serviceType => ({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": serviceType,
                    "provider": {
                        "@type": "Person",
                        "name": "Anagh K R",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Kasaragod",
                            "addressRegion": "Kerala",
                            "addressCountry": "IN"
                        },
                        "email": "anaghkrkkl@gmail.com",
                        "telephone": "+91-8281571805"
                    },
                    "areaServed": [
                        { "@type": "State", "name": "Kerala" },
                        { "@type": "City", "name": "Thiruvananthapuram" },
                        { "@type": "City", "name": "Kollam" },
                        { "@type": "City", "name": "Pathanamthitta" },
                        { "@type": "City", "name": "Alappuzha" },
                        { "@type": "City", "name": "Kottayam" },
                        { "@type": "City", "name": "Idukki" },
                        { "@type": "City", "name": "Ernakulam" },
                        { "@type": "City", "name": "Kochi" },
                        { "@type": "City", "name": "Thrissur" },
                        { "@type": "City", "name": "Palakkad" },
                        { "@type": "City", "name": "Malappuram" },
                        { "@type": "City", "name": "Kozhikode" },
                        { "@type": "City", "name": "Wayanad" },
                        { "@type": "City", "name": "Kannur" },
                        { "@type": "City", "name": "Kasaragod" },
                        { "@type": "Country", "name": "United Arab Emirates" },
                        { "@type": "City", "name": "Dubai" },
                        { "@type": "Country", "name": "Canada" },
                        { "@type": "Country", "name": "United Kingdom" },
                        { "@type": "Country", "name": "Saudi Arabia" },
                        { "@type": "Country", "name": "Oman" },
                        { "@type": "Country", "name": "Qatar" },
                        { "@type": "City", "name": "Chennai" },
                        { "@type": "City", "name": "Coimbatore" },
                        { "@type": "City", "name": "Mangalore" }
                    ],
                    "description": `Professional ${serviceType} services in Kerala including MERN stack development, Flutter apps, and custom web solutions.`
                })))
            }} />

            {/* Structured Data - FAQ Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What web development services do you offer?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "I offer custom website development, MERN stack applications, Flutter mobile apps, website redesign, API development, and ongoing maintenance for businesses across Kerala."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does it take to build a website?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Basic websites take 1-2 weeks, custom web applications 3-6 weeks, and mobile apps 6-10 weeks depending on complexity and features. I provide detailed timelines during project planning."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide website maintenance after launch?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, I offer post-launch support including bug fixes, content updates, security patches, and technical assistance. Annual maintenance packages are also available."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can you help with SEO for my website?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, all websites are built with SEO best practices including fast loading, mobile responsiveness, clean URLs, proper meta tags, and Google Analytics integration for better search rankings."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you work with clients across Kerala?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely! I serve clients across Kerala including Kochi, Calicut, Trivandrum, Thrissur, Kannur, and all major cities through remote collaboration and online meetings."
                            }
                        }
                    ]
                })
            }} />

            <section className="relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Rocket size={16} />
                            <span>Professional Excellence</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                            Professional Web & Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Development Services</span> Kerala
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            <strong className="text-white">Expert developer</strong> offering professional <strong className="text-white">web development & mobile app services in Kerala</strong>.
                            From custom websites and MERN stack applications to Flutter mobile apps and custom web apps platforms -
                            delivering quality digital solutions in Kochi, Calicut, Trivandrum, Kannur, and throughout Kerala.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center gap-4 group hover:border-blue-500/30 transition-all">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-white">{stat.number}</div>
                                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceComponent
                            title="Web Development"
                            category="Full-Stack"
                            icon={<Rocket size={24} />}
                            description="Custom website development using modern technologies like React, Next.js, and Node.js. Building responsive, fast-loading, SEO-optimized websites for businesses across Kerala - from simple landing pages to complex web applications."
                        />

                        <ServiceComponent
                            title="custom web apps Solutions"
                            category="Online Store"
                            icon={<Rocket size={24} />}
                            description="Complete custom web apps website development with product catalogs, shopping carts, payment gateway integration (Razorpay, Stripe), and order management. Helping Kerala businesses sell online with Custom Stores, Custom Store, or custom solutions."
                        />

                        <ServiceComponent
                            title="Mobile Apps"
                            category="Flutter"
                            icon={<Rocket size={24} />}
                            description="Professional Flutter mobile app development for iOS and Android. Cross-platform apps with native performance, beautiful UI, backend integration, and App Store deployment. From MVPs to full-featured business applications."
                        />

                        <ServiceComponent
                            title="Backend API Development"
                            category="Node.js | NestJS | Laravel"
                            icon={<Rocket size={24} />}
                            description="Building secure, scalable RESTful & GraphQL APIs and backend systems. Utilizing robust frameworks like NestJS, Laravel, or Node.js with Express. Real-time WebSockets, microservices, and database tuning."
                        />

                        <ServiceComponent
                            title="Website Redesign"
                            category="Modernization"
                            icon={<Rocket size={24} />}
                            description="Transforming outdated websites into modern, mobile-responsive platforms. Complete redesign with improved UI/UX, faster loading speeds, better SEO, and enhanced user engagement to boost conversions and business growth."
                        />

                        <ServiceComponent
                            title="Web Apps Development"
                            category="CMS"
                            icon={<Rocket size={24} />}
                            description="Professional Web Apps website development, custom theme design, plugin integration, and Custom Stores setup. Easy-to-manage websites perfect for businesses, blogs, and online stores with ongoing support and maintenance."
                        />

                        <ServiceComponent
                            title="Instagram Store Development"
                            category="Social Commerce"
                            icon={<Rocket size={24} />}
                            description="Instagram-focused store development with product catalog setup, link-in-bio sales funnels, WhatsApp conversion flow, and checkout-ready landing pages for Kerala brands."
                        />

                        <ServiceComponent
                            title="modern Website Development"
                            category="custom web apps"
                            icon={<Rocket size={24} />}
                            description="Launch profitable modern websites with fast product pages, automation-friendly order workflows, and conversion-driven design for trending products."
                        />

                        <ServiceComponent
                            title="Custom Store Store Development"
                            category="Custom Store"
                            icon={<Rocket size={24} />}
                            description="Build and optimize Custom Store storefronts for D2C growth with collection strategy, payment and shipping setup, speed optimization, and SEO-ready architecture."
                        />

                        <ServiceComponent
                            title="Custom Software Development"
                            category="Software"
                            icon={<Code size={24} />}
                            description="Comprehensive custom software development tailored to your business operations. I build billing software, restaurant applications, college project systems, and enterprise management tools from scratch."
                        />

                        <ServiceComponent
                            title="Ecommerce & Shopping Websites"
                            category="Online Retail"
                            icon={<Rocket size={24} />}
                            description="High-converting ecommerce website development with secure payment gateways, inventory management, and shopping cart logic. Tailored online stores optimized for SEO and sales."
                        />

                        <ServiceComponent
                            title="Landing Page Development"
                            category="Lead Generation"
                            icon={<Monitor size={24} />}
                            description="Fast, responsive, and conversion-optimized static website and landing page development for ad campaigns, product launches, or business portfolios."
                        />

                        <ServiceComponent
                            title="Dating & Chat App Development"

                            category="Mobile + Realtime"
                            icon={<Rocket size={24} />}
                            description="Build dating, chat, food delivery, booking, education, healthcare, fintech, and marketplace apps with realtime features, moderation tools, and scalable backend architecture."
                        />
                    </div>
                </div>
            </section>


            <section className="relative z-10 pt-10 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10 space-y-3">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                            Explore Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">In Detail</span>
                        </h2>
                        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">
                            Dedicated pages with full info, FAQs, and pricing for each service
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {detailPages.map((page) => (
                            <a
                                key={page.href}
                                href={page.href}
                                className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group flex items-center justify-between gap-4"
                            >
                                <div>
                                    <div className="text-white font-bold uppercase tracking-tight text-sm group-hover:text-blue-400 transition-colors">{page.title}</div>
                                    <div className="text-gray-500 text-xs mt-1">{page.desc}</div>
                                </div>
                                <ArrowRight size={16} className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SEO Keyword Service Map ── */}
            <section className="relative z-10 py-24 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14 space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Globe size={16} />
                            <span>Find What You Need</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                            Searching for a{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                Developer in Kerala?
                            </span>
                        </h2>
                        <p className="text-gray-400 text-base max-w-2xl mx-auto">
                            Whether you need the <strong className="text-white">best website development company in Kerala</strong>,
                            a <strong className="text-white">Flutter app developer</strong>, or an <strong className="text-white">e-commerce expert in Kochi</strong> —
                            click any keyword below to explore the right service.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {/* Website Development */}
                        <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 transition-all duration-500 group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Globe size={18} />
                                </div>
                                <h3 className="text-xs font-black text-white uppercase tracking-wider">Website Development</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { text: "Best Website Development Company Kerala", href: "/web-development/" },
                                    { text: "Professional Web Developer Kochi", href: "/web-development/" },
                                    { text: "Custom Website Development Kerala", href: "/web-development/" },
                                    { text: "Affordable Web Development India", href: "/web-development/" },
                                    { text: "Hire Web Developer Kerala", href: "/web-development/" },
                                    { text: "Website Designer Near Me", href: "/web-design/" },
                                ].map((kw, i) => (
                                    <a key={i} href={kw.href} className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-blue-500/8 border border-blue-500/15 hover:bg-blue-500/20 transition-all duration-300 group/tag">
                                        <span className="text-xs font-semibold text-blue-400 leading-tight">{kw.text}</span>
                                        <ArrowRight size={10} className="text-blue-400 opacity-0 group-hover/tag:opacity-100 transition-opacity shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* MERN Stack */}
                        <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-500 group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                    <Code size={18} />
                                </div>
                                <h3 className="text-xs font-black text-white uppercase tracking-wider">MERN Stack & React</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { text: "MERN Stack Development Services India", href: "/mern-stack-development/" },
                                    { text: "Full-Stack JavaScript Developer Kerala", href: "/mern-stack-development/" },
                                    { text: "React.js Development Company Kerala", href: "/react-development/" },
                                    { text: "Next.js Developer Kerala", href: "/nextjs-development/" },
                                    { text: "Hire MERN Stack Developer Kochi", href: "/mern-stack-development/" },
                                    { text: "SEO-Friendly React Web Development", href: "/react-development/" },
                                ].map((kw, i) => (
                                    <a key={i} href={kw.href} className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-indigo-500/8 border border-indigo-500/15 hover:bg-indigo-500/20 transition-all duration-300 group/tag">
                                        <span className="text-xs font-semibold text-indigo-400 leading-tight">{kw.text}</span>
                                        <ArrowRight size={10} className="text-indigo-400 opacity-0 group-hover/tag:opacity-100 transition-opacity shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile App Development */}
                        <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-500 group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                                    <Smartphone size={18} />
                                </div>
                                <h3 className="text-xs font-black text-white uppercase tracking-wider">Mobile App Development</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { text: "Best Mobile App Development Company Kerala", href: "/mobile-app-development/" },
                                    { text: "Flutter App Development Services Kerala", href: "/flutter-app-development/" },
                                    { text: "iOS & Android App Developer Kochi", href: "/mobile-app-development/" },
                                    { text: "Cross-Platform App Development India", href: "/flutter-app-development/" },
                                    { text: "Hire App Developer in Kerala", href: "/mobile-app-development/" },
                                    { text: "App Developer for Startups Kerala", href: "/flutter-app-development/" },
                                ].map((kw, i) => (
                                    <a key={i} href={kw.href} className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-violet-500/8 border border-violet-500/15 hover:bg-violet-500/20 transition-all duration-300 group/tag">
                                        <span className="text-xs font-semibold text-violet-400 leading-tight">{kw.text}</span>
                                        <ArrowRight size={10} className="text-violet-400 opacity-0 group-hover/tag:opacity-100 transition-opacity shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* E-Commerce */}
                        <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-500 group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <Rocket size={18} />
                                </div>
                                <h3 className="text-xs font-black text-white uppercase tracking-wider">E-Commerce Solutions</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { text: "E-Commerce Website Development Kochi", href: "/ecommerce-development/" },
                                    { text: "Custom Online Store Development Kerala", href: "/ecommerce-development/" },
                                    { text: "Shopping Website Development India", href: "/ecommerce-development/" },
                                    { text: "Best E-Commerce Developer Kerala", href: "/ecommerce-development/" },
                                    { text: "Payment Gateway Integration Kerala", href: "/ecommerce-development/" },
                                ].map((kw, i) => (
                                    <a key={i} href={kw.href} className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-emerald-500/8 border border-emerald-500/15 hover:bg-emerald-500/20 transition-all duration-300 group/tag">
                                        <span className="text-xs font-semibold text-emerald-400 leading-tight">{kw.text}</span>
                                        <ArrowRight size={10} className="text-emerald-400 opacity-0 group-hover/tag:opacity-100 transition-opacity shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Backend & API */}
                        <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/30 transition-all duration-500 group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                                    <Code size={18} />
                                </div>
                                <h3 className="text-xs font-black text-white uppercase tracking-wider">Backend & API</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { text: "Node.js Development Company Kochi", href: "/nodejs-development/" },
                                    { text: "NestJS Enterprise Developer India", href: "/nestjs-development/" },
                                    { text: "Laravel Development Company Kerala", href: "/laravel-development/" },
                                    { text: "REST API Development Services Kerala", href: "/nodejs-development/" },
                                    { text: "Scalable Backend Development Kochi", href: "/nestjs-development/" },
                                ].map((kw, i) => (
                                    <a key={i} href={kw.href} className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-orange-500/8 border border-orange-500/15 hover:bg-orange-500/20 transition-all duration-300 group/tag">
                                        <span className="text-xs font-semibold text-orange-400 leading-tight">{kw.text}</span>
                                        <ArrowRight size={10} className="text-orange-400 opacity-0 group-hover/tag:opacity-100 transition-opacity shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Specialized Apps & Design */}
                        <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.06] hover:border-pink-500/30 transition-all duration-500 group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                                    <Smartphone size={18} />
                                </div>
                                <h3 className="text-xs font-black text-white uppercase tracking-wider">Specialized & Design</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { text: "Chat App Development Company Kerala", href: "/chat-app-development/" },
                                    { text: "Dating App Development India", href: "/dating-app-development/" },
                                    { text: "Best Web Design Agency Kerala", href: "/web-design/" },
                                    { text: "Figma to React Conversion Service", href: "/web-design/" },
                                    { text: "UI/UX Design & Development Kochi", href: "/web-design/" },
                                    { text: "Remote Kerala Developer for NRI", href: "/hire-kerala-developer-remotely/" },
                                ].map((kw, i) => (
                                    <a key={i} href={kw.href} className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-pink-500/8 border border-pink-500/15 hover:bg-pink-500/20 transition-all duration-300 group/tag">
                                        <span className="text-xs font-semibold text-pink-400 leading-tight">{kw.text}</span>
                                        <ArrowRight size={10} className="text-pink-400 opacity-0 group-hover/tag:opacity-100 transition-opacity shrink-0" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative z-10 py-24 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Check size={16} />
                            <span>Why Choose Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Development Services</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Professional web and app development with focus on quality, affordability, and results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Affordable Pricing in Kerala",
                                desc: 'Competitive rates starting from ₹3,000 for basic websites. Transparent pricing with no hidden costs for Kerala businesses.',
                                icon: <Target size={24} />
                            },
                            {
                                title: "Modern Tech Stack",
                                desc: 'Latest frameworks like React, Next.js, Flutter ensuring your project is future-proof, fast, and scalable.',
                                icon: <Code size={24} />
                            },
                            {
                                title: "Fast Delivery Timelines",
                                desc: 'Fast project delivery - basic websites in 1-2 weeks, apps in 6-10 weeks with milestone-based progress updates.',
                                icon: <Zap size={24} />
                            },
                            {
                                title: "Ongoing Support & Maintenance",
                                desc: 'Post-launch support, bug fixes, updates, and technical assistance to keep your digital presence running smoothly.',
                                icon: <Users size={24} />
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group space-y-4">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas Section */}
            <section className="relative z-10 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Monitor size={16} />
                            <span>Service Coverage</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Serving Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Across Kerala</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Expert web development and mobile app development services available in all major Kerala cities
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            'Kochi',
                            'Kozhikode (Calicut)',
                            'Thiruvananthapuram',
                            'Thrissur',
                            'Kannur',
                            'Kollam',
                            'Palakkad',
                            'Kasaragod',
                            'Ernakulam',
                            'Malappuram',
                            'Kottayam',
                            'Alappuzha'
                        ].map((city, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all text-center">
                                <p className="text-white font-bold text-sm">{city}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
                            Based in Kerala, I provide remote web development services across Kerala with flexible online meetings,
                            regular updates, and seamless communication. Quality development services delivered to your business regardless of location.
                        </p>
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            <section className="relative z-10 py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <ArrowRight size={16} />
                            <span>FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Questions</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: 'What web development services do you offer?',
                                a: 'I offer custom website development, MERN stack applications, Flutter mobile apps, website redesign, API development, and ongoing maintenance for businesses across Kerala.'
                            },
                            {
                                q: 'How long does it take to build a website?',
                                a: 'Basic websites take 1-2 weeks, custom web applications 3-6 weeks, and mobile apps 6-10 weeks depending on complexity and features. I provide detailed timelines during project planning.'
                            },
                            {
                                q: 'Do you provide website maintenance after launch?',
                                a: 'Yes, I offer post-launch support including bug fixes, content updates, security patches, and technical assistance. Annual maintenance packages are also available.'
                            },
                            {
                                q: 'Can you help with SEO for my website?',
                                a: 'Yes, all websites are built with SEO best practices including fast loading, mobile responsiveness, clean URLs, proper meta tags, and Google Analytics integration for better search rankings.'
                            },
                            {
                                q: 'Do you work with clients across Kerala?',
                                a: 'Absolutely! I serve clients across Kerala including Kochi, Calicut, Trivandrum, Thrissur, Kannur, and all major cities through remote collaboration and online meetings.'
                            }
                        ].map((item, i) => (
                            <details key={i} className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                                <summary className="cursor-pointer text-white font-bold text-lg flex justify-between items-center">
                                    {item.q}
                                    <ArrowRight size={20} className="group-open:rotate-90 transition-transform text-blue-400" />
                                </summary>
                                <p className="mt-4 text-gray-400 leading-relaxed">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 pt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 backdrop-blur-3xl text-center space-y-8 relative overflow-hidden group">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full"></div>

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Let's Build Your Digital Solution</h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Get professional web or mobile development services in Kerala. Free consultation, transparent pricing, and quality results. Contact now to discuss your project!</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                                <a href="/contact/" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5">
                                    <Send size={18} />
                                    <span className="uppercase tracking-widest text-sm">Get Started</span>
                                </a>
                                <a href="/about/" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                                    <UserIcon size={18} />
                                    <span className="uppercase tracking-widest text-sm">Learn More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Background Decor */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        </div>
    );
}
