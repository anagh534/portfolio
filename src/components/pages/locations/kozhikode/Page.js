export const metadata = {
    title: "Web Development Services in Kozhikode, Kerala | ANAGH K R",
    description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kozhikode, Kerala. SEO-focused and conversion-ready solutions.",
    keywords: "web developer Kozhikode, website development Kozhikode, mobile app development Kozhikode, ecommerce development Kozhikode, SEO web design Kozhikode",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kozhikode/",
    },
    openGraph: {
        title: "Web Development Services in Kozhikode | ANAGH K R",
        description: "Website development, ecommerce, and mobile app services in Kozhikode, Kerala with professional delivery and clear communication.",
        url: "https://www.anaghkr.in/locations/kozhikode/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services in Kozhikode | ANAGH K R",
        description: "Professional website and app development services in Kozhikode, Kerala.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kozhikode",
    "description": "Professional website development, ecommerce development, and mobile app development services in Kozhikode, Kerala.",
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
            icon: "fas fa-building",
            title: "Local Market Fit",
            description: "Strong business culture in Malabar"
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Growth Opportunity",
            description: "Demand for multilingual digital presence"
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile-First Demand",
            description: "Growth in ecommerce and services"
        },
        {
            icon: "fas fa-globe",
            title: "SEO Visibility",
            description: "Mobile traffic-first local audience"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Modern, responsive websites for Kozhikode businesses with clear messaging, conversion-focused layouts, and technical SEO foundations.",
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
            description: "Content and metadata optimized for Kozhikode and Kerala location-based search intent"
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
            description: "Demo concept for a service-focused business website with lead capture forms, WhatsApp CTA, and local SEO landing sections for Kozhikode.",
            tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "Malabar Spice & Exports Store",
            description: "Custom WooCommerce platform with wholesale bulk discount algorithms, logistics modules, and secure payment pathways for export units.",
            tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Kozhikode Hyper-Local App",
            description: "Flutter app concept for on-demand local services, grocery delivery, and push notifications with robust backend architecture.",
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
                cityName="Kozhikode"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and Flutter mobile app development services in Kozhikode, Kerala. Supporting Cyberpark startups, traders, and local businesses with secure, highly performant code. Looking for our Calicut-specific services page? Visit our dedicated [Calicut Web Development](/locations/calicut/) page."
            />
        </>
    );
}
