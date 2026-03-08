export const metadata = {
    title: "Web Developer Kozhikode | Flutter App Development Calicut | MERN Stack Developer - Anagh K R",
    description: "Web & Flutter app development in Kozhikode/Calicut. Modern websites, mobile apps & e-commerce platforms for Malabar region businesses.",
    keywords: "web developer Kozhikode, Flutter developer Calicut, app development Kozhikode, MERN stack developer Calicut, e-commerce development Malabar, export business solutions, React developer Kozhikode, mobile app development Calicut, business automation, digital transformation",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kozhikode",
    ogTitle: "Web Developer Kozhikode | Flutter App Development Calicut",
    ogDescription: "Professional web development and Flutter app development services in Kozhikode (Calicut). Modern solutions for businesses in Malabar region.",
    ogUrl: "https://www.anaghkr.in/locations/kozhikode",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';
import '../city.css';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.anaghkr.in/locations/kozhikode",
    "name": "ANAGH K R - Web Developer & App Developer Kozhikode",
    "description": "Professional web development, Flutter app development, and MERN stack development services in Kozhikode (Calicut). Expert digital solutions for businesses in Malabar region.",
    "url": "https://www.anaghkr.in/locations/kozhikode",
    "telephone": "+91-8075541805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kozhikode",
        "addressRegion": "Kerala",
        "postalCode": "673001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "11.2588",
        "longitude": "75.7804"
    },
    "areaServed": [
        { "@type": "City", "name": "Kozhikode" },
        { "@type": "City", "name": "Calicut" },
        { "@type": "State", "name": "Kerala" }
    ],
    "priceRange": "₹₹",
    "openingHours": "Mo-Sa 09:00-18:00",
    "sameAs": [
        "https://www.linkedin.com/in/anaghkr",
        "https://github.com/anaghkr"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services in Kozhikode",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development", "description": "Custom website development in Kozhikode" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flutter App Development", "description": "Mobile app development in Kozhikode" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MERN Stack Development", "description": "Full-stack development in Kozhikode" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Development", "description": "Online store development in Kozhikode" } }
        ]
    }
};

