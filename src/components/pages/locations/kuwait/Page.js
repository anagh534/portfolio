export const metadata = {
    title: "Web & App Developer for Kuwait City | ANAGH K R",
    description: "Freelance web and Flutter app developer for Kuwait businesses. Next.js web applications, mobile apps, custom POS and CRM systems with seamless regional payment integrations.",
    keywords: "web developer kuwait, flutter app developer kuwait city, freelance developer kuwait, website design kuwait, hire software engineer kuwait",
    robots: { index: true, follow: true },
    alternates: { canonical: "https://www.anaghkr.in/locations/kuwait/" },
    openGraph: {
        title: "Web & App Developer for Kuwait City | ANAGH K R",
        description: "Freelance web and Flutter app developer for Kuwait businesses. Next.js web applications, mobile apps, custom POS and CRM systems with seamless regional payment integrations.",
        url: "https://www.anaghkr.in/locations/kuwait/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web & App Developer for Kuwait City | ANAGH K R",
        description: "Freelance web and Flutter app developer for Kuwait businesses. Next.js web applications, mobile apps, custom POS and CRM systems with seamless regional payment integrations.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & Mobile App Development Kuwait City, Kuwait",
    "description": "Freelance web and Flutter app developer for Kuwait businesses. Next.js web applications, mobile apps, custom POS and CRM systems with seamless regional payment integrations.",
    "url": "https://www.anaghkr.in/locations/kuwait/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kuwait City",
        "addressCountry": "Kuwait"
    },
    "areaServed": [
        { "@type": "City", "name": "Kuwait City" },
        { "@type": "Country", "name": "Kuwait" },
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
            "description": "Dominating search rankings across Kuwait City, Kuwait with Google Core Web Vitals optimization and Schema.org markup.",
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
                cityName="Kuwait City, Kuwait"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Providing elite full-stack web and Flutter mobile app development for startups, established enterprises, and growing brands across Kuwait City, Kuwait."
                extraContent={
                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <h2 className="text-3xl font-black text-white">Why Kuwait City, Kuwait Businesses Choose Remote Software Engineering from Kerala</h2>
                        <p>
                            As companies in <strong>Kuwait City, Kuwait</strong> accelerate their digital operations, partnering remotely with an experienced Full-Stack and Flutter developer in Kerala provides the perfect combination of world-class technical standards and cost efficiency.
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
