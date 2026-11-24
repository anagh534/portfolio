import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Zap } from 'lucide-react';

export const metadata = {
    title: "WhatsApp AI Bot Development Kerala & UAE | ANAGH K R",
    description: "Custom WhatsApp AI bot development in Kerala & UAE. Official WhatsApp Cloud API, AI-driven customer replies, order tracking, and automated broadcast marketing.",
    keywords: "whatsapp ai bot development kerala, whatsapp chatbot developer kochi, whatsapp business api uae, automated whatsapp marketing india, whatsapp crm bot",
    alternates: { canonical: "https://www.anaghkr.in/whatsapp-ai-bot/" },
    openGraph: {
        title: "WhatsApp AI Bot Development Kerala & UAE | ANAGH K R",
        description: "Custom WhatsApp AI bot development in Kerala & UAE. Official WhatsApp Cloud API, AI-driven customer replies, order tracking, and automated broadcast marketing.",
        url: "https://www.anaghkr.in/whatsapp-ai-bot/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "WhatsApp AI Bot Development Kerala & UAE | ANAGH K R",
        description: "Custom WhatsApp AI bot development in Kerala & UAE. Official WhatsApp Cloud API, AI-driven customer replies, order tracking, and automated broadcast marketing.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "WhatsApp AI Bot Development",
            "serviceType": "WhatsApp Business Automation",
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
            "description": "Custom WhatsApp AI bot development in Kerala & UAE. Official WhatsApp Cloud API, AI-driven customer replies, order tracking, and automated broadcast marketing.",
            "mainEntityOfPage": "https://www.anaghkr.in/whatsapp-ai-bot/"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is this built on the official Meta WhatsApp API or unofficial QR scanning?",
                    "acceptedAnswer": { "@type": "Answer", "text": "We exclusively use the official Meta WhatsApp Business Cloud API. This eliminates the risk of your business phone number being banned and ensures 100% uptime." }
                },
                {
                    "@type": "Question",
                    "name": "Can multiple human agents manage conversations alongside the bot?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build shared team inboxes where human agents can monitor conversations and take over from the bot whenever personal assistance is required." }
                }
            ]
        }
    ]
};

export default function Page() {
    return (
        <ServicePageTemplate
            badge="WhatsApp Business Automation"
            title="WhatsApp AI Bot"
            titleHighlight="Development"
            description="Custom WhatsApp AI bot development in Kerala & UAE. Official WhatsApp Cloud API, AI-driven customer replies, order tracking, and automated broadcast marketing."
            heroStats={[
                { number: "98%", label: "Message Open Rate" },
                { number: "Instant", label: "Automated Response" },
                { number: "Official", label: "Cloud API Partner" },
                { number: "24/7", label: "Order & Query Handling" }
            ]}
            whatYouGet={[
                { icon: <Zap size={22} />, title: "Official Cloud API Setup", desc: "Complete Meta Business verification, green tick consultation, and permanent Cloud API provisioning with high throughput." },
                { icon: <Zap size={22} />, title: "AI Natural Language Responses", desc: "Equip your WhatsApp number with AI agents that answer product questions, send catalog links, and resolve issues." },
                { icon: <Zap size={22} />, title: "Interactive Menus & Quick Buttons", desc: "Engage customers with clickable button menus, product catalogs, and interactive lists for effortless navigation." },
                { icon: <Zap size={22} />, title: "Automated Order & Shipping Alerts", desc: "Trigger automatic payment confirmations, invoice PDFs, tracking URLs, and booking reminders." }
            ]}
            technologies={[
                { category: "Meta Platforms", items: ["WhatsApp Business Cloud API","Meta Graph API","Webhook Engine","Interactive Templates"] },
                { category: "AI & Automation", items: ["OpenAI GPT-4o","Node.js","Redis Queue","BullMQ"] },
                { category: "Databases & Media", items: ["PostgreSQL","AWS S3 Media Storage","Prisma ORM","Vector DB"] },
                { category: "Integrations", items: ["Shopify / WooCommerce","Payment Links","Custom CRM","Google Sheets Sync"] }
            ]}
            process={[
                { title: "Business Workflow Discovery", desc: "We map your operational bottlenecks, team roles, and data input flows into clear technical specifications." },
                { title: "Figma UI/UX & Architecture", desc: "Interactive clickable prototypes for desktop and mobile, ensuring intuitive navigation before writing code." },
                { title: "Agile Development & Integrations", desc: "Sprint-by-sprint engineering with live preview links, automated tests, and third-party API wiring." },
                { title: "Deployment, Training & Support", desc: "Zero-downtime deployment, staff onboarding documentation, and ongoing maintenance coverage." }
            ]}
            faqs={[
                {
                    question: "Is this built on the official Meta WhatsApp API or unofficial QR scanning?",
                    answer: "We exclusively use the official Meta WhatsApp Business Cloud API. This eliminates the risk of your business phone number being banned and ensures 100% uptime."
                },
                {
                    question: "Can multiple human agents manage conversations alongside the bot?",
                    answer: "Yes. We build shared team inboxes where human agents can monitor conversations and take over from the bot whenever personal assistance is required."
                },
                {
                    question: "Can I broadcast promotional messages to my customer list?",
                    answer: "Yes. We implement broadcast management tools utilizing Meta pre-approved message templates for compliant marketing campaigns."
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
                    <h2 className="text-3xl font-black text-white">Meet Your Customers on the App They Use Every Single Day</h2>
                    <p>With email open rates dropping below 15%, WhatsApp commands an astounding 98% open rate. Engaging your customers on WhatsApp delivers unmatched conversion and satisfaction.</p>
                    <p>From automated booking confirmations in Kerala to customer support for retail brands in the UAE, our WhatsApp AI bots transform your business number into an automated 24/7 sales channel.</p>
                    <h3 className="text-2xl font-bold text-white">Seamless E-Commerce & Catalog Checkout</h3>
                    <p>Showcase product catalogs, let users add items to cart, and generate UPI or Stripe payment links directly within the WhatsApp chat conversation.</p>
                </div>
            }
        />
    );
}
