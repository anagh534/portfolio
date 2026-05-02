import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Store, MessageSquare, ShieldCheck, Zap, MapPin, Layers } from 'lucide-react';

export const metadata = {
    title: "Shopify Store Development Kerala | Expert Setup | ANAGH K R",
    description: "Shopify store development in Kerala. Clean UX, payment setup, and SEO-ready stores for businesses in Kochi & Calicut.",
    keywords: "shopify developer kerala, shopify store development kochi, shopify ecommerce website calicut, kerala shopify expert",
    alternates: { canonical: "https://www.anaghkr.in/shopify-store-development/" },
    openGraph: {
        title: "Shopify Store Development Kerala | ANAGH K R",
        description: "Shopify store development with clean storefront UX, payment and shipping setup, and SEO-ready collection pages for businesses in Kochi, Calicut, Trivandrum, Thrissur, and across Kerala.",
        url: "https://www.anaghkr.in/shopify-store-development/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Shopify Store Development Kerala | ANAGH K R",
        description: "Shopify store development with clean storefront UX, payment and shipping setup, and SEO-ready collection pages for businesses in Kochi, Calicut, Trivandrum, Thrissur, and across Kerala.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Shopify Store Development",
            "serviceType": "Shopify Store Development",
            "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
            "areaServed": ["Kerala", "Kochi", "Kozhikode", "Thiruvananthapuram", "Kannur", "Kasaragod", "Thrissur"],
            "description": "Shopify store development with clean storefront UX, payment and shipping setup, and SEO-ready collection pages for businesses in Kochi, Calicut, Trivandrum, Thrissur, and across Kerala.",
            "offers": { "@type": "Offer", "priceCurrency": "INR", "description": "Starting from INR 20000 for a conversion-focused Shopify launch" },
            "mainEntityOfPage": "https://www.anaghkr.in/shopify-store-development"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much does shopify store development cost in Kerala?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Starting from INR 20000 for a conversion-focused Shopify launch" }
                },
                {
                    "@type": "Question",
                    "name": "How long does this project usually take?",
                    "acceptedAnswer": { "@type": "Answer", "text": "2 to 4 weeks for most standard Shopify stores" }
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
            badge="Shopify Store Development"
            title="Shopify Stores For"
            titleHighlight="Kerala Brands"
            description="Shopify store development with clean storefront UX, payment and shipping setup, and SEO-ready collection pages for businesses in Kochi, Calicut, Trivandrum, Thrissur, and across Kerala."
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
                { icon: <Zap size={22} />, title: "Timeline and Budget Clarity", desc: "2 to 4 weeks for most standard Shopify stores. Starting from INR 20000 for a conversion-focused Shopify launch." },
                { icon: <MapPin size={22} />, title: "Industry Fit", desc: "D2C brands, apparel sellers, skincare labels, and curated product stores." },
                { icon: <Layers size={22} />, title: "Demo Example", desc: "Demo concept: branded Shopify storefront with smart collection filters, trust badges, and one-page checkout optimization." },
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
                { question: "What is the starting budget for this service?", answer: "Starting from INR 20000 for a conversion-focused Shopify launch" },
                { question: "How long does a full build take?", answer: "2 to 4 weeks for most standard Shopify stores" },
                { question: "Can this include both website and app strategy?", answer: "Yes. We can phase delivery into website first and app later, or parallel execution based on timeline and budget." },
                { question: "Do you provide post-launch support?", answer: "Yes. Post-launch support includes bug fixes, updates, and conversion-focused improvements." },
                { question: "Is this available across Kerala?", answer: "Yes. Projects are delivered for Kochi, Kozhikode, Thiruvananthapuram, Kannur, Kasaragod, Thrissur, and nearby regions." },
            ]}
            relatedServices={[
                { title: "Instagram Store Development", desc: "Follower-to-buyer conversion", href: "/instagram-store-development/" },
                { title: "Clothing Ecommerce Website", desc: "Fashion-first online stores", href: "/clothing-ecommerce-website-development/" },
                { title: "Dropshipping Website", desc: "Low-inventory commerce models", href: "/dropshipping-website-development/" },
            ]}
            schemaData={schemaData}
        />
    );
}
