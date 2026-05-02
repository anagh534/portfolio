import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Store, MessageSquare, ShieldCheck, Zap, MapPin, Layers } from 'lucide-react';

export const metadata = {
    title: "Clothing Ecommerce Kerala | Fashion Store Expert | ANAGH K R",
    description: "Clothing ecommerce development in Kerala. Variant management, lookbooks, and mobile-first shopping for fashion brands.",
    keywords: "clothing ecommerce website kerala, fashion website developer kochi, apparel online store development calicut, boutique ecommerce website kerala",
    alternates: { canonical: "https://www.anaghkr.in/clothing-ecommerce-website-development/" },
    openGraph: {
        title: "Clothing Ecommerce Website Kerala | ANAGH K R",
        description: "Clothing ecommerce website development with size/variant management, lookbook layouts, offer engines, and mobile-first shopping experiences for Kerala fashion businesses.",
        url: "https://www.anaghkr.in/clothing-ecommerce-website-development/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Clothing Ecommerce Website Kerala | ANAGH K R",
        description: "Clothing ecommerce website development with size/variant management, lookbook layouts, offer engines, and mobile-first shopping experiences for Kerala fashion businesses.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Clothing Ecommerce Website",
            "serviceType": "Clothing Ecommerce Website Development",
            "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
            "areaServed": ["Kerala", "Kochi", "Kozhikode", "Thiruvananthapuram", "Kannur", "Kasaragod", "Thrissur"],
            "description": "Clothing ecommerce website development with size/variant management, lookbook layouts, offer engines, and mobile-first shopping experiences for Kerala fashion businesses.",
            "offers": { "@type": "Offer", "priceCurrency": "INR", "description": "Starting from INR 22000 for clothing store setup with variants" },
            "mainEntityOfPage": "https://www.anaghkr.in/clothing-ecommerce-website-development"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much does clothing ecommerce website cost in Kerala?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Starting from INR 22000 for clothing store setup with variants" }
                },
                {
                    "@type": "Question",
                    "name": "How long does this project usually take?",
                    "acceptedAnswer": { "@type": "Answer", "text": "3 to 6 weeks depending on catalog complexity" }
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
            badge="Clothing Ecommerce Website"
            title="Clothing Stores That"
            titleHighlight="Sell More"
            description="Clothing ecommerce website development with size/variant management, lookbook layouts, offer engines, and mobile-first shopping experiences for Kerala fashion businesses."
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
                { icon: <Zap size={22} />, title: "Timeline and Budget Clarity", desc: "3 to 6 weeks depending on catalog complexity. Starting from INR 22000 for clothing store setup with variants." },
                { icon: <MapPin size={22} />, title: "Industry Fit", desc: "Boutiques, ethnic wear brands, streetwear labels, and uniform sellers." },
                { icon: <Layers size={22} />, title: "Demo Example", desc: "Demo concept: Kerala boutique store with size-chart popups, new-arrival reels embeds, and festive combo bundles." },
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
                { question: "What is the starting budget for this service?", answer: "Starting from INR 22000 for clothing store setup with variants" },
                { question: "How long does a full build take?", answer: "3 to 6 weeks depending on catalog complexity" },
                { question: "Can this include both website and app strategy?", answer: "Yes. We can phase delivery into website first and app later, or parallel execution based on timeline and budget." },
                { question: "Do you provide post-launch support?", answer: "Yes. Post-launch support includes bug fixes, updates, and conversion-focused improvements." },
                { question: "Is this available across Kerala?", answer: "Yes. Projects are delivered for Kochi, Kozhikode, Thiruvananthapuram, Kannur, Kasaragod, Thrissur, and nearby regions." },
            ]}
            relatedServices={[
                { title: "Shopify Store Development", desc: "Fast fashion storefront builds", href: "/shopify-store-development/" },
                { title: "Shoe Store Website", desc: "Variant-heavy product catalogs", href: "/shoe-store-website-development/" },
                { title: "Instagram Store Development", desc: "Social discovery commerce", href: "/instagram-store-development/" },
            ]}
            schemaData={schemaData}
        />
    );
}
