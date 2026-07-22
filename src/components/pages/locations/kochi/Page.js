export const metadata = {
    title: "Flutter & Website Developer in Kochi | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Kochi, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer kochi, flutter developer kochi, web developer kochi, mobile app development kochi, local SEO kochi",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kochi/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Kochi | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kochi, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/kochi/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Kochi | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kochi, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kochi",
    "description": "Professional website design, mobile apps, and local search optimization in Kochi, Kerala.",
    "url": "https://www.anaghkr.in/locations/kochi/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Kochi" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function KochiServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Custom digital solutions built specifically for Kochi's local shops, independent service providers, and creator portfolios."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Enabling easy-to-manage web pages, simple contact forms, and WhatsApp contact buttons for local businesses."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Building responsive cross-platform Flutter applications to connect with Kochi's active mobile consumer base."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Optimizing code structures and local keyword lists to rank higher on Google search results in Kochi."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Premium React & Next.js website design. I build clean, fast, and responsive portfolio sites that establish your brand online.",
                "features": [
                        "Responsive Next.js",
                        "SEO Architectures",
                        "Sub-Second Speeds",
                        "Conversion Focus"
                ]
        },
        {
                "icon": "fab fa-flutter",
                "title": "Mobile App Development",
                "description": "Native-performing iOS & Android apps built using Flutter to showcase your services and engage users.",
                "features": [
                        "Flutter Framework",
                        "API Integration",
                        "Push Alerts",
                        "Play Store & App Store Support"
                ]
        },
        {
                "icon": "fas fa-database",
                "title": "MERN Stack Development",
                "description": "Custom admin dashboards and secure database systems built to organize your records and manage inquiries.",
                "features": [
                        "Custom Dashboards",
                        "API Architectures",
                        "Secure Roles",
                        "Scalable Mongo/Node databases"
                ]
        },
        {
                "icon": "fas fa-search",
                "title": "SEO and Performance",
                "description": "Rank higher with on-page SEO, speed optimization, and Google Maps local profile setup.",
                "features": [
                        "Local GEO Audits",
                        "Structured Schemas",
                        "Core Web Vitals",
                        "Keyword Research"
                ]
        }
];

    const benefits = [
        {
                "icon": "fas fa-handshake",
                "title": "Professional Communication",
                "description": "Transparent scope, milestone-based updates, and active collaboration from planning to deployment."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Clearly outlined phases with realistic targets, reviews, and post-launch verification."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Pages and schema markup optimized to target local search queries."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Pricing based on project requirements, aligned with small business budgets."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Business Website Concept",
                "description": "A high-performance Next.js company profile with custom forms, WhatsApp click-to-chat, and optimized local schema.",
                "tech": [
                        "Next.js",
                        "SEO Metadata",
                        "Lead Forms",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile App Concept",
                "description": "A cross-platform Flutter utility showcasing user profile onboarding, push notification alerts, and API dashboards.",
                "tech": [
                        "Flutter",
                        "Node.js API",
                        "Notifications",
                        "Dashboard"
                ]
        }
];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="Kochi"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development in Kochi, Kerala. Offering custom website design, local store e-commerce setups, mobile-first Flutter apps, and technical search engine optimization for local boutiques, academies, clinics, and personal brands."
            />
        </>
    );
}
