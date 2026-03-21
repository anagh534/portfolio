export const metadata = {
    title: "About ANAGH K R - Flutter & MERN Stack Developer Kerala",
    description: "Anagh K R - Experienced Flutter & MERN stack developer in Kerala with 3+ years expertise. Building custom websites, mobile apps & e-commerce solutions.",
    keywords: "Flutter developer Kerala, MERN stack developer Kerala, freelance web developer Kerala, mobile app development Kerala, custom website development Kerala, React developer Kerala, Node.js developer Kerala, WordPress developer Kerala, e-commerce development Kerala, web development Kasaragod, app developer Kochi, freelance developer Calicut, Next.js development, responsive web design Kerala",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/about",
    },
    openGraph: {
        title: "About Anagh K R - Experienced Flutter & Web Developer Kerala",
        description: "Anagh K R - Experienced Flutter & MERN stack developer with 3+ years expertise. Custom websites, mobile apps & e-commerce solutions for Kerala businesses.",
        url: "https://www.anaghkr.in/about",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Anagh K R - Professional Flutter & Web Developer Kerala",
        description: "Anagh K R - Experienced Flutter & MERN stack developer in Kerala. Custom websites, mobile apps & e-commerce solutions with 3+ years expertise.",
    },
};

import { Code, Download, User as UserIcon, Check, Laptop, Server, Smartphone, Cloud, Palette, Monitor, Rocket, Send, ArrowRight } from 'lucide-react';
import Script from '@/compat/script';

