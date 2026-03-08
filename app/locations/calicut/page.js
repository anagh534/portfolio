export const metadata = {
    title: "Web Developer Calicut | Flutter App Development - ANAGH K R",
    description: "Expert web & Flutter app developer in Calicut/Kozhikode. Custom websites, mobile apps & MERN stack solutions from ₹3,000. 3+ years experience.",
    keywords: "web developer Calicut, Flutter developer Calicut, app development Kozhikode, website development Calicut, MERN stack developer Calicut, mobile app Calicut, e-commerce Calicut, web design Kozhikode, WordPress developer Calicut, React developer Calicut",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/calicut",
    ogTitle: "Professional Web Developer & App Developer in Calicut, Kozhikode",
    ogDescription: "Expert web development and Flutter mobile app services for Calicut businesses. Custom solutions with 3+ years experience in Malabar region.",
    ogUrl: "https://www.anaghkr.in/locations/calicut",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ANAGH K R - Web Developer & App Developer Calicut",
    "description": "Expert web development and Flutter app development services in Calicut (Kozhikode). Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for Malabar region businesses.",
    "url": "https://www.anaghkr.in/locations/calicut",
    "telephone": "+91-8075541805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calicut",
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
        {
            "@type": "City",
            "name": "Calicut"
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
                    "description": "Mobile-first websites for Malabar businesses"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Trade Solutions",
                    "description": "Digital platforms for trading and commercial businesses"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Educational Tech",
                    "description": "Solutions for educational institutions"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Flutter apps with multilingual support"
                }
            }
        ]
    }
};

export default function CalicutServices() {
    const cityHighlights = [
        {
            icon: "fas fa-map",
            title: "Malabar Business Hub",
            description: "Major commercial center of North Kerala with growing retail, trade, and service industries"
        },
        {
            icon: "fas fa-ship",
            title: "Trade & Commerce",
            description: "Important trading city with strong spice trade heritage and modern business opportunities"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Excellence",
            description: "Home to top institutions including IIM, NIT generating demand for educational tech solutions"
        },
        {
            icon: "fas fa-handshake",
            title: "Digital Adoption",
            description: "Calicut businesses rapidly embracing e-commerce and digital solutions for growth"
        }
    ];

    const services = [
        {
            icon: "fas fa-mobile-alt",
            title: "Responsive Web Design",
            description: "Mobile-first websites for Calicut businesses in retail, healthcare, education, and services. Optimized for all devices with fast loading and SEO-friendly structure for better Google rankings in Kozhikode.",
            features: ["Mobile-First Design", "Local SEO Optimized", "Fast Loading", "Cross-Browser Compatible"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Professional Flutter apps for iOS and Android serving Calicut's growing startup scene. Perfect for delivery services, booking platforms, and business automation with real-time features and Malayalam language support.",
            features: ["iOS & Android", "Cross-Platform", "Malayalam Support", "Offline Capability"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Solutions",
            description: "Complete online stores for Calicut retailers and spice traders. Razorpay/Stripe integration, inventory management, and WhatsApp notifications popular with Malabar businesses for seamless online selling.",
            features: ["Payment Integration", "Inventory System", "WhatsApp Alerts", "Order Tracking"]
        },
        {
            icon: "fas fa-chart-line",
            title: "Local SEO Services",
            description: "Help Calicut businesses rank better in Google searches for local keywords. Google My Business optimization, local directory listings, and technical SEO for increased visibility in Kozhikode market.",
            features: ["Google My Business", "Local Citations", "Technical SEO", "Analytics Setup"]
        },
        {
            icon: "fas fa-cogs",
            title: "Business Automation",
            description: "Custom solutions for Calicut businesses to automate workflows, manage customer data, and integrate multiple systems. Perfect for trading firms, educational institutions, and service providers.",
            features: ["Workflow Automation", "CRM Integration", "Custom Dashboards", "API Development"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Scalable web applications for Calicut startups and tech companies using MongoDB, Express, React, and Node.js. Ideal for SaaS platforms, booking systems, and data-driven business applications.",
            features: ["React Frontend", "Node.js Backend", "MongoDB Database", "RESTful APIs"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-globe",
            title: "Malabar Market Knowledge",
            description: "Understanding Calicut's business culture, from traditional spice traders to modern startups, healthcare providers, and educational institutions"
        },
        {
            icon: "fas fa-comments",
            title: "Multilingual Capability",
            description: "Websites and apps with Malayalam, Arabic, and English support - perfect for Calicut's diverse business community and customer base"
        },
        {
            icon: "fas fa-truck",
            title: "Trade-Focused Solutions",
            description: "Specialized experience with trading platforms, inventory systems, and B2B solutions tailored for Calicut's commercial businesses"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Technology",
            description: "Custom learning platforms, student management systems, and educational apps for Kozhikode's prestigious institutions and coaching centers"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Spice Trading Platform - Calicut",
            description: "B2B trading platform for Calicut-based spice traders with multi-currency support, inventory tracking, and buyer-seller messaging system",
            tech: ["React", "Node.js", "Real-time Chat", "Multi-language"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "E-Learning App - Kozhikode",
            description: "Mobile learning app for Calicut educational institution with video lessons, quizzes, Malayalam content support, and student progress analytics",
            tech: ["Flutter", "Firebase", "Video Integration", "Offline Mode"]
        },
        {
            icon: "fas fa-utensils",
            title: "Restaurant Management - Malabar",
            description: "Multi-location restaurant system for Calicut restaurant chain with POS integration, online ordering, kitchen management, and delivery tracking",
            tech: ["React", "POS System", "Online Orders", "Analytics"]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="Calicut"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Professional web developer and Flutter app developer serving Calicut (Kozhikode) and Malabar region with 3+ years of experience. Specializing in custom website development, mobile applications, e-commerce platforms, and trading solutions for Calicut businesses. From traditional spice traders to modern startups, healthcare providers, and educational institutions across Kozhikode - delivering quality digital solutions with multilingual support in Malayalam, Arabic, and English. Affordable pricing starting from ₹3,000 for websites, ₹4,000 for WordPress, and ₹10,000 for mobile apps. Expert in React, Next.js, Flutter, WordPress, and MERN stack development tailored for Malabar region's unique business needs."
            />
        </>
    );
}
