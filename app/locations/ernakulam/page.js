export const metadata = {
    title: "Web Developer Ernakulam | Flutter App Development Ernakulam | Digital Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Ernakulam district. Comprehensive digital solutions including responsive websites, mobile apps, and e-commerce platforms for urban businesses.",
    keywords: "web developer Ernakulam, Flutter developer Ernakulam, app development Ernakulam, website design Ernakulam, Ernakulam web services, responsive web design, mobile app development, e-commerce solutions, digital marketing, business automation, MERN stack developer Ernakulam, React developer Ernakulam, Node.js developer Ernakulam, professional web developer Ernakulam, custom website development Ernakulam",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/ernakulam",
    ogTitle: "Web Developer Ernakulam | Flutter App Development Ernakulam",
    ogDescription: "Expert web development and Flutter app development services in Ernakulam district. Comprehensive digital solutions for urban businesses.",
    ogUrl: "https://www.anaghkr.in/locations/ernakulam",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

export default function ErnkulamServices() {
    const cityHighlights = [
        {
            icon: "fas fa-city",
            title: "Urban Center",
            description: "Major urban district with diverse business opportunities"
        },
        {
            icon: "fas fa-building",
            title: "Business District",
            description: "Corporate offices and business parks requiring modern solutions"
        },
        {
            icon: "fas fa-laptop-code",
            title: "Tech Companies",
            description: "Home to numerous IT companies and tech startups"
        },
        {
            icon: "fas fa-road",
            title: "Modern Infrastructure",
            description: "Well-developed infrastructure supporting digital businesses"
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
            icon: "fas fa-users",
            title: "Corporate Experience",
            description: "Extensive experience working with corporate clients and enterprise requirements"
        },
        {
            icon: "fas fa-rocket",
            title: "Scalable Solutions",
            description: "Building applications that scale with your business growth and expansion"
        },
        {
            icon: "fas fa-shield-alt",
            title: "Enterprise Security",
            description: "Implementation of robust security measures for business-critical applications"
        },
        {
            icon: "fas fa-headset",
            title: "Professional Support",
            description: "Dedicated technical support and maintenance for enterprise applications"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-building",
            title: "Corporate Website",
            description: "Professional corporate website for leading Ernakulam business group",
            tech: ["React", "Node.js", "Corporate Design", "CMS Integration"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Business App",
            description: "Enterprise mobile app for workforce management and communication",
            tech: ["Flutter", "Firebase", "Real-time Chat", "Employee Portal"]
        },
        {
            icon: "fas fa-shopping-bag",
            title: "E-commerce Platform",
            description: "Multi-vendor e-commerce platform for retail business network",
            tech: ["React", "Payment Gateway", "Multi-vendor", "Admin Dashboard"]
        }
    ];

    return (
        <LocationTemplate
            cityName="Ernakulam"
            cityHighlights={cityHighlights}
            services={services}
            benefits={benefits}
            portfolio={portfolio}
            description="Expert web development and Flutter app development services in Ernakulam district. Comprehensive digital solutions for urban businesses, corporate offices, and tech companies with focus on scalability and modern infrastructure."
        />
    );
}
