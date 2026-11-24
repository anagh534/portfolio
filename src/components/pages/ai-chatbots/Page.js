import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Zap } from 'lucide-react';

export const metadata = {
    title: "AI Chatbot Development Kerala | Custom LLM Bots | ANAGH K R",
    description: "Custom AI chatbot development in Kerala and UAE. Train ChatGPT, Claude, and Gemini on your company knowledge base for 24/7 customer support and automated lead capture.",
    keywords: "ai chatbot development kerala, custom chatbot developer kochi, conversational ai developer india, train chatgpt company data, customer support ai bot",
    alternates: { canonical: "https://www.anaghkr.in/ai-chatbots/" },
    openGraph: {
        title: "AI Chatbot Development Kerala | Custom LLM Bots | ANAGH K R",
        description: "Custom AI chatbot development in Kerala and UAE. Train ChatGPT, Claude, and Gemini on your company knowledge base for 24/7 customer support and automated lead capture.",
        url: "https://www.anaghkr.in/ai-chatbots/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Chatbot Development Kerala | Custom LLM Bots | ANAGH K R",
        description: "Custom AI chatbot development in Kerala and UAE. Train ChatGPT, Claude, and Gemini on your company knowledge base for 24/7 customer support and automated lead capture.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Custom AI Chatbot Development",
            "serviceType": "Generative AI & Conversational UX",
            "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in/" },
            "areaServed": [
                { "@type": "State", "name": "Kerala" },
                { "@type": "City", "name": "Kochi" },
                { "@type": "City", "name": "Thiruvananthapuram" },
                { "@type": "City", "name": "Kozhikode" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "City", "name": "Dubai" },
                { "@type": "Country", "name": "Saudi Arabia" },
                { "@type": "Country", "name": "Qatar" },
                { "@type": "Country", "name": "Oman" }
            ],
            "description": "Custom AI chatbot development in Kerala and UAE. Train ChatGPT, Claude, and Gemini on your company knowledge base for 24/7 customer support and automated lead capture.",
            "mainEntityOfPage": "https://www.anaghkr.in/ai-chatbots/"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How do you prevent the AI chatbot from hallucinating false information?",
                    "acceptedAnswer": { "@type": "Answer", "text": "We implement strict Retrieval-Augmented Generation (RAG) architecture with vector databases. The AI is constrained to answer only from your approved documents and knowledge base, returning 'I don't know' rather than fabricating details." }
                },
                {
                    "@type": "Question",
                    "name": "Can the chatbot answer in multiple languages like Malayalam or Arabic?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Modern foundation models handle multilingual conversations seamlessly, allowing your bot to interact fluently in English, Malayalam, Hindi, or Arabic." }
                }
            ]
        }
    ]
};

export default function Page() {
    return (
        <ServicePageTemplate
            badge="Generative AI & Conversational UX"
            title="Custom AI Chatbot"
            titleHighlight="Development"
            description="Custom AI chatbot development in Kerala and UAE. Train ChatGPT, Claude, and Gemini on your company knowledge base for 24/7 customer support and automated lead capture."
            heroStats={[
                { number: "24/7", label: "Autonomous Support" },
                { number: "RAG", label: "Custom Data Trained" },
                { number: "< 1.2s", label: "Response Latency" },
                { number: "Multi-lang", label: "English & Regional" }
            ]}
            whatYouGet={[
                { icon: <Zap size={22} />, title: "Retrieval-Augmented Generation (RAG)", desc: "Grounds LLMs in your verified PDFs, product catalogs, and databases with zero hallucinations." },
                { icon: <Zap size={22} />, title: "Website & Mobile App Integration", desc: "Embed lightweight chat widgets into Next.js, React, Astro, or Flutter mobile applications." },
                { icon: <Zap size={22} />, title: "Human-in-the-Loop Handoff", desc: "Seamlessly escalates high-value inquiries to human agents via email, Slack, or WhatsApp." },
                { icon: <Zap size={22} />, title: "Lead Qualification & Booking", desc: "Collects visitor contact details, answers pricing queries, and schedules discovery calls automatically." }
            ]}
            technologies={[
                { category: "LLM & Embeddings", items: ["OpenAI GPT-4o","Anthropic Claude 3.5","Llama 3","text-embedding-3"] },
                { category: "Vector DB & RAG", items: ["Pinecone","pgvector","LangChain","LlamaIndex"] },
                { category: "Chat UI & Widgets", items: ["React 19","Tailwind CSS","Astro","WebSockets"] },
                { category: "Backend & Tooling", items: ["Node.js / Python","FastAPI","Redis Cache","Docker"] }
            ]}
            process={[
                { title: "Business Workflow Discovery", desc: "We map your operational bottlenecks, team roles, and data input flows into clear technical specifications." },
                { title: "Figma UI/UX & Architecture", desc: "Interactive clickable prototypes for desktop and mobile, ensuring intuitive navigation before writing code." },
                { title: "Agile Development & Integrations", desc: "Sprint-by-sprint engineering with live preview links, automated tests, and third-party API wiring." },
                { title: "Deployment, Training & Support", desc: "Zero-downtime deployment, staff onboarding documentation, and ongoing maintenance coverage." }
            ]}
            faqs={[
                {
                    question: "How do you prevent the AI chatbot from hallucinating false information?",
                    answer: "We implement strict Retrieval-Augmented Generation (RAG) architecture with vector databases. The AI is constrained to answer only from your approved documents and knowledge base, returning 'I don't know' rather than fabricating details."
                },
                {
                    question: "Can the chatbot answer in multiple languages like Malayalam or Arabic?",
                    answer: "Yes. Modern foundation models handle multilingual conversations seamlessly, allowing your bot to interact fluently in English, Malayalam, Hindi, or Arabic."
                },
                {
                    question: "Can it integrate with our CRM or booking calendar?",
                    answer: "Yes. We configure function calling so the bot can check calendar availability, book appointments, and push lead contact details directly into your CRM."
                }
            ]}
            relatedServices={[
                { title: "MERN Stack Development", href: "/mern-stack-development/", desc: "Custom full-stack web platforms." },
                { title: "Flutter App Development", href: "/flutter-app-development/", desc: "Cross-platform mobile apps for iOS and Android." },
                { title: "Hire Remote Kerala Developer", href: "/hire-kerala-developer-remotely/", desc: "Dedicated software engineering for GCC businesses." }
            ]}
            schemaData={schemaData}
            extraContent={
                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <h2 className="text-3xl font-black text-white">Turn Website Visitors into Paying Customers 24 Hours a Day</h2>
                    <p>When visitors land on your website outside business hours, unanswered questions mean lost revenue. Traditional rule-based chatbots frustrate users with rigid decision trees.</p>
                    <p>Our custom AI chatbots understand natural human language, interpret nuance, and deliver immediate, accurate answers tailored to your company's offerings.</p>
                    <h3 className="text-2xl font-bold text-white">Zero Knowledge Leakage with Enterprise Data Privacy</h3>
                    <p>Your proprietary documents and customer interactions are secured with enterprise-grade vector indexing and never used to train public foundation models.</p>
                </div>
            }
        />
    );
}
