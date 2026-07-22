export const metadata = {
    title: "Flutter & Website Developer in Mangalore | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Mangalore. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer mangalore, flutter developer mangalore, web developer mangalore, mobile app development mangalore, local SEO mangalore",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/mangalore/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Mangalore | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Mangalore. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/mangalore/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Mangalore | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Mangalore. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Mangalore",
    "description": "Professional website design, mobile apps, and local search optimization in Mangalore, Karnataka.",
    "url": "https://www.anaghkr.in/locations/mangalore/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Mangalore" },
        { "@type": "State", "name": "Karnataka" }
    ]
};

export default function MangaloreServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Robust website designs and clean portfolios built for Mangalore's local educators, agencies, and clinics."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Optimizing landing page structures to capture student, patient, or client inquiries for Mangalore portfolios."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Designing feature-rich mobile app prototypes and web screens optimized for Mangalore users."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Designing schema-rich pages that help Mangalore educational and local sites stand out on Google."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Professional web development in Mangalore. Custom-tailored React sites featuring sub-second load speeds and responsive layouts.",
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
                "description": "Mobile app development in Mangalore. Hire a Flutter expert to design custom iOS & Android app prototypes.",
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
                "description": "Full-stack web engineering in Mangalore. I build secure React web portals connected to Express/Node.js servers.",
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
                "description": "Technical SEO and speed tuning in Mangalore. I implement rich schema markups, image optimizations, and fast loads.",
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
                "description": "Clear project definitions, milestone-based updates, and open feedback loops."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Timely delivery phases, ensuring code compiles cleanly at every release."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Technical metadata optimization targeting Mangalore search terms."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Competitive project estimates based on features and layout designs."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Clinic Website Concept",
                "description": "A secure React layout with contact forms, responsive calendar slots, and optimized local metadata.",
                "tech": [
                        "React.js",
                        "SEO Metadata",
                        "Forms",
                        "Calendar API"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile App Concept",
                "description": "A mobile application concept featuring user onboarding, custom alerts, and REST API database links.",
                "tech": [
                        "Flutter",
                        "Node.js API",
                        "Mockups",
                        "User UX"
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
                cityName="Mangalore"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional website development and mobile app development services in Mangalore, Karnataka. Get custom designed React frontends, secure checkouts, native iOS & Android Flutter apps, and schema-structured local SEO architectures."
            />
        </>
    );
}
