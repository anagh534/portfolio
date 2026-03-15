import ServiceComponent from "./ServiceComponent";
import { Rocket, Target, Users, Zap, ArrowRight, User as UserIcon, Send, Check, Monitor, Code, Smartphone, Globe } from 'lucide-react';
import Script from 'next/script';

const detailPages = [
    { title: "Web Development", href: "/web-development", desc: "Custom websites & web apps" },
    { title: "MERN Stack", href: "/mern-stack-development", desc: "MongoDB · Express · React · Node.js" },
    { title: "Next.js Development", href: "/nextjs-development", desc: "SSR & SSG React apps" },
    { title: "React Development", href: "/react-development", desc: "SPAs & interactive UIs" },
    { title: "Node.js Development", href: "/nodejs-development", desc: "Scalable backends & APIs" },
    { title: "Flutter Apps", href: "/flutter-app-development", desc: "iOS & Android cross-platform" },
    { title: "Mobile Apps", href: "/mobile-app-development", desc: "Full mobile app development" },
    { title: "WordPress Development", href: "/wordpress-development", desc: "CMS websites & WooCommerce" },
    { title: "E-commerce Development", href: "/ecommerce-development", desc: "Online stores & payment integration" },
    { title: "Instagram Store Development", href: "/instagram-store-development", desc: "Social commerce websites & catalogs" },
    { title: "Dropshipping Website Development", href: "/dropshipping-website-development", desc: "Trend product store builds" },
    { title: "Shopify Store Development", href: "/shopify-store-development", desc: "Shopify setup and optimization" },
    { title: "Clothing Ecommerce Website", href: "/clothing-ecommerce-website-development", desc: "Fashion-focused online stores" },
    { title: "Shoe Store Website", href: "/shoe-store-website-development", desc: "Footwear ecommerce platforms" },
    { title: "Electronics Ecommerce Website", href: "/electronics-ecommerce-website-development", desc: "Gadget and electronics stores" },
    { title: "Dating App Development", href: "/dating-app-development", desc: "Safety-first social app builds" },
    { title: "Chat App Development", href: "/chat-app-development", desc: "Realtime messaging products" },
];

