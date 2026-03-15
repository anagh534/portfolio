import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Store, MessageSquare, ShieldCheck, Zap, MapPin, Layers } from 'lucide-react';

export const metadata = {
    title: "Dating App Development Kerala | Dating App Development Services | ANAGH K R",
    description: "Dating app development in Flutter and Node.js with profile matching, chat moderation, safety reporting, and scalable architecture for startups targeting Kerala and India-wide audiences.",
    keywords: "dating app development kerala, tinder like app developer india, matchmaking app development kochi, social app development kerala",
    alternates: { canonical: "https://www.anaghkr.in/dating-app-development" },
    openGraph: {
        title: "Dating App Development Kerala | ANAGH K R",
        description: "Dating app development in Flutter and Node.js with profile matching, chat moderation, safety reporting, and scalable architecture for startups targeting Kerala and India-wide audiences.",
        url: "https://www.anaghkr.in/dating-app-development",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dating App Development Kerala | ANAGH K R",
        description: "Dating app development in Flutter and Node.js with profile matching, chat moderation, safety reporting, and scalable architecture for startups targeting Kerala and India-wide audiences.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Dating App Development",
            "serviceType": "Dating App Development",
            "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
            "areaServed": ["Kerala", "Kochi", "Kozhikode", "Thiruvananthapuram", "Kannur", "Kasaragod", "Thrissur"],
            "description": "Dating app development in Flutter and Node.js with profile matching, chat moderation, safety reporting, and scalable architecture for startups targeting Kerala and India-wide audiences.",
            "offers": { "@type": "Offer", "priceCurrency": "INR", "description": "MVP starts around INR 60000 with core matching and chat" },
            "mainEntityOfPage": "https://www.anaghkr.in/dating-app-development"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much does dating app development cost in Kerala?",
                    "acceptedAnswer": { "@type": "Answer", "text": "MVP starts around INR 60000 with core matching and chat" }
                },
                {
                    "@type": "Question",
                    "name": "How long does this project usually take?",
                    "acceptedAnswer": { "@type": "Answer", "text": "8 to 14 weeks depending on moderation and premium features" }
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
            badge="Dating App Development"
            title="Dating Apps Focused On"
            titleHighlight="Safety and Retention"
            description="Dating app development in Flutter and Node.js with profile matching, chat moderation, safety reporting, and scalable architecture for startups targeting Kerala and India-wide audiences."
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
                { icon: <Zap size={22} />, title: "Timeline and Budget Clarity", desc: "8 to 14 weeks depending on moderation and premium features. MVP starts around INR 60000 with core matching and chat." },
                { icon: <MapPin size={22} />, title: "Industry Fit", desc: "Startup founders, niche community apps, and subscription-led social products." },
                { icon: <Layers size={22} />, title: "Demo Example", desc: "Demo concept: interest-based matching app with profile verification, safe-report flow, and paid boost features." },
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
                { question: "What is the starting budget for this service?", answer: "MVP starts around INR 60000 with core matching and chat" },
                { question: "How long does a full build take?", answer: "8 to 14 weeks depending on moderation and premium features" },
                { question: "Can this include both website and app strategy?", answer: "Yes. We can phase delivery into website first and app later, or parallel execution based on timeline and budget." },
                { question: "Do you provide post-launch support?", answer: "Yes. Post-launch support includes bug fixes, updates, and conversion-focused improvements." },
                { question: "Is this available across Kerala?", answer: "Yes. Projects are delivered for Kochi, Kozhikode, Thiruvananthapuram, Kannur, Kasaragod, Thrissur, and nearby regions." },
            ]}
            relatedServices={[
                { title: "Chat App Development", desc: "Real-time messaging backbone", href: "/chat-app-development" },
                { title: "Mobile App Development", desc: "Cross-platform product build", href: "/mobile-app-development" },
                { title: "Flutter App Development", desc: "Fast iOS and Android development", href: "/flutter-app-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
