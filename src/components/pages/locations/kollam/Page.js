export const metadata = {
    title: "Flutter & Website Developer in Kollam | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Kollam, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer kollam, flutter developer kollam, web developer kollam, mobile app development kollam, WordPress kollam, local SEO kollam",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kollam/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Kollam | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kollam, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/kollam/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Kollam | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kollam, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kollam",
    "description": "Professional website design, mobile apps, and local search optimization in Kollam, Kerala.",
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
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Reliable custom portals and booking systems matching the needs of Kollam's local clinics and family businesses."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Creating straightforward quote inquiry forms and retail-to-online conversion funnels for Kollam local shops."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Designing responsive mobile screens and fast Flutter applications optimized for Kollam retail services."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Applying structured JSON-LD data and clean index paths to rank Kollam service sites on Google."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Professional web development in Kollam. I build lightweight, responsive websites with quick load times and clean code bases.",
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
                "description": "Wholesale and retail e-commerce in Kollam. Simple shopping cart structures, direct UPI integrations, and optimized checkout pages.",
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
                "description": "Custom mobile app creation in Kollam. I develop fast, responsive Flutter applications with clean database connections.",
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
                "description": "Clean WordPress portals in Kollam. Lightweight business themes, optimized speeds, and responsive local listings.",
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
                "description": "MERN stack dashboard creation in Kollam. Secure API setups, custom MongoDB databases, and react user portals.",
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
                "description": "Technical site speed and local SEO in Kollam. Clean heading structures, image alt tags, and JSON-LD schemas.",
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
                "description": "Clear communication, documented feature lists, and regular check-in sessions."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Step-by-step release process, including QA tests and mobile-responsiveness audits."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Local SEO optimization targeting search terms in Kollam and local hubs."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Pricing options designed around project complexity and launch deadlines."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Store Showcase Concept",
                "description": "A high-speed React website with inquiries checklists, product directories, and local SEO schema setups.",
                "tech": [
                        "React.js",
                        "SEO Metadata",
                        "Directory schema",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-shopping-bag",
                "title": "Agro Store Concept",
                "description": "An online bulk booking platform supporting direct UPI checkouts, tax calculators, and admin invoice views.",
                "tech": [
                        "E-commerce",
                        "Bulk Orders",
                        "UPI Gateways",
                        "Calculators"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Local Delivery App Concept",
                "description": "A Flutter app mockup displaying interactive shop lists, custom notifications, and backend REST APIs.",
                "tech": [
                        "Flutter",
                        "REST APIs",
                        "Local JSON",
                        "Listings UX"
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
                cityName="Kollam"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development, ecommerce platforms, and Flutter mobile apps in Kollam (Quilon), Kerala. Serving boutiques, local service clinics, academies, and retail shops with clean, optimized code and native performance."
            />
        </>
    );
}
