export const metadata = {
    title: "Web & Mobile App Developer for Dubai UAE | ANAGH K R",
    description: "Hire experienced freelance web & mobile app (Flutter) developer for Dubai businesses. Sub-second Next.js websites, mobile apps, and 60% cost savings vs local agencies.",
    keywords: "web developer dubai, flutter app developer dubai, freelance developer dubai uae, hire software engineer dubai, custom web development dubai",
    robots: { index: true, follow: true },
    alternates: { canonical: "https://www.anaghkr.in/locations/dubai/" },
    openGraph: {
        title: "Web & Mobile App Developer for Dubai UAE | ANAGH K R",
        description: "Hire experienced freelance web & mobile app (Flutter) developer for Dubai businesses. Sub-second Next.js websites, mobile apps, and 60% cost savings vs local agencies.",
        url: "https://www.anaghkr.in/locations/dubai/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web & Mobile App Developer for Dubai UAE | ANAGH K R",
        description: "Hire experienced freelance web & mobile app (Flutter) developer for Dubai businesses. Sub-second Next.js websites, mobile apps, and 60% cost savings vs local agencies.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & Mobile App Development Dubai, UAE",
    "description": "Hire experienced freelance web & mobile app (Flutter) developer for Dubai businesses. Sub-second Next.js websites, mobile apps, and 60% cost savings vs local agencies.",
    "url": "https://www.anaghkr.in/locations/dubai/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "UAE"
    },
    "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Country", "name": "UAE" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function Page() {
    const cityHighlights = [
        {
            "icon": "fas fa-laptop-code",
            "title": "60–70% Budget Advantage",
            "description": "Senior-level engineering without agency overhead or sponsorship liabilities."
        },
        {
            "icon": "fas fa-clock",
            "title": "Close Time Zone Alignment",
            "description": "Convenient time zone overlap with IST ensures seamless daily communication during business hours."
        },
        {
            "icon": "fas fa-globe",
            "title": "Bilingual & RTL Expertise",
            "description": "Clean English and Arabic layout implementations with regional payment gateway integrations."
        }
    ];

    const services = [
        {
            "icon": "fas fa-laptop-code",
            "title": "Custom Web Applications",
            "description": "High-performance React & Next.js websites and portals engineered for sub-second speeds and maximum lead conversion.",
            "features": [
                "Next.js 15+ & React 19",
                "Sub-Second Page Loads",
                "SEO-First Architecture",
                "Bilingual RTL & English"
            ]
        },
        {
            "icon": "fab fa-flutter",
            "title": "Flutter Mobile Apps",
            "description": "Cross-platform iOS and Android mobile applications compiled to native ARM code with smooth 60fps animations.",
            "features": [
                "Single Codebase Economy",
                "Native Hardware Integration",
                "App Store & Play Store Launch",
                "Real-time Push Notifications"
            ]
        },
        {
            "icon": "fas fa-database",
            "title": "Scalable APIs & Backends",
            "description": "Enterprise-grade Node.js and NestJS microservices with PostgreSQL/MongoDB and secure payment gateway integrations.",
            "features": [
                "Modular Clean Architecture",
                "Regional Payment Gateways",
                "Multi-Tenant Database Scaling",
                "Automated CI/CD Deployment"
            ]
        },
        {
            "icon": "fas fa-globe",
            "title": "Local SEO & Performance",
            "description": "Dominating search rankings across Dubai, UAE with Google Core Web Vitals optimization and Schema.org markup.",
            "features": [
                "100/100 PageSpeed Targets",
                "Structured Data Schemas",
                "High-Converting WhatsApp CTA",
                "GCC Search Intent Focus"
            ]
        }
    ];

    const benefits = [
        {
            "icon": "fas fa-handshake",
            "title": "Direct Senior Developer Collaboration",
            "description": "Work directly with your software engineer with zero project manager disconnect or sales bureaucracy."
        },
        {
            "icon": "fas fa-rupee-sign",
            "title": "60%–70% Budget Optimization",
            "description": "Get agency-grade engineering without the overhead of retaining high-cost regional agencies."
        },
        {
            "icon": "fas fa-clock",
            "title": "Convenient Time Zone Overlap",
            "description": "Close alignment with Indian Standard Time allows real-time daily communication and quick turnaround."
        },
        {
            "icon": "fas fa-laptop-code",
            "title": "100% IP & Code Ownership",
            "description": "You receive full source code access on private GitHub repositories with clean documentation."
        }
    ];

    const portfolio = [
        {
            "icon": "fas fa-laptop-code",
            "title": "Enterprise Logistics & Fleet Web Portal",
            "description": "Real-time dispatch dashboard with live tracking, automated invoicing, and role-based management.",
            "tech": ["Next.js 15", "Tailwind CSS", "Node.js", "PostgreSQL"]
        },
        {
            "icon": "fas fa-store",
            "title": "High-Converting eCommerce Storefront",
            "description": "Sub-second Next.js digital store with localized payment integrations and automated WhatsApp receipts.",
            "tech": ["React 19", "Next.js", "Stripe", "MongoDB"]
        },
        {
            "icon": "fab fa-flutter",
            "title": "On-Demand Services Mobile App",
            "description": "Cross-platform mobile application featuring calendar bookings, GPS technician tracking, and automated ratings.",
            "tech": ["Flutter", "Dart", "Firebase", "REST API"]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="Dubai, UAE"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Providing elite full-stack web and Flutter mobile app development for startups, established enterprises, and growing brands across Dubai, UAE."
                extraContent={
                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <h2 className="text-3xl font-black text-white">Why Dubai, UAE Businesses Choose Remote Software Engineering from Kerala</h2>
                        <p>
                            As companies in <strong>Dubai, UAE</strong> accelerate their digital operations, partnering remotely with an experienced Full-Stack and Flutter developer in Kerala provides the perfect combination of world-class technical standards and cost efficiency.
                        </p>
                        <p>
                            With overlapping working hours, communication via Slack, Google Meet, and WhatsApp is effortless. Whether you need a brand-new Flutter mobile MVP or a complex Next.js SaaS portal, we deliver rapid milestone-based execution.
                        </p>
                    </div>
                }
            />
        </>
    );
}
