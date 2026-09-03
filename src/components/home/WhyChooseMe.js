import { motion } from 'framer-motion';
import {
    Award,
    Users,
    Code2,
    Sparkles,
    ShieldCheck,
    Smartphone,
    Zap
} from 'lucide-react';

const features = [
    {
        icon: <Sparkles size={24} />,
        title: "Premium Quality",
        desc: "Clean, maintainable code following modern industry best practices for long-term scalability and stability."
    },
    {
        icon: <Zap size={24} />,
        title: "Fast Delivery",
        desc: "Agile development workflow with regular milestone updates, rapid feedback loops, and on-time project launch."
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Secure & Scalable",
        desc: "Robust architecture with enterprise-level security, optimized database schemas, and cloud-ready infrastructure."
    },
    {
        icon: <Smartphone size={24} />,
        title: "Mobile-First Design",
        desc: "Fluid, responsive interfaces crafted to deliver a flawless user experience across phones, tablets, and desktops."
    }
];

const stats = [
    { label: "Years Experience", value: "3+", icon: <Award size={20} /> },
    { label: "Projects Delivered", value: "24+", icon: <Code2 size={20} /> },
    { label: "Satisfied Clients", value: "18+", icon: <Users size={20} /> },
    { label: "On-Time Delivery", value: "100%", icon: <Zap size={20} /> }
];

export default function WhyChooseMe() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden" id="why-me">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Standard Section Header Container */}
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Choose Me?</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
                        As an experienced freelance website and mobile developer in Kerala, I combine technical precision with business insight to build digital products that drive real growth.
                    </p>
                </motion.div>

                {/* 4 Feature Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 group flex flex-col justify-between"
                            variants={itemVariants}
                        >
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-500/10">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Simple & Clean Stats Container Beneath */}
                <motion.div
                    className="mt-8 md:mt-12 p-6 sm:p-8 md:p-10 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center space-y-2">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-3">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
