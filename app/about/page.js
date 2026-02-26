export const metadata = {
    title: "About Anagh K R - Flutter Developer Kerala | MERN Stack Developer Kerala | Expert Web & App Development",
    description: "Meet Anagh K R, a professional Flutter developer and MERN stack developer from Kasaragod, Kerala. Specializing in mobile app development, web development services, WordPress development, e-commerce development, and custom website solutions across Kerala including Kochi, Thiruvananthapuram, Kozhikode, Thrissur, Ernakulam, and Calicut.",
    keywords: "Flutter developer Kerala, MERN stack developer Kerala, Web development services Kerala, Mobile app development Kerala, Freelance web developer Kerala, Custom website development Kerala, React developer Kerala, Node.js developer Kerala, Flutter developer Kasaragod, App development Kasaragod, Website design Kerala, Responsive web design, E-commerce website development, WordPress developer Kasaragod, SEO services Kerala, Next.js development, PSD to website conversion, Figma to website development, Academic project development, Startup web development, Full-Stack Web Development, Cross-Platform App Development, Digital Solutions Expert Kasaragod, Professional Developer in Kerala, Scalable Code Development, User-First Approach in Web and App Development, best node js vemobile app developer kerala, hire web developer, hire freelance web developer, freelancer website designer, freelancer web developer, freelancer for website development, freelancer android app developer, freelance website developer, freelance web developer, freelance web designer near me, freelance mobile app developer, freelance app developers near me, freelance app developers cost, freelance app developers, flutter developer, fiverr web development, fiverr web developer, fiverr react developer, fiverr app development, fiverr app developer, app development freelance, app developers in kerala, app developer freelancer",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/about",
    ogTitle: "About Anagh K R - Flutter Developer Kerala | MERN Stack Developer Kerala",
    ogDescription: "Meet Anagh K R, a professional Flutter developer and MERN stack developer from Kasaragod, Kerala. Specializing in mobile app development, web development services, WordPress development, and custom solutions across Kerala.",
    ogUrl: "https://www.anaghkr.in/about",
    ogType: "profile",
    twitterCard: "summary_large_image",
    twitterTitle: "About Anagh K R - Flutter Developer Kerala | MERN Stack Developer Kerala",
    twitterDescription: "Professional Flutter developer and MERN stack developer from Kerala offering expert web, WordPress, and mobile app development services."
};

import { Code, Download, User as UserIcon, Check, Laptop, Server, Smartphone, Cloud, Palette, Monitor, Rocket, Send, ArrowRight } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-black overflow-hidden relative">
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
                            Passionate Full-Stack Developer crafting exceptional digital experiences
                            from the beautiful landscapes of Kasaragod, Kerala. Specializing in
                            modern web technologies and mobile applications.
                        </p>

                        {/* Hero Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl animate-in fade-in slide-in-from-bottom-10 duration-700 delay-600">
                            {[
                                { num: '5+', label: 'Years Experience' },
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
                                Creating Digital Solutions with
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"> Passion & Precision</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                I'm a dedicated MERN Stack Developer and Flutter App Developer based in
                                the scenic town of Kasaragod, Kerala. I combine technical expertise with
                                creative problem-solving to deliver exceptional results.
                            </p>
                            <div className="space-y-4">
                                {[
                                    '5+ years of professional development experience',
                                    'Expertise in MERN Stack & Flutter development',
                                    '50+ successful projects delivered globally'
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
                            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Master</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            A comprehensive toolkit for building modern, scalable applications
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
                                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{skill.title}</h4>
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
                            { title: 'Web Development', desc: 'Full-stack web applications using modern technologies like React, Node.js, and cloud platforms.' },
                            { title: 'WordPress Development', desc: 'Custom WordPress websites with theme customization, plugin integration, and easy content management.' },
                            { title: 'Mobile App Development', desc: 'Cross-platform mobile applications with Flutter, delivering native performance for iOS and Android.' },
                            { title: 'SEO & Optimization', desc: 'Performance optimization and SEO strategies to ensure your digital presence reaches its full potential.' },
                            { title: 'Technical Consultation', desc: 'Strategic guidance on technology choices, architecture decisions, and best practices for your projects.' }
                        ].map((service, i) => (
                            <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group space-y-4">
                                <h4 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{service.title}</h4>
                                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative z-10 px-6">
                <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 backdrop-blur-3xl text-center space-y-10 relative overflow-hidden group">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
                        Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Next Project?</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Let's collaborate to bring your ideas to life with modern technology
                        and exceptional user experiences.
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
