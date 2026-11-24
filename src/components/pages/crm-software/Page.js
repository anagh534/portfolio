import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Zap } from 'lucide-react';

export const metadata = {
    title: "Custom CRM Software Development Kerala & UAE | ANAGH K R",
    description: "Custom CRM software development in Kerala and UAE. Automate lead tracking, sales pipelines, WhatsApp messaging, and customer analytics for your business.",
    keywords: "crm software development kerala, custom crm developer kochi, crm software uae dubai, sales pipeline software india, lead management software",
    alternates: { canonical: "https://www.anaghkr.in/crm-software/" },
    openGraph: {
        title: "Custom CRM Software Development Kerala & UAE | ANAGH K R",
        description: "Custom CRM software development in Kerala and UAE. Automate lead tracking, sales pipelines, WhatsApp messaging, and customer analytics for your business.",
        url: "https://www.anaghkr.in/crm-software/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom CRM Software Development Kerala & UAE | ANAGH K R",
        description: "Custom CRM software development in Kerala and UAE. Automate lead tracking, sales pipelines, WhatsApp messaging, and customer analytics for your business.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Custom CRM Software Development",
            "serviceType": "Enterprise CRM & Pipeline Management",
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
            "description": "Custom CRM software development in Kerala and UAE. Automate lead tracking, sales pipelines, WhatsApp messaging, and customer analytics for your business.",
            "mainEntityOfPage": "https://www.anaghkr.in/crm-software/"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much does custom CRM software cost?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Custom CRM software typically starts from ₹45,000 / AED 2,200 depending on workflow depth, integrations, and user roles. You own the software with zero recurring per-user fees." }
                },
                {
                    "@type": "Question",
                    "name": "Can this CRM integrate with our WhatsApp Business number?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate directly with the official WhatsApp Business Cloud API so your team can send automated notifications, receive leads, and reply within the CRM." }
                }
            ]
        }
    ]
};

export default function Page() {
    return (
        <ServicePageTemplate
            badge="Enterprise CRM & Pipeline Management"
            title="Custom CRM Software"
            titleHighlight="Development"
            description="Custom CRM software development in Kerala and UAE. Automate lead tracking, sales pipelines, WhatsApp messaging, and customer analytics for your business."
            heroStats={[
                { number: "3x", label: "Sales Pipeline Speed" },
                { number: "100%", label: "Lead Capture Rate" },
                { number: "0", label: "Per-User SaaS Fees" },
                { number: "24/7", label: "WhatsApp Integration" }
            ]}
            whatYouGet={[
                { icon: <Zap size={22} />, title: "Automated Lead Routing", desc: "Capture leads instantly from your website, WhatsApp, and social campaigns with automated sales rep assignment." },
                { icon: <Zap size={22} />, title: "Custom Deal Pipelines", desc: "Visual Kanban pipelines tailored to your sales process with automated email and SMS follow-up sequences." },
                { icon: <Zap size={22} />, title: "Customer 360° Profile", desc: "Unified customer history showing all communication, invoices, past orders, and support tickets in one view." },
                { icon: <Zap size={22} />, title: "WhatsApp & Email Sync", desc: "Native WhatsApp Business API integration allowing your team to chat and follow up directly from the CRM." }
            ]}
            technologies={[
                { category: "Frontend & Dashboard", items: ["Next.js 15","React 19","Tailwind CSS","Framer Motion"] },
                { category: "Backend & APIs", items: ["Node.js","NestJS","REST API","WebSocket"] },
                { category: "Database & Security", items: ["PostgreSQL","Prisma ORM","Redis","Role-Based Access"] },
                { category: "Integrations", items: ["WhatsApp Business API","Stripe / Razorpay","SendGrid","Google Calendar"] }
            ]}
            process={[
                { title: "Business Workflow Discovery", desc: "We map your operational bottlenecks, team roles, and data input flows into clear technical specifications." },
                { title: "Figma UI/UX & Architecture", desc: "Interactive clickable prototypes for desktop and mobile, ensuring intuitive navigation before writing code." },
                { title: "Agile Development & Integrations", desc: "Sprint-by-sprint engineering with live preview links, automated tests, and third-party API wiring." },
                { title: "Deployment, Training & Support", desc: "Zero-downtime deployment, staff onboarding documentation, and ongoing maintenance coverage." }
            ]}
            faqs={[
                {
                    question: "How much does custom CRM software cost?",
                    answer: "Custom CRM software typically starts from ₹45,000 / AED 2,200 depending on workflow depth, integrations, and user roles. You own the software with zero recurring per-user fees."
                },
                {
                    question: "Can this CRM integrate with our WhatsApp Business number?",
                    answer: "Yes. We integrate directly with the official WhatsApp Business Cloud API so your team can send automated notifications, receive leads, and reply within the CRM."
                },
                {
                    question: "Can you migrate data from our existing Excel sheets or Zoho/HubSpot?",
                    answer: "Yes, we handle complete data migration, schema mapping, and validation from spreadsheets or existing SaaS tools without data loss."
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
                    <h2 className="text-3xl font-black text-white">Why Choose Custom CRM Software Over Expensive SaaS Subscriptions?</h2>
                    <p>Leading commercial CRMs like Salesforce or HubSpot charge heavy recurring monthly fees per user that balloon as your sales team grows. Furthermore, their generic forms force your team to adjust to their workflows rather than the other way around.</p>
                    <p>A custom CRM built specifically for your enterprise gives you total ownership of your customer database, bespoke pipelines matching your actual sales stages, and zero recurring seat licenses.</p>
                    <h3 className="text-2xl font-bold text-white">Engineered for Kerala, UAE & GCC Enterprises</h3>
                    <p>Whether managing retail customer relationships in Kochi or regional B2B client accounts across Dubai and Riyadh, our CRM platforms support multi-currency, multi-branch, and multi-lingual operations from day one.</p>
                </div>
            }
        />
    );
}
