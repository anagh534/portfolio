import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Palette, Smartphone, Zap, Search, ShieldCheck, LayoutDashboard } from 'lucide-react';

export const metadata = {
    title: "Best Web Developer Kerala | Professional Website Development Services | ANAGH K R",
    description: "Top-rated web developer in Kerala offering professional custom website development, responsive web design, business websites, landing pages, and full-stack web applications. Expert in React, Next.js, Node.js, and modern web technologies. 5+ years experience with 24+ successful projects serving businesses across Kochi, Kozhikode, Thrissur, Kannur, Thiruvananthapuram, Kasaragod, and all Kerala. Affordable pricing, fast delivery, and SEO-optimized websites.",
    keywords: "web developer Kerala, best web developer Kerala, professional web developer Kerala, custom website development Kerala, hire web developer Kerala, website design Kerala, website design and development Kerala, web development services Kerala, responsive web design Kerala, business website development Kerala, full stack web developer Kerala, web developer Kochi, top web developer Kochi, web developer Kozhikode, web developer Kasaragod, web developer Kannur, web development Thrissur, web developer Thiruvananthapuram, web developer Kollam, web developer Palakkad, affordable web development Kerala, cheap website development Kerala, best website developer in Kerala, expert web developer Kerala, freelance web developer Kerala, React developer Kerala, Next.js developer Kerala, landing page development Kerala, website redesign Kerala, web app development Kerala, HTML CSS JavaScript developer Kerala, modern web development Kerala, SEO friendly website development, mobile responsive website Kerala",
    alternates: { canonical: "https://www.anaghkr.in/web-development" },
    openGraph: {
        title: "Best Web Developer Kerala | Professional Website Development | ANAGH K R",
        description: "Top-rated professional web development services in Kerala — custom websites, business web applications, responsive design, and full-stack solutions for businesses of all sizes across Kerala.",
        url: "https://www.anaghkr.in/web-development",
        type: "website",
        siteName: "ANAGH K R - Web Developer Kerala",
        locale: "en_IN",
        images: [{
            url: "https://www.anaghkr.in/assets/services/webdesign.webp",
            width: 1200,
            height: 630,
            alt: "Professional Web Development Services in Kerala"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Web Developer Kerala | ANAGH K R",
        description: "Expert custom website development services in Kerala — responsive, fast, SEO-optimized, and mobile-friendly websites for your business.",
        images: ["https://www.anaghkr.in/assets/services/webdesign.webp"]
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Web Development Services",
    "provider": { 
        "@type": "Person", 
        "name": "Anagh K R", 
        "url": "https://www.anaghkr.in",
        "jobTitle": "Web Developer",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        }
    },
    "serviceType": "Website Development and Design",
    "areaServed": [
        {"@type": "City", "name": "Kochi"},
        {"@type": "City", "name": "Kozhikode"},
        {"@type": "City", "name": "Thiruvananthapuram"},
        {"@type": "City", "name": "Thrissur"},
        {"@type": "City", "name": "Kannur"},
        {"@type": "City", "name": "Kollam"},
        {"@type": "City", "name": "Palakkad"},
        {"@type": "City", "name": "Kasaragod"},
        {"@type": "State", "name": "Kerala, India"}
    ],
    "description": "Professional custom website development, responsive web design, business websites, landing pages, and full-stack web application development services. Specialized in React, Next.js, Node.js, and modern web technologies for businesses across Kerala.",
    "offers": { 
        "@type": "Offer", 
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "8000",
            "priceCurrency": "INR"
        }
    },
    "mainEntityOfPage": "https://www.anaghkr.in/web-development",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Business Website Development"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Landing Page Development"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Website Redesign"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Responsive Web Design"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Full-Stack Web Application"}}
        ]
    }
};

