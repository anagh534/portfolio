export const metadata = {
    title: "Flutter & Website Developer in Coimbatore | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Coimbatore. Get high-converting e-commerce, custom web apps, and targeted local SEO.",
    keywords: "website developer coimbatore, flutter developer coimbatore, web developer coimbatore, mobile app development coimbatore, local SEO coimbatore, ecommerce coimbatore",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/coimbatore/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Coimbatore | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Coimbatore. Get high-converting e-commerce, custom web apps, and targeted local SEO.",
        url: "https://www.anaghkr.in/locations/coimbatore/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Coimbatore | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Coimbatore. Get high-converting e-commerce, custom web apps, and targeted local SEO.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Coimbatore",
    "description": "Professional website development, e-commerce solutions, and Flutter mobile app development in Coimbatore, Tamil Nadu.",
    "url": "https://www.anaghkr.in/locations/coimbatore/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Coimbatore" },
        { "@type": "State", "name": "Tamil Nadu" }
    ]
};

export default function CoimbatoreServices() {
    const cityHighlights = [
        {
            icon: "fas fa-building",
            title: "Local Market Fit",
            description: "Tailored digital solutions built to scale Coimbatore's industrial hubs, textile empires, local shops, and modern engineering services."
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Growth Opportunity",
            description: "Elevate your business's presence in the 'Manchester of South India' across rapidly expanding retail, export, manufacturing, and tech sectors."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile-First Demand",
            description: "Engineering top-tier cross-platform Flutter applications to capture Coimbatore's active consumer base and internal enterprise users."
        },
        {
            icon: "fas fa-globe",
            title: "SEO Visibility",
            description: "Targeted on-page and technical SEO setup to rank your brand at the absolute top of Coimbatore local search results."
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Premium custom web development in Coimbatore using React and Next.js. I design high-performance, fast-loading, and responsive business portals tailored to your brand.",
            features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Development",
            description: "Build secure, robust e-commerce stores in Coimbatore with fully integrated payment options, automated inventory sync, and conversion-optimized mobile checkouts.",
            features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Hire a professional Flutter developer in Coimbatore to engineer native-performing iOS & Android mobile apps. Serving tech brands and startups from Gandhipuram to Peelamedu.",
            features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Get custom WordPress websites and landing pages for Coimbatore's textile retail brands, hospitals, engineering firms, and educational consultants.",
            features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Custom web dashboards, secure MERN stack web applications, and database integrations tailored for Coimbatore startups, logistics networks, and industrial teams.",
            features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
        },
        {
            icon: "fas fa-search",
            title: "SEO and Performance",
            description: "Rank higher locally with custom local search optimization campaigns, structural JSON-LD schemas, and extreme site speed optimization targeting Coimbatore search terms.",
            features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-handshake",
            title: "Professional Communication",
            description: "Fluent, reliable, and prompt project updates ensuring your web concepts match exactly your business expectations."
        },
        {
            icon: "fas fa-clock",
            title: "Structured Delivery",
            description: "Clear milestones, clean git repositories, transparent pricing, and structured delivery schedules from start to finish."
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Local SEO Focus",
            description: "High local keyword densities tailored specifically to Coimbatore, Peelamedu, and surrounding industrial growth markets."
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Practical Pricing",
            description: "Cost-effective development rates that deliver enterprise-grade performance and unmatched visual aesthetics."
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Business Website Concept",
            description: "High-converting website concept featuring Next.js, headless CMS content integrations, and instant WhatsApp chat funnels.",
            tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "E-commerce Concept",
            description: "Modern storefront demo with responsive product catalogs, instant checkout, and localized payment integrations.",
            tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile App Concept",
            description: "Premium cross-platform Flutter app design with custom state management and push notification setup.",
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
                cityName="Coimbatore"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional website development, mobile app development, and technical local SEO services in Coimbatore. Get high-converting e-commerce, custom web apps, and expert Flutter development targeting local industrial and tech sectors."
            />
        </>
    );
}
