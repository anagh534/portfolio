import ServiceComponent from "./ServiceComponent";
import { Rocket, Target, Users, Zap, Briefcase, User as UserIcon, Send } from 'lucide-react';

export const metadata = {
    title: "Professional Web & App Development Services | ANAGH K R",
    description: "Comprehensive digital solutions including MERN stack development, Flutter app development, and WordPress development services.",
    keywords: "best node js vemobile app developer kerala, hire web developer, hire freelance web developer, freelancer website designer, freelancer web developer, freelancer for website development, freelancer android app developer, freelance website developer, freelance web developer, freelance web designer near me, freelance mobile app developer, freelance app developers near me, freelance app developers cost, freelance app developers, flutter developer, fiverr web development, fiverr web developer, fiverr react developer, fiverr app development, fiverr app developer, app development freelance, app developers in kerala, app developer freelancer, Web Development Services, Mobile App Development, E-commerce Solutions, API Development, Website Redesign, WordPress Development",
};

export default function Services() {
    const stats = [
        { number: '24', label: 'Projects Completed', icon: <Target size={20} /> },
        { number: '8+', label: 'Services Offered', icon: <Zap size={20} /> },
        { number: '100%', label: 'Client Satisfaction', icon: <Users size={20} /> }
    ];

    return (
        <div className="min-h-screen bg-black pt-32 pb-24 relative overflow-hidden">
            <section className="relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            <Rocket size={16} />
                            <span>Professional Excellence</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                            Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Experiences</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Comprehensive digital solutions crafted with expertise, passion, and cutting-edge technology to bring your vision to life.
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
                            description="Specializing in creating dynamic, responsive, and interactive websites that provide seamless experiences across all devices. Clean code and SEO-ready architecture."
                        />

                        <ServiceComponent
                            title="E-commerce Solutions"
                            category="Online Store"
                            icon={<Rocket size={24} />}
                            description="High-performance e-commerce websites with secure payment integration, inventory management, and smooth user flow to boost your sales."
                        />

                        <ServiceComponent
                            title="Mobile Apps"
                            category="Flutter"
                            icon={<Rocket size={24} />}
                            description="Cross-platform mobile applications for iOS and Android using Flutter, delivering native-like performance and superior user experience."
                        />

                        <ServiceComponent
                            title="Website Redesign"
                            category="Modernization"
                            icon={<Rocket size={24} />}
                            description="Revamping outdated websites into modern, visually stunning platforms with improved performance and enhanced user engagement."
                        />

                        <ServiceComponent
                            title="WordPress Development"
                            category="CMS"
                            icon={<Rocket size={24} />}
                            description="Custom WordPress websites, theme customization, and plugin integration for easy content management and business growth."
                        />

                        <ServiceComponent
                            title="API Development"
                            category="Backend"
                            icon={<Rocket size={24} />}
                            description="Building robust, secure, and scalable RESTful APIs to power your web and mobile applications with high performance."
                        />
                    </div>
                </div>
            </section>

            <section className="relative z-10 pt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="p-12 md:p-20 rounded-[60px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 backdrop-blur-3xl text-center space-y-8 relative overflow-hidden group">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full"></div>

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Ready to Start Your Project?</h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Let's collaborate to build something extraordinary. Get in touch for a free consultation.</p>
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
