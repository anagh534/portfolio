export const metadata = {
    title: "Web Developer Kanhangad | Flutter App Development - ANAGH K R",
    description: "Local web & mobile app development in Kanhangad. Custom digital solutions, responsive websites & mobile apps for local businesses.",
    keywords: "web developer Kanhangad, Flutter developer Kanhangad, app development Kanhangad, MERN stack developer Kanhangad, local digital solutions, responsive websites Kanhangad, mobile applications, startup solutions, business websites, custom development",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/kanhangad",
    },
    openGraph: {
        title: "Web Developer Kanhangad | Flutter App Development Kanhangad",
        description: "Local web development and mobile app development services in Kanhangad. Custom digital solutions for local businesses and startups.",
        url: "https://www.anaghkr.in/locations/kanhangad",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Developer Kanhangad | Flutter App Development Kanhangad",
        description: "Local web development and mobile app development services in Kanhangad. Custom digital solutions for local businesses and startups.",
    },
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ANAGH K R - Web Developer & App Developer Kanhangad",
    "description": "Local web development and mobile app development services in Kanhangad. Offering custom digital solutions, responsive websites, and mobile applications for local businesses and startups.",
    "url": "https://www.anaghkr.in/locations/kanhangad",
    "telephone": "+91-8075541805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kanhangad",
        "addressRegion": "Kerala",
        "postalCode": "671315",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.3084",
        "longitude": "75.1099"
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Kanhangad"
        }
    ],
    "priceRange": "₹₹",
    "openingHours": "Mo-Sa 09:00-18:00",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development & App Development Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Responsive Web Design",
                    "description": "Mobile-first websites for local businesses"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Flutter App Development",
                    "description": "Custom mobile applications for startups"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Startup Solutions",
                    "description": "Digital platforms for new businesses"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Business Websites",
                    "description": "Professional websites with modern design"
                }
            }
        ]
    }
};

export default function KanhangadServices() {
    const cityHighlights = [
        {
            icon: "fas fa-store",
            title: "Local Business Focus",
            description: "Specialized digital solutions for Kanhangad's local businesses and economy"
        },
        {
            icon: "fas fa-globe",
            title: "Regional Expertise",
            description: "Deep understanding of Kanhangad's market needs and consumer preferences"
        },
        {
            icon: "fas fa-seedling",
            title: "Growing Market",
            description: "Emerging digital ecosystem with untapped business opportunities"
        },
        {
            icon: "fas fa-users",
            title: "Community Oriented",
            description: "Solutions designed to strengthen local community connections"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Responsive Web Design",
            description: "Mobile-first responsive websites optimized for all devices and screen sizes",
            features: ["Mobile-First Design", "Cross-Browser Compatible", "Fast Loading", "SEO Optimized"]
        },
        {
            icon: "fab fa-flutter",
            title: "Flutter App Development",
            description: "Native and cross-platform mobile applications for business growth",
            features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Deployment"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Solutions",
            description: "Complete online stores with payment integration and inventory management",
            features: ["Payment Gateway", "Inventory System", "Order Management", "Customer Portal"]
        },
        {
            icon: "fas fa-rocket",
            title: "Startup Solutions",
            description: "Digital platforms designed to help Kanhangad startups grow and succeed",
            features: ["MVP Development", "Growth Strategy", "Investor Presentations", "Analytics"]
        },
        {
            icon: "fas fa-briefcase",
            title: "Business Websites",
            description: "Professional business websites with modern design and functionality",
            features: ["Brand Identity", "Service Showcase", "Contact Forms", "Social Integration"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Full-stack web applications using modern JavaScript technologies",
            features: ["React Frontend", "Node.js Backend", "MongoDB Database", "Express Framework"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-map-marker-alt",
            title: "Local Presence",
            description: "Understanding of Kanhangad's unique business environment and customer needs"
        },
        {
            icon: "fas fa-language",
            title: "Regional Approach",
            description: "Solutions that incorporate local language and cultural elements"
        },
        {
            icon: "fas fa-handshake",
            title: "Personal Service",
            description: "Direct collaboration and personalized attention for every project"
        },
        {
            icon: "fas fa-bolt",
            title: "Fast Deployment",
            description: "Quick development and deployment of solutions for local businesses"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store-alt",
            title: "Local Retailer Platform",
            description: "E-commerce solution for a traditional Kanhangad retail business",
            tech: ["React", "Node.js", "Product Catalog", "Payment Gateway"]
        },
        {
            icon: "fas fa-utensils",
            title: "Restaurant Ordering System",
            description: "Mobile app for popular local restaurant with online ordering",
            tech: ["Flutter", "Firebase", "Order Management", "Customer Profiles"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Platform",
            description: "Learning management system for a Kanhangad educational institution",
            tech: ["MERN Stack", "Video Integration", "Assessment Tools", "Student Portal"]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="Kanhangad"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Local web development and mobile app development services in Kanhangad. Personalized digital solutions with fast deployment and direct collaboration for local businesses and startups."
            />
        </>
    );
}
