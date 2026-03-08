export const metadata = {
    title: "Web Developer Thrissur | Flutter App Development - ANAGH K R",
    description: "Expert web & Flutter app development in Thrissur. Responsive websites, mobile apps & e-commerce platforms for cultural and festival city businesses.",
    keywords: "web developer Thrissur, Flutter developer Thrissur, app development Thrissur, MERN stack developer Thrissur, cultural web solutions, e-commerce Thrissur, React developer Thrissur, festival management systems, educational platforms, mobile app development",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/thrissur",
    ogTitle: "Web Developer Thrissur | Flutter App Development Thrissur",
    ogDescription: "Expert web development and Flutter app development services in Thrissur. Comprehensive digital solutions for cultural and festival city businesses.",
    ogUrl: "https://www.anaghkr.in/locations/thrissur",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ANAGH K R - Web Developer & App Developer Thrissur",
    "description": "Expert web development and Flutter app development services in Thrissur. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for cultural and festival city businesses.",
    "url": "https://www.anaghkr.in/locations/thrissur",
    "telephone": "+91-8075541805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "postalCode": "680001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "10.5276",
        "longitude": "76.2144"
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Thrissur"
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
                    "description": "Mobile-first responsive websites optimized for all devices"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Native and cross-platform mobile applications using Flutter"
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
                    "name": "MERN Stack Development",
                    "description": "Full-stack web applications using modern JavaScript"
                }
            }
        ]
    }
};

