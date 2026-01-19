export const metadata = {
    title: "Web Developer Calicut | Flutter App Development Calicut | Malabar Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Calicut (Kozhikode). Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for Malabar region businesses.",
    keywords: "web developer Calicut, Flutter developer Calicut, app development Calicut, website design Calicut, Calicut web services, Malabar web developer, responsive web design, mobile app development, e-commerce solutions, digital marketing, business automation, MERN stack developer Calicut, React developer Calicut, Node.js developer Calicut, professional web developer Calicut, custom website development Calicut",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/calicut",
    ogTitle: "Web Developer Calicut | Flutter App Development Calicut",
    ogDescription: "Expert web development and Flutter app development services in Calicut (Kozhikode). Comprehensive digital solutions for Malabar region businesses.",
    ogUrl: "https://www.anaghkr.in/locations/calicut",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

export default function CalicutServices() {
    const cityHighlights = [
        {
            icon: "fas fa-map",
            title: "Malabar Hub",
            description: "Central location in Malabar region with strategic business importance"
        },
        {
            icon: "fas fa-ship",
            title: "Commercial Port",
            description: "Major trading center with diverse business opportunities"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Center",
            description: "Home to prestigious institutions and educational organizations"
        },
        {
            icon: "fas fa-handshake",
            title: "Cultural Commerce",
            description: "Rich cultural heritage with modern business integration"
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
            icon: "fas fa-globe",
            title: "Regional Expertise",
            description: "Deep understanding of Malabar region business culture and requirements"
        },
        {
            icon: "fas fa-comments",
            title: "Multilingual Support",
            description: "Support in Malayalam, Arabic, and English for diverse client base"
        },
        {
            icon: "fas fa-truck",
            title: "Trade Solutions",
            description: "Specialized solutions for trading and commercial businesses"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Tech",
            description: "Custom solutions for educational institutions and learning platforms"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Trading Platform",
            description: "B2B trading platform for Calicut spice and commodity traders",
            tech: ["React", "Node.js", "Trading System", "Multi-language"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational App",
            description: "E-learning mobile app for educational institutions in Malabar region",
            tech: ["Flutter", "Firebase", "Video Streaming", "Progress Tracking"]
        },
        {
            icon: "fas fa-utensils",
            title: "Restaurant Chain",
            description: "Multi-location restaurant management system with online ordering",
            tech: ["React", "POS Integration", "Online Ordering", "Kitchen Display"]
        }
    ];

    return (
        <LocationTemplate
            cityName="Calicut"
            cityHighlights={cityHighlights}
            services={services}
            benefits={benefits}
            portfolio={portfolio}
            description="Expert web development and Flutter app development services in Calicut (Kozhikode). Comprehensive digital solutions for Malabar region businesses, trading companies, and educational institutions with cultural sensitivity and regional expertise."
        />
    );
}
