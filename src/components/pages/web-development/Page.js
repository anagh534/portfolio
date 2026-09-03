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
                { icon: <Palette size={22} />, title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Pixel-perfect, unique designs tailored to your brand identity and target audience, not generic templates." },
                { icon: <Smartphone size={22} />, title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Your website looks and performs flawlessly on all devices — mobile, tablet, and desktop." },
                { icon: <Zap size={22} />, title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Optimized performance with sub-3-second load times using modern caching, lazy loading, and CDN integration." },
                { icon: <Search size={22} />, title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Built with proper semantic HTML, meta tags, structured data, and Core Web Vitals optimization from day one." },
                { icon: <ShieldCheck size={22} />, title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "HTTPS, input validation, secure authentication, and best-practice security measures for every build." },
                { icon: <LayoutDashboard size={22} />, title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Admin dashboards and CMS integration so you can update your own content without touching code." },
            ]}
            technologies={[
                { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
                { category: "Backend", items: ["Node.js", "Express.js", "REST API", "GraphQL", "WebSockets"] },
                { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"] },
                { category: "Deployment & Tools", items: ["Vercel", "AWS", "Docker", "Git", "CI/CD", "Cloudflare"] },
            ]}
            process={[
                { title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "We discuss your goals, target audience, and project scope to map out the perfect solution." },
                { title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Wireframes and UI mockups are crafted in Figma for your approval before any code is written." },
                { title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Clean, scalable code is written using modern frameworks with regular progress updates." },
                { title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Thorough testing, SEO setup, deployment, and handover with full documentation and support." },
            ]}
            faqs={[
                { question: "Can I get a free website in Kerala?", answer: "While a fully custom professional website requires an investment, I offer a 100% Free Website Consultation to plan your architecture. Additionally, I provide a Free Domain and Free First-Year Hosting setup on select starter business bundles to help you get online affordably." },
                { question: "How much does a custom website cost in Kerala?", answer: "A basic business website starts around ₹8,000–₹20,000, while complex web applications can range from ₹30,000 upwards. It is much more affordable than hiring a massive agency." },
                { question: "Do you physically meet clients for web development?", answer: "Yes! While I work with clients all over India remotely, I am available for direct, in-person meetings in Kochi, Kozhikode (Calicut), and Trivandrum to discuss your web projects." },
                { question: "Do you offer web development services outside India?", answer: "Absolutely. I regularly partner with businesses and agencies in the UAE (Dubai), USA, UK, and Australia, functioning as their offshore freelance website development team in Kerala." },
                { question: "How long does it take to build a website?", answer: "A standard business website typically takes 1–3 weeks. Complex web apps or custom web apps platforms can take 4–8 weeks depending on your scope." },
                { question: "Will my website rank on Google?", answer: "Yes, every website I build is deeply SEO-optimized with proper structure, meta tags, fast load times, and Schema markup — which is why you found me!" },
                { question: "Which cities in Kerala do you serve?", answer: "I build responsive websites for clients in Kochi, Kozhikode, Trivandrum, Thrissur, Kannur, Kasaragod, Kollam, Palakkad, and Ernakulam." },
            ]}
            relatedServices={[
                { title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Full-stack apps with MongoDB, Express, React, Node.js", href: "/mern-stack-development/" },
                { title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "SEO-first React apps with server-side rendering", href: "/nextjs-development/" },
                { title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Dynamic SPAs and interactive UIs", href: "/react-development/" },
                { title: "Website Developer Kerala | Custom Business Sites | ANAGH K R", desc: "Scalable backend APIs and services", href: "/nodejs-development/" },
            ]}
            schemaData={schemaData}
            extraContent={
                <div className="space-y-8 text-gray-300">
                    <h2 className="text-3xl font-black text-white uppercase tracking-tight">Your Trusted Website Developer in Kerala</h2>
                    <p className="leading-relaxed">
                        In today's digital-first economy, a fast, responsive, and SEO-optimized website is your most powerful marketing tool. As a leading <strong>website developer in Kerala</strong>, I help businesses across Kochi, Calicut, and Trivandrum establish a dominant online presence. From sleek corporate portfolios to complex e-commerce platforms, I deliver custom web solutions that drive real business growth.
                    </p>
                    <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Global Quality, Local Pricing</h3>
                    <p className="leading-relaxed">
                        I don't just serve local businesses. I act as an on-demand <strong>freelance website development team in Kerala</strong> for clients across the globe. Companies in Dubai, New York, London, and Sydney choose to work with me because I deliver agency-level quality at freelance rates. Whether you need a simple landing page or a complex React/Next.js application, I bring global best practices to every project.
                    </p>
                    <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Why Settle for Templates When You Can Have Custom?</h3>
                    <p className="leading-relaxed">
                        Many agencies use bloated WordPress templates that slow down your site and hurt your Google rankings. I build fully custom, hand-coded websites using modern frameworks like Next.js and React. This guarantees lightning-fast load times, exceptional Core Web Vitals, and a user experience that keeps visitors engaged.
                    </p>
                    <p className="leading-relaxed">
                        When you hire me as your <strong>professional web developer in Kerala</strong>, you get:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>SEO-First Architecture:</strong> Clean semantic HTML and server-side rendering to ensure your site ranks high on Google for relevant keywords.</li>
                        <li><strong>Mobile-First Design:</strong> With over 70% of web traffic coming from mobile devices, your site will look perfect on every screen size.</li>
                        <li><strong>Scalable Backend Systems:</strong> Using Node.js and MongoDB to power custom web applications that can handle high traffic volumes.</li>
                    </ul>
                    <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Driving Success for Kerala and Global Businesses</h3>
                    <p className="leading-relaxed">
                        I understand both local and international market nuances. Whether you need a multilingual site to cater to a diverse demographic in the UAE or integrations with popular Indian payment gateways like Razorpay, I have the expertise to execute it flawlessly. Partner with a dedicated <strong>freelance website develop team</strong> that is committed to your long-term success.
                    </p>
                </div>
            }
        />
    );
}
