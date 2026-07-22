export const metadata = {
    title: "Resume — ANAGH K R | Flutter & MERN Stack Developer",
    description: "View the professional resume of Anagh K R, an experienced Flutter and MERN stack developer with 3+ years expertise building high-performance web and mobile apps.",
    keywords: "Anagh K R resume, Flutter developer resume, MERN stack developer resume, software engineer Kerala, freelance developer profile",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/resume/",
    },
};

import { Download, Briefcase, GraduationCap, Code, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export default function Resume() {
    const experience = [
        {
            title: "Senior Full Stack Developer (Freelance)",
            company: "Self-Employed",
            period: "2021 — Present",
            description: "View the professional resume of Anagh K R, an experienced Flutter and MERN stack developer with 3+ years expertise building high-performance web and mobile apps.",
            highlights: [
                "Architected and deployed custom MERN stack custom web apps solutions with Razorpay integration.",
                "Developed cross-platform mobile applications using Flutter & Firebase for global clients.",
                "Optimized web performance and SEO, achieving significant improvements in search visibility.",
                "Managed end-to-end development lifecycles for startups and established businesses in Kerala."
            ]
        },
        {
            title: "Software Developer",
            company: "Freelance Projects",
            period: "2020 — 2021",
            description: "View the professional resume of Anagh K R, an experienced Flutter and MERN stack developer with 3+ years expertise building high-performance web and mobile apps.",
            highlights: [
                "Built and launched multiple portfolio websites and landing pages for local businesses.",
                "Implemented RESTful APIs and integrated third-party services for dynamic content.",
                "Collaborated with designers to translate UI/UX designs into functional code."
            ]
        }
    ];

    const education = [
        {
            degree: "Bachelor's in Computer Applications (BCA)",
            institution: "Sa-Adiya Arts & Science College",
            location: "Kasaragod, Kerala",
            period: "2018 — 2021"
        }
    ];

    const skills = [
        { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript (ES6+)"] },
        { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "REST APIs"] },
        { category: "Mobile", items: ["Flutter", "Dart", "Firebase", "App Store/Play Store Deployment"] },
        { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Postman"] }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>

            <div className="max-w-5xl mx-auto space-y-16 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                            RESU<span className="text-blue-500">ME</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-medium max-w-xl">
                            Specializing in building scalable web and mobile applications with Flutter & MERN Stack.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <MapPin size={16} className="text-blue-500" />
                                <span>Kasaragod, Kerala, India</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Mail size={16} className="text-blue-500" />
                                <span>anaghkrkkl@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <a 
                            href="https://drive.google.com/file/d/1EaHneU1Zsyadr8Xoppa2We7laj-nrnQJ/view?usp=sharing" 
                            target="_blank" 
                            className="px-8 py-4 rounded-2xl bg-white text-black font-black flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5 uppercase tracking-widest text-xs"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left Column: Experience & Education */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Experience */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                    <Briefcase size={24} />
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Work Experience</h2>
                            </div>
                            
                            <div className="space-y-12">
                                {experience.map((exp, i) => (
                                    <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-500 before:to-transparent">
                                        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wider mt-1">
                                                    <span>{exp.company}</span>
                                                    <span className="text-gray-600">•</span>
                                                    <span className="text-gray-500">{exp.period}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-400 leading-relaxed">
                                                {exp.description}
                                            </p>
                                            <ul className="space-y-3">
                                                {exp.highlights.map((item, j) => (
                                                    <li key={j} className="flex gap-3 text-sm text-gray-400">
                                                        <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                                    <GraduationCap size={24} />
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Education</h2>
                            </div>
                            
                            <div className="space-y-8">
                                {education.map((edu, i) => (
                                    <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl space-y-4 group hover:border-indigo-500/30 transition-all">
                                        <div className="flex justify-between items-start gap-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{edu.degree}</h3>
                                                <p className="text-gray-400 font-medium">{edu.institution}</p>
                                            </div>
                                            <span className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <MapPin size={14} />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Skills & Info */}
                    <div className="space-y-12">
                        {/* Skills */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                    <Code size={24} />
                                </div>
                                <h2 className="text-2xl font-black uppercase tracking-tight text-white">Skills</h2>
                            </div>
                            
                            <div className="space-y-6">
                                {skills.map((skillGroup, i) => (
                                    <div key={i} className="space-y-3">
                                        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest">{skillGroup.category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill, j) => (
                                                <span key={j} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-300 hover:border-blue-500/30 hover:text-blue-400 transition-all">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Contact Info Card */}
                        <section className="p-8 rounded-[40px] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-white/10 backdrop-blur-xl space-y-6">
                            <h3 className="text-xl font-black text-white uppercase tracking-tight">Available for Projects</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Currently accepting new projects and collaborations for mobile apps and web platforms.
                            </p>
                            <a href="/contact/" className="w-full py-4 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all active:scale-95 uppercase tracking-widest text-xs">
                                Hire Me
                                <Globe size={16} />
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
