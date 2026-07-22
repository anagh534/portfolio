export const metadata = {
    title: "Flutter & Website Developer in Trivandrum | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Trivandrum, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer thiruvananthapuram, flutter developer thiruvananthapuram, web developer thiruvananthapuram, mobile app development thiruvananthapuram, local SEO thiruvananthapuram",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/thiruvananthapuram/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Trivandrum | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Trivandrum, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/thiruvananthapuram/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Trivandrum | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Trivandrum, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Trivandrum",
    "description": "Professional website design, mobile apps, and local search optimization in Trivandrum, Kerala.",
    "url": "https://www.anaghkr.in/locations/thiruvananthapuram/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Trivandrum",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Trivandrum" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function TrivandrumServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Custom web layouts designed specifically for Trivandrum's local educators, clinical practices, and freelance professionals."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Focusing on clean booking systems, portfolio showcases, and clear calls to action for local clients."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Developing native-performing Android & iOS apps with clean layouts for Trivandrum users."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Implementing schema markup and page speed best practices to drive search traffic in Trivandrum."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Tailored Next.js website creation in Trivandrum. I specialize in fast-loading portfolios and responsive service websites.",
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
                "description": "Get native-performing iOS & Android mobile apps in Trivandrum using Flutter for clean performance.",
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
                "description": "MERN stack web application development in Trivandrum. Secure databases, user roles, and interactive frontends.",
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
                "description": "Technical search engine optimization in Trivandrum. Fast page loads, semantic HTML tags, and clean schema markup.",
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
                "description": "Clear explanations of features, milestone logs, and direct access during development."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Logical delivery stages, ensuring each feature is tested and reviewed before launch."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Code layouts and metadata structured to rank for local searches in Trivandrum."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Competitive pricing models structured around the feature list and launch roadmap."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Professional Profile Concept",
                "description": "A fast-loading React website featuring modern service grids, inquiry forms, and semantic tag structures.",
                "tech": [
                        "React.js",
                        "SEO Metadata",
                        "Inquiry Forms",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile App Concept",
                "description": "An iOS & Android application mockup featuring user authentication, push alerts, and local data storage options.",
                "tech": [
                        "Flutter",
                        "Local SQLite",
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
                cityName="Trivandrum"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Thiruvananthapuram (Trivandrum), Kerala. Offering customized web pages, custom websites, MERN dashboards, and robust cross-platform mobile apps for local clinics, academies, and creators."
            />
        </>
    );
}
