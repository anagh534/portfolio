export const metadata = {
    title: "Flutter & Website Developer in Chennai | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Chennai. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer chennai, flutter developer chennai, web developer chennai, mobile app development chennai, local SEO chennai",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/chennai/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Chennai | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Chennai. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/chennai/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Chennai | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Chennai. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Chennai",
    "description": "Professional website design, mobile apps, and local search optimization in Chennai, Tamil Nadu.",
    "url": "https://www.anaghkr.in/locations/chennai/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Chennai" },
        { "@type": "State", "name": "Tamil Nadu" }
    ]
};

export default function ChennaiServices() {
    const cityHighlights = [
        {
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "Modern, responsive web designs and clean portfolios crafted for Chennai's independent creators and service providers."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Deploying high-converting portfolios and automated contact collection forms for local creators."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Engineering highly interactive Flutter mobile applications and high-fidelity layouts for Chennai local services."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Enforcing clean semantic headers and fast server-side optimization to rank Chennai pages."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Scalable Next.js web development in Chennai. High-performance, clean-coded business portals built to convert visitors.",
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
                "description": "Sleek mobile app development in Chennai. I build native-grade Flutter apps with real-time push alerts.",
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
                "description": "Scalable MERN stack systems in Chennai. I build robust Express backend layers and high-converting React frontends.",
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
                "description": "Technical SEO and speed optimization in Chennai. Get faster page loads, structural JSON-LD schemas, and search ranks.",
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
                "description": "Professional developer reporting, milestone updates, and clear specs."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Efficient design sprints, ensuring speed and compatibility across browsers."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Schema integrations and keywords customized for Chennai service searches."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Value-oriented project quotes mapped to technical needs and pages."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Creator Website Concept",
                "description": "A high-performance Next.js creator layout with custom lead forms, secure login views, and SEO schemas.",
                "tech": [
                        "Next.js",
                        "SEO Metadata",
                        "Lead Forms",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Native App Concept",
                "description": "A custom Flutter mobile app demo featuring API data synchronization, push notifications, and user profiles.",
                "tech": [
                        "Flutter",
                        "REST Sync",
                        "Alerts",
                        "Dashboard UI"
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
                cityName="Chennai"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Chennai, Tamil Nadu. I engineer fast-loading React interfaces, secure custom e-commerce checkouts, and native-grade iOS & Android Flutter applications for local shops, tutors, and agencies."
            />
        </>
    );
}
