import { motion } from 'framer-motion';
import {
    Search,
    ArrowRight,
    Globe,
    Smartphone,
    ShoppingCart,
    Code,
    Palette,
    MessageCircleMore,
    Heart,
    Layers,
    Server,
    Rocket,
    TrendingUp,
    MapPin,
} from 'lucide-react';

const keywordServiceGroups = [
    {
        category: "Website Development",
        icon: <Globe size={20} />,
        color: "blue",
        keywords: [
            { text: "Best Website Development Company in Kerala", href: "/web-development/" },
            { text: "Professional Web Developer in Kochi", href: "/web-development/" },
            { text: "Custom Website Development Services Kerala", href: "/web-development/" },
            { text: "Affordable Web Development Kerala", href: "/web-development/" },
            { text: "Hire Web Developer in Kerala", href: "/web-development/" },
            { text: "Website Designer Near Me Kerala", href: "/web-design/" },
        ],
    },
    {
        category: "MERN Stack Development",
        icon: <Layers size={20} />,
        color: "indigo",
        keywords: [
            { text: "MERN Stack Development Services India", href: "/mern-stack-development/" },
            { text: "Full-Stack JavaScript Developer Kerala", href: "/mern-stack-development/" },
            { text: "Hire MERN Stack Developers in Kerala", href: "/mern-stack-development/" },
            { text: "Custom Web Application Development Kerala", href: "/mern-stack-development/" },
            { text: "MongoDB React Node.js Developer Kochi", href: "/mern-stack-development/" },
        ],
    },
    {
        category: "React & Next.js Development",
        icon: <Code size={20} />,
        color: "cyan",
        keywords: [
            { text: "React.js Development Company Kerala", href: "/react-development/" },
            { text: "SEO-Friendly React Web Development", href: "/react-development/" },
            { text: "Next.js Development Services India", href: "/nextjs-development/" },
            { text: "Best React Developer in Kochi", href: "/react-development/" },
            { text: "Server-Side Rendering Next.js Kerala", href: "/nextjs-development/" },
        ],
    },
    {
        category: "Mobile App Development",
        icon: <Smartphone size={20} />,
        color: "violet",
        keywords: [
            { text: "Best Mobile App Development Company Kerala", href: "/mobile-app-development/" },
            { text: "Flutter App Development Services Kerala", href: "/flutter-app-development/" },
            { text: "iOS & Android App Developer Kochi", href: "/mobile-app-development/" },
            { text: "Cross-Platform App Development India", href: "/flutter-app-development/" },
            { text: "Hire App Developer in Kerala", href: "/mobile-app-development/" },
            { text: "Best App Development Company for Startups Kerala", href: "/flutter-app-development/" },
        ],
    },
    {
        category: "E-Commerce Development",
        icon: <ShoppingCart size={20} />,
        color: "emerald",
        keywords: [
            { text: "E-Commerce Website Development Company Kochi", href: "/ecommerce-development/" },
            { text: "Custom Online Store Development Kerala", href: "/ecommerce-development/" },
            { text: "Shopping Website Development India", href: "/ecommerce-development/" },
            { text: "Best E-Commerce Developer in Kerala", href: "/ecommerce-development/" },
            { text: "Secure Payment Gateway Integration Kerala", href: "/ecommerce-development/" },
        ],
    },
    {
        category: "Backend & API Development",
        icon: <Server size={20} />,
        color: "orange",
        keywords: [
            { text: "Node.js Development Services Kerala", href: "/nodejs-development/" },
            { text: "NestJS Developer for Enterprise Projects", href: "/nestjs-development/" },
            { text: "Laravel Development Company India", href: "/laravel-development/" },
            { text: "RESTful API Development Services Kerala", href: "/nodejs-development/" },
            { text: "Scalable Backend Development Kochi", href: "/nestjs-development/" },
        ],
    },
    {
        category: "Dating & Chat Apps",
        icon: <MessageCircleMore size={20} />,
        color: "pink",
        keywords: [
            { text: "Chat App Development Company Kerala", href: "/chat-app-development/" },
            { text: "Realtime Messaging App Developer India", href: "/chat-app-development/" },
            { text: "Dating App Development Services Kerala", href: "/dating-app-development/" },
            { text: "Social App Development with Moderation", href: "/dating-app-development/" },
        ],
    },
    {
        category: "Web Design & UI/UX",
        icon: <Palette size={20} />,
        color: "rose",
        keywords: [
            { text: "Best Web Design Agency Kerala", href: "/web-design/" },
            { text: "Mobile-First Web Design Services Kochi", href: "/web-design/" },
            { text: "UI/UX Design & Development Kerala", href: "/web-design/" },
            { text: "Responsive Website Design India", href: "/web-design/" },
            { text: "Website Redesign Services Kerala", href: "/web-design/" },
        ],
    },
    {
        category: "Remote & NRI Services",
        icon: <MapPin size={20} />,
        color: "teal",
        keywords: [
            { text: "Hire Kerala Developer Remotely for UAE", href: "/hire-kerala-developer-remotely/" },
            { text: "Remote Flutter & MERN Developer India", href: "/hire-kerala-developer-remotely/" },
            { text: "Indian Web Developer for UK & Canada", href: "/hire-kerala-developer-remotely/" },
            { text: "NRI App Development Partner Kerala", href: "/hire-kerala-developer-remotely/" },
        ],
    },
];

