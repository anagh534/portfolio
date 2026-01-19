export const metadata = {
    title: "Web Developer Kozhikode | Flutter App Development Calicut | MERN Stack Developer - Anagh K R",
    description: "Professional web development and Flutter app development services in Kozhikode (Calicut). Modern website solutions, mobile applications, digital transformation services, and e-commerce platforms for businesses in Malabar region.",
    keywords: "web developer Kozhikode, Flutter developer Calicut, app development Kozhikode, website design Calicut, Kozhikode web services, mobile app development Calicut, modern website development, digital transformation, e-commerce platforms, business automation, MERN stack developer Kozhikode, React developer Calicut, Node.js developer Kozhikode, professional web developer Calicut, best web developer Kozhikode, custom website development Calicut, Malabar web development services",
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

export default function KozhikodeServices() {
    const cityHighlights = [
        {
            icon: "fas fa-mosque",
            title: "Cultural Center",
            description: "Rich cultural heritage and traditional business community"
        },
        {
            icon: "fas fa-industry",
            title: "Business Hub",
            description: "Major commercial center of Malabar region"
        },
        {
            icon: "fas fa-ship",
            title: "Export Industry",
            description: "International trade and export business connections"
        },
        {
            icon: "fas fa-laptop-code",
            title: "Modern Solutions",
            description: "Growing demand for digital transformation services"
        }
    ];

    const services = [
        {
            icon: "fas fa-desktop",
            title: "Modern Website Development",
            description: "Contemporary website solutions with latest technologies for Kozhikode businesses",
            features: ["Modern Design", "Fast Performance", "Mobile Responsive", "SEO Optimized"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Solutions",
            description: "Cross-platform mobile applications for business growth in Malabar region",
            features: ["Cross-Platform Apps", "Native Performance", "Business Solutions", "User-Friendly Design"]
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Transformation",
            description: "Complete digital transformation services for traditional businesses",
            features: ["Process Automation", "Digital Strategy", "Technology Upgrade", "Training & Support"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Platforms",
            description: "Online stores and e-commerce solutions for retailers and exporters",
            features: ["Online Store", "Payment Integration", "Inventory Management", "Export Features"]
        },
        {
            icon: "fas fa-cogs",
            title: "Business Automation",
            description: "Automated systems and workflows for improved business efficiency",
            features: ["Workflow Automation", "CRM Systems", "Inventory Control", "Report Generation"]
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
            icon: "fas fa-history",
            title: "Cultural Understanding",
            description: "Deep appreciation for local business culture and traditional practices"
        },
        {
            icon: "fas fa-globe",
            title: "Export Focus",
            description: "Experience in developing solutions for export-oriented businesses"
        },
        {
            icon: "fas fa-language",
            title: "Multi-language Support",
            description: "Websites and apps supporting Malayalam, Arabic, and English languages"
        },
        {
            icon: "fas fa-handshake",
            title: "Business Network",
            description: "Strong connections with local business community and trade associations"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "Export Business Portal",
            description: "Comprehensive business portal for spice exporters with international features",
            tech: ["React", "Node.js", "Multi-currency", "Export Documentation"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Restaurant App",
            description: "Food delivery app for popular Kozhikode restaurant chain",
            tech: ["Flutter", "Real-time Tracking", "Payment Gateway", "Multi-language"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Platform",
            description: "Online learning platform for Islamic educational institution",
            tech: ["React", "Video Streaming", "Arabic Support", "Progress Tracking"]
        }
    ];

    return (
        <LocationTemplate
            cityName="Kozhikode"
            cityHighlights={cityHighlights}
            services={services}
            benefits={benefits}
            portfolio={portfolio}
            description="Professional web development and Flutter app development services in Kozhikode (Calicut). Modern digital solutions for businesses in Malabar region with focus on export industry, cultural businesses, and digital transformation."
        />
    );
}
