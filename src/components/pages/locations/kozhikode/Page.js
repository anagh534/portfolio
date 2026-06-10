export const metadata = {
    title: "Flutter & Website Developer in Kozhikode | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Kozhikode, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer kozhikode, flutter developer kozhikode, web developer kozhikode, mobile app development kozhikode, WordPress kozhikode, local SEO kozhikode",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kozhikode/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Kozhikode | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kozhikode, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/kozhikode/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Kozhikode | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kozhikode, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kozhikode",
    "description": "Professional website design, mobile apps, and local search optimization in Kozhikode, Kerala.",
    "url": "https://www.anaghkr.in/locations/kozhikode/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kozhikode",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Kozhikode" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function KozhikodeServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "High-performance digital platforms created for Kozhikode's retail boutiques, home bakers, and creative portfolios."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Unlocking simple online order catalogs and WhatsApp inquiry buttons for local shops."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Engineering fast, touch-friendly Flutter mobile apps to drive user retention for Kozhikode users."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Fine-tuning meta tags, search layouts, and local map SEO elements for Kozhikode visibility."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Modern React web development in Kozhikode. Get high-performance, responsive sites with custom layouts and clean semantic code.",
                "features": [
                        "Responsive Next.js",
                        "SEO Architectures",
                        "Sub-Second Speeds",
                        "Conversion Focus"
                ]
        },
        {
                "icon": "fas fa-shopping-cart",
                "title": "E-commerce Development",
                "description": "Responsive online stores in Kozhikode. I build shopping portals with secure inventory controls, payment setups, and smooth UI.",
                "features": [
                        "Custom Catalogs",
                        "Razorpay / Cashfree",
                        "Secure Order Flow",
                        "Admin Dashboard"
                ]
        },
        {
                "icon": "fab fa-flutter",
                "title": "Mobile App Development",
                "description": "Cross-platform mobile app development in Kozhikode. I construct interactive Flutter apps with responsive user screens.",
                "features": [
                        "Flutter Framework",
                        "API Integration",
                        "Push Alerts",
                        "Play Store & App Store Support"
                ]
        },
        {
                "icon": "fab fa-wordpress",
                "title": "WordPress Development",
                "description": "WordPress website development in Kozhikode. Clean theme code, custom service layouts, and search-friendly structures.",
                "features": [
                        "Custom Themes",
                        "Fast Loading Pages",
                        "Security Audits",
                        "Easy Admin Panels"
                ]
        },
        {
                "icon": "fas fa-database",
                "title": "MERN Stack Development",
                "description": "Full-stack MERN development in Kozhikode. I build secure databases, custom admin dashboards, and Express APIs.",
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
                "description": "Local SEO optimization in Kozhikode. I adjust page architectures, meta tags, and local maps queries to boost ranking.",
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
                "description": "Open chat channel, weekly milestone summaries, and prompt feedback loop."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Organized project phases with regular code commits and performance checks."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Targeted optimization targeting Kozhikode search habits and local maps terms."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Budget-aligned project estimations based on custom features and design layouts."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Service Directory Concept",
                "description": "A responsive business showcase page featuring localized schema data, direct call buttons, and fast static loading.",
                "tech": [
                        "Next.js",
                        "Static Export",
                        "Lead Forms",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-shopping-bag",
                "title": "Retail E-commerce Concept",
                "description": "A mobile-first shopping site featuring automated tax estimations, instant payment forms, and custom product views.",
                "tech": [
                        "E-commerce",
                        "Checkout UX",
                        "Payments",
                        "Analytics"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile App Concept",
                "description": "A Flutter mobile utility showcasing location-based searches, customer push alerts, and database integration.",
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
                cityName="Kozhikode"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and Flutter mobile app development services in Kozhikode, Kerala. Designing custom React portals, WooCommerce stores, MERN dashboards, and SEO assets for retail boutiques, clinics, and personal portfolios."
            />
        </>
    );
}
