export const metadata = {
    title: "Flutter & Website Developer in Coimbatore | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Coimbatore, Tamil Nadu. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer coimbatore, flutter developer coimbatore, web developer coimbatore, mobile app development coimbatore, local SEO coimbatore",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/coimbatore/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Coimbatore | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Coimbatore, Tamil Nadu. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/coimbatore/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Coimbatore | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Coimbatore, Tamil Nadu. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Coimbatore",
    "description": "Professional website design, mobile apps, and local search optimization in Coimbatore, Tamil Nadu.",
    "url": "https://www.anaghkr.in/locations/coimbatore/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Coimbatore" },
        { "@type": "State", "name": "Tamil Nadu" }
    ]
};

export default function CoimbatoreServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Fast-loading websites engineered for Coimbatore's local retailers, design studios, and freelance professionals."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Building efficient local inquiry grids and product directories to capture regional and online leads."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Developing clean Flutter mobile utilities and responsive web catalogs for Coimbatore local users."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Structuring semantic code bases to target search ranking for Coimbatore local terms."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Custom corporate website design in Coimbatore. Get high-speed, secure, and mobile-friendly Next.js web applications.",
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
                "description": "Engineering custom mobile utilities in Coimbatore. Cross-platform Flutter apps with robust database connections.",
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
                "description": "MERN stack developer in Coimbatore. Custom CRM dashboards, secure databases, and high-performance Express APIs.",
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
                "description": "Search visibility optimization in Coimbatore. Semantic tags, structured schemas, and speed improvements.",
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
                "description": "Direct project tracking, detailed technical summaries, and quick reviews."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Structured project milestones, ensuring optimal performance from day one."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "On-page keyword structures targeting Coimbatore local service searches."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Pricing packages designed around exact modules and launch roadmaps."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Store Catalog Concept",
                "description": "A high-speed React database-driven catalog with inquiry checklists and local SEO tags.",
                "tech": [
                        "Next.js",
                        "B2C catalog",
                        "SEO Tags",
                        "Contact Form"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Utility App Concept",
                "description": "A Flutter application displaying offline database inputs, chart visualizers, and notification alerts.",
                "tech": [
                        "Flutter",
                        "Local SQLite",
                        "Offline Support",
                        "Charts"
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
                cityName="Coimbatore"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional website developer and cross-platform Flutter mobile app coder in Coimbatore, Tamil Nadu. Creating scalable Next.js company portals, robust local shop catalogs, MERN database layouts, and search-optimized architectures."
            />
        </>
    );
}
