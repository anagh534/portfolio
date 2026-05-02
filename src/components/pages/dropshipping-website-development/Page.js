import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Store, MessageSquare, ShieldCheck, Zap, MapPin, Layers } from 'lucide-react';

export const metadata = {
    title: "Dropshipping Website Kerala | Automated Stores | ANAGH K R",
    description: "Dropshipping website development in Kerala. Supplier automation, catalog structure, and conversion-focused design.",
    keywords: "dropshipping website development kerala, dropshipping store developer kochi, shopify dropshipping setup india, ecommerce automation website kerala",
    alternates: { canonical: "https://www.anaghkr.in/dropshipping-website-development/" },
    openGraph: {
        title: "Dropshipping Website Development Kerala | ANAGH K R",
        description: "Launch-ready dropshipping website development in Kerala with supplier-friendly catalog structure, automation-ready order flow, and conversion-focused pages for trend products.",
        url: "https://www.anaghkr.in/dropshipping-website-development/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dropshipping Website Development Kerala | ANAGH K R",
        description: "Launch-ready dropshipping website development in Kerala with supplier-friendly catalog structure, automation-ready order flow, and conversion-focused pages for trend products.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Dropshipping Website Development",
            "serviceType": "Dropshipping Website Development",
            "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
            "areaServed": ["Kerala", "Kochi", "Kozhikode", "Thiruvananthapuram", "Kannur", "Kasaragod", "Thrissur"],
            "description": "Launch-ready dropshipping website development in Kerala with supplier-friendly catalog structure, automation-ready order flow, and conversion-focused pages for trend products.",
            "offers": { "@type": "Offer", "priceCurrency": "INR", "description": "Starting from INR 18000 for a niche-ready dropshipping store" },
            "mainEntityOfPage": "https://www.anaghkr.in/dropshipping-website-development"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much does dropshipping website development cost in Kerala?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Starting from INR 18000 for a niche-ready dropshipping store" }
                },
                {
                    "@type": "Question",
                    "name": "How long does this project usually take?",
                    "acceptedAnswer": { "@type": "Answer", "text": "2 to 5 weeks depending on catalog and automation tools" }
                },
                {
                    "@type": "Question",
                    "name": "Do you support clients in Kochi, Kozhikode, Trivandrum, Kannur, Kasaragod, and Thrissur?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Projects are handled remotely across Kerala with regular WhatsApp and call-based updates." }
                }
            ]
        }
    ]
};

export default function Page() {
    return (
        <ServicePageTemplate
            badge="Dropshipping Website Development"
            title="Dropshipping Sites Built"
            titleHighlight="For Profitability"
            description="Launch-ready dropshipping website development in Kerala with supplier-friendly catalog structure, automation-ready order flow, and conversion-focused pages for trend products."
            heroStats={[
                { number: "Kerala", label: "Market Focus" },
                { number: "WhatsApp", label: "Lead Flow" },
                { number: "Fast", label: "Delivery Cycles" },
                { number: "SEO", label: "Intent Pages" },
            ]}
            whatYouGet={[
                { icon: <Store size={22} />, title: "Conversion-First Build", desc: "Landing flows, product structure, and checkout UX designed to turn visitors into paying customers." },
                { icon: <MessageSquare size={22} />, title: "WhatsApp + Contact Funnel", desc: "Primary WhatsApp CTA with secondary contact pathway for high-intent buyers from Kerala cities." },
                { icon: <ShieldCheck size={22} />, title: "Technical SEO Foundation", desc: "Clean metadata, semantic sections, and schema setup for stronger visibility in search and AI summaries." },
                { icon: <Zap size={22} />, title: "Timeline and Budget Clarity", desc: "2 to 5 weeks depending on catalog and automation tools. Starting from INR 18000 for a niche-ready dropshipping store." },
                { icon: <MapPin size={22} />, title: "Industry Fit", desc: "Trend product sellers, gadget resellers, fashion startups, and first-time founders in Kerala." },
                { icon: <Layers size={22} />, title: "Demo Example", desc: "Demo concept: one-product trend store with upsell funnel, COD form, and supplier-ready order export workflow." },
            ]}
            technologies={[
                { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
                { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
                { category: "Commerce and Growth", items: ["Shopify", "WooCommerce", "Razorpay", "Analytics"] },
                { category: "Mobile and Realtime", items: ["Flutter", "Socket.IO", "Push Notifications"] },
            ]}
            process={[
                { title: "Discovery", desc: "Define business model, target audience, and offer structure for Kerala market demand." },
                { title: "UX and Architecture", desc: "Build wireframe-ready user flow with content blocks mapped for SEO and conversions." },
                { title: "Development", desc: "Implement responsive UI, backend logic, analytics, and conversion tracking events." },
                { title: "Launch and Improve", desc: "Go live with indexing setup, monitor leads, and iterate based on user behavior." },
            ]}
            faqs={[
                { question: "What is the starting budget for this service?", answer: "Starting from INR 18000 for a niche-ready dropshipping store" },
                { question: "How long does a full build take?", answer: "2 to 5 weeks depending on catalog and automation tools" },
                { question: "Can this include both website and app strategy?", answer: "Yes. We can phase delivery into website first and app later, or parallel execution based on timeline and budget." },
                { question: "Do you provide post-launch support?", answer: "Yes. Post-launch support includes bug fixes, updates, and conversion-focused improvements." },
                { question: "Is this available across Kerala?", answer: "Yes. Projects are delivered for Kochi, Kozhikode, Thiruvananthapuram, Kannur, Kasaragod, Thrissur, and nearby regions." },
            ]}
            relatedServices={[
                { title: "Instagram Store Development", desc: "Social commerce funnel builds", href: "/instagram-store-development" },
                { title: "Shopify Store Development", desc: "Fast dropshipping-friendly setup", href: "/shopify-store-development" },
                { title: "E-commerce Development", desc: "Custom store and checkout systems", href: "/ecommerce-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
