export const metadata = {
    title: "Web Developer Thiruvananthapuram | Flutter App Development Trivandrum | MERN Stack Developer - Anagh K R",
    description: "Professional web development and Flutter app development services in Thiruvananthapuram (Trivandrum). Government web solutions, educational platforms, enterprise development, and mobile app development services in Kerala's capital city.",
    keywords: "web developer Thiruvananthapuram, Flutter developer Trivandrum, app development Thiruvananthapuram, website design Trivandrum, Thiruvananthapuram web development services, mobile app development Trivandrum, government web solutions, educational platforms, enterprise development, MERN stack developer Thiruvananthapuram, React developer Trivandrum, Node.js developer Thiruvananthapuram, professional web developer Trivandrum, best web developer Thiruvananthapuram, custom website development Trivandrum, IT hub web development",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/thiruvananthapuram",
    ogTitle: "Web Developer Thiruvananthapuram | Flutter App Development Trivandrum",
    ogDescription: "Professional web development and Flutter app development services in Thiruvananthapuram. Specialized in government projects and enterprise solutions.",
    ogUrl: "https://www.anaghkr.in/locations/thiruvananthapuram",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

export default function ThiruvananthapuramServices() {
    const cityHighlights = [
        {
            icon: "fas fa-university",
            title: "Capital City",
            description: "Kerala's administrative capital with government institutions"
        },
        {
            icon: "fas fa-satellite-dish",
            title: "IT Hub",
            description: "Major technology park and IT companies headquarters"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Education Center",
            description: "Premier educational institutions and research centers"
        },
        {
            icon: "fas fa-globe",
            title: "International Gateway",
            description: "International airport and global business connections"
        }
    ];

    const services = [
        {
            icon: "fas fa-landmark",
            title: "Government Web Solutions",
            description: "Specialized web portals and applications for government departments and public services",
            features: ["Secure Development", "Compliance Standards", "Accessibility Features", "Multi-language Support"]
        },
        {
            icon: "fas fa-school",
            title: "Educational Platforms",
            description: "E-learning systems and educational portals for institutions and training centers",
            features: ["LMS Development", "Student Portals", "Online Assessment", "Virtual Classrooms"]
        },
        {
            icon: "fas fa-building",
            title: "Enterprise Development",
            description: "Large-scale web applications and enterprise solutions for corporations",
            features: ["Scalable Architecture", "Enterprise Integration", "Security Features", "Performance Optimization"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Cross-platform mobile applications for government and enterprise use",
            features: ["Government Apps", "Enterprise Mobility", "Citizen Services", "Employee Apps"]
        },
        {
            icon: "fas fa-cogs",
            title: "Custom Software Solutions",
            description: "Tailored software development for specific business requirements",
            features: ["Custom Development", "System Integration", "API Development", "Cloud Solutions"]
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Transformation",
            description: "Complete digital transformation services for organizations",
            features: ["Process Automation", "Digital Strategy", "Technology Consulting", "Change Management"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-shield-alt",
            title: "Security Focus",
            description: "Specialized in secure development practices for government and enterprise projects"
        },
        {
            icon: "fas fa-users",
            title: "Enterprise Experience",
            description: "Experience working with large organizations and complex requirements"
        },
        {
            icon: "fas fa-certificate",
            title: "Compliance Ready",
            description: "Understanding of government standards and compliance requirements"
        },
        {
            icon: "fas fa-headset",
            title: "Professional Support",
            description: "Dedicated support for mission-critical applications and systems"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-vote-yea",
            title: "Government Portal",
            description: "Citizen services portal for state department with secure authentication",
            tech: ["React", "Node.js", "PostgreSQL", "JWT Security"]
        },
        {
            icon: "fas fa-chalkboard-teacher",
            title: "Educational Platform",
            description: "Comprehensive LMS for premier educational institution in Trivandrum",
            tech: ["React", "Express", "MongoDB", "Video Streaming"]
        },
        {
            icon: "fas fa-hospital",
            title: "Healthcare System",
            description: "Hospital management system with patient portal and appointment booking",
            tech: ["Flutter", "Node.js", "MySQL", "Real-time Updates"]
        }
    ];

    return (
        <LocationTemplate
            cityName="Thiruvananthapuram"
            cityHighlights={cityHighlights}
            services={services}
            benefits={benefits}
            portfolio={portfolio}
            description="Expert web development and mobile app development services in Thiruvananthapuram, Kerala's capital city. Specialized in government projects, educational platforms, and enterprise solutions with focus on security and compliance."
        />
    );
}