export default function WebDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="Web Development Services"
            title="Custom Web"
            titleHighlight="Development"
            description="High-performance, responsive websites and web applications built to grow your business. From landing pages to complex full-stack solutions — delivered with clean code, fast load times, and SEO-ready architecture."
            heroStats={[
                { number: "24+", label: "Projects Delivered" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "11+", label: "Cities in Kerala" },
            ]}
            whatYouGet={[
                { icon: <Palette size={22} />, title: "Custom Design", desc: "Pixel-perfect, unique designs tailored to your brand identity and target audience, not generic templates." },
                { icon: <Smartphone size={22} />, title: "Fully Responsive", desc: "Your website looks and performs flawlessly on all devices — mobile, tablet, and desktop." },
                { icon: <Zap size={22} />, title: "Fast Loading", desc: "Optimized performance with sub-3-second load times using modern caching, lazy loading, and CDN integration." },
                { icon: <Search size={22} />, title: "SEO Ready", desc: "Built with proper semantic HTML, meta tags, structured data, and Core Web Vitals optimization from day one." },
                { icon: <ShieldCheck size={22} />, title: "Secure & Reliable", desc: "HTTPS, input validation, secure authentication, and best-practice security measures for every build." },
                { icon: <LayoutDashboard size={22} />, title: "Easy to Manage", desc: "Admin dashboards and CMS integration so you can update your own content without touching code." },
            ]}
            technologies={[
                { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
                { category: "Backend", items: ["Node.js", "Express.js", "REST API", "GraphQL", "WebSockets"] },
                { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"] },
                { category: "Deployment & Tools", items: ["Vercel", "AWS", "Docker", "Git", "CI/CD", "Cloudflare"] },
            ]}
            process={[
                { title: "Discovery", desc: "We discuss your goals, target audience, and project scope to map out the perfect solution." },
                { title: "Design", desc: "Wireframes and UI mockups are crafted in Figma for your approval before any code is written." },
                { title: "Development", desc: "Clean, scalable code is written using modern frameworks with regular progress updates." },
                { title: "Launch", desc: "Thorough testing, SEO setup, deployment, and handover with full documentation and support." },
            ]}
            faqs={[
                { question: "How much does a website cost in Kerala?", answer: "Website development costs vary depending on complexity. A basic business website starts around ₹8,000–₹20,000, while complex web applications can range from ₹30,000 upwards. Contact me for a free, tailored quote." },
                { question: "How long does it take to build a website?", answer: "A standard business website typically takes 1–3 weeks. Complex web apps or e-commerce platforms can take 4–8 weeks. Timeline depends on scope, content readiness, and feedback cycles." },
                { question: "Do you provide website maintenance after launch?", answer: "Yes. I offer ongoing maintenance packages including updates, bug fixes, security patches, and performance monitoring." },
                { question: "Which cities in Kerala do you serve?", answer: "I serve all major cities in Kerala including Kochi, Kozhikode, Thiruvananthapuram, Thrissur, Kannur, Kasaragod, Kollam, Palakkad, Ernakulam, Calicut, and Kanhangad. Remote projects are also welcome from anywhere in India." },
                { question: "Will my website rank on Google?", answer: "Every website I build is SEO-optimized with proper structure, meta tags, fast load times, and Core Web Vitals compliance — all strong ranking signals for Google." },
                { question: "Can you redesign my existing website?", answer: "Absolutely. I specialize in modernizing legacy websites with new design, better performance, and modern technology while preserving your SEO equity." },
            ]}
            relatedServices={[
                { title: "MERN Stack Development", desc: "Full-stack apps with MongoDB, Express, React, Node.js", href: "/mern-stack-development" },
                { title: "Next.js Development", desc: "SEO-first React apps with server-side rendering", href: "/nextjs-development" },
                { title: "E-commerce Development", desc: "Online stores with payment integration", href: "/ecommerce-development" },
                { title: "WordPress Development", desc: "CMS-based business websites", href: "/wordpress-development" },
                { title: "React Development", desc: "Dynamic SPAs and interactive UIs", href: "/react-development" },
                { title: "Node.js Development", desc: "Scalable backend APIs and services", href: "/nodejs-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
