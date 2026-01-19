export const metadata = {
    title: "Web Developer Palakkad | Flutter App Development Palakkad | Agricultural Tech Solutions - Anagh K R",
    description: "Expert web development and Flutter app development services in Palakkad. Specializing in agricultural websites, educational platforms, and business solutions for the gateway of Kerala.",
    keywords: "web developer Palakkad, Flutter developer Palakkad, app development Palakkad, website design Palakkad, Palakkad web services, agricultural platforms, educational websites, business solutions, mobile development, rural tech solutions, gateway of Kerala web development, agricultural hub solutions, educational center websites, MERN stack developer Palakkad, React developer Palakkad, Node.js developer Palakkad",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/palakkad",
    ogTitle: "Web Developer Palakkad | Flutter App Development Palakkad",
    ogDescription: "Expert web development and Flutter app development services in Palakkad. Specialized in agricultural and educational platform solutions.",
    ogUrl: "https://www.anaghkr.in/locations/palakkad",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

export default function PalakkadServices() {
    const cityHighlights = [
        {
            icon: "fas fa-tractor",
            title: "Agricultural Hub",
            description: "Kerala's agricultural center with specialized farming technology needs"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Center",
            description: "Home to numerous educational institutions requiring digital solutions"
        },
        {
            icon: "fas fa-mountain",
            title: "Gateway to Kerala",
            description: "Strategic location connecting Kerala with neighboring states"
        },
        {
            icon: "fas fa-industry",
            title: "Industrial Growth",
            description: "Emerging industrial sector with expanding digital requirements"
        }
    ];

    const services = [
        {
            icon: "fas fa-leaf",
            title: "Agricultural Platforms",
            description: "Digital solutions for farms, agri-businesses, and food processing units",
            features: ["Farm Management", "Supply Chain", "Quality Control", "Market Connection"]
        },
        {
            icon: "fas fa-school",
            title: "Educational Websites",
            description: "Digital platforms for schools, colleges, and educational institutions",
            features: ["Learning Management", "Student Portal", "Admission Systems", "Digital Library"]
        },
        {
            icon: "fas fa-store",
            title: "Business Solutions",
            description: "Comprehensive digital solutions for local businesses and enterprises",
            features: ["Business Automation", "Customer Portals", "Inventory Systems", "Reporting Tools"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications for various industries",
            features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Deployment"]
        },
        {
            icon: "fas fa-seedling",
            title: "Rural Tech Solutions",
            description: "Specialized technology solutions for rural businesses and communities",
            features: ["Low Bandwidth", "Offline Capability", "Local Language", "Simple Interface"]
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
            icon: "fas fa-truck-loading",
            title: "Agricultural Expertise",
            description: "Specialized knowledge in developing solutions for agricultural businesses"
        },
        {
            icon: "fas fa-book",
            title: "Educational Focus",
            description: "Experience in creating platforms for various educational institutions"
        },
        {
            icon: "fas fa-hand-holding-heart",
            title: "Rural Understanding",
            description: "Deep understanding of rural business needs and challenges"
        },
        {
            icon: "fas fa-language",
            title: "Local Adaptability",
            description: "Solutions that adapt to local language and cultural requirements"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-wheat-awn",
            title: "Farm Management System",
            description: "Comprehensive platform for a large paddy farm in Palakkad",
            tech: ["React", "Node.js", "Weather API", "Crop Management"]
        },
        {
            icon: "fas fa-university",
            title: "College Portal",
            description: "Digital campus solution for a prominent educational institution",
            tech: ["MERN Stack", "Student Portal", "Faculty Dashboard", "Online Learning"]
        },
        {
            icon: "fas fa-box",
            title: "Agri-Product Marketplace",
            description: "E-commerce platform connecting local farmers with buyers",
            tech: ["Flutter", "Firebase", "Payment Gateway", "Logistics Integration"]
        }
    ];

    return (
        <LocationTemplate
            cityName="Palakkad"
            cityHighlights={cityHighlights}
            services={services}
            benefits={benefits}
            portfolio={portfolio}
            description="Expert web development and Flutter app development services in Palakkad. Specializing in agricultural websites, educational platforms, and business solutions for the gateway of Kerala."
        />
    );
}