export default function ThrissurServices() {
    const cityHighlights = [
        {
            icon: "fas fa-crown",
            title: "Cultural Capital",
            description: "Kerala's cultural capital with rich arts heritage, Vadakkunnathan Temple, museums, and cultural organizations requiring modern digital presence"
        },
        {
            icon: "fas fa-drum",
            title: "Festival Hub",
            description: "Famous for Thrissur Pooram with 10+ million visitors, cultural festivals, art exhibitions, and events needing ticketing and management systems"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Center",
            description: "Home to Government Engineering College, medical colleges, Kerala Kalamandalam arts university, and schools requiring educational platforms"
        },
        {
            icon: "fas fa-building",
            title: "Commercial Hub",
            description: "Growing commercial center with gold market, textiles, jewellery showrooms, and businesses around Round, Swaraj Round, and East Fort areas"
        }
    ];

    const services = [
        {
            icon: "fas fa-mobile-alt",
            title: "Responsive Web Design",
            description: "Mobile-first responsive websites optimized for all devices and screen sizes, perfect for Thrissur's diverse businesses including gold jewellery showrooms, textile stores, cultural organizations, educational institutions, and festival committees. I develop websites that look perfect on smartphones, tablets, and desktops with modern design aesthetics reflecting Kerala's cultural heritage. Services include fast-loading pages for better user experience, cross-browser compatibility, SEO optimization for Google ranking, and integration with social media platforms to promote Thrissur's cultural events and businesses across digital channels.",
            features: ["Mobile-First Design", "Cross-Browser Compatible", "Fast Loading", "SEO Optimized"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications using Flutter for business growth in Thrissur. I develop festival management apps for Pooram and cultural events with ticketing systems, art gallery apps showcasing Kerala's traditional arts and artists, educational apps for coaching centers and music schools, and retail apps for gold showrooms and textile stores. All apps include push notifications for event updates, payment gateway integration for tickets and purchases, offline functionality, and Malayalam language support serving Thrissur's culturally rich community with iOS and Android deployment to app stores.",
            features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Deployment"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Solutions",
            description: "Complete online stores with payment integration and inventory management for Thrissur retailers and cultural product sellers. I build e-commerce platforms for gold jewellery showrooms showcasing collections online, traditional craft stores selling Kerala art products, textile and saree showrooms with fabric catalogs, and cultural merchandise platforms. Features include secure payment gateways (Razorpay, PayPal), inventory tracking, order management, shipping integration with Blue Dart and DHL, customer accounts for repeat purchases, and product photo galleries with zoom functionality attracting customers beyond Thrissur's physical markets.",
            features: ["Payment Gateway", "Inventory System", "Order Management", "Customer Portal"]
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to grow online presence for Thrissur businesses, festivals, and cultural organizations. I provide search engine optimization (SEO) to improve Google rankings for keywords like 'Thrissur gold', 'Pooram tickets', or 'Kerala arts', social media marketing for Facebook and Instagram promoting cultural events and products, Google Ads and PPC campaigns targeting local and tourist audiences, and analytics setup tracking website visitors and conversion rates. Services include content marketing strategies for cultural heritage promotion, email marketing campaigns for event announcements, and WhatsApp Business integration reaching Thrissur's engaged local audience for effective digital growth.",
            features: ["SEO Services", "Social Media Marketing", "PPC Campaigns", "Analytics Setup"]
        },
        {
            icon: "fas fa-cogs",
            title: "Business Automation",
            description: "Automated workflows and systems improving business efficiency for Thrissur's gold showrooms, textile stores, and cultural organizations. I develop customer relationship management (CRM) systems tracking inquiries and sales, inventory management for jewellery and textiles with barcode scanning, automated billing with GST compliance, appointment booking systems for showrooms and services, and workflow automation reducing manual paperwork. Services include API development for third-party integrations, WhatsApp API for automated customer updates about gold rates or festival schedules, and custom dashboards displaying real-time business metrics helping Thrissur businesses compete effectively.",
            features: ["Process Automation", "CRM Integration", "Workflow Management", "API Development"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Full-stack web applications using modern JavaScript technologies (MongoDB, Express.js, React, Node.js) for complex requirements in Thrissur. I build custom web applications for festival ticketing platforms with seat selection and payment processing, cultural archives digitizing Kerala's art forms and artists, educational platforms for music and dance schools with video lessons, and business management systems for gold showrooms tracking purchases and customer history. All applications feature scalable databases, secure authentication, real-time updates using WebSockets, RESTful APIs, and admin dashboards providing complete control over data and operations for Thrissur's growing tech-forward community.",
            features: ["React Frontend", "Node.js Backend", "MongoDB Database", "Express Framework"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-palette",
            title: "Cultural Solutions",
            description: "Specialized digital solutions for cultural organizations, festival committees, art academies, and heritage preservation with deep understanding of Kerala's traditional arts and cultural values"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Platforms",
            description: "3+ years experience building custom platforms for educational institutions, music schools, dance academies, and coaching centers with features tailored for Kerala's education sector"
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Transparent Pricing",
            description: "Affordable pricing for Thrissur businesses: ₹3,000 for basic websites, ₹4,000+ for WordPress e-commerce, ₹10,000+ for mobile apps, with custom quotes for festival management and cultural platforms"
        },
        {
            icon: "fas fa-music",
            title: "Arts Promotion",
            description: "Specialized platforms for promoting Kerala's arts, music, and cultural heritage online with multimedia galleries, artist profiles, and event calendars reaching global audiences"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-calendar",
            title: "Festival Management",
            description: "Comprehensive Thrissur Pooram festival management system with online ticketing for 50,000+ visitors, event scheduling, participant registration, vendor management, and real-time updates during the festival celebrations",
            tech: ["React", "Node.js", "Event Scheduling", "Ticketing System", "Payment Gateway"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "College Portal",
            description: "Educational management system for Government Engineering College Thrissur with 3,000+ students, featuring attendance tracking, grade management, online assignments, parent portal, and digital library access",
            tech: ["Flutter", "Firebase", "Student Portal", "Academic Management", "Cloud Storage"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "Cultural E-commerce",
            description: "E-commerce platform for traditional Kerala crafts and cultural products from Thrissur artisans, with 200+ handmade items, artisan profiles, cultural heritage stories, international shipping, and payment gateway for global customers",
            tech: ["React", "Product Catalog", "Artisan Portal", "Multi-currency", "Shipping Integration"]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="Thrissur"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Expert web development and mobile app development services in Thrissur, Kerala's cultural capital and festival hub. With 3+ years of professional experience, I specialize in digital solutions for cultural organizations, festival committees, educational institutions, gold showrooms, textile stores, and businesses throughout Thrissur. Services include responsive website design with mobile-first approach perfect for showcasing Kerala's arts and products, cross-platform mobile applications using Flutter for festival ticketing and retail, complete e-commerce platforms for jewellery showrooms and cultural crafts with payment integration, digital marketing strategies improving online visibility for Pooram events and local businesses, business automation tools for gold rate updates and inventory tracking, and custom MERN stack development for complex cultural archives and educational platforms. I understand Thrissur's unique position as Kerala's cultural heart - from Vadakkunnathan Temple heritage to Thrissur Pooram's international appeal, from Kerala Kalamandalam's artistic excellence to the commercial vitality of Round and Swaraj Round business districts. Whether you need a festival management system with ticketing for thousands of visitors, an educational platform for music and dance institutions, an e-commerce store for artisan crafts reaching global markets, or a showcase website for your gold showroom or cultural organization, I deliver culturally aware solutions with modern technology. Transparent pricing starts at ₹3,000 for basic websites, ₹4,000+ for WordPress platforms with content management, and ₹10,000+ for mobile apps with custom quotes for festival management systems and specialized cultural applications. Serving Thrissur's Round area, East Fort commercial district, Ayyanthole educational zone, and surrounding regions with dedicated support and deep appreciation for Kerala's cultural heritage."
            />
        </>
    );
}