export const metadata = {
    title: "Web Development Services Kerala | WordPress, E-commerce, Flutter & MERN",
    description: "Professional web development services in Kerala including website design, WordPress development, e-commerce stores, MERN stack web apps, and Flutter mobile apps.",
    keywords: "web development services Kerala, website design services Kerala, freelance web developer Kerala, web designer Kerala, WordPress development Kerala, WooCommerce developer Kerala, e-commerce development Kerala, Shopify developer Kerala, Instagram store development Kerala, dropshipping website development Kerala, clothing ecommerce website Kerala, shoe store website Kerala, electronics ecommerce website Kerala, dating app development Kerala, chat app development Kerala, MERN stack developer Kerala, Flutter app development Kerala, mobile app development Kerala, React developer Kerala, Node.js developer Kerala, web developer Kochi, web developer Calicut",
    alternates: { canonical: "https://www.anaghkr.in/services" },
    openGraph: {
        title: "Web Development Services Kerala | ANAGH K R",
        description: "Professional web development, ecommerce, Shopify, Instagram store, and app development services in Kerala.",
        url: "https://www.anaghkr.in/services",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services Kerala | ANAGH K R",
        description: "Kerala-focused services including websites, ecommerce stores, and mobile app development.",
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
            <Script id="services-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Web Development and Mobile App Development Services",
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
                        "telephone": "+91-8075541805"
                    },
                    "areaServed": {
                        "@type": "State",
                        "name": "Kerala"
                    },
                    "description": "Professional web development and mobile app development services in Kerala including MERN stack development, Flutter apps, WordPress, e-commerce, and custom web solutions",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Web and Mobile Development Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Custom Website Development",
                                    "description": "Responsive, SEO-optimized websites starting from ₹3,000"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "WordPress Development",
                                    "description": "Custom WordPress websites starting from ₹4,000"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Flutter Mobile App Development",
                                    "description": "Cross-platform mobile apps starting from ₹10,000"
                                }
                            }
                        ]
                    }
                })
            }} />

            {/* Structured Data - FAQ Schema */}
            <Script id="services-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What web development services do you offer?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "I offer custom website development, MERN stack applications, WordPress websites, e-commerce platforms, Flutter mobile apps, website redesign, API development, and ongoing maintenance for businesses across Kerala."
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
                            From custom websites and MERN stack applications to Flutter mobile apps and e-commerce platforms -
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
                            title="E-commerce Solutions"
                            category="Online Store"
                            icon={<Rocket size={24} />}
                            description="Complete e-commerce website development with product catalogs, shopping carts, payment gateway integration (Razorpay, Stripe), and order management. Helping Kerala businesses sell online with WooCommerce, Shopify, or custom solutions."
                        />

                        <ServiceComponent
                            title="Mobile Apps"
                            category="Flutter"
                            icon={<Rocket size={24} />}
                            description="Professional Flutter mobile app development for iOS and Android. Cross-platform apps with native performance, beautiful UI, backend integration, and App Store deployment. From MVPs to full-featured business applications."
                        />

                        <ServiceComponent
                            title="Website Redesign"
                            category="Modernization"
                            icon={<Rocket size={24} />}
                            description="Transforming outdated websites into modern, mobile-responsive platforms. Complete redesign with improved UI/UX, faster loading speeds, better SEO, and enhanced user engagement to boost conversions and business growth."
                        />

                        <ServiceComponent
                            title="WordPress Development"
                            category="CMS"
                            icon={<Rocket size={24} />}
                            description="Professional WordPress website development, custom theme design, plugin integration, and WooCommerce setup. Easy-to-manage websites perfect for businesses, blogs, and online stores with ongoing support and maintenance."
                        />

                        <ServiceComponent
                            title="API Development"
                            category="Backend"
                            icon={<Rocket size={24} />}
                            description="Building secure, scalable RESTful APIs and backend systems with Node.js and Express. Database design, authentication, real-time features, and third-party integrations to power your web and mobile applications efficiently."
                        />

                        <ServiceComponent
                            title="Instagram Store Development"
                            category="Social Commerce"
                            icon={<Rocket size={24} />}
                            description="Instagram-focused store development with product catalog setup, link-in-bio sales funnels, WhatsApp conversion flow, and checkout-ready landing pages for Kerala brands."
                        />

                        <ServiceComponent
                            title="Dropshipping Website Development"
                            category="E-commerce"
                            icon={<Rocket size={24} />}
                            description="Launch profitable dropshipping websites with fast product pages, automation-friendly order workflows, and conversion-driven design for trending products."
                        />

                        <ServiceComponent
                            title="Shopify Store Development"
                            category="Shopify"
                            icon={<Rocket size={24} />}
                            description="Build and optimize Shopify storefronts for D2C growth with collection strategy, payment and shipping setup, speed optimization, and SEO-ready architecture."
                        />

                        <ServiceComponent
                            title="Dating & Chat App Development"
                            category="Mobile + Realtime"
                            icon={<Rocket size={24} />}
                            description="Create modern dating and chat apps with realtime messaging, moderation tools, profile systems, and scalable backend architecture for social product startups."
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

            {/* Why Choose Section */}
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
                                title: 'Affordable Pricing',
                                desc: 'Competitive rates starting from ₹3,000 for basic websites. Transparent pricing with no hidden costs for Kerala businesses.',
                                icon: <Target size={24} />
                            },
                            {
                                title: 'Modern Technology',
                                desc: 'Latest frameworks like React, Next.js, Flutter ensuring your project is future-proof, fast, and scalable.',
                                icon: <Code size={24} />
                            },
                            {
                                title: 'Quick Turnaround',
                                desc: 'Fast project delivery - basic websites in 1-2 weeks, apps in 6-10 weeks with milestone-based progress updates.',
                                icon: <Zap size={24} />
                            },
                            {
                                title: 'Ongoing Support',
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
                            Based in Kasaragod, I provide remote web development services across Kerala with flexible online meetings,
                            regular updates, and seamless communication. Quality development services delivered to your business regardless of location.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Overview Section */}
            <section className="relative z-10 py-24 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Target size={16} />
                            <span>Pricing</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Affordable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Development Packages</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Transparent pricing for web and mobile development services in Kerala
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Basic Website',
                                price: '₹3,000',
                                features: [
                                    'Responsive design',
                                    '2 pages',
                                    'Contact form',
                                    'Mobile optimized',
                                    'SEO basics',
                                    '1-2 weeks delivery'
                                ]
                            },
                            {
                                title: 'WordPress Site',
                                price: '₹4,000',
                                features: [
                                    'Custom theme setup',
                                    'Plugin integration',
                                    'Page Speed optimization',
                                    'Easy content management',
                                    'SEO optimized',
                                    '1-2 weeks delivery'
                                ]
                            },
                            {
                                title: 'Mobile App',
                                price: '₹10,000',
                                features: [
                                    'Flutter (iOS & Android)',
                                    'Custom UI design',
                                    'Backend integration',
                                    'App Store deployment',
                                    'Play Store deployment',
                                    '6-10 weeks delivery'
                                ]
                            }
                        ].map((pkg, i) => (
                            <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group space-y-6">
                                <div>
                                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{pkg.title}</h3>
                                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{pkg.price}</div>
                                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Starting Price</p>
                                </div>
                                <ul className="space-y-3">
                                    {pkg.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 text-gray-400 text-sm">
                                            <Check size={16} className="text-blue-400 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="/contact" className="block w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-center hover:bg-blue-600 hover:border-blue-600 transition-all uppercase tracking-wider text-sm">
                                    Get Quote
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 text-sm">
                            * Custom quotes available for complex projects. Contact for detailed pricing based on your requirements.
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
                                a: 'I offer custom website development, MERN stack applications, WordPress websites, e-commerce platforms, Flutter mobile apps, website redesign, API development, and ongoing maintenance for businesses across Kerala.'
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
                                <a href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5">
                                    <Send size={18} />
                                    <span className="uppercase tracking-widest text-sm">Get Started</span>
                                </a>
                                <a href="/about" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95">
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
