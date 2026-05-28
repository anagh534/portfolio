export const metadata = {
    title: "Flutter & Website Developer in Kasaragod | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Kasaragod, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
    keywords: "website developer kasaragod, flutter developer kasaragod, web developer kasaragod, mobile app development kasaragod, WordPress kasaragod, local SEO kasaragod",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kasaragod/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Kasaragod | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kasaragod, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
        url: "https://www.anaghkr.in/locations/kasaragod/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Kasaragod | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kasaragod, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kasaragod",
    "description": "Professional website development, e-commerce solutions, and Flutter mobile app development in Kasaragod, Kerala.",
    "url": "https://www.anaghkr.in/locations/kasaragod/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kasaragod",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "Kasaragod" },
        { "@type": "State", "name": "Kerala" }
    ]
};

export default function KasaragodServices() {
    const cityHighlights = [
        {
            icon: "fas fa-building",
            title: "Local Market Fit",
            description: "Providing customized digital solutions specifically adapted to match Kasaragod's local retailers, spice trade networks, and medical centers."
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Growth Opportunity",
            description: "Unlocking new business channels for brands and shops throughout the Kasaragod district with high-converting online setups."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile-First Demand",
            description: "Engineering top-tier cross-platform Flutter applications to capture Kasaragod's active smartphone audience."
        },
        {
            icon: "fas fa-globe",
            title: "SEO Visibility",
            description: "High-level local search engine optimization to guarantee your company places at the top of Kasaragod Google searches."
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Premium custom web development in Kasaragod using React and Next.js. I design high-performance, fast-loading, and responsive business portals tailored to your brand.",
            features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Development",
            description: "Build secure, robust e-commerce stores in Kasaragod with fully integrated payment options, automated inventory sync, and conversion-optimized mobile checkouts.",
            features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Hire a professional Flutter developer in Kasaragod to engineer native-performing iOS & Android mobile apps. Serving local enterprises from Kasaragod town to Kanhangad.",
            features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Get custom WordPress websites and landing pages for Kasaragod's schools, colleges, financial services, and clinics with easy-to-use Gutenberg or Elementor setups.",
            features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Custom web dashboards, secure MERN stack web applications, and database integrations tailored for Kasaragod startups and service platforms.",
            features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
        },
        {
            icon: "fas fa-search",
            title: "SEO and Performance",
            description: "Rank higher locally with custom local search optimization campaigns, structural JSON-LD schemas, and extreme site speed optimization targeting Kasaragod search terms.",
            features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-handshake",
            title: "Professional Communication",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kasaragod. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-clock",
            title: "Structured Delivery",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kasaragod. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Local SEO Focus",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kasaragod. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Practical Pricing",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kasaragod. SEO-focused and conversion-ready solutions."
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Business Website Concept",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kasaragod. SEO-focused and conversion-ready solutions.",
            tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "E-commerce Concept",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kasaragod. SEO-focused and conversion-ready solutions.",
            tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile App Concept",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kasaragod. SEO-focused and conversion-ready solutions.",
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
                cityName="Kasaragod"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and mobile app development services in Kasaragod, Kasaragod, Kerala. Services include website development, ecommerce setup, WordPress development, MERN stack applications, and technical SEO improvements for local businesses, shops, service teams, institutions, and small brands."
            />
        </>
    );
}
