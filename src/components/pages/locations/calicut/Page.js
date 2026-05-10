export const metadata = {
    title: "Web Development Services in Calicut, Kerala | ANAGH K R",
    description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Calicut, Kerala. SEO-focused and conversion-ready solutions.",
    keywords: "web developer Calicut, website development Calicut, ecommerce website Calicut, mobile app developer Calicut, WordPress Calicut",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/calicut/",
    },
    openGraph: {
        title: "Web Development Services in Calicut | ANAGH K R",
        description: "Website development, ecommerce, and mobile app services in Calicut, Kerala with professional delivery and clear communication.",
        url: "https://www.anaghkr.in/locations/calicut/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services in Calicut | ANAGH K R",
        description: "Professional website and app development services in Calicut, Kerala.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Calicut",
    "description": "Professional website development, ecommerce development, and mobile app development services in Calicut, Kerala.",
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
            icon: "fas fa-building",
            title: "Local Market Fit",
            description: "Established trading and retail base"
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Growth Opportunity",
            description: "Growing online sales opportunities"
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile-First Demand",
            description: "High need for local SEO visibility"
        },
        {
            icon: "fas fa-globe",
            title: "SEO Visibility",
            description: "Demand for faster, modern websites"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Modern, responsive websites for Calicut businesses with clear messaging, conversion-focused layouts, and technical SEO foundations.",
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
            description: "Content and metadata optimized for Calicut and Kerala location-based search intent"
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
            title: "Malabar Trading Web Concept",
            description: "High-performance Next.js business website with lead capture, WhatsApp CTA, and optimized local schema for trading hubs in Calicut.",
            tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "SM Street Fashion E-commerce",
            description: "A conversion-focused online retail store demo featuring custom cart dynamics, UPI payments, and mobile-first listing pages suitable for SM Street shops.",
            tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Calicut Food Delivery App Demo",
            description: "A Flutter mobile app demo featuring multi-restaurant cataloging, real-time tracking, and push alerts optimized for Kozhikode's famous culinary scene.",
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
                cityName="Calicut"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development in Calicut (Kozhikode), Kerala. Custom designed for SM Street wholesale shops, Malabar business families, cafes, and logistics centers. Looking for our main Kozhikode listing? Visit our dedicated [Kozhikode Web Development](/locations/kozhikode/) page for regional solutions."
            />
        </>
    );
}
