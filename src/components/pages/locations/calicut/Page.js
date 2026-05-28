export const metadata = {
    title: "Flutter & Website Developer in Calicut | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Calicut, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
    keywords: "website developer calicut, flutter developer calicut, web developer calicut, mobile app development calicut, WordPress calicut, local SEO calicut",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/calicut/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Calicut | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Calicut, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
        url: "https://www.anaghkr.in/locations/calicut/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Calicut | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Calicut, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Calicut",
    "description": "Professional website development, e-commerce solutions, and Flutter mobile app development in Calicut, Kerala.",
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
            description: "Custom digital solutions built specifically for Calicut's trading houses, retail networks on SM Street, and growing food brands."
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Growth Opportunity",
            description: "Unlocking highly-profitable online sales channels and modern digital lead generation setups for Kozhikode businesses."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile-First Demand",
            description: "Engineering top-performing cross-platform Flutter applications to connect with Calicut's highly active mobile user demographic."
        },
        {
            icon: "fas fa-globe",
            title: "SEO Visibility",
            description: "On-page and technical search engine optimization to guarantee your company places at the top of local Google searches in Calicut."
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Premium custom web development in Calicut using React and Next.js. I design high-performance, fast-loading, and responsive business portals tailored to your brand.",
            features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Development",
            description: "Build secure, robust e-commerce stores in Calicut with fully integrated payment options, automated inventory sync, and conversion-optimized mobile checkouts.",
            features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Hire a professional Flutter developer in Calicut to engineer native-performing iOS & Android mobile apps. Serving startups and retailers near SM Street and Hilite Business Park.",
            features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Get custom WordPress websites and landing pages for Calicut's academies, local service centers, showrooms, and health clinics.",
            features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Custom web dashboards, secure MERN stack web applications, and database integrations tailored for Calicut startups and service platforms.",
            features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
        },
        {
            icon: "fas fa-search",
            title: "SEO and Performance",
            description: "Rank higher locally with custom local search optimization campaigns, structural JSON-LD schemas, and extreme site speed optimization targeting Calicut search terms.",
            features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
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
