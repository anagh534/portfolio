import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Palette, ShoppingCart, Package, Gauge, PenLine, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: "WordPress Developer Kerala | Custom WordPress Development | ANAGH K R",
    description: "Professional WordPress development services in Kerala. Custom themes, plugin development, WooCommerce stores, and business websites by ANAGH K R. Serving Kochi, Kozhikode, Kasaragod, Kannur, and all Kerala.",
    keywords: "WordPress developer Kerala, WordPress development services Kerala, custom WordPress website Kerala, WordPress theme developer Kerala, WooCommerce developer Kerala, WordPress developer Kochi, WordPress developer Kozhikode, WordPress developer Kasaragod, WordPress developer Kannur, WordPress website design Kerala, hire WordPress developer Kerala, WordPress development Thrissur, WordPress developer Thiruvananthapuram, WordPress e-commerce Kerala, WordPress plugin development Kerala",
    alternates: { canonical: "https://www.anaghkr.in/wordpress-development" },
    openGraph: {
        title: "WordPress Developer Kerala | Custom WordPress Websites | ANAGH K R",
        description: "Professional WordPress development — custom themes, WooCommerce stores, and business websites for clients across Kerala.",
        url: "https://www.anaghkr.in/wordpress-development",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "WordPress Developer Kerala | ANAGH K R",
        description: "Custom WordPress development services in Kerala — themes, plugins, and WooCommerce stores.",
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
            title="Custom WordPress"
            titleHighlight="Websites & Stores"
            description="Professional WordPress development — beautifully designed, easy to manage, and built with performance and SEO in mind. From business websites to full WooCommerce stores, all crafted for Kerala businesses."
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
                { question: "Do you develop WordPress websites in Kasaragod and Kozhikode?", answer: "Yes, WordPress development services are available across all Kerala cities — Kochi, Kozhikode, Kasaragod, Kannur, Thrissur, Thiruvananthapuram, and more, with both in-person and remote options." },
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
