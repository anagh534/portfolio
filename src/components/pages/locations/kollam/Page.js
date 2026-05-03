export const metadata = {
    title: "Web Development Services in Kollam, Kerala | ANAGH K R",
    description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kollam, Kerala. SEO-focused and conversion-ready solutions.",
    keywords: "web developer Kollam, website development Kollam, ecommerce development Kollam, mobile app development Kollam, WordPress developer Kollam",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kollam/",
    },
    openGraph: {
        title: "Web Development Services in Kollam | ANAGH K R",
        description: "Website development, ecommerce, and mobile app services in Kollam, Kerala with professional delivery and clear communication.",
        url: "https://www.anaghkr.in/locations/kollam/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services in Kollam | ANAGH K R",
        description: "Professional website and app development services in Kollam, Kerala.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kollam",
    "description": "Professional website development, ecommerce development, and mobile app development services in Kollam, Kerala.",
    "url": "https://www.anaghkr.in/locations/kollam/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kollam",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Kollam" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function KollamServices() {
    const cityHighlights = [
        {
            icon: "fas fa-building",
            title: "Local Market Fit",
            description: "Mixed industrial and service economy"
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Growth Opportunity",
            description: "Local retailers expanding online"
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile-First Demand",
            description: "Demand for business automation"
        },
        {
            icon: "fas fa-globe",
            title: "SEO Visibility",
            description: "Growth in digital lead generation"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Modern, responsive websites for Kollam businesses with clear messaging, conversion-focused layouts, and technical SEO foundations.",
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
            description: "Content and metadata optimized for Kollam and Kerala location-based search intent"
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
            description: "Demo concept for a service-focused business website with lead capture forms, WhatsApp CTA, and local SEO landing sections for Kollam.",
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
                cityName="Kollam"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Kollam, Kollam, Kerala. Services include website development, ecommerce setup, WordPress development, MERN stack applications, and technical SEO improvements for manufacturing businesses, retail brands, service companies, and local commerce teams."
            />
        </>
    );
}
