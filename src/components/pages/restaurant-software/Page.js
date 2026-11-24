import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Zap } from 'lucide-react';

export const metadata = {
    title: "Restaurant Management Software & POS Kerala | ANAGH K R",
    description: "Custom restaurant management software and cloud POS in Kerala & UAE. Table management, QR code ordering, KDS, inventory tracking, and zero commission fees.",
    keywords: "restaurant software kerala, restaurant pos developer kochi, cloud restaurant pos uae, qr code ordering system, kitchen display system kds",
    alternates: { canonical: "https://www.anaghkr.in/restaurant-software/" },
    openGraph: {
        title: "Restaurant Management Software & POS Kerala | ANAGH K R",
        description: "Custom restaurant management software and cloud POS in Kerala & UAE. Table management, QR code ordering, KDS, inventory tracking, and zero commission fees.",
        url: "https://www.anaghkr.in/restaurant-software/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Restaurant Management Software & POS Kerala | ANAGH K R",
        description: "Custom restaurant management software and cloud POS in Kerala & UAE. Table management, QR code ordering, KDS, inventory tracking, and zero commission fees.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Restaurant Management Software",
            "serviceType": "Smart Restaurant POS & Ordering",
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
            "description": "Custom restaurant management software and cloud POS in Kerala & UAE. Table management, QR code ordering, KDS, inventory tracking, and zero commission fees.",
            "mainEntityOfPage": "https://www.anaghkr.in/restaurant-software/"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Does the POS work if the internet goes down?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build Progressive Web App (PWA) POS systems with offline-first local caching so billing and kitchen printing continue uninterrupted even during internet outages." }
                },
                {
                    "@type": "Question",
                    "name": "Can customers pay directly from their phone at the table?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. QR code table menus support instant UPI (GPay/PhonePe) or GCC payment gateways with automatic order dispatch to the kitchen." }
                }
            ]
        }
    ]
};

export default function Page() {
    return (
        <ServicePageTemplate
            badge="Smart Restaurant POS & Ordering"
            title="Restaurant Management"
            titleHighlight="Software"
            description="Custom restaurant management software and cloud POS in Kerala & UAE. Table management, QR code ordering, KDS, inventory tracking, and zero commission fees."
            heroStats={[
                { number: "0%", label: "Third-Party Commissions" },
                { number: "< 2s", label: "POS Bill Generation" },
                { number: "Real-time", label: "Kitchen Display (KDS)" },
                { number: "QR Code", label: "Contactless Ordering" }
            ]}
            whatYouGet={[
                { icon: <Zap size={22} />, title: "High-Speed Touch POS", desc: "Lightning-fast billing interface with table layout mapping, split checks, and thermal printer integration." },
                { icon: <Zap size={22} />, title: "Live Kitchen Display System (KDS)", desc: "Instant routing of orders to kitchen screens categorized by preparation station to eliminate order errors." },
                { icon: <Zap size={22} />, title: "Dine-In QR Code Ordering", desc: "Allow guests to browse digital menus, order food, and pay from their smartphones without waiting for waitstaff." },
                { icon: <Zap size={22} />, title: "Recipe & Ingredient Stock Control", desc: "Automatic deduction of raw ingredients upon billing to track food wastage and alert on low inventory." }
            ]}
            technologies={[
                { category: "POS Interface", items: ["React 19","PWA Offline Mode","Tailwind CSS","ESC/POS Thermal"] },
                { category: "Real-Time Engine", items: ["Node.js","WebSocket","Socket.io","Express"] },
                { category: "Data & State", items: ["PostgreSQL","IndexedDB","Redis","Cloud Backups"] },
                { category: "Payments", items: ["UPI Integration","Stripe","Network Card Terminals","WhatsApp Receipts"] }
            ]}
            process={[
                { title: "Business Workflow Discovery", desc: "We map your operational bottlenecks, team roles, and data input flows into clear technical specifications." },
                { title: "Figma UI/UX & Architecture", desc: "Interactive clickable prototypes for desktop and mobile, ensuring intuitive navigation before writing code." },
                { title: "Agile Development & Integrations", desc: "Sprint-by-sprint engineering with live preview links, automated tests, and third-party API wiring." },
                { title: "Deployment, Training & Support", desc: "Zero-downtime deployment, staff onboarding documentation, and ongoing maintenance coverage." }
            ]}
            faqs={[
                {
                    question: "Does the POS work if the internet goes down?",
                    answer: "Yes. We build Progressive Web App (PWA) POS systems with offline-first local caching so billing and kitchen printing continue uninterrupted even during internet outages."
                },
                {
                    question: "Can customers pay directly from their phone at the table?",
                    answer: "Yes. QR code table menus support instant UPI (GPay/PhonePe) or GCC payment gateways with automatic order dispatch to the kitchen."
                },
                {
                    question: "Can I manage multiple restaurant outlets from one dashboard?",
                    answer: "Yes. The central admin dashboard lets you monitor live sales, update menu prices, and review stock consumption across all branches simultaneously."
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
                    <h2 className="text-3xl font-black text-white">Eliminate Aggregator Commissions with Direct Digital Ordering</h2>
                    <p>Food delivery aggregators charge up to 25%–30% in commissions on every order, severely compressing restaurant margins. Building your own branded direct ordering platform and in-house POS protects your profits.</p>
                    <p>From quick-service cafes (QSR) in Kochi to fine-dining and multi-chain restaurants in Dubai and Doha, our software provides complete order, kitchen, and inventory automation.</p>
                    <h3 className="text-2xl font-bold text-white">Faster Table Turnaround & Happier Diners</h3>
                    <p>Interactive QR digital ordering cuts wait times by up to 15 minutes per table during peak hours, significantly increasing table turnover and revenue.</p>
                </div>
            }
        />
    );
}
