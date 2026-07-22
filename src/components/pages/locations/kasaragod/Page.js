export const metadata = {
    title: "Flutter & Website Developer in Kasaragod | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Kasaragod, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer kasaragod, flutter developer kasaragod, web developer kasaragod, mobile app development kasaragod, local SEO kasaragod",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kasaragod/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Kasaragod | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kasaragod, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/kasaragod/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Kasaragod | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kasaragod, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kasaragod",
    "description": "Professional website design, mobile apps, and local search optimization in Kasaragod, Kerala.",
    "url": "https://www.anaghkr.in/locations/kasaragod/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kasaragod",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Kasaragod" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function KasaragodServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Lightweight, highly optimized web layouts designed for Kasaragod's local shops and personal portfolios."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Driving business inquiries and local discoverability through clean, modern lead collection architectures."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Structuring clean mobile applications and responsive websites that perform perfectly on slow networks."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Enforcing modern SEO rules, fast load speeds, and search-friendly layouts for Kasaragod pages."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Clean website development in Kasaragod. Lightweight static pages and custom React applications with clean mobile designs.",
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
                "description": "Lightweight mobile apps in Kasaragod. Built using Flutter for quick load times and offline support.",
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
                "description": "Lightweight MERN web tools in Kasaragod. Simple database forms, clean Express backends, and responsive React grids.",
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
                "description": "SEO and performance optimization in Kasaragod. Semantic HTML setups, speed improvements, and search visibility.",
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
                "description": "Direct developer access, easy scope definitions, and prompt milestone updates."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Reliable delivery schedules with security checks and responsiveness audits."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Local search optimization targeting Kasaragod business directories."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Affordable project estimations based on exact user requests and pages."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Retail Landing Concept",
                "description": "A fast static website featuring contact forms, WhatsApp links, and search-optimized tags.",
                "tech": [
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Flutter Mockup Concept",
                "description": "A mobile application concept featuring offline local registers, simple layouts, and fast loading APIs.",
                "tech": [
                        "Flutter",
                        "Hive Local DB",
                        "Clean UI",
                        "API Mock"
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
                cityName="Kasaragod"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Kasaragod, Kerala. Custom website designs, lightweight e-commerce storefronts, and cross-platform Flutter applications optimized for local shops and personal portfolios."
            />
        </>
    );
}
