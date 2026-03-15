export const metadata = {
    title: "Web Development Services in Kasaragod, Kerala | ANAGH K R",
    description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kasaragod, Kerala. SEO-focused and conversion-ready solutions.",
    keywords: "web developer Kasaragod, website development Kasaragod, ecommerce development Kasaragod, mobile app development Kasaragod, WordPress Kasaragod",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kasaragod",
    },
    openGraph: {
        title: "Web Development Services in Kasaragod | ANAGH K R",
        description: "Website development, ecommerce, and mobile app services in Kasaragod, Kerala with professional delivery and clear communication.",
        url: "https://www.anaghkr.in/locations/kasaragod",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services in Kasaragod | ANAGH K R",
        description: "Professional website and app development services in Kasaragod, Kerala.",
    },
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kasaragod",
    "description": "Professional website development, ecommerce development, and mobile app development services in Kasaragod, Kerala.",
    "url": "https://www.anaghkr.in/locations/kasaragod",
    "telephone": "+91-8075541805",
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
            icon: "fas fa-building",
            title: "Local Market Fit",
            description: "Growing digital adoption among local brands"
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Growth Opportunity",
            description: "Need for affordable modern websites"
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile-First Demand",
            description: "Demand for Malayalam-friendly UX"
        },
        {
            icon: "fas fa-globe",
            title: "SEO Visibility",
            description: "Opportunity for SEO-led lead growth"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Modern, responsive websites for Kasaragod businesses with clear messaging, conversion-focused layouts, and technical SEO foundations.",
            features: ["Responsive Design", "SEO Structure", "Fast Loading", "Clear CTAs"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Development",
            description: "Online store setups with product catalog, secure checkout, payment integration, and order workflow suitable for local businesses.",
            features: ["Product Catalog", "Secure Payments", "Order Flow", "Mobile Checkout"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Flutter-based mobile apps for Android and iOS with practical business features, dashboard integration, and scalable structure.",
            features: ["Flutter Apps", "API Integration", "Push Notifications", "App Store Support"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Professional WordPress websites with editable content sections, optimized page speed, and clean on-page SEO setup.",
            features: ["Custom Theme Setup", "Easy Editing", "Performance", "SEO Basics"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Custom web apps using MongoDB, Express, React, and Node.js for dashboards, workflows, and business automation.",
            features: ["Custom Dashboard", "API Architecture", "Role Access", "Scalable Code"]
        },
        {
            icon: "fas fa-search",
            title: "SEO and Performance",
            description: "Technical SEO improvements including metadata quality, internal linking, schema setup, and page speed optimization.",
            features: ["Technical SEO", "Schema Setup", "Core Web Vitals", "Local SEO"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-handshake",
            title: "Professional Communication",
            description: "Clear scope, milestone-based updates, and transparent collaboration from planning to launch"
        },
        {
            icon: "fas fa-clock",
            title: "Structured Delivery",
            description: "Well-defined project stages with realistic timelines and quality checks before release"
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Local SEO Focus",
            description: "Content and metadata optimized for Kasaragod and Kerala location-based search intent"
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Practical Pricing",
            description: "Scope-based quotes aligned with business requirements, features, and launch priorities"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Business Website Concept",
            description: "Demo concept for a service-focused business website with lead capture forms, WhatsApp CTA, and local SEO landing sections for Kasaragod.",
            tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "E-commerce Concept",
            description: "Demo concept for an online store with product collections, payment integration flow, and conversion-friendly mobile checkout.",
            tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile App Concept",
            description: "Demo concept for a Flutter mobile app with user onboarding, profile flow, push notifications, and API-based dashboard integration.",
            tech: ["Flutter", "Node.js API", "Notifications", "Dashboard"]
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
                description="Professional web development and mobile app development services in Kasaragod, Kasaragod, Kerala. Services include website development, ecommerce setup, WordPress development, MERN stack applications, and technical SEO improvements for local businesses, shops, service teams, institutions, and small brands."
            />
        </>
    );
}
