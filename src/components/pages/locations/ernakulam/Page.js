export const metadata = {
    title: "Flutter & Website Developer in Ernakulam | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Ernakulam, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer ernakulam, flutter developer ernakulam, web developer ernakulam, mobile app development ernakulam, WordPress ernakulam, local SEO ernakulam",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/ernakulam/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Ernakulam | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Ernakulam, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/ernakulam/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Ernakulam | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Ernakulam, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Ernakulam",
    "description": "Professional website design, mobile apps, and local search optimization in Ernakulam, Kerala.",
    "url": "https://www.anaghkr.in/locations/ernakulam/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ernakulam",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Ernakulam" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function ErnakulamServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Sleek, scalable React web designs tailored for Ernakulam's independent consultants, academies, and small shops."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Boosting online inquiries, simple sales paths, and user feedback channels for local services."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Engineering next-generation Flutter apps and responsive web interfaces for Ernakulam mobile users."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Developing search-engine-ready React and Next.js sites that rank top for Ernakulam search terms."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Next.js web development in Ernakulam. I build clean, scalable, and responsive web platforms for modern businesses.",
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
                "description": "Custom e-commerce layouts in Ernakulam. Responsive product grids, secure payments, and simplified catalog managers.",
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
                "description": "Scalable Flutter mobile app engineering in Ernakulam. I build native-grade apps with secure API integrations.",
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
                "description": "WordPress development in Ernakulam. I build custom themes, secure page builders, and responsive web layouts.",
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
                "description": "Full-stack MERN stack development in Ernakulam. High-performance databases, custom APIs, and secure roles.",
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
                "description": "SEO optimization and performance in Ernakulam. I tune Core Web Vitals, write schema data, and target search keywords.",
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
                "description": "Professional progress updates, detailed specifications, and responsive developer access."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Agile delivery sprints, ensuring functional builds are ready for review."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Targeted SEO and performance tuning for Ernakulam location searches."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Transparent quotes tailored to freelance requirements and small portfolios."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Freelance Portfolio Concept",
                "description": "A fast Next.js landing page featuring interactive elements, signup forms, and search engine optimizations.",
                "tech": [
                        "Next.js",
                        "SEO Metadata",
                        "Lead Forms",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-shopping-bag",
                "title": "Retail Store Concept",
                "description": "A conversion-friendly storefront featuring user order flows, payment options, and automated invoices.",
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
                "description": "An iOS & Android mobile application showcasing offline database support, API dashboards, and push notifications.",
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
                cityName="Ernakulam"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Ernakulam, Kerala. Custom designed for local boutique shops, tutors, clinics, and personal brands looking for clean, indexable code."
            />
        </>
    );
}
