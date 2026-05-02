import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Store, MessageSquare, ShieldCheck, Zap, MapPin, Layers } from 'lucide-react';

export const metadata = {
    title: "Instagram Store Development Kerala | Social Shop | ANAGH K R",
    description: "Instagram store development in Kerala. Catalog setup, payment integration, and fast checkout for Kochi & Calicut brands.",
    keywords: "instagram store development kerala, instagram shop setup kochi, social commerce website kerala, instagram product catalog setup, whatsapp checkout instagram store",
    alternates: { canonical: "https://www.anaghkr.in/instagram-store-development/" },
    openGraph: {
        title: "Instagram Store Development Kerala | ANAGH K R",
        description: "Instagram store development for Kerala businesses with catalog setup, DM-to-order flow, payment integration, and fast checkout landing pages. Ideal for Kochi, Kozhikode, Trivandrum, Kannur, Kasaragod, and Thrissur brands.",
        url: "https://www.anaghkr.in/instagram-store-development/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Instagram Store Development Kerala | ANAGH K R",
        description: "Instagram store development for Kerala businesses with catalog setup, DM-to-order flow, payment integration, and fast checkout landing pages. Ideal for Kochi, Kozhikode, Trivandrum, Kannur, Kasaragod, and Thrissur brands.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Instagram Store Development",
            "serviceType": "Instagram Store Development",
            "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
            "areaServed": ["Kerala", "Kochi", "Kozhikode", "Thiruvananthapuram", "Kannur", "Kasaragod", "Thrissur"],
            "description": "Instagram store development for Kerala businesses with catalog setup, DM-to-order flow, payment integration, and fast checkout landing pages. Ideal for Kochi, Kozhikode, Trivandrum, Kannur, Kasaragod, and Thrissur brands.",
            "offers": { "@type": "Offer", "priceCurrency": "INR", "description": "Starting from INR 12000 for website plus Instagram commerce setup" },
            "mainEntityOfPage": "https://www.anaghkr.in/instagram-store-development"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much does instagram store development cost in Kerala?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Starting from INR 12000 for website plus Instagram commerce setup" }
                },
                {
                    "@type": "Question",
                    "name": "How long does this project usually take?",
                    "acceptedAnswer": { "@type": "Answer", "text": "2 to 4 weeks based on catalog size and integrations" }
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
            badge="Instagram Store Development"
            title="Instagram Stores That"
            titleHighlight="Convert Followers"
            description="Instagram store development for Kerala businesses with catalog setup, DM-to-order flow, payment integration, and fast checkout landing pages. Ideal for Kochi, Kozhikode, Trivandrum, Kannur, Kasaragod, and Thrissur brands."
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
                { icon: <Zap size={22} />, title: "Timeline and Budget Clarity", desc: "2 to 4 weeks based on catalog size and integrations. Starting from INR 12000 for website plus Instagram commerce setup." },
                { icon: <MapPin size={22} />, title: "Industry Fit", desc: "Boutiques, home bakers, beauty brands, jewelry stores, and local resellers across Kerala." },
                { icon: <Layers size={22} />, title: "Demo Example", desc: "Demo concept: boutique catalog synced from Instagram posts to a mobile checkout page with WhatsApp order handoff." },
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
                { question: "What is the starting budget for this service?", answer: "Starting from INR 12000 for website plus Instagram commerce setup" },
                { question: "How long does a full build take?", answer: "2 to 4 weeks based on catalog size and integrations" },
                { question: "Can this include both website and app strategy?", answer: "Yes. We can phase delivery into website first and app later, or parallel execution based on timeline and budget." },
                { question: "Do you provide post-launch support?", answer: "Yes. Post-launch support includes bug fixes, updates, and conversion-focused improvements." },
                { question: "Is this available across Kerala?", answer: "Yes. Projects are delivered for Kochi, Kozhikode, Thiruvananthapuram, Kannur, Kasaragod, Thrissur, and nearby regions." },
            ]}
            relatedServices={[
                { title: "Shopify Store Development", desc: "Scalable storefronts for D2C brands", href: "/shopify-store-development/" },
                { title: "Dropshipping Website", desc: "Trend product selling workflows", href: "/dropshipping-website-development/" },
                { title: "E-commerce Development", desc: "Full online store architecture", href: "/ecommerce-development/" },
            ]}
            schemaData={schemaData}
        />
    );
}