const colorMap = {
    blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400",
        hoverBorder: "hover:border-blue-500/40",
        tagBg: "bg-blue-500/8",
        tagBorder: "border-blue-500/15",
        tagHoverBg: "hover:bg-blue-500/20",
    },
    indigo: {
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        text: "text-indigo-400",
        hoverBorder: "hover:border-indigo-500/40",
        tagBg: "bg-indigo-500/8",
        tagBorder: "border-indigo-500/15",
        tagHoverBg: "hover:bg-indigo-500/20",
    },
    cyan: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        text: "text-cyan-400",
        hoverBorder: "hover:border-cyan-500/40",
        tagBg: "bg-cyan-500/8",
        tagBorder: "border-cyan-500/15",
        tagHoverBg: "hover:bg-cyan-500/20",
    },
    violet: {
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
        text: "text-violet-400",
        hoverBorder: "hover:border-violet-500/40",
        tagBg: "bg-violet-500/8",
        tagBorder: "border-violet-500/15",
        tagHoverBg: "hover:bg-violet-500/20",
    },
    emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        text: "text-emerald-400",
        hoverBorder: "hover:border-emerald-500/40",
        tagBg: "bg-emerald-500/8",
        tagBorder: "border-emerald-500/15",
        tagHoverBg: "hover:bg-emerald-500/20",
    },
    orange: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        text: "text-orange-400",
        hoverBorder: "hover:border-orange-500/40",
        tagBg: "bg-orange-500/8",
        tagBorder: "border-orange-500/15",
        tagHoverBg: "hover:bg-orange-500/20",
    },
    pink: {
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
        text: "text-pink-400",
        hoverBorder: "hover:border-pink-500/40",
        tagBg: "bg-pink-500/8",
        tagBorder: "border-pink-500/15",
        tagHoverBg: "hover:bg-pink-500/20",
    },
    rose: {
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        text: "text-rose-400",
        hoverBorder: "hover:border-rose-500/40",
        tagBg: "bg-rose-500/8",
        tagBorder: "border-rose-500/15",
        tagHoverBg: "hover:bg-rose-500/20",
    },
    teal: {
        bg: "bg-teal-500/10",
        border: "border-teal-500/20",
        text: "text-teal-400",
        hoverBorder: "hover:border-teal-500/40",
        tagBg: "bg-teal-500/8",
        tagBorder: "border-teal-500/15",
        tagHoverBg: "hover:bg-teal-500/20",
    },
};

export default function KeywordServiceMap() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden" id="find-services">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                        Looking for a{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            Developer in Kerala?
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        Whether you're searching for the <strong className="text-white">best website development company in Kerala</strong>,
                        a <strong className="text-white">Flutter app developer in Kochi</strong>, or an{' '}
                        <strong className="text-white">e-commerce development expert</strong> — explore our specialized services
                        matched to exactly what you need.
                    </p>
                </motion.div>

                {/* Keyword Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {keywordServiceGroups.map((group, groupIndex) => {
                        const colors = colorMap[group.color] || colorMap.blue;
                        return (
                            <motion.div
                                key={groupIndex}
                                className={`p-5 sm:p-7 rounded-[32px] bg-white/[0.03] border border-white/[0.06] ${colors.hoverBorder} transition-all duration-500 group relative overflow-hidden`}
                                variants={itemVariants}
                            >
                                {/* Subtle glow on hover */}
                                <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.bg} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className="relative z-10">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                                            {group.icon}
                                        </div>
                                        <h3 className="text-sm font-black text-white uppercase tracking-wider">
                                            {group.category}
                                        </h3>
                                    </div>

                                    {/* Keyword Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {group.keywords.map((keyword, keywordIndex) => (
                                            <a
                                                key={keywordIndex}
                                                href={keyword.href}
                                                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl ${colors.tagBg} border ${colors.tagBorder} ${colors.tagHoverBg} transition-all duration-300 group/tag`}
                                            >
                                                <span className={`text-xs font-semibold ${colors.text} leading-tight`}>
                                                    {keyword.text}
                                                </span>
                                                <ArrowRight
                                                    size={10}
                                                    className={`${colors.text} opacity-0 group-hover/tag:opacity-100 group-hover/tag:translate-x-0.5 transition-all duration-300 shrink-0`}
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-10 md:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-gray-500 text-sm mb-6 max-w-2xl mx-auto">
                        Can't find what you're looking for? I offer custom solutions for businesses across{' '}
                        <strong className="text-gray-300">Kochi, Calicut, Trivandrum, Thrissur, Kannur, Kasaragod</strong>,
                        and all major cities in Kerala — plus remote services for{' '}
                        <strong className="text-gray-300">UAE, UK, Canada & worldwide</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/services/"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 active:scale-95"
                        >
                            <Rocket size={16} />
                            <span>View All Services</span>
                        </a>
                        <a
                            href="/contact/"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm uppercase tracking-widest hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 active:scale-95 shadow-lg shadow-blue-600/20"
                        >
                            <TrendingUp size={16} />
                            <span>Get Free Consultation</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
