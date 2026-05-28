export const metadata = {
    title: "Flutter & Website Developer in Trivandrum | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Thiruvananthapuram, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
    keywords: "website developer trivandrum, flutter developer trivandrum, web developer thiruvananthapuram, mobile app development trivandrum, WordPress trivandrum, local SEO trivandrum",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/thiruvananthapuram/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Trivandrum | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Thiruvananthapuram, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
        url: "https://www.anaghkr.in/locations/thiruvananthapuram/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Trivandrum | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Thiruvananthapuram, Kerala. Get high-converting e-commerce, custom web apps, and local SEO.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Thiruvananthapuram",
    "description": "Professional website development, e-commerce solutions, and Flutter mobile app development in Thiruvananthapuram (Trivandrum), Kerala.",
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
            title: "Technopark Compatibility",
            description: "Custom digital systems built specifically for Technopark startups, corporate spin-offs, and elite local services."
        },
        {
            icon: "fas fa-chart-line",
            title: "Enterprise Performance",
            description: "Providing industrial-grade site performance, security standards, and high-performance server architectures."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Cross-Platform Expertise",
            description: "Developing responsive and native iOS & Android applications with beautiful visual design and custom database setups."
        },
        {
            icon: "fas fa-globe",
            title: "Statewide & Global SEO",
            description: "Positioning your business locally in Trivandrum and globally to reach customers, partners, and institutional investors."
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Premium custom web development in Trivandrum using React and Next.js. I design high-performance, fast-loading, and responsive business portals tailored to your brand.",
            features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Development",
            description: "Build secure, robust e-commerce stores in Trivandrum with fully integrated payment options, automated inventory sync, and conversion-optimized mobile checkouts.",
            features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Hire a professional Flutter developer in Trivandrum to engineer native-performing iOS & Android mobile apps. Serving startups and enterprises in Technopark and Kazhakkoottam.",
            features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Get custom WordPress websites and landing pages for Trivandrum's academies, local service centers, showrooms, and health clinics.",
            features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Custom web dashboards, secure MERN stack web applications, and database integrations tailored for Trivandrum startups and service platforms.",
            features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
        },
        {
            icon: "fas fa-search",
            title: "SEO and Performance",
            description: "Rank higher locally with custom local search optimization campaigns, structural JSON-LD schemas, and extreme site speed optimization targeting Trivandrum search terms.",
            features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-handshake",
            title: "Professional Communication",
            description: "Transparent updates, milestone checks, and complete clarity throughout the development lifecycle."
        },
        {
            icon: "fas fa-clock",
            title: "Structured Delivery",
            description: "Reliable schedules, incremental testing phases, and structured code reviews before public rollout."
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Local GEO Focus",
            description: "Ensuring your business targets specific search intents across Kazhakkoottam, Kowdiar, and East Fort."
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Practical Pricing",
            description: "Highly competitive, feature-based quotes with absolutely zero hidden licensing or support fees."
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Corporate Next.js Portal",
            description: "A fast, content-driven Next.js portal designed for Trivandrum agencies with integrated client request flows and local optimization.",
            tech: ["Next.js", "Lead Flow", "Tailwind CSS", "SEO Schema"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "B2B Export Store",
            description: "High-performance wholesale commerce store built for regional spice and handicraft suppliers near East Fort.",
            tech: ["E-commerce", "Secure Payments", "Inventory Sync", "Speed Run"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Technopark Booking App",
            description: "A secure, cross-platform Flutter application supporting service bookings, real-time schedule calendars, and push alerts.",
            tech: ["Flutter", "Node.js REST", "Firebase", "Admin Console"]
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
                description="Professional web development, custom e-commerce stores, and high-performance Flutter mobile apps in Thiruvananthapuram (Trivandrum), Kerala. Serving tech companies, startups, and agencies around Technopark, Kazhakkoottam, and Kowdiar with clean and secure code. Looking for highly customized solutions? Reach out for a free consultation today."
            />
        </>
    );
}

