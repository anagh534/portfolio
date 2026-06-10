export const metadata = {
    title: "Flutter & Website Developer in Thrissur | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Thrissur, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer thrissur, flutter developer thrissur, web developer thrissur, mobile app development thrissur, WordPress thrissur, local SEO thrissur",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/thrissur/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Thrissur | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Thrissur, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/thrissur/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Thrissur | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Thrissur, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Thrissur",
    "description": "Professional website design, mobile apps, and local search optimization in Thrissur, Kerala.",
    "url": "https://www.anaghkr.in/locations/thrissur/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Thrissur" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function ThrissurServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Clean, responsive business sites optimized for Thrissur's independent academies, local photographers, and shops."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Implementing simple contact methods and clear services showcases to turn site visitors into local clients."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Creating lightweight, modern mobile apps for Thrissur clients demanding smooth on-the-go access."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Boosting local visibility in Thrissur search queries with semantic HTML and optimized speed scores."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Custom business websites in Thrissur using Next.js and Tailwind. I create fast, secure, and mobile-friendly business portfolios.",
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
                "description": "Secure retail e-commerce in Thrissur. Modern product grids, automated email/WhatsApp alerts, and simple payment integrations.",
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
                "description": "Hire an expert Flutter developer in Thrissur to deliver clean, modern, and interactive mobile apps.",
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
                "description": "Custom WordPress sites in Thrissur. Optimized for local services, clinics, and businesses with simple admin pages.",
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
                "description": "Database-driven web apps in Thrissur. Custom MERN solutions featuring secure user accounts and responsive views.",
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
                "description": "Google search visibility optimization in Thrissur. High speed index setup, metadata checks, and schema generation.",
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
                "description": "Responsive check-ins, straightforward specifications, and clear project updates."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Detailed execution plan, delivering working versions at every milestone."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Structured headers and metadata targeting local service terms in Thrissur."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Flexible billing structures matching specific feature requests and client priorities."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Agency Portal Concept",
                "description": "A modern React business page featuring interactive pricing cards, simple booking forms, and high-performance loads.",
                "tech": [
                        "React.js",
                        "SEO Metadata",
                        "Lead Forms",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-shopping-bag",
                "title": "Shopping Cart Concept",
                "description": "A clean online retail store with customized cart controls, Razorpay payment integrations, and inventory filters.",
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
                "description": "A cross-platform mobile app featuring user onboarding flows, real-time alert updates, and database storage.",
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
                cityName="Thrissur"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Thrissur, Kerala. Building high-performance websites, custom booking setups, WordPress templates, and cross-platform apps to help local boutiques, independent studios, and service portfolios."
            />
        </>
    );
}