export default function About() {
    return (
        <div className="min-h-screen bg-black overflow-hidden relative">
            {/* Structured Data - FAQ Schema */}
            <Script id="about-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What services do you offer in Kerala?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "I offer comprehensive web development services including custom website development, MERN stack applications, Flutter mobile app development, WordPress websites, e-commerce platforms, and SEO optimization for businesses across Kerala."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much do your services cost?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Project costs vary based on requirements and complexity. Basic websites start from ₹3,000, WordPress sites from ₹4,000, and mobile apps from ₹10,000. Contact me for a detailed quote based on your specific needs."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does it take to build a website?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "A basic website typically takes 1-2 weeks, custom web applications 3-6 weeks, and mobile apps 6-10 weeks depending on features. I provide detailed timelines during project planning."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide ongoing support after project completion?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, I offer post-launch support including bug fixes, updates, and technical assistance. Annual maintenance packages are also available for ongoing website management and updates."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can you help with SEO and digital marketing?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "I provide technical SEO optimization including site speed, mobile responsiveness, meta tags, and Google Analytics setup. For comprehensive digital marketing, I can recommend trusted partners."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you work with clients outside Kerala?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, while I'm based in Kerala, I work with clients across India and internationally through remote collaboration, video calls, and online project management tools."
                            }
                        }
                    ]
                })
            }} />

            {/* Structured Data - Person Schema */}
            <Script id="about-person-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Anagh K R",
                    "url": "https://www.anaghkr.in",
                    "image": "https://www.anaghkr.in/assets/profile.png",
                    "jobTitle": "Full Stack Developer",
                    "description": "Experienced freelance web developer and Flutter app developer based in Kerala with 3+ years of professional experience",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Kasaragod",
                        "addressRegion": "Kerala",
                        "addressCountry": "IN"
                    },
                    "email": "anaghkrkkl@gmail.com",
                    "telephone": "+91-8075541805",
                    "knowsAbout": [
                        "Web Development",
                        "Flutter App Development",
                        "MERN Stack Development",
                        "React Development",
                        "Node.js Development",
                        "WordPress Development",
                        "E-commerce Development",
                        "Mobile App Development"
                    ],
                    "sameAs": [
                        "https://www.anaghkr.in",
                        "https://github.com/anaghkr",
                        "https://www.linkedin.com/in/anaghkr"
                    ]
                })
            }} />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
                        {/* Hero Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <Code size={16} />
                            <span>Full-Stack Developer</span>
                        </div>

                        {/* Hero Title */}
                        <h1 className="text-5xl md:text-8xl font-black text-white leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">ANAGH K R</span>
                        </h1>

                        {/* Hero Description */}
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                            Freelance web developer and Flutter app specialist based in Kasaragod, Kerala,
                            helping businesses across Kerala build custom websites, mobile applications, and e-commerce solutions.
                            With expertise in MERN stack, React, Node.js, and Flutter, I transform business ideas into
                            functional, scalable digital products that drive real results.
                        </p>

                        {/* Hero Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl animate-in fade-in slide-in-from-bottom-10 duration-700 delay-600">
                            {[
                                { num: '3+', label: 'Years Experience' },
                                { num: '24+', label: 'Projects Done' },
                                { num: '12+', label: 'Technologies' },
                                { num: '100%', label: 'Client Success' }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center space-y-2 group hover:border-blue-500/30 transition-all">
                                    <div className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors uppercaseTracking-tight">{stat.num}</div>
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Hero CTA */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-800">
                            <a href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5">
                                <Send size={18} />
                                <span className="uppercase tracking-widest text-sm">Let's Work Together</span>
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1EaHneU1Zsyadr8Xoppa2We7laj-nrnQJ/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95"
                            >
                                <Download size={18} />
                                <span className="uppercase tracking-widest text-sm">Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            </section>

            {/* About Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="aspect-square rounded-[60px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 flex items-center justify-center overflow-hidden relative">
                                <UserIcon size={200} className="text-blue-500/20 group-hover:scale-110 transition-transform duration-700" />

                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="w-full h-full border-2 border-dashed border-white/5 rounded-full animate-spin-slow"></div>
                                </div>

                                {/* Floating Icons */}
                                <div className="absolute top-10 left-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-blue-400 group-hover:-translate-y-2 transition-transform duration-500">
                                    <Code size={24} />
                                </div>
                                <div className="absolute bottom-20 left-5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-indigo-400 group-hover:translate-x-2 transition-transform duration-500 delay-100">
                                    <Smartphone size={24} />
                                </div>
                                <div className="absolute top-20 right-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-emerald-400 group-hover:translate-y-2 transition-transform duration-500 delay-200">
                                    <Server size={24} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest uppercaseTracking-tight">
                                <UserIcon size={16} />
                                <span>About Me</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                Building Digital Solutions for
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"> Kerala Businesses</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                As a professional freelance developer from Kasaragod, I specialize in MERN stack web development
                                and Flutter mobile app development, serving clients across Kerala. Whether you're a startup in Kochi
                                needing a responsive website, a business in Calicut requiring an e-commerce platform, or an entrepreneur
                                in Trivandrum looking for a mobile app, I deliver tailored solutions with clean code, modern design,
                                and a focus on your business goals.
                            </p>
                            <div className="space-y-4">
                                {[
                                    '3+ years of professional web and mobile app development',
                                    'Expert in React, Node.js, MongoDB, Flutter, and WordPress',
                                    '24+ successful projects delivered for Kerala businesses'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-white group">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                            <Check size={16} />
                                        </div>
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-24 relative z-10 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Laptop size={16} />
                            <span>Technical Skills</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Expertise</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Modern technologies and frameworks for building fast, secure, and scalable web and mobile applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Frontend', icon: <Monitor size={24} />, tags: ['React.js', 'Next.js', 'Tailwind', 'JS'] },
                            { title: 'Backend', icon: <Server size={24} />, tags: ['Node.js', 'Express', 'MongoDB', 'Postgres'] },
                            { title: 'Mobile', icon: <Smartphone size={24} />, tags: ['Flutter', 'Dart', 'iOS/Android', 'Firebase'] },
                            { title: 'Cloud/DevOps', icon: <Cloud size={24} />, tags: ['AWS', 'Docker', 'CI/CD', 'Git'] },
                            { title: 'Desktop', icon: <Laptop size={24} />, tags: ['.NET', 'Avalonia', 'C#', 'Electron'] }
                        ].map((skill, i) => (
                            <div key={i} className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{skill.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skill.tags.map((tag, j) => (
                                        <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Send size={16} />
                            <span>What I Do</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Services I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Provide</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: 'Custom Web Development', desc: 'Building responsive, SEO-friendly websites and MERN stack applications tailored to your business needs. From landing pages to complex web platforms for startups and businesses across Kerala.' },
                            { title: 'WordPress Solutions', desc: 'Professional WordPress website development with custom themes, WooCommerce setup, and easy content management. Perfect for businesses needing quick launches with ongoing flexibility.' },
                            { title: 'Flutter Mobile Apps', desc: 'Cross-platform mobile applications for iOS and Android with native performance. From MVPs for startups to full-featured apps with backend integration and deployment to app stores.' },
                            { title: 'E-commerce Development', desc: 'Complete online store solutions with secure payment integration, inventory management, and mobile-responsive design. Helping Kerala businesses sell online successfully.' },
                            { title: 'Web Optimization & SEO', desc: 'Technical SEO, performance optimization, and Google Analytics setup to improve your website visibility and loading speed, driving more traffic and conversions.' }
                        ].map((service, i) => (
                            <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group space-y-4">
                                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 relative z-10 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Check size={16} />
                            <span>Why Choose Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Why Businesses in Kerala <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Trust Me</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Local Understanding',
                                desc: 'Based in Kerala, I understand the local market, business needs, and cultural nuances. Whether you\'re in Kochi, Calicut, or any Kerala city, I provide solutions that resonate with your target audience.',
                                icon: <Monitor size={24} />
                            },
                            {
                                title: 'Affordable Pricing',
                                desc: 'Competitive and transparent pricing tailored for Kerala businesses. From small startups to established companies, I offer flexible packages that fit your budget without compromising quality.',
                                icon: <Rocket size={24} />
                            },
                            {
                                title: 'Fast Turnaround',
                                desc: 'Quick project delivery without sacrificing quality. Regular updates, milestone-based delivery, and efficient development processes ensure your project launches on time.',
                                icon: <Server size={24} />
                            },
                            {
                                title: 'Clean Code',
                                desc: 'Well-documented, maintainable code following industry best practices. Your project will be easy to update, scale, and maintain long after initial delivery.',
                                icon: <Code size={24} />
                            },
                            {
                                title: 'Ongoing Support',
                                desc: 'Post-launch support and maintenance included. I\'m available for bug fixes, updates, and technical assistance to ensure your website or app runs smoothly.',
                                icon: <Smartphone size={24} />
                            },
                            {
                                title: 'SEO Optimized',
                                desc: 'All websites built with SEO best practices - fast loading, mobile responsive, clean URLs, and proper meta tags to help your business rank better on Google.',
                                icon: <Rocket size={24} />
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group space-y-4">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Process Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <ArrowRight size={16} />
                            <span>My Process</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Work</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            A streamlined development process for successful project delivery
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Discovery & Planning', desc: 'Understanding your business goals, target audience, and project requirements to create a detailed development plan.' },
                            { step: '02', title: 'Design & Prototype', desc: 'Creating wireframes and UI designs for your approval before starting development, ensuring we\'re aligned on the vision.' },
                            { step: '03', title: 'Development', desc: 'Building your website or app with clean code, regular updates, and milestone-based delivery for transparency.' },
                            { step: '04', title: 'Launch & Support', desc: 'Deployment to production, testing, and ongoing support to ensure everything runs smoothly after launch.' }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group space-y-4 relative">
                                <div className="text-6xl font-black text-blue-500/10 group-hover:text-blue-500/20 transition-colors absolute top-4 right-4">{item.step}</div>
                                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight relative z-10">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What I Build Section */}
            <section className="py-24 relative z-10 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Laptop size={16} />
                            <span>What I Build</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Types of Projects I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Specialize In</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            From simple websites to complex applications - tailored solutions for every business need
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Business Websites',
                                desc: 'Professional company websites with responsive design, contact forms, service pages, and SEO optimization for local Kerala businesses.',
                                tech: 'Next.js, React, Tailwind CSS'
                            },
                            {
                                title: 'E-commerce Stores',
                                desc: 'Online stores with product catalogs, shopping carts, payment gateway integration (Razorpay, Stripe), and order management.',
                                tech: 'WooCommerce, Shopify, Custom'
                            },
                            {
                                title: 'Portfolio Websites',
                                desc: 'Personal portfolios for professionals, photographers, artists, and freelancers to showcase their work online.',
                                tech: 'Next.js, Framer Motion'
                            },
                            {
                                title: 'Mobile Applications',
                                desc: 'iOS and Android apps for businesses, including booking apps, delivery apps, social platforms, and utility applications.',
                                tech: 'Flutter, Dart, Firebase'
                            },
                            {
                                title: 'Admin Dashboards',
                                desc: 'Custom admin panels and dashboards for managing business operations, analytics, content, and user management.',
                                tech: 'React, Node.js, MongoDB'
                            },
                            {
                                title: 'Landing Pages',
                                desc: 'High-converting landing pages for marketing campaigns, product launches, and lead generation with fast loading speeds.',
                                tech: 'Next.js, Tailwind, SEO'
                            },
                            {
                                title: 'Blog Platforms',
                                desc: 'Content management systems and blogging platforms with markdown support, categories, tags, and SEO features.',
                                tech: 'WordPress, Headless CMS'
                            },
                            {
                                title: 'Booking Systems',
                                desc: 'Appointment and booking platforms for salons, clinics, restaurants, and service businesses with calendar integration.',
                                tech: 'MERN Stack, Calendar APIs'
                            },
                            {
                                title: 'Real Estate Portals',
                                desc: 'Property listing websites with search filters, image galleries, contact forms, and location-based search for Kerala real estate.',
                                tech: 'React, Maps API, Database'
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group space-y-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                <div className="pt-2">
                                    <span className="text-xs font-bold text-blue-500/60">{item.tech}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Every project is custom-built to match your brand, goals, and target audience.
                            Whether you need a simple information website or a complex web application,
                            I deliver solutions that are scalable, secure, and user-friendly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Monitor size={16} />
                            <span>Service Areas</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Serving Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Across Kerala</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Providing professional web development and mobile app development services to businesses in all major Kerala cities
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            'Kochi (Cochin)',
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
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group text-center">
                                <p className="text-white font-bold group-hover:text-blue-400 transition-colors">{city}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 text-lg">
                            Based in Kasaragod, I serve clients across Kerala with remote collaboration, online meetings,
                            and flexible communication. Distance is no barrier to delivering quality web and mobile solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Send size={16} />
                            <span>FAQ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Questions</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: 'What services do you offer in Kerala?',
                                a: 'I offer comprehensive web development services including custom website development, MERN stack applications, Flutter mobile app development, WordPress websites, e-commerce platforms, and SEO optimization for businesses across Kerala.'
                            },
                            {
                                q: 'How much do your services cost?',
                                a: 'Project costs vary based on requirements and complexity. Basic websites start from ₹3,000, WordPress sites from ₹4,000, and mobile apps from ₹10,000. Contact me for a detailed quote based on your specific needs.'
                            },
                            {
                                q: 'How long does it take to build a website?',
                                a: 'A basic website typically takes 1-2 weeks, custom web applications 3-6 weeks, and mobile apps 6-10 weeks depending on features. I provide detailed timelines during project planning.'
                            },
                            {
                                q: 'Do you provide ongoing support after project completion?',
                                a: 'Yes, I offer post-launch support including bug fixes, updates, and technical assistance. Annual maintenance packages are also available for ongoing website management and updates.'
                            },
                            {
                                q: 'Can you help with SEO and digital marketing?',
                                a: 'I provide technical SEO optimization including site speed, mobile responsiveness, meta tags, and Google Analytics setup. For comprehensive digital marketing, I can recommend trusted partners.'
                            },
                            {
                                q: 'Do you work with clients outside Kerala?',
                                a: 'Yes, while I\'m based in Kerala, I work with clients across India and internationally through remote collaboration, video calls, and online project management tools.'
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

            {/* CTA Section */}
            <section className="py-24 relative z-10 px-6">
                <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 backdrop-blur-3xl text-center space-y-10 relative overflow-hidden group">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
                        Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Digital Solution</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Whether you need a new website, mobile app, or e-commerce platform, I'm here to help.
                        Fast turnaround, transparent pricing, and dedicated support for businesses across Kerala.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <a href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5">
                            <Send size={18} />
                            <span className="uppercase tracking-widest text-sm">Start Project</span>
                        </a>
                        <a href="/services" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                            <Rocket size={18} />
                            <span className="uppercase tracking-widest text-sm">View Services</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
