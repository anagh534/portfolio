export const metadata = {
    title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
    description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
    keywords: "web developer Thiruvananthapuram, web development Trivandrum, mobile app development Trivandrum, ecommerce website Trivandrum, WordPress developer Trivandrum",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/thiruvananthapuram/",
    },
    openGraph: {
        title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
        description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
        url: "https://www.anaghkr.in/locations/thiruvananthapuram/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
        description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Thiruvananthapuram",
    "description": "Professional website development, ecommerce development, and mobile app development services in Thiruvananthapuram, Kerala.",
    "url": "https://www.anaghkr.in/locations/thiruvananthapuram/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thiruvananthapuram",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Thiruvananthapuram" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function ThiruvananthapuramServices() {
    const cityHighlights = [
        {
            icon: "fas fa-building",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions."
        },
        {
            icon: "fas fa-chart-line",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions."
        },
        {
            icon: "fas fa-globe",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions."
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
            features: ["Responsive Design", "SEO Structure", "Fast Loading", "Clear CTAs"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
            features: ["Product Catalog", "Secure Payments", "Order Flow", "Mobile Checkout"]
        },
        {
            icon: "fab fa-flutter",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
            features: ["Flutter Apps", "API Integration", "Push Notifications", "App Store Support"]
        },
        {
            icon: "fab fa-wordpress",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
            features: ["Custom Theme Setup", "Easy Editing", "Performance", "SEO Basics"]
        },
        {
            icon: "fas fa-database",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
            features: ["Custom Dashboard", "API Architecture", "Role Access", "Scalable Code"]
        },
        {
            icon: "fas fa-search",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
            features: ["Technical SEO", "Schema Setup", "Core Web Vitals", "Local SEO"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-handshake",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions."
        },
        {
            icon: "fas fa-clock",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions."
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions."
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions."
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
            tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
            tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Web Development Services in Thiruvananthapuram | ANAGH K R",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.",
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
                cityName="Thiruvananthapuram"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Thiruvananthapuram, Thiruvananthapuram, Kerala. Services include website development, ecommerce setup, WordPress development, MERN stack applications, and technical SEO improvements for technology teams, healthcare providers, education brands, service companies, and local commerce."
            />
        </>
    );
}
