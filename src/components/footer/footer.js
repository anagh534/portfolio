import {
    Github,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    ArrowUp,
    Heart,
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <style>{`
                /* Mobile accordion */
                .fd summary { list-style: none; }
                .fd summary::-webkit-details-marker { display: none; }
                .fd-chev { transition: transform .25s ease; }
                .fd[open] .fd-chev { transform: rotate(180deg); }
                .fd-body {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows .3s ease;
                }
                .fd[open] .fd-body { grid-template-rows: 1fr; }
                .fd-inner { overflow: hidden; }

                /* Desktop: always open */
                @media (min-width: 1024px) {
                    .fd summary { pointer-events: none; cursor: default; }
                    .fd summary .fd-chev { display: none; }
                    .fd > .fd-body {
                        display: grid !important;
                        grid-template-rows: 1fr !important;
                    }
                }

                /* WhatsApp floating button */
                @keyframes wa-ping {
                    0%   { transform: scale(1);   opacity: 0.8; }
                    70%  { transform: scale(1.9); opacity: 0; }
                    100% { transform: scale(1.9); opacity: 0; }
                }
                @keyframes wa-bounce {
                    0%, 100% { transform: translateY(0); }
                    30%      { transform: translateY(-6px); }
                    60%      { transform: translateY(-3px); }
                }
                .wa-btn { animation: wa-bounce 3s ease-in-out infinite; }
                .wa-btn:hover { animation: none; transform: scale(1.08); }
                .wa-btn:active { transform: scale(0.94); }
                .wa-ping {
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    background: #25d366;
                    animation: wa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
            `}</style>

            <footer className="relative pt-20 pb-8 overflow-hidden border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* ─── 5-column grid ─── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">

                        {/* Col 1 — Brand */}
                        <div className="lg:col-span-1 space-y-5">
                            <a href="/" aria-label="ANAGH K R — Home">
                                <span className="text-2xl font-black tracking-tighter text-white">
                                    ANAGH<span className="text-blue-500">.KR</span>
                                </span>
                            </a>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Crafting high-performance digital experiences with a focus on
                                innovation, quality, and user-centric design.
                            </p>
                            <div className="flex gap-3 pt-1">
                                <a href="https://github.com/anagh534" target="_blank" rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                                    <Github size={17} />
                                </a>
                                <a href="https://www.linkedin.com/in/anagh-k-r/" target="_blank" rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                                    <Linkedin size={17} />
                                </a>
                                <a href="https://instagram.com/mr._uni_que___" target="_blank" rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                                    <Instagram size={17} />
                                </a>
                            </div>
                        </div>

                        {/* Col 2 — Quick Links */}
                        <details className="fd lg:col-span-1" open>
                            <summary className="flex items-center justify-between mb-5 cursor-pointer lg:cursor-default">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h3>
                                <svg className="fd-chev w-4 h-4 text-gray-500 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="fd-body">
                                <div className="fd-inner">
                                    <nav aria-label="Quick links">
                                        <ul className="space-y-3 pb-4 lg:pb-0">
                                            {[
                                                { label: 'Home', href: '/' },
                                                { label: 'About', href: '/about/' },
                                                { label: 'Services', href: '/services/' },
                                                { label: 'Works', href: '/#works/' },
                                                { label: 'Blog', href: '/blog/' },
                                                { label: 'Contact', href: '/contact/' },
                                            ].map(link => (
                                                <li key={link.href} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 shrink-0"></span>
                                                    <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                                        {link.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </details>

                        {/* Col 3 — Services */}
                        <details className="fd lg:col-span-1" open>
                            <summary className="flex items-center justify-between mb-5 cursor-pointer lg:cursor-default">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-white">Services</h3>
                                <svg className="fd-chev w-4 h-4 text-gray-500 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="fd-body">
                                <div className="fd-inner">
                                    <nav aria-label="Services">
                                        <ul className="space-y-3 pb-4 lg:pb-0">
                                            {[
                                                { label: 'Web Development', href: '/web-development/' },
                                                { label: 'E-commerce', href: '/ecommerce-development/' },
                                                { label: 'Mobile Apps', href: '/mobile-app-development/' },
                                                { label: 'MERN Stack', href: '/mern-stack-development/' },
                                                { label: 'WordPress', href: '/wordpress-development/' },
                                                { label: 'Instagram Store', href: '/instagram-store-development/' },
                                                { label: 'Shopify Store', href: '/shopify-store-development/' },
                                            ].map(item => (
                                                <li key={item.href}>
                                                    <a href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                            <li className="pt-1">
                                                <a href="/services/" className="text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors">
                                                    View All Services
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </details>

                        {/* Col 4 — Locations */}
                        <details className="fd lg:col-span-1" open>
                            <summary className="flex items-center justify-between mb-5 cursor-pointer lg:cursor-default">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-white">Locations</h3>
                                <svg className="fd-chev w-4 h-4 text-gray-500 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="fd-body">
                                <div className="fd-inner">
                                    <nav aria-label="Service locations in Kerala">
                                        <ul className="space-y-3 pb-4 lg:pb-0">
                                            {[
                                                { label: 'Kochi', href: '/locations/kochi/' },
                                                { label: 'Trivandrum', href: '/locations/thiruvananthapuram/' },
                                                { label: 'Kozhikode', href: '/locations/kozhikode/' },
                                                { label: 'Thrissur', href: '/locations/thrissur/' },
                                                { label: 'Ernakulam', href: '/locations/ernakulam/' },
                                                { label: 'Kannur', href: '/locations/kannur/' },
                                                { label: 'Kasaragod', href: '/locations/kasaragod/' },
                                            ].map(item => (
                                                <li key={item.href}>
                                                    <a href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                            <li className="pt-1">
                                                <a href="/locations/" className="text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors">
                                                    View All Locations
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </details>

                        {/* Col 5 — Contact */}
                        <div className="lg:col-span-1 space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Contact</h3>
                            <address className="not-italic space-y-3">
                                <a href="mailto:anaghkrkkl@gmail.com"
                                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Mail size={16} className="text-blue-400 shrink-0 mt-0.5" />
                                    <span>anaghkrkkl@gmail.com</span>
                                </a>
                                <a href="tel:+918075541805"
                                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Phone size={16} className="text-blue-400 shrink-0 mt-0.5" />
                                    <span>+91 8075541805</span>
                                </a>
                                <p className="flex items-start gap-3 text-sm text-gray-400">
                                    <MapPin size={16} className="text-blue-400 shrink-0 mt-0.5" />
                                    <span>Kerala, India</span>
                                </p>
                            </address>
                        </div>
                    </div>

                    {/* ─── Bottom bar ─── */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-500 font-medium tracking-wider">
                            © {currentYear} ANAGH K R. ALL RIGHTS RESERVED.
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1.5 tracking-wider">
                            MADE WITH <Heart size={11} className="text-red-500 fill-current" /> BY ANAGH
                        </p>
                    </div>
                </div>

                {/* ─── Floating WhatsApp button (every page) ─── */}
                <a
                    href="https://wa.me/918075541805?text=Hello%2C%20I%20am%20interested%20in%20your%20web%20development%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="wa-btn fixed bottom-24 right-5 md:bottom-28 md:right-8 z-50"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {/* Pulse ring */}
                    <span className="wa-ping" aria-hidden="true"></span>
                    {/* WhatsApp icon pill */}
                    <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366] shadow-xl shadow-green-500/30">
                        {/* Official WhatsApp SVG */}
                        <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.65 4.896 1.885 7.02L2 30l7.17-1.855A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.514 11.514 0 0 1-5.864-1.607l-.42-.25-4.253 1.1 1.127-4.125-.274-.435A11.473 11.473 0 0 1 4.462 16c0-6.368 5.174-11.538 11.542-11.538S27.538 9.636 27.538 16c0 6.368-5.17 11.538-11.534 11.538zm6.328-8.638c-.347-.174-2.052-1.013-2.37-1.128-.318-.116-.55-.174-.78.174-.232.347-.9 1.128-1.1 1.36-.202.23-.405.26-.752.086-.347-.173-1.466-.54-2.793-1.724-1.033-.922-1.73-2.06-1.932-2.407-.202-.347-.022-.534.152-.707.156-.155.347-.405.52-.608.174-.2.232-.347.347-.578.116-.232.058-.434-.029-.608-.087-.173-.78-1.882-1.07-2.578-.282-.676-.57-.585-.78-.596l-.665-.012c-.231 0-.608.087-.925.434-.318.347-1.214 1.187-1.214 2.895s1.243 3.358 1.417 3.59c.173.23 2.447 3.736 5.93 5.24.83.358 1.478.572 1.983.732.833.265 1.592.228 2.19.138.668-.1 2.052-.839 2.343-1.649.29-.809.29-1.503.202-1.649-.086-.144-.318-.23-.665-.405z"/>
                        </svg>
                    </span>
                </a>

                {/* ─── Back to Top ─── */}
                <a href="#main-content" aria-label="Back to top"
                    className="fixed bottom-6 right-5 md:bottom-8 md:right-8 p-3.5 rounded-2xl bg-blue-600 text-white shadow-2xl shadow-blue-500/20 hover:bg-blue-500 hover:-translate-y-1 transition-all z-40 active:scale-95">
                    <ArrowUp size={20} />
                </a>

                {/* Background glow */}
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
            </footer>
        </>
    );
};

export default Footer;
