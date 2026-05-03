import {
    Github,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    ArrowUp,
    Heart,
    Send
} from 'lucide-react';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Services', href: '/services/' },
    { label: 'Works', href: '/#works/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
];

const services = [
    { label: 'Web Development', href: '/web-development/' },
    { label: 'E-commerce', href: '/ecommerce-development/' },
    { label: 'Mobile Apps', href: '/mobile-app-development/' },
    { label: 'MERN Stack', href: '/mern-stack-development/' },
    { label: 'WordPress', href: '/wordpress-development/' },
    { label: 'Instagram Store', href: '/instagram-store-development/' },
    { label: 'Shopify Store', href: '/shopify-store-development/' },
];

const locations = [
    { label: 'Kochi', href: '/locations/kochi/' },
    { label: 'Trivandrum', href: '/locations/thiruvananthapuram/' },
    { label: 'Kozhikode', href: '/locations/kozhikode/' },
    { label: 'Thrissur', href: '/locations/thrissur/' },
    { label: 'Ernakulam', href: '/locations/ernakulam/' },
    { label: 'Kannur', href: '/locations/kannur/' },
    { label: 'Kasaragod', href: '/locations/kasaragod/' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* Native CSS for details/summary accordion — no JS needed */}
            <style>{`
                .footer-details summary { list-style: none; }
                .footer-details summary::-webkit-details-marker { display: none; }
                .footer-details .chevron { transition: transform 0.25s ease; }
                .footer-details[open] .chevron { transform: rotate(180deg); }
                .footer-details .footer-body {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.3s ease;
                }
                .footer-details[open] .footer-body {
                    grid-template-rows: 1fr;
                }
                .footer-body-inner { overflow: hidden; }

                @media (min-width: 768px) {
                    .footer-details summary .chevron { display: none; }
                    .footer-details .footer-body { grid-template-rows: 1fr !important; }
                    .footer-details summary { cursor: default; pointer-events: none; }
                }
            `}</style>

            <footer className="relative pt-16 md:pt-24 overflow-hidden border-t border-white/5">
                <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">

                    {/* ── Top band: brand + contact + socials ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pb-10 md:pb-14 border-b border-white/5">
                        {/* Brand */}
                        <div className="space-y-4">
                            <a href="/" className="inline-block">
                                <span className="text-2xl font-black tracking-tighter text-white">
                                    ANAGH<span className="text-blue-500">.KR</span>
                                </span>
                            </a>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                                Freelance Flutter &amp; MERN stack developer in Kerala — crafting
                                high-performance websites and mobile apps for businesses across India.
                            </p>
                            <div className="flex gap-3 pt-1">
                                <a href="https://github.com/anagh534" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all">
                                    <Github size={17} />
                                </a>
                                <a href="https://www.linkedin.com/in/anagh-k-r/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all">
                                    <Linkedin size={17} />
                                </a>
                                <a href="https://instagram.com/mr._uni_que___" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all">
                                    <Instagram size={17} />
                                </a>
                            </div>
                        </div>

                        {/* Contact + CTA */}
                        <div className="flex flex-col justify-between gap-5">
                            <ul className="space-y-3">
                                <li>
                                    <a href="mailto:anaghkrkkl@gmail.com"
                                        className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                                        <span className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                                            <Mail size={15} />
                                        </span>
                                        anaghkrkkl@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+918075541805"
                                        className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                                        <span className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                                            <Phone size={15} />
                                        </span>
                                        +91 8075541805
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-400">
                                    <span className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                        <MapPin size={15} />
                                    </span>
                                    Kasaragod, Kerala, India
                                </li>
                            </ul>

                            {/* CTAs */}
                            <div className="flex gap-3 flex-wrap">
                                <a href="/contact/"
                                    className="flex-1 min-w-[120px] py-3 px-5 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-500/20">
                                    <Send size={14} />
                                    <span>Get in Touch</span>
                                </a>
                                <a href="/locations/"
                                    className="flex-1 min-w-[120px] py-3 px-5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-95">
                                    <MapPin size={14} />
                                    <span>Locations</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Accordion link columns ── */}
                    <div className="md:grid md:grid-cols-3 md:gap-10 py-4 md:py-10">

                        {/* Quick Links */}
                        <details className="footer-details border-b border-white/5 md:border-0">
                            <summary className="flex items-center justify-between py-4 md:py-0 md:mb-5 cursor-pointer">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 md:text-white">Quick Links</span>
                                <svg className="chevron w-4 h-4 text-gray-500 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="footer-body">
                                <div className="footer-body-inner">
                                    <ul className="space-y-3 pb-4 md:pb-0">
                                        {quickLinks.map(link => (
                                            <li key={link.href}>
                                                <a href={link.href} className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-all shrink-0"></span>
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </details>

                        {/* Services */}
                        <details className="footer-details border-b border-white/5 md:border-0">
                            <summary className="flex items-center justify-between py-4 md:py-0 md:mb-5 cursor-pointer">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 md:text-white">Services</span>
                                <svg className="chevron w-4 h-4 text-gray-500 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="footer-body">
                                <div className="footer-body-inner">
                                    <ul className="space-y-3 pb-4 md:pb-0">
                                        {services.map(item => (
                                            <li key={item.href}>
                                                <a href={item.href} className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-all shrink-0"></span>
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                        <li className="pt-1">
                                            <a href="/services/" className="text-[10px] font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors">
                                                View All Services →
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>

                        {/* Locations */}
                        <details className="footer-details md:border-0">
                            <summary className="flex items-center justify-between py-4 md:py-0 md:mb-5 cursor-pointer">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 md:text-white">Locations</span>
                                <svg className="chevron w-4 h-4 text-gray-500 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="footer-body">
                                <div className="footer-body-inner">
                                    <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3 pb-4 md:pb-0">
                                        {locations.map(item => (
                                            <li key={item.href}>
                                                <a href={item.href} className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-all shrink-0"></span>
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                        <li className="col-span-2 md:col-span-1 pt-1">
                                            <a href="/locations/" className="text-[10px] font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors">
                                                View All Locations →
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* ── Bottom bar ── */}
                    <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-[11px] text-gray-500 font-medium order-2 sm:order-1">
                            © {currentYear} ANAGH K R. ALL RIGHTS RESERVED.
                        </p>
                        <p className="text-[11px] text-gray-500 flex items-center gap-1.5 order-1 sm:order-2">
                            MADE WITH <Heart size={11} className="text-red-500 fill-current" /> BY ANAGH
                        </p>
                    </div>
                </div>

                {/* Back to Top */}
                <a
                    className="fixed bottom-6 right-5 md:bottom-8 md:right-8 p-3 md:p-4 rounded-2xl bg-blue-600 text-white shadow-2xl shadow-blue-500/20 hover:bg-blue-500 hover:-translate-y-1 transition-all z-40 active:scale-95"
                    href="#main-content"
                    aria-label="Back to top"
                >
                    <ArrowUp size={18} />
                </a>

                {/* Background Decor */}
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
            </footer>
        </>
    );
};

export default Footer;
