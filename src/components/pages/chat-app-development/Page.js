import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Store, MessageSquare, ShieldCheck, Zap, MapPin, Layers } from 'lucide-react';

export const metadata = {
    title: "Chat App Development Kerala | Real-time Apps | ANAGH K R",
    description: "Real-time chat app development in Kerala. Secure messaging, media sharing, and scalable backends for startups and businesses.",
    keywords: "chat app development kerala, real time messaging app developer kochi, whatsapp like app development india, group chat app development",
    alternates: { canonical: "https://www.anaghkr.in/chat-app-development/" },
    openGraph: {
        title: "Chat App Development Kerala | ANAGH K R",
        description: "Chat app development for startups and businesses in Kerala with real-time messaging, groups, media sharing, and secure backend systems for web and mobile products.",
        url: "https://www.anaghkr.in/chat-app-development/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chat App Development Kerala | ANAGH K R",
        description: "Chat app development for startups and businesses in Kerala with real-time messaging, groups, media sharing, and secure backend systems for web and mobile products.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Chat App Development",
            "serviceType": "Chat App Development",
            "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
            "areaServed": ["Kerala", "Kochi", "Kozhikode", "Thiruvananthapuram", "Kannur", "Kasaragod", "Thrissur"],
            "description": "Chat app development for startups and businesses in Kerala with real-time messaging, groups, media sharing, and secure backend systems for web and mobile products.",
            "offers": { "@type": "Offer", "priceCurrency": "INR", "description": "MVP starts around INR 50000 for core messaging features" },
            "mainEntityOfPage": "https://www.anaghkr.in/chat-app-development"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much does chat app development cost in Kerala?",
                    "acceptedAnswer": { "@type": "Answer", "text": "MVP starts around INR 50000 for core messaging features" }
                },
                {
                    "@type": "Question",
                    "name": "How long does this project usually take?",
                    "acceptedAnswer": { "@type": "Answer", "text": "6 to 12 weeks based on feature scope and platforms" }
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
            badge="Chat App Development"
            title="Real-Time Chat Apps"
            titleHighlight="At Scale"
            description="Chat app development for startups and businesses in Kerala with real-time messaging, groups, media sharing, and secure backend systems for web and mobile products."
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
                { icon: <Zap size={22} />, title: "Timeline and Budget Clarity", desc: "6 to 12 weeks based on feature scope and platforms. MVP starts around INR 50000 for core messaging features." },
                { icon: <MapPin size={22} />, title: "Industry Fit", desc: "Community products, education platforms, support apps, and social startups." },
                { icon: <Layers size={22} />, title: "Demo Example", desc: "Demo concept: community chat app with channels, admin moderation, and multilingual onboarding for Kerala users." },
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
                { question: "What is the starting budget for this service?", answer: "MVP starts around INR 50000 for core messaging features" },
                { question: "How long does a full build take?", answer: "6 to 12 weeks based on feature scope and platforms" },
                { question: "Can you build apps beyond chat and dating?", answer: "Yes. I build booking apps, delivery apps, coaching and education apps, clinic apps, fintech apps, and service marketplace apps with realtime features where needed." },
                { question: "Can this include both website and app strategy?", answer: "Yes. We can phase delivery into website first and app later, or parallel execution based on timeline and budget." },
                { question: "Do you provide post-launch support?", answer: "Yes. Post-launch support includes bug fixes, updates, and conversion-focused improvements." },
                { question: "Is this available across Kerala?", answer: "Yes. Projects are delivered for Kochi, Kozhikode, Thiruvananthapuram, Kannur, Kasaragod, Thrissur, and nearby regions." },
            ]}
            relatedServices={[
                { title: "Dating App Development", desc: "Safety-focused social product design", href: "/dating-app-development" },
                { title: "Mobile App Development", desc: "Full app delivery support", href: "/mobile-app-development" },
                { title: "MERN Stack Development", desc: "Scalable realtime backend architecture", href: "/mern-stack-development" },
                { title: "Flutter App Development", desc: "Cross-platform mobile app builds", href: "/flutter-app-development" },
                { title: "Node.js Development", desc: "Realtime backend APIs", href: "/nodejs-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
