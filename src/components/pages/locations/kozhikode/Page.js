export const metadata = {
    title: "Flutter & Website Developer in Kozhikode | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Kozhikode, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
    keywords: "website developer kozhikode, flutter developer kozhikode, web developer kozhikode, mobile app development kozhikode, WordPress kozhikode, local SEO kozhikode",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kozhikode/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Kozhikode | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kozhikode, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
        url: "https://www.anaghkr.in/locations/kozhikode/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Kozhikode | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kozhikode, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kozhikode",
    "description": "Professional website development, e-commerce solutions, and Flutter mobile app development in Kozhikode, Kerala.",
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
            description: "Custom digital solutions built specifically for Kozhikode's Cyberpark tech startups, spice exporters, and dynamic food brands."
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Growth Opportunity",
            description: "Unlocking profitable online sales channels and modern digital lead generation setups for Kozhikode businesses."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile-First Demand",
            description: "Engineering top-performing cross-platform Flutter applications to connect with Kozhikode's highly active mobile user demographic."
        },
        {
            icon: "fas fa-globe",
            title: "SEO Visibility",
            description: "On-page and technical search engine optimization to guarantee your company places at the top of local Google searches in Kozhikode."
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Premium custom web development in Kozhikode using React and Next.js. I design high-performance, fast-loading, and responsive business portals tailored to your brand.",
            features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Development",
            description: "Build secure, robust e-commerce stores in Kozhikode with fully integrated payment options, automated inventory sync, and conversion-optimized mobile checkouts.",
            features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Hire a professional Flutter developer in Kozhikode to engineer native-performing iOS & Android mobile apps. Serving startups in Cyberpark and retail spaces.",
            features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Get custom WordPress websites and landing pages for Kozhikode's academies, local service centers, showrooms, and health clinics.",
            features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Custom web dashboards, secure MERN stack web applications, and database integrations tailored for Kozhikode startups and service platforms.",
            features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
        },
        {
            icon: "fas fa-search",
            title: "SEO and Performance",
            description: "Rank higher locally with custom local search optimization campaigns, structural JSON-LD schemas, and extreme site speed optimization targeting Kozhikode search terms.",
            features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-handshake",
            title: "Professional Communication",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kozhikode. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-clock",
            title: "Structured Delivery",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kozhikode. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Local SEO Focus",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kozhikode. SEO-focused and conversion-ready solutions."
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Practical Pricing",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kozhikode. SEO-focused and conversion-ready solutions."
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Business Website Concept",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kozhikode. SEO-focused and conversion-ready solutions.",
            tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "Malabar Spice & Exports Store",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kozhikode. SEO-focused and conversion-ready solutions.",
            tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Kozhikode Hyper-Local App",
            description: "Professional web development, ecommerce website, WordPress, and mobile app development services in Kozhikode. SEO-focused and conversion-ready solutions.",
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
