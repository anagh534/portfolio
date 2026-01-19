export const metadata = {
    title: "Web Developer Kannur | Flutter App Development Kannur | Coastal Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Kannur. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for coastal and handloom businesses.",
    keywords: "web developer Kannur, Flutter developer Kannur, app development Kannur, website design Kannur, Kannur web services, coastal web developer, responsive web design, mobile app development, e-commerce solutions, digital marketing, business automation, MERN stack developer Kannur, React developer Kannur, Node.js developer Kannur, professional web developer Kannur, custom website development Kannur",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kannur",
    ogTitle: "Web Developer Kannur | Flutter App Development Kannur",
    ogDescription: "Expert web development and Flutter app development services in Kannur. Comprehensive digital solutions for coastal and handloom businesses.",
    ogUrl: "https://www.anaghkr.in/locations/kannur",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

export default function KannurServices() {
    const cityHighlights = [
        {
            icon: "fas fa-water",
            title: "Coastal Heritage",
            description: "Rich coastal culture with traditional business practices and modern opportunities"
        },
        {
            icon: "fas fa-industry",
            title: "Handloom Industry",
            description: "Traditional handloom and textile industry hub with global market reach"
        },
        {
            icon: "fas fa-ship",
            title: "Port Connectivity",
            description: "Strategic port location with excellent connectivity for trade and commerce"
        },
        {
            icon: "fas fa-leaf",
            title: "Spice Trade",
            description: "Historical spice trading center with modern export business opportunities"
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
        <LocationTemplate
            cityName="Kannur"
            cityHighlights={cityHighlights}
            services={services}
            benefits={benefits}
            portfolio={portfolio}
            description="Expert web development and Flutter app development services in Kannur. Comprehensive digital solutions for coastal businesses, handloom industry, and traditional traders with modern technology integration and cultural heritage preservation."
        />
    );
}
