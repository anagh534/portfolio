export const metadata = {
    title: "Flutter & Website Developer in Chennai | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Chennai. Get high-converting e-commerce, custom web apps, and targeted local SEO.",
    keywords: "website developer chennai, flutter developer chennai, web developer chennai, mobile app development chennai, local SEO chennai, ecommerce chennai",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/chennai/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Chennai | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Chennai. Get high-converting e-commerce, custom web apps, and targeted local SEO.",
        url: "https://www.anaghkr.in/locations/chennai/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Chennai | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Chennai. Get high-converting e-commerce, custom web apps, and targeted local SEO.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Chennai",
    "description": "Professional website development, e-commerce solutions, and Flutter mobile app development in Chennai, Tamil Nadu.",
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
            icon: "fas fa-building",
            title: "Local Market Fit",
            description: "Tailored digital solutions built to scale Chennai's tech startups, major SaaS brands, corporate institutions, and retail hubs."
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Growth Opportunity",
            description: "Elevate your business's presence in Chennai's world-class SaaS, financial technology, automotive, and IT ecosystems."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile-First Demand",
            description: "Engineering top-tier cross-platform Flutter applications to capture Chennai's dense corporate and tech-savvy user base."
        },
        {
            icon: "fas fa-globe",
            title: "SEO Visibility",
            description: "Targeted on-page and technical SEO setup to rank your brand at the absolute top of local Google Search results in Chennai."
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Premium custom web development in Chennai using React and Next.js. I design high-performance, fast-loading, and responsive business portals tailored to your brand.",
            features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Development",
            description: "Build secure, robust e-commerce stores in Chennai with fully integrated payment options, automated inventory sync, and conversion-optimized mobile checkouts.",
            features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Hire a professional Flutter developer in Chennai to engineer native-performing iOS & Android mobile apps. Serving tech brands and startups from Guindy to OMR.",
            features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Get custom WordPress websites and landing pages for Chennai's consulting services, software teams, education institutes, and manufacturing groups.",
            features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Custom web dashboards, secure MERN stack web applications, and database integrations tailored for Chennai SaaS products and digital platforms.",
            features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
        },
        {
            icon: "fas fa-search",
            title: "SEO and Performance",
            description: "Rank higher locally with custom local search optimization campaigns, structural JSON-LD schemas, and extreme site speed optimization targeting Chennai search terms.",
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
            description: "High local keyword densities tailored specifically to Chennai, OMR, and surrounding tech corridor search markets."
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
                cityName="Chennai"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional website development, mobile app development, and technical local SEO services in Chennai. Get high-converting e-commerce, custom web apps, and expert Flutter development targeting local tech and startup sectors."
            />
        </>
    );
}
