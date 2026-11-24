import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Palette, Smartphone, Zap, Search, ShieldCheck, LayoutDashboard } from 'lucide-react';

export const metadata = {
    title: "Website Developer Kerala | Custom Business Sites | ANAGH K R",
    description: "Hire a professional freelance website development team in Kerala. We build custom business websites with SEO-optimized design and fast delivery for clients in Kochi, Dubai, USA & UK.",
    keywords: "website developer kerala, free website kerala, affordable website developer kerala, best website developer kerala, professional web developer kerala, custom website design kerala, low cost website kerala, custom web apps website kerala, react developer kerala, nextjs developer kerala, web developer kochi, web developer kozhikode, web developer trivandrum, freelance website development team kerala, freelance website develop team, web developer Dubai UAE, web developer London UK, web developer USA, web developer Australia",
    alternates: { canonical: "https://www.anaghkr.in/web-development/" },
    openGraph: {
        title: "Website Developer Kerala | Custom Business Sites | ANAGH K R",
        description: "Hire a professional freelance website development team in Kerala. We build custom business websites with SEO-optimized design and fast delivery for clients in Kochi, Dubai, USA & UK.",
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
        title: "Website Developer Kerala | Custom Business Sites | ANAGH K R",
        description: "Hire a professional freelance website development team in Kerala. We build custom business websites with SEO-optimized design and fast delivery for clients in Kochi, Dubai, USA & UK.",
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
        "url": "https://www.anaghkr.in/",
        "jobTitle": "Web Developer",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        }
    },
    "serviceType": "Website Development and Design",
    "areaServed": [
    { "@type": "State", "name": "Kerala" },
    { "@type": "City", "name": "Thiruvananthapuram" },
    { "@type": "City", "name": "Kollam" },
    { "@type": "City", "name": "Pathanamthitta" },
    { "@type": "City", "name": "Alappuzha" },
    { "@type": "City", "name": "Kottayam" },
    { "@type": "City", "name": "Idukki" },
    { "@type": "City", "name": "Ernakulam" },
    { "@type": "City", "name": "Kochi" },
    { "@type": "City", "name": "Thrissur" },
    { "@type": "City", "name": "Palakkad" },
    { "@type": "City", "name": "Malappuram" },
    { "@type": "City", "name": "Kozhikode" },
    { "@type": "City", "name": "Wayanad" },
    { "@type": "City", "name": "Kannur" },
    { "@type": "City", "name": "Kasaragod" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "City", "name": "Dubai" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Oman" },
    { "@type": "Country", "name": "Qatar" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Mangalore" }
  ],
    "description": "Professional custom website development, responsive web design, business websites, landing pages, and full-stack web application development services. Specialized in React, Next.js, Node.js, and modern web technologies for businesses across Kerala, UAE (Dubai), USA, UK, and globally.",
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
    "mainEntityOfPage": "https://www.anaghkr.in/web-development/",
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
            description="Looking for an affordable, high-performance website? I operate as your dedicated freelance website develop team to help Kerala and global businesses grow online with custom websites, fast load times, and SEO-ready architecture. Book a free consultation to get started."
            heroStats={[
                { number: "24+", label: "Projects Delivered" },
                { number: "3+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "11+", label: "Cities in Kerala" },
            ]}
            whatYouGet={[
                { icon: <Palette size={22} />, title: "Custom Brand Identity", desc: "Pixel-perfect, unique designs tailored to your brand identity and target audience, not generic off-the-shelf templates." },
                { icon: <Smartphone size={22} />, title: "Mobile-First Responsiveness", desc: "Your website looks and performs flawlessly on all devices — mobile, tablet, and desktop." },
                { icon: <Zap size={22} />, title: "Sub-Second Performance", desc: "Optimized performance with sub-second load times using modern caching, image optimization, and CDN edge networks." },
                { icon: <Search size={22} />, title: "Built-In Technical SEO", desc: "Built with proper semantic HTML, meta tags, Schema.org structured data, and Core Web Vitals optimization from day one." },
                { icon: <ShieldCheck size={22} />, title: "Bank-Grade Security", desc: "HTTPS, strict Content Security Policies, input validation, and secure authentication for every build." },
                { icon: <LayoutDashboard size={22} />, title: "Intuitive Admin Control", desc: "Custom dashboards and headless CMS integration so you can update products, blogs, and inquiries with ease." },
            ]}
            technologies={[
                { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
                { category: "Backend", items: ["Node.js", "Express.js", "REST API", "GraphQL", "WebSockets"] },
                { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"] },
                { category: "Deployment & Tools", items: ["Vercel", "AWS", "Docker", "Git", "CI/CD", "Cloudflare"] },
            ]}
            process={[
                { title: "Discovery & Planning", desc: "We map your business workflows, competitors, and target audience to design the optimal technical solution." },
                { title: "UI/UX Design in Figma", desc: "Interactive clickable prototypes are crafted for your approval before writing a single line of code." },
                { title: "Full-Stack Development", desc: "Clean, maintainable code is engineered using modern frameworks with regular staging demo links." },
                { title: "Testing & Deployment", desc: "Rigorous cross-browser testing, SEO audit, DNS configuration, and zero-downtime deployment." },
            ]}
            faqs={[
                { question: "Can I get a free website consultation in Kerala?", answer: "Yes! I offer a 100% Free Technical Consultation to plan your site architecture, scope, and technology roadmap before taking on any project." },
                { question: "How much does a custom website cost in Kerala?", answer: "A basic business website starts around ₹15,000–₹35,000, while complex custom web applications and eCommerce portals range from ₹45,000 to ₹1,50,000+. This provides senior developer quality at significantly lower costs than large agency retainers." },
                { question: "Do you physically meet clients for web development?", answer: "Yes! While I work with clients all over India and the GCC remotely, I am available for direct meetings in Kochi, Kozhikode (Calicut), Kannur, and Trivandrum to discuss major projects." },
                { question: "Do you offer web development services for UAE & international clients?", answer: "Absolutely. I regularly partner with businesses in Dubai, Abu Dhabi, Doha, and Riyadh, serving as their dedicated senior software engineer with complete time-zone overlap and 60%–70% budget savings." },
                { question: "How long does it take to build a website?", answer: "A standard business website typically takes 1–2 weeks. Complex web apps or custom platforms take 3–6 weeks depending on features and integrations." },
                { question: "Will my website rank high on Google?", answer: "Yes, every website I build is deeply SEO-optimized with proper semantic hierarchy, meta tags, sub-second load times, and structured Schema markup." },
                { question: "Which cities in Kerala do you serve?", answer: "I build responsive websites for clients across Kochi, Kozhikode, Trivandrum, Thrissur, Kannur, Kasaragod, Kollam, Palakkad, and Ernakulam." },
            ]}
            relatedServices={[
                { title: "MERN Stack Development", desc: "Full-stack apps with MongoDB, Express, React, Node.js", href: "/mern-stack-development/" },
                { title: "Next.js Development", desc: "SEO-first React apps with server-side rendering", href: "/nextjs-development/" },
                { title: "React Development", desc: "Dynamic SPAs and interactive client dashboards", href: "/react-development/" },
                { title: "Node.js Development", desc: "Scalable backend APIs and real-time microservices", href: "/nodejs-development/" },
            ]}
            schemaData={schemaData}
            extraContent={
                <div className="space-y-10 text-gray-300">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">Your Trusted Website Developer in Kerala</h2>
                        <p className="leading-relaxed text-lg">
                            In today's digital economy, a slow, template-driven website costs you customers every single day. As a leading <strong>website developer in Kerala</strong>, I engineer high-speed, custom-coded web platforms for businesses across <a href="/locations/kochi/" className="text-blue-400 hover:underline">Kochi</a>, <a href="/locations/kozhikode/" className="text-blue-400 hover:underline">Calicut</a>, <a href="/locations/thiruvananthapuram/" className="text-blue-400 hover:underline">Trivandrum</a>, and the <a href="/locations/dubai/" className="text-blue-400 hover:underline">UAE</a>.
                        </p>
                    </div>

                    {/* WordPress vs Custom Comparison Section */}
                    <div className="p-8 rounded-[36px] bg-white/[0.03] border border-white/10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            Architecture Comparison
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                            Searching for a WordPress or Shopify Developer in Calicut or Kochi?
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Many local businesses instinctively look for WordPress or Shopify developers because they are familiar terms. However, growing enterprises quickly discover their severe limitations:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-3">
                                <h4 className="text-lg font-bold text-red-300">The Problem with WordPress & Shopify</h4>
                                <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                                    <li>20+ plugins create severe security vulnerabilities and frequent site crashes.</li>
                                    <li>Shopify charges recurring monthly fees plus 2% transaction cuts on every order.</li>
                                    <li>Slow database queries result in 3–5 second page loads and high mobile bounce rates.</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                                <h4 className="text-lg font-bold text-emerald-300">The Modern Next.js & Custom Advantage</h4>
                                <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                                    <li>Sub-800ms page load speeds that achieve 100/100 Google Core Web Vitals scores.</li>
                                    <li>Zero monthly platform fees — you own your software, database, and source code 100%.</li>
                                    <li>Custom checkout flows with Razorpay, Cashfree, or GCC payment gateways with zero platform tax.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">Global Standards, Senior Engineering Quality</h3>
                        <p className="leading-relaxed">
                            With past experience at Canadian digital agency Dotscape and product companies, I bring international engineering standards to every project. Whether you need a multilingual company portal in the UAE or a high-converting eCommerce store in Kerala, you receive clean, scalable code built for long-term growth.
                        </p>
                    </div>
                </div>
            }
        />
    );
}
