import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Zap } from 'lucide-react';

export const metadata = {
    title: "Attendance Tracking System & Biometric Software Kerala | ANAGH K R",
    description: "Custom attendance tracking system development in Kerala and UAE. Biometric integration, facial recognition, GPS geo-fenced mobile check-ins, and payroll sync.",
    keywords: "attendance tracking system kerala, biometric attendance software kochi, employee attendance software uae, geofencing attendance app, hr payroll software",
    alternates: { canonical: "https://www.anaghkr.in/attendance-tracking-system/" },
    openGraph: {
        title: "Attendance Tracking System & Biometric Software Kerala | ANAGH K R",
        description: "Custom attendance tracking system development in Kerala and UAE. Biometric integration, facial recognition, GPS geo-fenced mobile check-ins, and payroll sync.",
        url: "https://www.anaghkr.in/attendance-tracking-system/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Attendance Tracking System & Biometric Software Kerala | ANAGH K R",
        description: "Custom attendance tracking system development in Kerala and UAE. Biometric integration, facial recognition, GPS geo-fenced mobile check-ins, and payroll sync.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Attendance Tracking System",
            "serviceType": "Smart Workforce & Biometric Management",
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
            "description": "Custom attendance tracking system development in Kerala and UAE. Biometric integration, facial recognition, GPS geo-fenced mobile check-ins, and payroll sync.",
            "mainEntityOfPage": "https://www.anaghkr.in/attendance-tracking-system/"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can it integrate with our existing ZKTeco or eSSL biometric machines?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build middleware connectors that listen to your physical biometric devices and sync punches to cloud databases in real time." }
                },
                {
                    "@type": "Question",
                    "name": "How does GPS geo-fencing prevent employee location spoofing?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Our Flutter mobile application uses advanced GPS telemetry, mock-location detection, and optional selfie verification at the time of clock-in." }
                }
            ]
        }
    ]
};

export default function Page() {
    return (
        <ServicePageTemplate
            badge="Smart Workforce & Biometric Management"
            title="Attendance Tracking"
            titleHighlight="System"
            description="Custom attendance tracking system development in Kerala and UAE. Biometric integration, facial recognition, GPS geo-fenced mobile check-ins, and payroll sync."
            heroStats={[
                { number: "GPS", label: "Geo-fenced Check-in" },
                { number: "Face / Bio", label: "Hardware Integration" },
                { number: "1-Click", label: "Payroll Generation" },
                { number: "Real-time", label: "Shift & Overtime Sync" }
            ]}
            whatYouGet={[
                { icon: <Zap size={22} />, title: "Geo-Fenced Mobile Punch-In", desc: "Field staff and remote teams clock in via mobile GPS location validation to prevent buddy-punching and time fraud." },
                { icon: <Zap size={22} />, title: "Biometric Machine Integration", desc: "Direct synchronization with fingerprint, RFID card, and facial recognition terminals (ZKTeco, eSSL, Hikvision)." },
                { icon: <Zap size={22} />, title: "Shift & Overtime Automation", desc: "Automated night shift allowances, split shifts, half-day calculations, and overtime tracking based on company rules." },
                { icon: <Zap size={22} />, title: "Automated Payroll Export", desc: "One-click calculation of working days, paid leaves, and deductions formatted for seamless bank salary disbursement." }
            ]}
            technologies={[
                { category: "Mobile & Web", items: ["Flutter (iOS/Android)","React 19","Tailwind CSS","PWA"] },
                { category: "Backend & Sync", items: ["Node.js","NestJS","ZKTeco SDK API","Cron Schedulers"] },
                { category: "Location & Security", items: ["Google Maps API","Geo-Fencing","PostgreSQL","Facial Verification"] },
                { category: "HR Exports", items: ["Excel / CSV Engines","PDF Payslips","WhatsApp Alerts","Email Digests"] }
            ]}
            process={[
                { title: "Business Workflow Discovery", desc: "We map your operational bottlenecks, team roles, and data input flows into clear technical specifications." },
                { title: "Figma UI/UX & Architecture", desc: "Interactive clickable prototypes for desktop and mobile, ensuring intuitive navigation before writing code." },
                { title: "Agile Development & Integrations", desc: "Sprint-by-sprint engineering with live preview links, automated tests, and third-party API wiring." },
                { title: "Deployment, Training & Support", desc: "Zero-downtime deployment, staff onboarding documentation, and ongoing maintenance coverage." }
            ]}
            faqs={[
                {
                    question: "Can it integrate with our existing ZKTeco or eSSL biometric machines?",
                    answer: "Yes. We build middleware connectors that listen to your physical biometric devices and sync punches to cloud databases in real time."
                },
                {
                    question: "How does GPS geo-fencing prevent employee location spoofing?",
                    answer: "Our Flutter mobile application uses advanced GPS telemetry, mock-location detection, and optional selfie verification at the time of clock-in."
                },
                {
                    question: "Does it calculate complex overtime and late-mark penalties?",
                    answer: "Yes. All company attendance policies, grace periods, half-day cutoffs, and overtime multipliers are configured to your exact HR guidelines."
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
                    <h2 className="text-3xl font-black text-white">Eliminate Time Fraud and Manual Timesheet Reconciliation</h2>
                    <p>Manual paper registers or unverified mobile check-ins cost organizations thousands in lost productivity and buddy punching each month.</p>
                    <p>Our custom attendance tracking systems unify biometric hardware, geo-fenced mobile applications, and automated HR rules into one centralized dashboard.</p>
                    <h3 className="text-2xl font-bold text-white">Ideal for Retail Chains, Construction, and Distributed Teams</h3>
                    <p>Whether managing site engineers across construction projects in Dubai or retail store staff across Kerala, ensure 100% accountability with live attendance dashboards.</p>
                </div>
            }
        />
    );
}
