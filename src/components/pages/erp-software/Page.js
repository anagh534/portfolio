import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Zap } from 'lucide-react';

export const metadata = {
    title: "Custom ERP Software Development Kerala & UAE | ANAGH K R",
    description: "Custom ERP software development in Kerala and UAE. Unify inventory, supply chain, accounting, HR, and multi-branch operations into one high-speed platform.",
    keywords: "erp software development kerala, custom erp developer kochi, erp software dubai uae, enterprise resource planning india, cloud erp software",
    alternates: { canonical: "https://www.anaghkr.in/erp-software/" },
    openGraph: {
        title: "Custom ERP Software Development Kerala & UAE | ANAGH K R",
        description: "Custom ERP software development in Kerala and UAE. Unify inventory, supply chain, accounting, HR, and multi-branch operations into one high-speed platform.",
        url: "https://www.anaghkr.in/erp-software/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom ERP Software Development Kerala & UAE | ANAGH K R",
        description: "Custom ERP software development in Kerala and UAE. Unify inventory, supply chain, accounting, HR, and multi-branch operations into one high-speed platform.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Custom ERP Software Solutions",
            "serviceType": "Enterprise Resource Planning",
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
            "description": "Custom ERP software development in Kerala and UAE. Unify inventory, supply chain, accounting, HR, and multi-branch operations into one high-speed platform.",
            "mainEntityOfPage": "https://www.anaghkr.in/erp-software/"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How is a custom ERP better than Tally or SAP?",
                    "acceptedAnswer": { "@type": "Answer", "text": "SAP is prohibitively expensive for SMEs, while Tally lacks modern web interfaces, custom workflow automation, and real-time multi-branch synchronization. Our custom ERP provides the exact features your enterprise requires with a modern, responsive web UI." }
                },
                {
                    "@type": "Question",
                    "name": "Does the ERP comply with India GST and UAE/Saudi VAT rules?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Invoicing modules are custom programmed with precise GST e-invoicing and GCC ZATCA / FTA tax rules and QR codes." }
                }
            ]
        }
    ]
};

export default function Page() {
    return (
        <ServicePageTemplate
            badge="Enterprise Resource Planning"
            title="Custom ERP Software"
            titleHighlight="Solutions"
            description="Custom ERP software development in Kerala and UAE. Unify inventory, supply chain, accounting, HR, and multi-branch operations into one high-speed platform."
            heroStats={[
                { number: "Multi", label: "Branch Operations" },
                { number: "Real-time", label: "Inventory Sync" },
                { number: "GST / VAT", label: "Compliant Invoicing" },
                { number: "100%", label: "Data Ownership" }
            ]}
            whatYouGet={[
                { icon: <Zap size={22} />, title: "Unified Inventory Management", desc: "Real-time stock tracking across multiple warehouses, low-stock threshold triggers, and automated purchase orders." },
                { icon: <Zap size={22} />, title: "Automated Financials & Accounting", desc: "Generate GST and GCC VAT-compliant invoices, track accounts receivable, and generate instant P&L statements." },
                { icon: <Zap size={22} />, title: "Supply Chain & Procurement", desc: "Streamline vendor quotes, purchase approvals, goods receipt notes (GRN), and payment scheduling." },
                { icon: <Zap size={22} />, title: "Role-Based Team Permissions", desc: "Granular access control ensuring warehouse staff, accountants, and executives only see authorized data." }
            ]}
            technologies={[
                { category: "Frontend & UI", items: ["Next.js 15","React 19","Tailwind CSS","Data Grids"] },
                { category: "Backend Microservices", items: ["NestJS","Node.js","Docker","Microservices"] },
                { category: "Database & Auditing", items: ["PostgreSQL","TimescaleDB","Redis","Audit Logs"] },
                { category: "Compliance & Security", items: ["GST/VAT Engines","JWT Authentication","AWS Cloud","Encrypted Backups"] }
            ]}
            process={[
                { title: "Business Workflow Discovery", desc: "We map your operational bottlenecks, team roles, and data input flows into clear technical specifications." },
                { title: "Figma UI/UX & Architecture", desc: "Interactive clickable prototypes for desktop and mobile, ensuring intuitive navigation before writing code." },
                { title: "Agile Development & Integrations", desc: "Sprint-by-sprint engineering with live preview links, automated tests, and third-party API wiring." },
                { title: "Deployment, Training & Support", desc: "Zero-downtime deployment, staff onboarding documentation, and ongoing maintenance coverage." }
            ]}
            faqs={[
                {
                    question: "How is a custom ERP better than Tally or SAP?",
                    answer: "SAP is prohibitively expensive for SMEs, while Tally lacks modern web interfaces, custom workflow automation, and real-time multi-branch synchronization. Our custom ERP provides the exact features your enterprise requires with a modern, responsive web UI."
                },
                {
                    question: "Does the ERP comply with India GST and UAE/Saudi VAT rules?",
                    answer: "Yes. Invoicing modules are custom programmed with precise GST e-invoicing and GCC ZATCA / FTA tax rules and QR codes."
                },
                {
                    question: "Can the ERP system run on private cloud or on-premise servers?",
                    answer: "Yes, we deploy on AWS, DigitalOcean, or private dedicated on-premise servers based on your data residency requirements."
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
                    <h2 className="text-3xl font-black text-white">Transform Fragmented Operations with a Centralized Cloud ERP</h2>
                    <p>Operating with disconnected spreadsheets, separate accounting software, and manual inventory ledgers causes stock discrepancies, delayed order fulfillment, and lost revenue.</p>
                    <p>Our custom ERP consolidates your entire operational pipeline into a single, cohesive source of truth. With real-time inventory updates and instant reporting, leadership makes faster, data-backed decisions.</p>
                    <h3 className="text-2xl font-bold text-white">Scalable for Multi-Branch and Cross-Border Commerce</h3>
                    <p>Designed from the foundation for multi-currency transactions, regional tax compliance, and seamless cross-branch transfers between Kerala, UAE, and GCC regional hubs.</p>
                </div>
            }
        />
    );
}
