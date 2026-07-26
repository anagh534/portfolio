export const metadata = {
    title: "Flutter & Website Developer in Kozhikode | ANAGH K R",
    description: "Professional website developer and mobile app (Flutter) expert in Kozhikode, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    keywords: "website developer kozhikode, flutter developer kozhikode, web developer kozhikode, mobile app development kozhikode, local SEO kozhikode",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kozhikode/",
    },
    openGraph: {
        title: "Flutter & Website Developer in Kozhikode | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kozhikode, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        url: "https://www.anaghkr.in/locations/kozhikode/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter & Website Developer in Kozhikode | ANAGH K R",
        description: "Professional website developer and mobile app (Flutter) expert in Kozhikode, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in Kozhikode",
    "description": "Professional website design, mobile apps, and local search optimization in Kozhikode, Kerala.",
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
                "icon": "fas fa-building",
                "title": "Local Market Fit",
                "description": "High-performance digital platforms created for Kozhikode's retail boutiques, home bakers, and creative portfolios."
        },
        {
                "icon": "fas fa-chart-line",
                "title": "Digital Growth Opportunity",
                "description": "Unlocking simple online order catalogs and WhatsApp inquiry buttons for local shops."
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile-First Demand",
                "description": "Engineering fast, touch-friendly Flutter mobile apps to drive user retention for Kozhikode users."
        },
        {
                "icon": "fas fa-globe",
                "title": "SEO Visibility",
                "description": "Fine-tuning meta tags, search layouts, and local map SEO elements for Kozhikode visibility."
        }
];

    const services = [
        {
                "icon": "fas fa-laptop-code",
                "title": "Custom Website Development",
                "description": "Modern React web development in Kozhikode. Get high-performance, responsive sites with custom layouts and clean semantic code.",
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
                "description": "Cross-platform mobile app development in Kozhikode. I construct interactive Flutter apps with responsive user screens.",
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
                "description": "Full-stack MERN development in Kozhikode. I build secure databases, custom admin dashboards, and Express APIs.",
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
                "description": "Local SEO optimization in Kozhikode. I adjust page architectures, meta tags, and local maps queries to boost ranking.",
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
                "description": "Open chat channel, weekly milestone summaries, and prompt feedback loop."
        },
        {
                "icon": "fas fa-clock",
                "title": "Structured Delivery",
                "description": "Organized project phases with regular code commits and performance checks."
        },
        {
                "icon": "fas fa-map-marker-alt",
                "title": "Local SEO Focus",
                "description": "Targeted optimization targeting Kozhikode search habits and local maps terms."
        },
        {
                "icon": "fas fa-rupee-sign",
                "title": "Practical Pricing",
                "description": "Budget-aligned project estimations based on custom features and design layouts."
        }
];

    const portfolio = [
        {
                "icon": "fas fa-store",
                "title": "Service Directory Concept",
                "description": "A responsive business showcase page featuring localized schema data, direct call buttons, and fast static loading.",
                "tech": [
                        "Next.js",
                        "Static Export",
                        "Lead Forms",
                        "WhatsApp CTA"
                ]
        },
        {
                "icon": "fas fa-mobile-alt",
                "title": "Mobile App Concept",
                "description": "A Flutter mobile utility showcasing location-based searches, customer push alerts, and database integration.",
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
                cityName="Kozhikode"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web development and Flutter mobile app development services in Kozhikode, Kerala. Designing custom React portals, custom websites, MERN dashboards, and SEO assets for retail boutiques, clinics, and personal portfolios."
                extraContent={
                    <div className="space-y-8 text-gray-300">
                        <h2 className="text-3xl font-black text-white uppercase tracking-tight">Your Dedicated Website & Flutter App Developer in Kozhikode (Calicut)</h2>
                        <p className="leading-relaxed">
                            As a developer based in <strong>Kerala</strong> serving businesses in <strong>Kozhikode (Calicut)</strong>, I combine deep local market familiarity with world-class engineering standards. Whether your business is headquartered in <strong>Cyberpark Kozhikode, HiLite Business Park</strong>, or a thriving retail boutique near <strong>SM Street</strong>, winning in today's digital landscape requires more than just a template website—it demands a high-speed, conversion-tuned digital engine.
                        </p>
                        <p className="leading-relaxed">
                            Unlike distant agencies or generic overseas contractors, partnering with a local <strong>web developer in Kozhikode</strong> gives you the strategic advantage of direct communication. I understand the unique consumer behaviors of North Kerala and Malabar's fast-growing business ecosystem. From seamless Malayalam and English technical discussions to face-to-face strategy sessions in Calicut, I ensure your project moves from concept to launch without friction.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Why Malabar Businesses Are Moving Away from WordPress to MERN & Next.js</h3>
                        <p className="leading-relaxed">
                            For years, traditional businesses in Kozhikode relied on slow, plugin-heavy WordPress themes that crack under high traffic and fail Google's Core Web Vitals. I specialize in custom-coded web architectures using <strong>React, Next.js, and the MERN Stack (MongoDB, Express, React, Node.js)</strong>. This modern approach delivers:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Sub-Second Page Loads:</strong> Instantaneous page rendering that keeps potential buyers engaged on mobile devices, drastically reducing bounce rates.</li>
                            <li><strong>Dominant Local SEO (GEO):</strong> Clean semantic HTML5, localized Schema markup, and optimized metadata tailored for keywords like <em>"web designer near me Kozhikode"</em> and <em>"best IT services Calicut"</em>.</li>
                            <li><strong>Bank-Grade Security:</strong> Custom authentication, encrypted data transmission, and immunity against common WordPress database vulnerabilities and automated hacks.</li>
                            <li><strong>Scalable Custom Workflows:</strong> Bespoke admin dashboards and inventory tools where you can manage orders, client bookings, and content effortlessly.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Cross-Platform Flutter Mobile Apps for Kozhikode Startups</h3>
                        <p className="leading-relaxed">
                            With Kozhikode emerging as a major startup and entrepreneurship hub in Kerala, mobile application demand is at an all-time high. Whether you are launching a hyper-local delivery platform, a healthcare appointment utility for a clinic, or an e-commerce catalog for a retail brand, I engineer high-performance mobile apps using <strong>Flutter</strong>. 
                        </p>
                        <p className="leading-relaxed">
                            By leveraging Google's Flutter framework, I build responsive, native-feeling iOS and Android applications from a single codebase. This reduces development costs by up to 40%, cuts time-to-market in half, and ensures your app runs at a silky-smooth 60 frames per second on all smartphones.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">End-to-End Digital Transformation in Calicut</h3>
                        <p className="leading-relaxed">
                            From initial UI/UX wireframes in Figma to cloud deployment on Vercel and AWS, I handle every technical phase of your project. I also integrate localized payment gateways (Razorpay, PhonePe, UPI) and instant WhatsApp inquiry triggers to turn website visitors into paying customers. Partner with a trusted <strong>Flutter and website developer in Kozhikode</strong> committed to elevating your brand's digital presence across Kerala and beyond.
                        </p>
                    </div>
                }
            />
        </>
    );
}
