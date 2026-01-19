export const metadata = {
    title: "Web Developer Thrissur | Flutter App Development Thrissur | Cultural Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Thrissur. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for cultural and festival city businesses.",
    keywords: "web developer Thrissur, Flutter developer Thrissur, app development Thrissur, website design Thrissur, Thrissur web services, cultural web developer, responsive web design, mobile app development, e-commerce solutions, digital marketing, business automation, MERN stack developer Thrissur, React developer Thrissur, Node.js developer Thrissur, professional web developer Thrissur, custom website development Thrissur",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/thrissur",
    ogTitle: "Web Developer Thrissur | Flutter App Development Thrissur",
    ogDescription: "Expert web development and Flutter app development services in Thrissur. Comprehensive digital solutions for cultural and festival city businesses.",
    ogUrl: "https://www.anaghkr.in/locations/thrissur",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

export default function ThrissurServices() {
    const cityHighlights = [
        {
            icon: "fas fa-crown",
            title: "Cultural Capital",
            description: "Kerala's cultural capital with rich arts, music, and dance traditions"
        },
        {
            icon: "fas fa-drum",
            title: "Festival Hub",
            description: "Famous for Thrissur Pooram and numerous cultural festivals throughout the year"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Center",
            description: "Home to prestigious educational institutions and research centers"
        },
        {
            icon: "fas fa-building",
            title: "Commercial Hub",
            description: "Growing commercial center with diverse business opportunities"
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
            icon: "fas fa-palette",
            title: "Cultural Solutions",
            description: "Specialized solutions for cultural organizations and festival management"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Platforms",
            description: "Custom platforms for educational institutions and learning management"
        },
        {
            icon: "fas fa-calendar-alt",
            title: "Event Management",
            description: "Digital solutions for festival and event management systems"
        },
        {
            icon: "fas fa-music",
            title: "Arts Promotion",
            description: "Platforms for promoting arts, music, and cultural heritage"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-calendar",
            title: "Festival Management",
            description: "Comprehensive festival management system for Thrissur cultural events",
            tech: ["React", "Node.js", "Event Scheduling", "Participant Management"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "College Portal",
            description: "Educational management system for prestigious institutions in Thrissur",
            tech: ["Flutter", "Firebase", "Student Portal", "Academic Management"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "Cultural Store",
            description: "E-commerce platform for traditional crafts and cultural products",
            tech: ["React", "Product Catalog", "Cultural Heritage", "Artisan Portal"]
        }
    ];

    return (
        <LocationTemplate
            cityName="Thrissur"
            cityHighlights={cityHighlights}
            services={services}
            benefits={benefits}
            portfolio={portfolio}
            description="Expert web development and Flutter app development services in Thrissur. Comprehensive digital solutions for cultural organizations, educational institutions, and festival management with focus on preserving cultural heritage through technology."
        />
    );
}
