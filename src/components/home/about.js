import { Code2, CheckCircle2, MapPin } from 'lucide-react';

export default function About() {
    return (
        <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header - glides in from TOP via GSAP */}
                <div className="text-center mb-10 md:mb-16" data-gsap="from-top">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Me</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Left Column: Profile Card Showcase - glides in from LEFT via GSAP */}
                    <div className="lg:col-span-5 relative flex justify-center" data-gsap="from-left">
                        <div className="relative group w-full max-w-[400px]">
                            {/* Ambient Glow */}
                            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-600/15 blur-3xl rounded-full -z-10" />
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600/15 blur-3xl rounded-full -z-10" />

                            {/* Image Container Card */}
                            <div className="relative rounded-[36px] p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                                <div className="relative overflow-hidden rounded-[30px] aspect-[4/5] bg-slate-950">
                                    <img
                                        src="/assets/about-500.webp"
                                        alt="Anagh K R - Freelance Web & Software Developer in Kerala"
                                        srcSet="/assets/about-320.webp 320w, /assets/about-500.webp 500w, /assets/about-640.webp 640w, /assets/about.webp 924w"
                                        width={500}
                                        height={625}
                                        sizes="(max-width: 640px) calc(100vw - 3rem), 400px"
                                        loading="lazy"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    {/* Overlay Card Details */}
                                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-base leading-tight">Anagh K R</h3>
                                                <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                                                    <MapPin size={12} className="text-blue-400" />
                                                    <span>Kerala, India &bull; Remote Worldwide</span>
                                                </p>
                                            </div>
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Available for hire" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Top-Right Stat Badge */}
                            <div className="absolute -top-3 -right-3 sm:-right-4 px-4 py-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 shadow-xl flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                                <div className="w-7 h-7 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Code2 size={16} />
                                </div>
                                <div>
                                    <div className="text-white font-black text-xs">3+ Years</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Experience</div>
                                </div>
                            </div>

                            {/* Floating Bottom-Left Stat Badge */}
                            <div className="absolute -bottom-3 -left-3 sm:-left-4 px-4 py-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 shadow-xl flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div>
                                    <div className="text-white font-black text-xs">24+ Projects</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Delivered</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Story & Quality Pillars - glides in from RIGHT via GSAP */}
                    <div className="lg:col-span-7 space-y-6" data-gsap="from-right">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3">
                                From a basic HP laptop during lockdown to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">engineering global products</span>.
                            </h3>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-3">
                                I started programming and freelancing during my college days amidst the COVID-19 pandemic. Armed only with an entry-level, basic-spec HP laptop and relentless curiosity, I self-taught code from scratch. As I progressed into mobile application development, I set a clear personal ambition: work tirelessly to level up my craft and earn my dream MacBook for my engineering workspace.
                            </p>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3">
                                That drive earned me a part-time role as a <strong className="text-white font-medium">MERN Stack Developer at Dotscape, a Canadian software firm, for 1.2 years</strong>, followed by <strong className="text-white font-medium">1.5 years engineering core architectures at a product-based company</strong>. Through hard work and client delivery, I bought my dream MacBook through my own earned income.
                            </p>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                Today, I bring that combined international agency and product-engineering discipline full-time to freelancing—crafting high-performance websites, scalable web applications, and fluid mobile apps for ambitious founders in Kerala and worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
