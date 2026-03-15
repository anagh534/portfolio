export const metadata = {
    title: "Web Developer Ernakulam | Flutter App Development - ANAGH K R",
    description: "Expert web & Flutter app development in Ernakulam district. Responsive websites, mobile apps & e-commerce platforms for urban businesses.",
    keywords: "web developer Ernakulam, Flutter developer Ernakulam, app development Ernakulam, MERN stack developer Ernakulam, Kochi web services, responsive web design, mobile app development, e-commerce solutions, React developer Ernakulam, business automation",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/ernakulam",
    },
    openGraph: {
        title: "Web Developer Ernakulam | Flutter App Development Ernakulam",
        description: "Expert web development and Flutter app development services in Ernakulam district. Comprehensive digital solutions for urban businesses.",
        url: "https://www.anaghkr.in/locations/ernakulam",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Developer Ernakulam | Flutter App Development Ernakulam",
        description: "Expert web development and Flutter app development services in Ernakulam district. Comprehensive digital solutions for urban businesses.",
    },
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ANAGH K R - Web Developer & App Developer Ernakulam",
    "description": "Expert web development and Flutter app development services in Ernakulam district. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for urban businesses.",
    "url": "https://www.anaghkr.in/locations/ernakulam",
    "telephone": "+91-8075541805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ernakulam",
        "addressRegion": "Kerala",
        "postalCode": "682001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.9816",
        "longitude": "76.2999"
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Ernakulam"
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
                    "name": "Enterprise Solutions",
                    "description": "Scalable web applications for corporate clients"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Flutter apps for business growth"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Solutions",
                    "description": "Complete online stores with payment integration"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Business Automation",
                    "description": "Workflow automation for enterprises"
                }
            }
        ]
    }
};

export default function ErnkulamServices() {
    const cityHighlights = [
        {
            icon: "fas fa-city",
            title: "Urban Center",
            description: "Major urban district with diverse business opportunities"
        },
        {
            icon: "fas fa-building",
            title: "Business District",
            description: "Corporate offices and business parks requiring modern solutions"
        },
        {
            icon: "fas fa-laptop-code",
            title: "Tech Companies",
            description: "Home to numerous IT companies and tech startups"
        },
        {
            icon: "fas fa-road",
            title: "Modern Infrastructure",
            description: "Well-developed infrastructure supporting digital businesses"
        }
    ];

    const services = [
        {
            icon: "fas fa-mobile-alt",
            title: "Responsive Web Design",
            description: "Mobile-first responsive websites optimized for all devices and screen sizes",
            features: ["Mobile-First Design", "Cross-Browser Compatible", "Fast Loading", "SEO Optimized"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
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
            icon: "fas fa-chart-line",
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to grow your online presence",
            features: ["SEO Services", "Social Media Marketing", "PPC Campaigns", "Analytics Setup"]
        },
        {
            icon: "fas fa-cogs",
            title: "Business Automation",
            description: "Automated workflows and systems to improve business efficiency",
            features: ["Process Automation", "CRM Integration", "Workflow Management", "API Development"]
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
            icon: "fas fa-users",
            title: "Corporate Experience",
            description: "Extensive experience working with corporate clients and enterprise requirements"
        },
        {
            icon: "fas fa-rocket",
            title: "Scalable Solutions",
            description: "Building applications that scale with your business growth and expansion"
        },
        {
            icon: "fas fa-shield-alt",
            title: "Enterprise Security",
            description: "Implementation of robust security measures for business-critical applications"
        },
        {
            icon: "fas fa-headset",
            title: "Professional Support",
            description: "Dedicated technical support and maintenance for enterprise applications"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-building",
            title: "Corporate Website",
            description: "Professional corporate website for leading Ernakulam business group",
            tech: ["React", "Node.js", "Corporate Design", "CMS Integration"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Business App",
            description: "Enterprise mobile app for workforce management and communication",
            tech: ["Flutter", "Firebase", "Real-time Chat", "Employee Portal"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "E-commerce Platform",
            description: "Multi-vendor e-commerce platform for retail business network",
            tech: ["React", "Payment Gateway", "Multi-vendor", "Admin Dashboard"]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="Ernakulam"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Expert web development and mobile app development services in Ernakulam district. Comprehensive digital solutions for urban businesses, corporate clients, and enterprise applications."
            />
        </>
    );
}
