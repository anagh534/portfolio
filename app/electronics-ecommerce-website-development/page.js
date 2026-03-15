import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Store, MessageSquare, ShieldCheck, Zap, MapPin, Layers } from 'lucide-react';

export const metadata = {
    title: "Electronics Ecommerce Website Kerala | Electronics Ecommerce Website Services | ANAGH K R",
    description: "Electronics ecommerce website development featuring spec comparison blocks, warranty-focused UX, COD and prepaid checkout options, and support-friendly product pages.",
    keywords: "electronics ecommerce website kerala, gadget store website development kochi, electronics online store calicut, mobile accessories ecommerce developer",
    alternates: { canonical: "https://www.anaghkr.in/electronics-ecommerce-website-development" },
    openGraph: {
        title: "Electronics Ecommerce Website Kerala | ANAGH K R",
        description: "Electronics ecommerce website development featuring spec comparison blocks, warranty-focused UX, COD and prepaid checkout options, and support-friendly product pages.",
        url: "https://www.anaghkr.in/electronics-ecommerce-website-development",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Electronics Ecommerce Website Kerala | ANAGH K R",
        description: "Electronics ecommerce website development featuring spec comparison blocks, warranty-focused UX, COD and prepaid checkout options, and support-friendly product pages.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Electronics Ecommerce Website",
            "serviceType": "Electronics Ecommerce Website Development",
            "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
            "areaServed": ["Kerala", "Kochi", "Kozhikode", "Thiruvananthapuram", "Kannur", "Kasaragod", "Thrissur"],
            "description": "Electronics ecommerce website development featuring spec comparison blocks, warranty-focused UX, COD and prepaid checkout options, and support-friendly product pages.",
            "offers": { "@type": "Offer", "priceCurrency": "INR", "description": "Starting from INR 25000 for electronics ecommerce builds" },
            "mainEntityOfPage": "https://www.anaghkr.in/electronics-ecommerce-website-development"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much does electronics ecommerce website cost in Kerala?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Starting from INR 25000 for electronics ecommerce builds" }
                },
                {
                    "@type": "Question",
                    "name": "How long does this project usually take?",
                    "acceptedAnswer": { "@type": "Answer", "text": "3 to 6 weeks based on product catalog and specs depth" }
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
            badge="Electronics Ecommerce Website"
            title="Electronics Stores"
            titleHighlight="Built for Trust"
            description="Electronics ecommerce website development featuring spec comparison blocks, warranty-focused UX, COD and prepaid checkout options, and support-friendly product pages."
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
                { icon: <Zap size={22} />, title: "Timeline and Budget Clarity", desc: "3 to 6 weeks based on product catalog and specs depth. Starting from INR 25000 for electronics ecommerce builds." },
                { icon: <MapPin size={22} />, title: "Industry Fit", desc: "Electronics dealers, gadget resellers, accessory shops, and appliance stores." },
                { icon: <Layers size={22} />, title: "Demo Example", desc: "Demo concept: gadget store with comparison tables, EMI highlights, and support-ticket integration post-purchase." },
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
                { question: "What is the starting budget for this service?", answer: "Starting from INR 25000 for electronics ecommerce builds" },
                { question: "How long does a full build take?", answer: "3 to 6 weeks based on product catalog and specs depth" },
                { question: "Can this include both website and app strategy?", answer: "Yes. We can phase delivery into website first and app later, or parallel execution based on timeline and budget." },
                { question: "Do you provide post-launch support?", answer: "Yes. Post-launch support includes bug fixes, updates, and conversion-focused improvements." },
                { question: "Is this available across Kerala?", answer: "Yes. Projects are delivered for Kochi, Kozhikode, Thiruvananthapuram, Kannur, Kasaragod, Thrissur, and nearby regions." },
            ]}
            relatedServices={[
                { title: "E-commerce Development", desc: "Custom multi-category stores", href: "/ecommerce-development" },
                { title: "Shopify Store Development", desc: "Fast launch for gadget stores", href: "/shopify-store-development" },
                { title: "Dropshipping Website", desc: "Trend gadget sales model", href: "/dropshipping-website-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
