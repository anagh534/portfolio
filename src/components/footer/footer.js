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

                /* Back-to-top: hidden until user hits the bottom */
                #back-to-top {
                    opacity: 0;
                    pointer-events: none;
                    transform: translateY(12px);
                    transition: opacity .3s ease, transform .3s ease;
                }
                #back-to-top.visible {
                    opacity: 1;
                    pointer-events: auto;
                    transform: translateY(0);
                }
                #back-to-top:hover { transform: translateY(-4px) !important; }
                #back-to-top:active { transform: scale(0.94) !important; }

                @media (min-width: 1024px) {
                    .fd summary { pointer-events: none; cursor: default; }
                    .fd summary .fd-chev { display: none; }
                    .fd > .fd-body {
                        display: grid !important;
                        grid-template-rows: 1fr !important;
                    }
                }
            `}</style>

            <footer className="relative pt-20 pb-8 overflow-hidden border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* ─── 5-column grid ─── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">

                        {/* Col 1 — Brand & Contact */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="space-y-4">
                                <a href="/" aria-label="ANAGH K R — Home">
                                    <span className="text-2xl font-black tracking-tighter text-white">
                                        ANAGH<span className="text-blue-500">.KR</span>
                                    </span>
                                </a>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Crafting high-performance digital experiences with a focus on
                                    innovation, quality, and user-centric design.
                                </p>
                            </div>
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
                            <address className="not-italic space-y-3 pt-2">
                                <a href="mailto:anaghkrkkl@gmail.com"
                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Mail size={16} className="text-blue-400 shrink-0" />
                                    <span>anaghkrkkl@gmail.com</span>
                                </a>
                                <a href="tel:+918281571805"
                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Phone size={16} className="text-blue-400 shrink-0" />
                                    <span>+91 8281571805</span>
                                </a>
                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                    <MapPin size={16} className="text-blue-400 shrink-0" />
                                    <span>Kerala, India</span>
                                </div>
                            </address>
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
                                                { label: 'Portfolio', href: '/portfolio/' },
                                                { label: 'NRI & Remote Dev', href: '/hire-kerala-developer-remotely/' },
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

                        {/* Col 3 — Core Services */}
                        <details className="fd lg:col-span-1" open>
                            <summary className="flex items-center justify-between mb-5 cursor-pointer lg:cursor-default">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-white">Core Services</h3>
                                <svg className="fd-chev w-4 h-4 text-gray-500 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="fd-body">
                                <div className="fd-inner">
                                    <nav aria-label="Core Services">
                                        <ul className="space-y-3 pb-4 lg:pb-0">
                                            {[
                                                { label: 'Web Development', href: '/web-development/' },
                                                { label: 'Mobile Apps', href: '/mobile-app-development/' },
                                                { label: 'Flutter Apps', href: '/flutter-app-development/' },
                                                { label: 'React JS Dev', href: '/react-development/' },
                                                { label: 'Next.js Development', href: '/nextjs-development/' },
                                                { label: 'Node.js Development', href: '/nodejs-development/' },
                                                { label: 'MERN Stack Dev', href: '/mern-stack-development/' },
                                                { label: 'Hire Remote Dev', href: '/hire-kerala-developer-remotely/' },
                                            ].map(item => (
                                                <li key={item.href} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 shrink-0"></span>
                                                    <a href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </details>

                        {/* Col 4 — Specialized Solutions */}
                        <details className="fd lg:col-span-1" open>
                            <summary className="flex items-center justify-between mb-5 cursor-pointer lg:cursor-default">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-white">Specialized Solutions</h3>
                                <svg className="fd-chev w-4 h-4 text-gray-500 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="fd-body">
                                <div className="fd-inner">
                                    <nav aria-label="Specialized Solutions">
                                        <ul className="space-y-3 pb-4 lg:pb-0">
                                            {[
                                                { label: 'CRM Software', href: '/crm-software/' },
                                                { label: 'ERP Software', href: '/erp-software/' },
                                                { label: 'Restaurant POS', href: '/restaurant-software/' },
                                                { label: 'Billing Software', href: '/billing-software/' },
                                                { label: 'Attendance System', href: '/attendance-tracking-system/' },
                                                { label: 'AI Chatbots', href: '/ai-chatbots/' },
                                                { label: 'WhatsApp AI Bot', href: '/whatsapp-ai-bot/' },
                                                { label: 'eCommerce Software', href: '/ecommerce-software/' },
                                                { label: 'Chat Apps', href: '/chat-app-development/' },
                                                { label: 'Dating Apps', href: '/dating-app-development/' },
                                            ].map(item => (
                                                <li key={item.href} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 shrink-0"></span>
                                                    <a href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </details>

                        {/* Col 5 — Locations */}
                        <details className="fd lg:col-span-1" open>
                            <summary className="flex items-center justify-between mb-5 cursor-pointer lg:cursor-default">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-white">Locations</h3>
                                <svg className="fd-chev w-4 h-4 text-gray-500 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="fd-body">
                                <div className="fd-inner">
                                    <nav aria-label="Service locations in GCC and India">
                                        <div className="space-y-4 pb-4 lg:pb-0">
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-2">GCC & Gulf Hubs</span>
                                                <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                                                    {[
                                                        { label: 'Dubai', href: '/locations/dubai/' },
                                                        { label: 'Abu Dhabi', href: '/locations/abu-dhabi/' },
                                                        { label: 'Sharjah', href: '/locations/sharjah/' },
                                                        { label: 'Doha, Qatar', href: '/locations/doha/' },
                                                        { label: 'Riyadh, KSA', href: '/locations/riyadh/' },
                                                        { label: 'Muscat, Oman', href: '/locations/muscat/' },
                                                        { label: 'Kuwait City', href: '/locations/kuwait/' },
                                                        { label: 'Bahrain', href: '/locations/bahrain/' },
                                                    ].map(item => (
                                                        <div key={item.href} className="flex items-center gap-1.5">
                                                            <span className="w-1 h-1 rounded-full bg-blue-500/40 shrink-0"></span>
                                                            <a href={item.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                                                                {item.label}
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-2">Kerala & India</span>
                                                <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                                                    {[
                                                        { label: 'Kochi', href: '/locations/kochi/' },
                                                        { label: 'Trivandrum', href: '/locations/thiruvananthapuram/' },
                                                        { label: 'Kozhikode', href: '/locations/kozhikode/' },
                                                        { label: 'Thrissur', href: '/locations/thrissur/' },
                                                        { label: 'Ernakulam', href: '/locations/ernakulam/' },
                                                        { label: 'Calicut', href: '/locations/calicut/' },
                                                        { label: 'Kannur', href: '/locations/kannur/' },
                                                        { label: 'Kasaragod', href: '/locations/kasaragod/' },
                                                        { label: 'Kanhangad', href: '/locations/kanhangad/' },
                                                        { label: 'Palakkad', href: '/locations/palakkad/' },
                                                        { label: 'Kollam', href: '/locations/kollam/' },
                                                        { label: 'Mangalore', href: '/locations/mangalore/' },
                                                        { label: 'Coimbatore', href: '/locations/coimbatore/' },
                                                        { label: 'Chennai', href: '/locations/chennai/' },
                                                    ].map(item => (
                                                        <div key={item.href} className="flex items-center gap-1.5">
                                                            <span className="w-1 h-1 rounded-full bg-blue-500/40 shrink-0"></span>
                                                            <a href={item.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                                                                {item.label}
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* ─── Bottom bar ─── */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-400 font-medium tracking-wider">
                            © {currentYear} ANAGH K R. ALL RIGHTS RESERVED.
                        </p>
                        <p className="text-xs text-gray-400 flex items-center gap-1.5 tracking-wider">
                            MADE WITH <Heart size={11} className="text-red-500 fill-current" /> BY ANAGH
                        </p>
                    </div>
                </div>

                {/* ─── Back to Top ─── */}
                <a id="back-to-top" href="#main-content" aria-label="Back to top"
                    className="fixed bottom-24 right-5 md:bottom-28 md:right-8 p-3.5 rounded-2xl bg-blue-600 text-white shadow-2xl shadow-blue-500/20 z-40">
                    <ArrowUp size={20} />
                </a>

                {/* Intersection observer: show back-to-top only at page bottom */}
                <script dangerouslySetInnerHTML={{
                    __html: `
                    document.addEventListener('DOMContentLoaded', function() {
                        var btn = document.getElementById('back-to-top');
                        var footer = document.querySelector('footer');
                        if (!btn || !footer) return;
                        var observer = new IntersectionObserver(function(entries) {
                            entries.forEach(function(entry) {
                                if (entry.isIntersecting) {
                                    btn.classList.add('visible');
                                } else {
                                    btn.classList.remove('visible');
                                }
                            });
                        }, { rootMargin: '100px 0px 0px 0px' });
                        observer.observe(footer);
                    });
                ` }} />

                {/* Background glow */}
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
            </footer>
        </>
    );
};

export default Footer;
