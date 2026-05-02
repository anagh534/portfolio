import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Palette, Smartphone, Zap, Search, ShieldCheck, LayoutDashboard } from 'lucide-react';

export const metadata = {
    title: "Website Developer Kerala | Custom Sites & Consultation | ANAGH K R",
    description: "Professional web developer in Kerala. Custom business websites, SEO-optimized design, and fast delivery in Kochi, Kozhikode & Trivandrum.",
    keywords: "website developer kerala, free website kerala, affordable website developer kerala, best website developer kerala, professional web developer kerala, custom website design kerala, low cost website kerala, ecommerce website kerala, react developer kerala, nextjs developer kerala, web developer kochi, web developer kozhikode, web developer trivandrum",
    alternates: { canonical: "https://www.anaghkr.in/web-development/" },
    openGraph: {
        title: "Best Web Developer Kerala | Professional Website Development | ANAGH K R",
        description: "Top-rated professional web development services in Kerala — custom websites, business web applications, responsive design, and full-stack solutions for businesses of all sizes across Kerala.",
        url: "https://www.anaghkr.in/web-development/",
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
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Kozhikode" },
        { "@type": "City", "name": "Thiruvananthapuram" },
        { "@type": "City", "name": "Thrissur" },
        { "@type": "City", "name": "Kannur" },
        { "@type": "City", "name": "Kollam" },
        { "@type": "City", "name": "Palakkad" },
        { "@type": "City", "name": "Kasaragod" },
        { "@type": "State", "name": "Kerala, India" }
    ],
    "description": "Professional custom website development, responsive web design, business websites, landing pages, and full-stack web application development services. Specialized in React, Next.js, Node.js, and modern web technologies for businesses across Kerala.",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "0",
            "priceCurrency": "INR",
            "description": "Free Consultation and Free First-Year Domain/Hosting on select packages."
        }
    },
    "mainEntityOfPage": "https://www.anaghkr.in/web-development",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Website Consultation & Planning" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Website Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Responsive Web Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full-Stack Web Application" } }
        ]
    }
};

export default function WebDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="Web Development Services"
            title="Top Website Developer in"
            titleHighlight="Kerala"
            description="Looking for an affordable, high-performance website? I help Kerala businesses and startups grow online with custom websites, fast load times, and SEO-ready architecture. Book a free consultation to get started."
            heroStats={[
                { number: "24+", label: "Projects Delivered" },
                { number: "3+", label: "Years Experience" },
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
                { question: "Can I get a free website in Kerala?", answer: "While a fully custom professional website requires an investment, I offer a 100% Free Website Consultation to plan your architecture. Additionally, I provide a Free Domain and Free First-Year Hosting setup on select starter business bundles to help you get online affordably." },
                { question: "How much does a custom website cost in Kerala?", answer: "A basic business website starts around ₹8,000–₹20,000, while complex web applications can range from ₹30,000 upwards. It is much more affordable than hiring a massive agency." },
                { question: "Do you physically meet clients for web development?", answer: "Yes! While I work with clients all over India remotely, I am available for direct, in-person meetings in Kochi, Kozhikode (Calicut), and Trivandrum to discuss your web projects." },
                { question: "How long does it take to build a website?", answer: "A standard business website typically takes 1–3 weeks. Complex web apps or e-commerce platforms can take 4–8 weeks depending on your scope." },
                { question: "Will my website rank on Google?", answer: "Yes, every website I build is deeply SEO-optimized with proper structure, meta tags, fast load times, and Schema markup — which is why you found me!" },
                { question: "Which cities in Kerala do you serve?", answer: "I build responsive websites for clients in Kochi, Kozhikode, Trivandrum, Thrissur, Kannur, Kasaragod, Kollam, Palakkad, and Ernakulam." },
            ]}
            relatedServices={[
                { title: "MERN Stack Development", desc: "Full-stack apps with MongoDB, Express, React, Node.js", href: "/mern-stack-development/" },
                { title: "Next.js Development", desc: "SEO-first React apps with server-side rendering", href: "/nextjs-development/" },
                { title: "E-commerce Development", desc: "Online stores with payment integration", href: "/ecommerce-development/" },
                { title: "WordPress Development", desc: "CMS-based business websites", href: "/wordpress-development/" },
                { title: "React Development", desc: "Dynamic SPAs and interactive UIs", href: "/react-development/" },
                { title: "Node.js Development", desc: "Scalable backend APIs and services", href: "/nodejs-development/" },
            ]}
            schemaData={schemaData}
        />
    );
}
