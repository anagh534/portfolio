export const metadata = {
    title: "Flutter & Website Developer in Kannur | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Kannur, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer kannur, flutter developer kannur, web developer kannur, mobile app development kannur, WordPress kannur, local SEO kannur",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kannur/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Kannur | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kannur, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/kannur/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Kannur | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kannur, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kannur",
    "description": "Professional website design, mobile apps, and local search optimization in Kannur, Kerala.",
    "url": "https://www.anaghkr.in/locations/kannur/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kannur",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Kannur" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function KannurServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Professional website setups customized for Kannur's local tutors, dental clinics, and personal brands."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Providing simple WhatsApp CTA buttons, maps directions, and contact forms for Kannur small businesses."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Building clean, mobile-first business templates and responsive apps for Kannur local markets."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Building lightweight pages optimized to rank on Google for local Kannur service searches."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Custom business site design in Kannur. Fast-loading, responsive web portals built with React and optimized for local traffic.",
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
                "description": "Local store e-commerce setup in Kannur. Fast mobile cart experiences, secure payment gateways, and straightforward admin controls.",
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
                "description": "Professional Flutter developer in Kannur. Get native-performing iOS & Android mobile apps with clean codebase structure.",
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
                "description": "WordPress website creation in Kannur. Easy-to-manage local business portfolios, custom layouts, and search optimization.",
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
                "description": "Database web apps in Kannur. Secure React dashboards with Node.js/MongoDB APIs built for local operations.",
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
                "description": "Local search engine visibility in Kannur. Page speed optimization, structural meta tags, and schema validation.",
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
                "description": "Friendly developer updates, clear project roadmaps, and prompt replies."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Structured release cycles, ensuring the site is tested on multiple screen sizes."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Page content and tags optimized for local searches in Kannur districts."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Honest, scope-based pricing quotes with no hidden maintenance fees."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Local Shop Concept",
                "description": "A clean business website layout with maps integrations, custom contact forms, and local SEO setup.",
                "tech": [
                        "Next.js",
                        "SEO Metadata",
                        "Maps",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-shopping-bag",
                "title": "Boutique E-commerce Concept",
                "description": "A simple e-commerce setup with Razorpay integrations, mobile-ready shopping views, and inventory grids.",
                "tech": [
                        "E-commerce",
                        "Checkout UX",
                        "Payments",
                        "Analytics"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile Utility Concept",
                "description": "A Flutter application concept displaying basic user registers, instant alerts, and secure databases.",
                "tech": [
                        "Flutter",
                        "SQLite",
                        "Notifications",
                        "API"
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
                cityName="Kannur"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Kannur, Kerala. Offering custom website design, local store e-commerce setups, mobile-first Flutter apps, and technical search engine optimization for local boutiques, dental practices, and personal portfolios."
            />
        </>
    );
}
