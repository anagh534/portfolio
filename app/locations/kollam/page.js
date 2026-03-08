export const metadata = {
    title: "Web Developer Kollam | Flutter App Development Kollam | Industrial Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Kollam. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for industrial and port city businesses.",
    keywords: "web developer Kollam, Flutter developer Kollam, app development Kollam, MERN stack developer Kollam, industrial web solutions, cashew export platforms, port city digital solutions, React developer Kollam, tourism websites Kollam, e-commerce solutions",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kollam",
    ogTitle: "Web Developer Kollam | Flutter App Development Kollam",
    ogDescription: "Expert web development and Flutter app development services in Kollam. Comprehensive digital solutions for industrial and port city businesses.",
    ogUrl: "https://www.anaghkr.in/locations/kollam",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ANAGH K R - Web Developer & App Developer Kollam",
    "description": "Expert web development and Flutter app development services in Kollam. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for industrial and port city businesses.",
    "url": "https://www.anaghkr.in/locations/kollam",
    "telephone": "+91-8281992989",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kollam",
        "addressRegion": "Kerala",
        "postalCode": "691001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "8.8932",
        "longitude": "76.6141"
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Kollam"
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
                    "name": "Industrial Solutions",
                    "description": "Web solutions for manufacturing and industrial businesses"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Solutions",
                    "description": "Online stores for cashew and export businesses"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Tourism Solutions",
                    "description": "Digital platforms for hospitality and tourism"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Flutter apps for port city businesses"
                }
            }
        ]
    }
};

export default function KollamServices() {
    const cityHighlights = [
        {
            icon: "fas fa-industry",
            title: "Industrial Hub",
            description: "Major industrial center with diverse manufacturing and processing units"
        },
        {
            icon: "fas fa-anchor",
            title: "Ancient Port",
            description: "Historic port city with modern maritime infrastructure and trade facilities"
        },
        {
            icon: "fas fa-leaf",
            title: "Cashew Capital",
            description: "World's cashew capital with global export business opportunities"
        },
        {
            icon: "fas fa-water",
            title: "Backwater Tourism",
            description: "Beautiful backwaters with tourism and hospitality business potential"
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
            icon: "fas fa-cogs",
            title: "Industrial Solutions",
            description: "Specialized solutions for manufacturing and industrial business requirements"
        },
        {
            icon: "fas fa-ship",
            title: "Export Platforms",
            description: "Custom platforms for export businesses and international trade management"
        },
        {
            icon: "fas fa-hotel",
            title: "Tourism Solutions",
            description: "Digital solutions for tourism and hospitality businesses in backwater region"
        },
        {
            icon: "fas fa-chart-line",
            title: "Processing Solutions",
            description: "Business solutions for cashew processing and agricultural industries"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-industry",
            title: "Manufacturing Portal",
            description: "Industrial management system for manufacturing units in Kollam",
            tech: ["React", "Node.js", "Inventory Management", "Production Tracking"]
        },
        {
            icon: "fas fa-ship",
            title: "Export Management",
            description: "Cashew export business management platform with international compliance",
            tech: ["Flutter", "Firebase", "Export Documentation", "Quality Control"]
        },
        {
            icon: "fas fa-bed",
            title: "Resort Booking",
            description: "Backwater resort booking and management system for tourism industry",
            tech: ["React", "Booking System", "Payment Gateway", "Guest Management"]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="Kollam"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Expert web development and mobile app development services in Kollam. Comprehensive digital solutions for industrial businesses, cashew industry, tourism sector, and export-oriented enterprises."
            />
        </>
    );
}
