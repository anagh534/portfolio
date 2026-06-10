export const metadata = {
    title: "Flutter & Website Developer in Calicut | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Calicut, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer calicut, flutter developer calicut, web developer calicut, mobile app development calicut, WordPress calicut, local SEO calicut",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/calicut/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Calicut | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Calicut, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/calicut/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Calicut | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Calicut, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Calicut",
    "description": "Professional website design, mobile apps, and local search optimization in Calicut, Kerala.",
    "url": "https://www.anaghkr.in/locations/calicut/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calicut",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Calicut" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function CalicutServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Modern web portals and custom setups designed to elevate Calicut's local event planners and creative portfolios."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Streamlining the digital onboarding process and optimizing client lead pathways for Calicut businesses."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Developing intuitive mobile app interfaces using Flutter for Calicut's customer-focused businesses."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Improving search index rates with clean canonical links and targeted local Calicut keywords."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "High-performance React sites in Calicut. Custom designs engineered for optimal speeds, security, and responsive layouts.",
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
                "description": "Modern e-commerce store design in Calicut. User-friendly checkouts, secure online banking options, and clean mobile performance.",
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
                "description": "Modern mobile app development in Calicut. Responsive iOS & Android apps built using the powerful Flutter framework.",
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
                "description": "WordPress theme customization in Calicut. Get secure, SEO-optimized business blogs and corporate websites.",
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
                "description": "Scalable MERN web systems in Calicut. Robust Express backend routers, secure Mongo models, and dynamic React templates.",
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
                "description": "Technical SEO tuning in Calicut. Schema data insertion, sub-second performance audits, and local ranking audits.",
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
                "description": "Clear project scope documents, regular updates, and responsive support channels."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Systematic milestones, including code reviews, speed tests, and client previews."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "On-page search optimization targeting local Calicut audience queries."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Value-focused pricing quotes based on exact specifications and timelines."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Service Profile Concept",
                "description": "A clean React business profile with automated booking links, WhatsApp CTA buttons, and local SEO schema.",
                "tech": [
                        "Next.js",
                        "SEO Metadata",
                        "Lead Forms",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-shopping-bag",
                "title": "Boutique E-commerce Concept",
                "description": "A conversion-oriented online shopping platform with cart systems, Razorpay payment modules, and fast checkouts.",
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
                "description": "A custom Flutter app mock with interactive catalogs, real-time notifications, and API-based database flows.",
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
                cityName="Calicut"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development in Calicut, Kerala. Custom designed for local creators, shops, clinics, and service portfolios looking for optimized SEO."
            />
        </>
    );
}
