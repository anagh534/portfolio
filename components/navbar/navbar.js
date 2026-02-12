import {
    Menu,
    X,
    Home,
    User,
    Briefcase,
    Mail,
    Github,
    Linkedin,
    Instagram,
    Send,
    BookOpen
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/', label: 'Home', icon: <Home size={18} /> },
        { href: '/about', label: 'About', icon: <User size={18} /> },
        { href: '/services', label: 'Services', icon: <Briefcase size={18} /> },
        { href: '/blog', label: 'Blog', icon: <BookOpen size={18} /> },
        { href: '/contact', label: 'Contact', icon: <Mail size={18} /> }
    ];

    const socialLinks = [
        { href: 'https://github.com/anagh534', icon: <Github size={18} />, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/anagh-k-r/', icon: <Linkedin size={18} />, label: 'LinkedIn' },
        { href: 'https://instagram.com/mr._uni_que___', icon: <Instagram size={18} />, label: 'Instagram' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-2xl font-bold tracking-tighter text-white">
                        ANAGH<span className="text-blue-500 group-hover:text-blue-400 transition-colors">.KR</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-blue-400 relative py-1 ${pathname === item.href ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                {item.label}
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="h-6 w-px bg-gray-800 mx-2"></div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-blue-400 transition-all border border-white/5"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <Link href="/contact" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 active:scale-95">
                        <Send size={16} />
                        <span>Connect</span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 md:hidden bg-black/95 backdrop-blur-xl flex flex-col p-8 pt-24"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 text-white bg-white/5 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col gap-6 mb-12">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-4 text-2xl font-bold p-4 rounded-2xl transition-all ${pathname === item.href ? 'bg-blue-600/10 text-blue-500' : 'text-gray-300 hover:bg-white/5'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="p-3 rounded-xl bg-white/5">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-6 mt-auto pb-8">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.href} className="p-4 rounded-2xl bg-white/5 text-gray-400 hover:text-blue-400 border border-white/5 transition-colors">
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="w-full text-center py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Start a Conversation
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}