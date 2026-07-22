export const metadata = {
    title: "Flutter & Website Developer in Kanhangad | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Kanhangad, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer kanhangad, flutter developer kanhangad, web developer kanhangad, mobile app development kanhangad, local SEO kanhangad",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kanhangad/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Kanhangad | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kanhangad, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/kanhangad/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Kanhangad | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kanhangad, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kanhangad",
    "description": "Professional website design, mobile apps, and local search optimization in Kanhangad, Kerala.",
    "url": "https://www.anaghkr.in/locations/kanhangad/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kanhangad",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Kanhangad" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function KanhangadServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Custom landing pages and business portals tailored for Kanhangad's local studios and retail stores."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Creating simple online schedules and WhatsApp-driven booking flows for local Kanhangad service providers."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Developing fast, responsive mobile layouts and easy-to-use Flutter apps for Kanhangad services."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Optimizing titles, meta tags, and local maps listings to boost Kanhangad business visibility."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Responsive web portal creation in Kanhangad. Premium designs focusing on speed, clear navigation, and local optimization.",
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
                "description": "Custom mobile apps in Kanhangad. I deliver responsive Flutter applications with clean, interactive user elements.",
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
                "description": "MERN stack web development in Kanhangad. Clean Node.js APIs, MongoDB integration, and responsive React controls.",
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
                "description": "Local SEO and site speed in Kanhangad. Optimization of search listings, keyword structures, and page assets.",
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
                "description": "Simple project summaries, milestone tracking, and active developer support."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Logical development stages, with mobile-readiness tests before launch."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Search visibility optimization targeting Kanhangad service searches."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Practical pricing options aligned with feature lists and launch schedules."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Business Listing Concept",
                "description": "A lightweight Next.js portal featuring responsive services grids, WhatsApp CTA, and local search schema.",
                "tech": [
                        "Next.js",
                        "CSS Grid",
                        "WhatsApp CTA",
                        "SEO tags"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Flutter Client Concept",
                "description": "A cross-platform mobile utility featuring simple user profiles, push alerts, and API integration.",
                "tech": [
                        "Flutter",
                        "JSON API",
                        "Alerts",
                        "Profile UI"
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
                cityName="Kanhangad"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Kanhangad, Kerala. Build customized Next.js personal pages, custom websites, mobile app utilities, and local SEO optimizations tailored for local shops and services."
            />
        </>
    );
}
