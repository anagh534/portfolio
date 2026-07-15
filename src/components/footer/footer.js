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

                /* WhatsApp floating button animations */
                @keyframes wa-ping-1 {
                    0%   { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(2.2); opacity: 0; }
                }
                @keyframes wa-ping-2 {
                    0%   { transform: scale(1); opacity: 0.4; }
                    100% { transform: scale(2.8); opacity: 0; }
                }
                @keyframes wa-shake {
                    0%, 100% { transform: rotate(0deg); }
                    10%       { transform: rotate(-12deg); }
                    20%       { transform: rotate(12deg); }
                    30%       { transform: rotate(-10deg); }
                    40%       { transform: rotate(10deg); }
                    50%       { transform: rotate(-6deg); }
                    60%       { transform: rotate(6deg); }
                    70%       { transform: rotate(0deg); }
                }
                .wa-ring-1 {
                    position: absolute; inset: 0;
                    border-radius: 50%;
                    background: #25d366;
                    animation: wa-ping-1 2s ease-out infinite;
                }
                .wa-ring-2 {
                    position: absolute; inset: 0;
                    border-radius: 50%;
                    background: #25d366;
                    animation: wa-ping-2 2s ease-out infinite .6s;
                }
                .wa-icon {
                    animation: wa-shake 4s ease-in-out infinite 2s;
                    transition: transform .2s ease;
                }
                .wa-icon:hover {
                    animation: none;
                    transform: scale(1.12);
                }
                .wa-icon:active { transform: scale(0.92); }

                /* Tooltip */
                .wa-label {
                    position: absolute;
                    right: calc(100% + 10px);
                    top: 50%;
                    transform: translateY(-50%);
                    background: #25d366;
                    color: white;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    white-space: nowrap;
                    padding: 5px 10px;
                    border-radius: 8px;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity .25s ease;
                }
                .wa-label::after {
                    content: '';
                    position: absolute;
                    left: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 5px solid transparent;
                    border-left-color: #25d366;
                }
                .wa-icon:hover .wa-label { opacity: 1; }
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
                                                { label: 'E-commerce Dev', href: '/ecommerce-development/' },
                                                { label: 'Shopify Store', href: '/shopify-store-development/' },
                                                { label: 'WordPress Dev', href: '/wordpress-development/' },
                                                { label: 'Chat Apps', href: '/chat-app-development/' },
                                                { label: 'Dating Apps', href: '/dating-app-development/' },
                                                { label: 'Clothing E-commerce', href: '/clothing-ecommerce-website-development/' },
                                                { label: 'Dropshipping Web', href: '/dropshipping-website-development/' },
                                                { label: 'Electronics E-commerce', href: '/electronics-ecommerce-website-development/' },
                                                { label: 'Instagram Store', href: '/instagram-store-development/' },
                                                { label: 'Shoe Store Dev', href: '/shoe-store-website-development/' },
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
                                    <nav aria-label="Service locations in Kerala, Karnataka, and Tamil Nadu">
                                        <div className="grid grid-cols-2 gap-x-2 gap-y-3 pb-4 lg:pb-0">
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

                {/* ─── Floating WhatsApp button (every page) ─── */}
                <a
                    href="https://wa.me/918281571805?text=Hello%2C%20I%20am%20interested%20in%20your%20web%20development%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="wa-icon fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed' }}
                >
                    {/* Dual pulse rings */}
                    <span className="wa-ring-1" aria-hidden="true"></span>
                    <span className="wa-ring-2" aria-hidden="true"></span>
                    {/* Tooltip */}
                    <span className="wa-label">Chat with me!</span>
                    {/* Button */}
                    <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366] shadow-xl shadow-green-500/30">
                        <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.65 4.896 1.885 7.02L2 30l7.17-1.855A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.514 11.514 0 0 1-5.864-1.607l-.42-.25-4.253 1.1 1.127-4.125-.274-.435A11.473 11.473 0 0 1 4.462 16c0-6.368 5.174-11.538 11.542-11.538S27.538 9.636 27.538 16c0 6.368-5.17 11.538-11.534 11.538zm6.328-8.638c-.347-.174-2.052-1.013-2.37-1.128-.318-.116-.55-.174-.78.174-.232.347-.9 1.128-1.1 1.36-.202.23-.405.26-.752.086-.347-.173-1.466-.54-2.793-1.724-1.033-.922-1.73-2.06-1.932-2.407-.202-.347-.022-.534.152-.707.156-.155.347-.405.52-.608.174-.2.232-.347.347-.578.116-.232.058-.434-.029-.608-.087-.173-.78-1.882-1.07-2.578-.282-.676-.57-.585-.78-.596l-.665-.012c-.231 0-.608.087-.925.434-.318.347-1.214 1.187-1.214 2.895s1.243 3.358 1.417 3.59c.173.23 2.447 3.736 5.93 5.24.83.358 1.478.572 1.983.732.833.265 1.592.228 2.19.138.668-.1 2.052-.839 2.343-1.649.29-.809.29-1.503.202-1.649-.086-.144-.318-.23-.665-.405z" />
                        </svg>
                    </span>
                </a>

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
