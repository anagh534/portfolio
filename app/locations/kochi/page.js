export const metadata = {
    title: "Web Developer Kochi | Flutter App Development Services in Ernakulam - Anagh K R",
    description: "Professional web & Flutter app developer serving Kochi/Ernakulam. Custom websites, mobile apps & e-commerce solutions from ₹3,000. 3+ years experience.",
    keywords: "web developer Kochi, Flutter developer Kochi, app development Kochi, website development Ernakulam, MERN stack developer Kochi, mobile app development Kochi, e-commerce development Kochi, WordPress developer Kochi, React developer Kochi, web design Kochi",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kochi",
    ogTitle: "Professional Web Developer & App Developer in Kochi, Ernakulam",
    ogDescription: "Expert web development and Flutter mobile app services for Kochi businesses. Custom websites, e-commerce, and mobile apps with 3+ years experience.",
    ogUrl: "https://www.anaghkr.in/locations/kochi",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.anaghkr.in/locations/kochi",
    "name": "ANAGH K R - Web Developer & App Developer Kochi",
    "description": "Professional web development, Flutter app development, and MERN stack development services in Kochi, Ernakulam. Serving businesses across Kerala's commercial capital.",
    "url": "https://www.anaghkr.in/locations/kochi",
    "telephone": "+91-8075541805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "postalCode": "682001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.9312",
        "longitude": "76.2673"
    },
    "areaServed": [
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Ernakulam" },
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
        "name": "Services in Kochi",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development", "description": "Custom website development in Kochi" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flutter App Development", "description": "Mobile app development in Kochi" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MERN Stack Development", "description": "Full-stack development in Kochi" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Development", "description": "Online store development in Kochi" } }
        ]
    }
};

export default function KochiServices() {
    const cityHighlights = [
        {
            icon: "fas fa-building",
            title: "Tech Hub Infopark",
            description: "Home to Kerala's largest IT park with 400+ companies needing modern digital solutions"
        },
        {
            icon: "fas fa-ship",
            title: "Commercial Capital",
            description: "Kerala's business center with thriving retail, import-export, and service industries"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Startup Ecosystem",
            description: "Growing startup culture in Infopark and Kakkanad requiring innovative web and mobile solutions"
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Transformation",
            description: "Businesses in Ernakulam rapidly adopting e-commerce and mobile-first strategies"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Modern, responsive websites for Kochi startups and businesses in Infopark, Kakkanad, and across Ernakulam. From corporate websites to landing pages with SEO optimization and fast loading speeds.",
            features: ["Mobile Responsive", "SEO Friendly", "Fast Performance", "Custom Design"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Solutions",
            description: "Complete online store development for Kochi retailers and traders. Secure payment integration with Razorpay/Stripe, inventory management, and integration with local delivery services in Kochi metro area.",
            features: ["Payment Gateway", "Order Management", "Delivery Integration", "Customer Portal"]
        },
        {
            icon: "fab fa-flutter",
            title: "Flutter App Development",
            description: "Professional mobile apps for iOS and Android serving Kochi businesses. Perfect for startups in Infopark, delivery services, booking apps, and business automation with real-time features.",
            features: ["Cross-Platform", "Native Performance", "Backend Integration", "App Store Ready"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Scalable web applications for Kochi tech companies and startups using MongoDB, Express, React, and Node.js. Ideal for SaaS platforms, dashboards, and data-driven applications.",
            features: ["Scalable Backend", "Modern Frontend", "API Development", "Real-time Features"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Professional WordPress websites for Kochi small businesses and professionals. Easy content management, blog integration, WooCommerce setup for online selling with local SEO optimization.",
            features: ["Custom Themes", "WooCommerce Setup", "Content Management", "Local SEO"]
        },
        {
            icon: "fas fa-search",
            title: "SEO & Digital Presence",
            description: "Local SEO services to help Kochi businesses rank better in Google searches. Technical SEO, Google My Business optimization, and analytics setup for better online visibility in Kochi market.",
            features: ["Local SEO", "Google My Business", "Technical SEO", "Analytics Setup"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-map-marker-alt",
            title: "Kochi Market Expertise",
            description: "Understanding of Kochi's business environment, from Infopark startups to Marine Drive enterprises and local retail markets"
        },
        {
            icon: "fas fa-handshake",
            title: "Direct Communication",
            description: "Personal service with online meetings, WhatsApp support, and flexible collaboration for Kochi businesses without overhead costs"
        },
        {
            icon: "fas fa-clock",
            title: "Fast Delivery",
            description: "Quick turnaround - basic websites in 1-2 weeks, custom apps in 6-10 weeks, perfect for Kochi's fast-paced business needs"
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Transparent Pricing",
            description: "Affordable rates starting ₹3,000 for websites, ₹4,000 for WordPress, ₹10,000 for apps - no hidden charges for Kochi clients"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "E-commerce Platform - Kochi Retailer",
            description: "Modern online store for Kochi-based fashion retailer with Razorpay integration, inventory management, and local delivery options for Ernakulam",
            tech: ["React", "Node.js", "MongoDB", "Razorpay API"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Service App - Kochi Startup",
            description: "Flutter mobile app for Infopark-based service startup featuring real-time booking, location tracking, and customer reviews system",
            tech: ["Flutter", "Firebase", "Google Maps", "Push Notifications"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Platform - Ernakulam",
            description: "Learning management system for Kochi educational institution with video lessons, student progress tracking, and online assessments",
            tech: ["Next.js", "Node.js", "Video Integration", "Analytics"]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="Kochi"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Expert web developer and Flutter app developer serving Kochi and Ernakulam district. With 3+ years of experience, I help businesses in Kochi's commercial hubs including Infopark, Kakkanad, Marine Drive, and MG Road with custom website development, mobile applications, and e-commerce solutions. From startups to established businesses, delivering quality digital solutions with affordable pricing starting from ₹3,000 for basic websites. Specialized in serving Kochi's thriving IT sector, retail businesses, and service industries with modern web technologies like React, Next.js, Flutter, and WordPress."
            />
        </>
    );
}