export default function KozhikodeServices() {
    const cityHighlights = [
        {
            icon: "fas fa-mosque",
            title: "Cultural Center",
            description: "Rich cultural heritage with traditional business community, mosques, and historical trade connections requiring culturally sensitive digital solutions"
        },
        {
            icon: "fas fa-industry",
            title: "Business Hub",
            description: "Major commercial center of Malabar region with textile, spice, and export industries, SM Street markets, and growing retail sector"
        },
        {
            icon: "fas fa-ship",
            title: "Export Industry",
            description: "International trade port with spice exporters, seafood businesses, and companies requiring multi-currency, multilingual platforms"
        },
        {
            icon: "fas fa-laptop-code",
            title: "Modern Solutions",
            description: "Growing demand for digital transformation from traditional businesses, educational institutions like IIM Kozhikode, NIT, and medical college"
        }
    ];

    const services = [
        {
            icon: "fas fa-desktop",
            title: "Modern Website Development",
            description: "Contemporary website solutions using latest technologies for Kozhikode businesses including textile showrooms, spice exporters, restaurants, medical facilities, and educational institutions. I develop responsive websites with modern design principles, fast loading speeds, mobile optimization, and SEO-friendly architecture. Services include business websites showcasing products and services, restaurant websites with menu displays and online ordering, medical center websites with appointment booking, and export business portals with product catalogs and international shipping integration for Malabar region companies.",
            features: ["Modern Design", "Fast Performance", "Mobile Responsive", "SEO Optimized"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Solutions",
            description: "Cross-platform mobile applications using Flutter for business growth in Malabar region. I develop food delivery apps for popular Kozhikode restaurants, retail apps for textile and electronics stores, service booking apps for salons and healthcare, and educational apps for Islamic institutions and coaching centers. All apps include offline functionality, push notifications, Arabic/Malayalam language support, and payment gateway integration with UPI, cards, and wallets for seamless transactions serving Calicut's diverse business community.",
            features: ["Cross-Platform Apps", "Native Performance", "Business Solutions", "User-Friendly Design"]
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Transformation",
            description: "Complete digital transformation services helping traditional Kozhikode businesses transition to digital operations. I assist spice traders, textile merchants, and family businesses with implementing digital inventory systems, online ordering platforms, customer relationship management, and automated workflows. Services include consultation on technology adoption, staff training for digital tools, gradual migration from manual to automated processes, and ongoing support ensuring successful digital transformation for businesses in SM Street, Kannur Road, and throughout Calicut preserving traditional values while embracing modern efficiency.",
            features: ["Process Automation", "Digital Strategy", "Technology Upgrade", "Training & Support"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Platforms",
            description: "Online stores and e-commerce solutions for Kozhikode retailers and exporters wanting to sell products globally. I develop comprehensive e-commerce websites with product catalogs, shopping carts, secure payment gateways (Razorpay, PayPal, Stripe), inventory management, order tracking, and customer accounts. Specialized features for export businesses include multi-currency support, international shipping calculators, GST billing, export documentation, and integration with courier services. Perfect for spice exporters, textile merchants, handicraft sellers, and retail stores expanding online presence.",
            features: ["Online Store", "Payment Integration", "Inventory Management", "Export Features"]
        },
        {
            icon: "fas fa-cogs",
            title: "Business Automation",
            description: "Automated systems and workflows improving business efficiency for Kozhikode companies. I build customer relationship management (CRM) systems tracking leads and sales, inventory control systems for warehouses and stores, automated billing and invoicing platforms, employee attendance and payroll systems, and custom workflows reducing manual work. Services include integration with existing accounting software, WhatsApp Business API for automated customer communication, SMS notifications for orders and deliveries, and reporting dashboards providing real-time business insights for data-driven decisions in Calicut's competitive market.",
            features: ["Workflow Automation", "CRM Systems", "Inventory Control", "Report Generation"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Full-stack web applications using modern JavaScript technologies (MongoDB, Express.js, React, Node.js) for complex business requirements. I develop custom web applications with scalable databases, RESTful APIs for third-party integrations, admin dashboards for business management, real-time features using WebSockets, and secure user authentication systems. Ideal for businesses needing custom solutions beyond templates - educational platforms with video streaming, booking systems for hotels and restaurants, social platforms for communities, and enterprise applications for growing Kozhikode businesses requiring robust, maintainable technology stacks.",
            features: ["React Frontend", "Node.js Backend", "MongoDB Database", "Express Framework"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-history",
            title: "Cultural Understanding",
            description: "Deep appreciation for local business culture, traditional practices, and religious considerations with culturally sensitive design and features respecting Malabar heritage while delivering modern functionality"
        },
        {
            icon: "fas fa-globe",
            title: "Export Focus",
            description: "3+ years experience developing solutions for export-oriented businesses including multi-currency pricing, international payment gateways, shipping calculators, and export documentation systems serving Calicut's global trade community"
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Affordable Pricing",
            description: "Transparent pricing for Kozhikode businesses: ₹3,000 for basic websites, ₹4,000+ for WordPress stores, ₹10,000+ for mobile apps, and custom quotes for e-commerce and export platforms based on specific requirements"
        },
        {
            icon: "fas fa-handshake",
            title: "Local Support",
            description: "Strong connections with local business community, Malayalam/Arabic language support, understanding of Malabar market dynamics, and dedicated support with fast response times for businesses throughout Calicut"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Export Business Portal",
            description: "Comprehensive export platform for spice trading company in SM Street with 200+ products, multi-currency pricing (USD, EUR, AED), international shipping calculator, export documentation automation, and B2B portal for 50+ global buyers",
            tech: ["React", "Node.js", "Multi-currency API", "Export Docs", "Payment Gateway"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Restaurant App",
            description: "Food delivery app for popular Kozhikode restaurant chain with 5 branches, features real-time order tracking, menu in Malayalam and English, payment gateway integration, customer reviews, and serving 500+ orders daily across Calicut metro area",
            tech: ["Flutter", "Real-time Tracking", "Razorpay", "Multi-language", "Push Notifications"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Platform",
            description: "Online learning platform for Islamic educational institution with 1000+ students, featuring video streaming lectures in Arabic and Malayalam, progress tracking, assignment submissions, examination system, and parent portal for educational monitoring",
            tech: ["React", "Video Streaming", "Arabic/Malayalam", "Progress Tracking", "MongoDB"]
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
                description="Professional web development and Flutter app development services in Kozhikode (Calicut), Malabar region's commercial hub. With 3+ years of professional experience, I specialize in modern digital solutions for traditional businesses, export companies, restaurants, educational institutions, and retail stores throughout Calicut. Services include contemporary website development with responsive design and SEO optimization, cross-platform mobile applications using Flutter with Malayalam and Arabic language support, e-commerce platforms for exporters with multi-currency and international shipping features, business automation systems including CRM and inventory management, and complete MERN stack development for complex web applications. I understand Kozhikode's unique business culture - from spice exporters on SM Street to textile merchants on Kannur Road, from traditional restaurants to modern retail, from Islamic educational institutions to premier colleges like IIM and NIT. Whether you need an export business portal with documentation automation, a restaurant delivery app, an educational platform with multilingual support, or digital transformation for your traditional business, I provide culturally sensitive solutions. Transparent pricing starts at ₹3,000 for basic websites, ₹4,000+ for WordPress e-commerce stores, and ₹10,000+ for mobile apps with custom quotes for export platforms and enterprise solutions. Serving businesses across Kozhikode including Beypore port area, Beach Road commercial district, Mavoor Road industrial belt, and throughout Malabar region with dedicated local support and rapid response times."
            />
        </>
    );
}
