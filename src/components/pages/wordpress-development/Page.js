import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Palette, ShoppingCart, Package, Gauge, PenLine, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: "Freelance WordPress Developer Kerala | WordPress Development Kozhikode & Calicut | ANAGH K R",
    description: "Top-rated freelance WordPress developer in Kerala. Custom WordPress development company serving Kozhikode (Calicut), Trivandrum, and all over Kerala. Specializing in LMS and custom sites.",
    keywords: "wordpress development kozhikode, wordpress development calicut, wordpress development company calicut, freelance wordpress developer kerala, lms development companies in trivandrum, wordpress customization kerala, learn dash developer kerala",
    alternates: { canonical: "https://www.anaghkr.in/wordpress-development" },
    openGraph: {
        title: "WordPress Developer Kerala | Custom WordPress Websites | ANAGH K R",
        description: "Professional WordPress development — custom themes, WooCommerce stores, and business websites for clients across Kerala.",
        url: "https://www.anaghkr.in/wordpress-development",
        type: "website",
        images: [
            {
                url: "https://www.anaghkr.in/assets/services/webdesign.webp",
                width: 1200,
                height: 630,
                alt: "WordPress Developer Kerala - Custom WordPress Website Development",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WordPress Developer Kerala | ANAGH K R",
        description: "Custom WordPress development services in Kerala — themes, plugins, and WooCommerce stores.",
        images: ["https://www.anaghkr.in/assets/services/webdesign.webp"],
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "WordPress Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
    "serviceType": "WordPress Development",
    "areaServed": "Kerala, India",
    "description": "Custom WordPress website development, theme customization, plugin integration, and WooCommerce store setup for businesses across Kerala.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/wordpress-development"
};

export default function WordPressDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="WordPress Development"
            title="Freelance WordPress Developer in"
            titleHighlight="Kerala"
            description="From custom business websites and LMS platforms to full WooCommerce stores. Based in Kerala, I provide specialized WordPress development for clients in Kozhikode (Calicut), Trivandrum, and beyond."
            heroStats={[
                { number: "CMS", label: "Easy Management" },
                { number: "WooCommerce", label: "E-commerce Ready" },
                { number: "Fast", label: "Optimized Performance" },
                { number: "SEO", label: "Built-in Optimization" },
            ]}
            whatYouGet={[
                { icon: <Palette size={22} />, title: "Custom Theme Design", desc: "Unique, brand-aligned WordPress themes built from scratch or Figma designs — not cookie-cutter templates." },
                { icon: <ShoppingCart size={22} />, title: "WooCommerce Stores", desc: "Full-featured online stores with product catalogs, cart, payment gateways, shipping rules, and inventory management." },
                { icon: <Package size={22} />, title: "Plugin Development", desc: "Custom WordPress plugins for unique functionality not available off the shelf — tailored exactly to your needs." },
                { icon: <Gauge size={22} />, title: "Speed Optimization", desc: "Image compression, caching, CDN setup, and Core Web Vitals tuning for fast-loading, Google-friendly sites." },
                { icon: <PenLine size={22} />, title: "Easy Content Management", desc: "Gutenberg or Elementor-based layouts so you can update your own content, images, and pages without a developer." },
                { icon: <ShieldCheck size={22} />, title: "Security & Backups", desc: "Hardened WordPress security, malware protection, SSL setup, and automated backup systems for peace of mind." },
            ]}
            technologies={[
                { category: "WordPress Stack", items: ["WordPress 6.x", "PHP 8", "MySQL", "Custom Themes", "Child Themes"] },
                { category: "Page Builders", items: ["Gutenberg", "Elementor Pro", "WPBakery", "Beaver Builder", "Divi"] },
                { category: "E-commerce", items: ["WooCommerce", "Payment Gateways", "Razorpay", "PayPal", "Shipping Plugins"] },
                { category: "Performance & SEO", items: ["Yoast SEO", "WP Rocket", "Cloudflare", "LiteSpeed Cache", "Smush"] },
            ]}
            process={[
                { title: "Discovery & Plan", desc: "Understand your business goals, content structure, and features needed before any design work." },
                { title: "Design & Theme", desc: "Craft a custom design in Figma and develop a performant WordPress theme aligned with your brand." },
                { title: "Content & Plugin Setup", desc: "Populate all pages, configure plugins, set up forms, SEO, and integrations per your requirements." },
                { title: "Launch & Train", desc: "Deploy, run performance checks, and provide a walkthrough so you can manage your site confidently." },
            ]}
            faqs={[
                { question: "Why choose WordPress for my business website?", answer: "WordPress powers over 43% of the web. It offers a user-friendly CMS so you can manage content yourself, a massive ecosystem of plugins, and great SEO capabilities — making it ideal for business websites, blogs, and e-commerce." },
                { question: "How much does a WordPress website cost in Kerala?", answer: "A custom WordPress business website in Kerala typically starts from ₹8,000–₹15,000 for basic sites, ₹20,000–₹50,000 for feature-rich sites with custom theme and plugins, and ₹60,000+ for WooCommerce stores." },
                { question: "Can I update my WordPress site myself?", answer: "Yes — that's one of WordPress's biggest advantages. I set up your site with an easy-to-use editor (Gutenberg or Elementor) and provide training so you can update content, add pages, and manage products without touching code." },
                { question: "Can you migrate my existing website to WordPress?", answer: "Yes. I can migrate from any platform — Wix, Squarespace, Joomla, or static HTML — to WordPress, preserving your content, URLs, and SEO rankings." },
                { question: "Are you a WordPress development company in Calicut (Kozhikode)?", answer: "Yes, I offer dedicated freelance WordPress development services to clients in Calicut/Kozhikode, providing the quality of an agency with the dedicated support of a freelancer." },
                { question: "Do you build Learning Management Systems (LMS) in Trivandrum?", answer: "Absolutely. I integrate LearnDash and TutorLMS into WordPress to create powerful e-learning platforms for institutions and tutors across Trivandrum and all of Kerala." },
                { question: "Is WordPress good for e-commerce?", answer: "Yes, with WooCommerce — the world's most popular e-commerce plugin. It supports unlimited products, multiple payment gateways, shipping rules, inventory management, and connects to every major payment processor in India." },
            ]}
            relatedServices={[
                { title: "E-commerce Development", desc: "Advanced online stores and marketplaces", href: "/ecommerce-development" },
                { title: "Web Development", desc: "Custom full-stack web development", href: "/web-development" },
                { title: "React Development", desc: "Headless WordPress with React frontends", href: "/react-development" },
                { title: "Next.js Development", desc: "Headless CMS with Next.js", href: "/nextjs-development" },
                { title: "MERN Stack Development", desc: "Custom CMS alternatives", href: "/mern-stack-development" },
                { title: "Mobile App Development", desc: "Mobile app companion to your website", href: "/mobile-app-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
