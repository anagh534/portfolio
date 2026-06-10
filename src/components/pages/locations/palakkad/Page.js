export const metadata = {
    title: "Flutter & Website Developer in Palakkad | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Palakkad, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer palakkad, flutter developer palakkad, web developer palakkad, mobile app development palakkad, WordPress palakkad, local SEO palakkad",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/palakkad/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Palakkad | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Palakkad, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/palakkad/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Palakkad | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Palakkad, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Palakkad",
    "description": "Professional website design, mobile apps, and local search optimization in Palakkad, Kerala.",
    "url": "https://www.anaghkr.in/locations/palakkad/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Palakkad",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Palakkad" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function PalakkadServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Lightweight, SEO-friendly websites developed for Palakkad's local trainers, tuition hubs, and retail stores."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Helping Palakkad service businesses display services online and capture client inquiries efficiently."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Structuring lightweight mobile experiences and simple Flutter apps built for reliability and speed."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Configuring SEO metadata and image alt tags to boost Palakkad local directories on search."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Lightweight website design in Palakkad. Get fast, responsive, and SEO-optimized HTML/React business portals.",
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
                "description": "Product catalog and e-commerce setups in Palakkad. Clean digital listings with Razorpay gateway integrations and secure flow.",
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
                "description": "Lightweight mobile app design in Palakkad. Custom Flutter apps featuring stable performance and simple layouts.",
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
                "description": "WordPress site design in Palakkad. Simple, fast-loading corporate themes with secure page management systems.",
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
                "description": "Custom admin portals in Palakkad. Full-stack MERN portals engineered for simple data entry and secure connections.",
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
                "description": "Local search ranking improvements in Palakkad. Fast-loading pages, search-friendly titles, and metadata audits.",
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
                "description": "Direct developer communication, detailed project logs, and quick feedback loops."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Carefully planned delivery steps, guaranteeing functional mockups at every phase."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Structured JSON-LD schema layouts matching Palakkad local search terms."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Cost-effective estimates matching project scope and functional requirements."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Local Showcase Concept",
                "description": "A lightweight static business page featuring product galleries, contact forms, and custom local search meta.",
                "tech": [
                        "React.js",
                        "TailwindCSS",
                        "SEO Meta",
                        "Contact Form"
                ]
        },
        {
                "icon": "fas fa-shopping-bag",
                "title": "Simple Commerce Concept",
                "description": "A secure shopping portal demo with direct payment buttons, customizable listings, and quick mobile checkout.",
                "tech": [
                        "E-commerce",
                        "Razorpay",
                        "UPI",
                        "Fast checkouts"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile Dashboard Concept",
                "description": "A cross-platform Flutter utility showing data tracking graphs, user settings, and secure login screens.",
                "tech": [
                        "Flutter",
                        "Line charts",
                        "Secure Local Storage",
                        "Charts API"
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
                cityName="Palakkad"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Palakkad, Kerala. Build customized Next.js portfolios, WordPress templates, mobile app utilities, and local SEO optimizations tailored for local shops and service providers."
            />
        </>
    );
}
