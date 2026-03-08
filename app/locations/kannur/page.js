export const metadata = {
    title: "Web Developer Kannur | Flutter App Development Kannur | Coastal Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Kannur. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for coastal and handloom businesses.",
    keywords: "web developer Kannur, Flutter developer Kannur, app development Kannur, MERN stack developer Kannur, handloom e-commerce, export business solutions, coastal web developer, React developer Kannur, mobile app development, business automation",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kannur",
    ogTitle: "Web Developer Kannur | Flutter App Development Kannur",
    ogDescription: "Expert web development and Flutter app development services in Kannur. Comprehensive digital solutions for coastal and handloom businesses.",
    ogUrl: "https://www.anaghkr.in/locations/kannur",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ANAGH K R - Web Developer & App Developer Kannur",
    "description": "Expert web development and Flutter app development services in Kannur. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for coastal and handloom businesses.",
    "url": "https://www.anaghkr.in/locations/kannur",
    "telephone": "+91-8075541805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kannur",
        "addressRegion": "Kerala",
        "postalCode": "670001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "11.8745",
        "longitude": "75.3704"
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Kannur"
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
                    "description": "Mobile-first responsive websites for coastal businesses"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Solutions",
                    "description": "Online stores for handloom and export businesses"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Flutter apps for traditional businesses"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Business Automation",
                    "description": "Automated workflows for business efficiency"
                }
            }
        ]
    }
};

export default function KannurServices() {
    const cityHighlights = [
        {
            icon: "fas fa-water",
            title: "Coastal Heritage",
            description: "Rich coastal culture with Payyambalam Beach tourism, St. Angelo Fort heritage sites, and thriving coastal trade businesses requiring modern digital presence"
        },
        {
            icon: "fas fa-industry",
            title: "Handloom Industry",
            description: "Traditional Kannur handloom and textile industry hub with renowned handloom cooperative societies exporting globally, requiring e-commerce platforms"
        },
        {
            icon: "fas fa-ship",
            title: "Port Connectivity",
            description: "Strategic Azhikkal and Dharmadam port locations providing excellent connectivity for spice traders, seafood exporters, and commercial businesses"
        },
        {
            icon: "fas fa-leaf",
            title: "Spice Trade",
            description: "Historical spice and cashew trading center with modern export businesses in Taliparamba and Thalassery requiring international payment and shipping solutions"
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
            icon: "fas fa-anchor",
            title: "Coastal Expertise",
            description: "Deep understanding of coastal business culture and traditional trade practices"
        },
        {
            icon: "fas fa-palette",
            title: "Artisan Solutions",
            description: "Specialized platforms for handloom and traditional craft businesses"
        },
        {
            icon: "fas fa-globe-americas",
            title: "Export Solutions",
            description: "Digital solutions tailored for export businesses and international trade"
        },
        {
            icon: "fas fa-history",
            title: "Heritage Integration",
            description: "Blending traditional business values with modern digital technologies"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-shopping-bag",
            title: "Handloom E-commerce",
            description: "Online marketplace for traditional Kannur handloom and textile products",
            tech: ["React", "Node.js", "Product Catalog", "International Shipping"]
        },
        {
            icon: "fas fa-ship",
            title: "Export Management",
            description: "Export business management system for spice and commodity traders",
            tech: ["Flutter", "Firebase", "Document Management", "Shipping Tracker"]
        },
        {
            icon: "fas fa-utensils",
            title: "Spice Portal",
            description: "B2B platform for spice traders with quality certification and bulk ordering",
            tech: ["React", "Quality Control", "Bulk Orders", "Certificate Management"]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="Kannur"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Expert web development and mobile app development services in Kannur, Kerala's coastal handloom capital. With 3+ years of professional experience, I specialize in digital solutions for handloom cooperatives, spice exporters, coastal tourism businesses, and traditional enterprises throughout Kannur district. Services include responsive website design for handloom showrooms showcasing traditional fabrics online, e-commerce platforms for textile and spice exporters with international shipping and multi-currency support, mobile applications using Flutter for tourism and business management, and MERN stack development for complex trading platforms. I understand Kannur's unique position - from traditional handloom weaving communities to modern port-based export businesses, from Payyambalam Beach tourism to Thalassery's culinary heritage. Whether you need an e-commerce store for handloom products reaching global markets, an export management system with documentation automation, a tourism booking platform, or a business website for coastal enterprises, I deliver solutions respecting local traditions while leveraging modern technology. Transparent pricing starts at ₹3,000 for basic websites, ₹4,000+ for WordPress platforms, and ₹10,000+ for mobile apps with custom quotes for export platforms. Serving Kannur town, Thalassery, Taliparamba, Payyannur, and surrounding coastal areas with dedicated support."
            />
        </>
    );
}
