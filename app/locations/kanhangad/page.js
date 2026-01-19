export const metadata = {
    title: "Web Developer Kanhangad | Flutter App Development Kanhangad | Local Business Solutions - Anagh K R",
    description: "Local web development and mobile app development services in Kanhangad. Offering custom digital solutions, responsive websites, and mobile applications for local businesses and startups.",
    keywords: "web developer Kanhangad, Flutter developer Kanhangad, app development Kanhangad, website design Kanhangad, Kanhangad web services, local digital solutions, responsive websites, mobile applications, startup solutions, business websites, custom development, regional services, local business focus, MERN stack developer Kanhangad, React developer Kanhangad, Node.js developer Kanhangad, professional web developer Kanhangad",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kanhangad",
    ogTitle: "Web Developer Kanhangad | Flutter App Development Kanhangad",
    ogDescription: "Local web development and mobile app development services in Kanhangad. Custom digital solutions for local businesses and startups.",
    ogUrl: "https://www.anaghkr.in/locations/kanhangad",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

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
        <LocationTemplate
            cityName="Kanhangad"
            cityHighlights={cityHighlights}
            services={services}
            benefits={benefits}
            portfolio={portfolio}
            description="Local web development and mobile app development services in Kanhangad. Offering custom digital solutions, responsive websites, and mobile applications for local businesses and startups."
        />
    );
}
