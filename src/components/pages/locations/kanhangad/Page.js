export const metadata = {
    title: "Web Development Services in Kanhangad, Kerala | ANAGH K R",
    description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
    keywords: "web developer Kanhangad, website development Kanhangad, ecommerce development Kanhangad, mobile app development Kanhangad, WordPress Kanhangad",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kanhangad/",
    },
    openGraph: {
        title: "Web Development Services in Kanhangad | ANAGH K R",
        description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
        url: "https://www.anaghkr.in/locations/kanhangad/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services in Kanhangad | ANAGH K R",
        description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kanhangad",
    "description": "Professional website development, ecommerce development, and mobile app development services in Kanhangad, Kerala.",
    "url": "https://www.anaghkr.in/locations/kanhangad/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kanhangad",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Kanhangad" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function KanhangadServices() {
    const cityHighlights = [
        {
            icon: "fas fa-building",
            title: "Local Market Fit",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Growth Opportunity",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile-First Demand",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-globe",
            title: "SEO Visibility",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions."
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
            features: ["Responsive Design", "SEO Structure", "Fast Loading", "Clear CTAs"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Development",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
            features: ["Product Catalog", "Secure Payments", "Order Flow", "Mobile Checkout"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
            features: ["Flutter Apps", "API Integration", "Push Notifications", "App Store Support"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
            features: ["Custom Theme Setup", "Easy Editing", "Performance", "SEO Basics"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
            features: ["Custom Dashboard", "API Architecture", "Role Access", "Scalable Code"]
        },
        {
            icon: "fas fa-search",
            title: "SEO and Performance",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
            features: ["Technical SEO", "Schema Setup", "Core Web Vitals", "Local SEO"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-handshake",
            title: "Professional Communication",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-clock",
            title: "Structured Delivery",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Local SEO Focus",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Practical Pricing",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions."
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Business Website Concept",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
            tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "E-commerce Concept",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
            tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile App Concept",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.",
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
                cityName="Kanhangad"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Kanhangad, Kasaragod, Kerala. Services include website development, ecommerce setup, WordPress development, MERN stack applications, and technical SEO improvements for local shops, service providers, institutions, and startup-minded teams."
            />
        </>
    );
}
