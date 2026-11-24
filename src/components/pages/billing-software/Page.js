import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Zap } from 'lucide-react';

export const metadata = {
    title: "Custom Billing Software Development Kerala & UAE | ANAGH K R",
    description: "Custom billing and invoicing software in Kerala and UAE. GST/VAT compliant, barcode scanning, thermal printing, inventory sync, and WhatsApp receipt delivery.",
    keywords: "billing software kerala, custom billing software kochi, gst billing software india, pos billing software dubai, retail billing software",
    alternates: { canonical: "https://www.anaghkr.in/billing-software/" },
    openGraph: {
        title: "Custom Billing Software Development Kerala & UAE | ANAGH K R",
        description: "Custom billing and invoicing software in Kerala and UAE. GST/VAT compliant, barcode scanning, thermal printing, inventory sync, and WhatsApp receipt delivery.",
        url: "https://www.anaghkr.in/billing-software/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Billing Software Development Kerala & UAE | ANAGH K R",
        description: "Custom billing and invoicing software in Kerala and UAE. GST/VAT compliant, barcode scanning, thermal printing, inventory sync, and WhatsApp receipt delivery.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Custom Billing Software Development",
            "serviceType": "Fast POS & Invoicing Solutions",
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
            "description": "Custom billing and invoicing software in Kerala and UAE. GST/VAT compliant, barcode scanning, thermal printing, inventory sync, and WhatsApp receipt delivery.",
            "mainEntityOfPage": "https://www.anaghkr.in/billing-software/"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can this billing software work offline?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer both offline desktop-first solutions (using Electron and SQLite) and cloud-synced web apps that keep billing active even during network drops." }
                },
                {
                    "@type": "Question",
                    "name": "Does it support hardware like barcode scanners and receipt printers?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our systems integrate with standard USB/Bluetooth thermal receipt printers (58mm/80mm), barcode scanners, cash drawers, and electronic weighing scales." }
                }
            ]
        }
    ]
};

export default function Page() {
    return (
        <ServicePageTemplate
            badge="Fast POS & Invoicing Solutions"
            title="Custom Billing Software"
            titleHighlight="Development"
            description="Custom billing and invoicing software in Kerala and UAE. GST/VAT compliant, barcode scanning, thermal printing, inventory sync, and WhatsApp receipt delivery."
            heroStats={[
                { number: "100%", label: "GST & VAT Compliant" },
                { number: "< 1s", label: "Barcode Lookup" },
                { number: "Instant", label: "WhatsApp Invoicing" },
                { number: "Multi-mode", label: "Online & Offline" }
            ]}
            whatYouGet={[
                { icon: <Zap size={22} />, title: "High-Speed Barcode Billing", desc: "Scan and generate customer invoices in under two seconds with keyboard shortcuts and instant product lookup." },
                { icon: <Zap size={22} />, title: "Automated Tax Calculation", desc: "Full compliance with Indian GST (CGST/SGST/IGST) and GCC VAT calculations, e-way bills, and tax returns." },
                { icon: <Zap size={22} />, title: "WhatsApp PDF Invoicing", desc: "Send digital PDF receipts directly to customer WhatsApp numbers instantly to save thermal paper costs." },
                { icon: <Zap size={22} />, title: "Payment Gateway & Credit Tracking", desc: "Track split payments, cash, UPI, cards, and customer credit ledgers (udhaar) with automatic reminders." }
            ]}
            technologies={[
                { category: "Desktop & Web UI", items: ["React 19","Electron / Next.js","Tailwind CSS","Keyboard Shortcuts"] },
                { category: "Backend Core", items: ["Node.js","Express","SQLite / PostgreSQL","PDFKit Engine"] },
                { category: "Hardware Support", items: ["Thermal Printers","Barcode Scanners","Cash Drawers","Weighing Scales"] },
                { category: "Integrations", items: ["WhatsApp Cloud API","GST e-Invoicing Portal","UPI QR Codes","SMS Gateways"] }
            ]}
            process={[
                { title: "Business Workflow Discovery", desc: "We map your operational bottlenecks, team roles, and data input flows into clear technical specifications." },
                { title: "Figma UI/UX & Architecture", desc: "Interactive clickable prototypes for desktop and mobile, ensuring intuitive navigation before writing code." },
                { title: "Agile Development & Integrations", desc: "Sprint-by-sprint engineering with live preview links, automated tests, and third-party API wiring." },
                { title: "Deployment, Training & Support", desc: "Zero-downtime deployment, staff onboarding documentation, and ongoing maintenance coverage." }
            ]}
            faqs={[
                {
                    question: "Can this billing software work offline?",
                    answer: "Yes. We offer both offline desktop-first solutions (using Electron and SQLite) and cloud-synced web apps that keep billing active even during network drops."
                },
                {
                    question: "Does it support hardware like barcode scanners and receipt printers?",
                    answer: "Yes. Our systems integrate with standard USB/Bluetooth thermal receipt printers (58mm/80mm), barcode scanners, cash drawers, and electronic weighing scales."
                },
                {
                    question: "Can invoices be customized with my store logo and terms?",
                    answer: "Yes, thermal receipts and A4/A5 invoices are 100% custom styled with your brand logo, tax registration numbers, and customized return policies."
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
                    <h2 className="text-3xl font-black text-white">Speed Up Checkout Lines and Prevent Revenue Leakage</h2>
                    <p>Slow billing systems frustrate shoppers and lead to abandoned baskets during rush hours. Our lightweight billing engines ensure instantaneous barcode scanning and 2-second checkouts.</p>
                    <p>Automated inventory deductions prevent overselling, while real-time gross profit calculation alerts store managers to margin erosion immediately.</p>
                    <h3 className="text-2xl font-bold text-white">Green WhatsApp Invoicing for the Modern Retailer</h3>
                    <p>Cut down paper expenses by dispatching digital tax invoices directly to your customer's WhatsApp inbox, opening an instant marketing channel for re-engagement.</p>
                </div>
            }
        />
    );
}
