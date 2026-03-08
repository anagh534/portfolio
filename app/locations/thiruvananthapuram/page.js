export const metadata = {
    title: "Web Developer Thiruvananthapuram | Flutter App Development Trivandrum | MERN Stack Developer - Anagh K R",
    description: "Web & Flutter app development in Thiruvananthapuram/Trivandrum. Government solutions, enterprise development & mobile apps in Kerala's capital.",
    keywords: "web developer Thiruvananthapuram, Flutter developer Trivandrum, app development Thiruvananthapuram, government web solutions Kerala, MERN stack developer Trivandrum, React developer Thiruvananthapuram, educational platform development, enterprise web development, Technopark developer, mobile app development capital city",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/thiruvananthapuram",
    ogTitle: "Web Developer Thiruvananthapuram | Flutter App Development Trivandrum",
    ogDescription: "Professional web development and Flutter app development services in Thiruvananthapuram. Specialized in government projects and enterprise solutions.",
    ogUrl: "https://www.anaghkr.in/locations/thiruvananthapuram",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ANAGH K R - Web Developer & App Developer Thiruvananthapuram",
    "description": "Professional web development and Flutter app development services in Thiruvananthapuram (Trivandrum). Specialized in government projects, educational platforms, and enterprise solutions with focus on security and compliance.",
    "url": "https://www.anaghkr.in/locations/thiruvananthapuram",
    "telephone": "+91-8075541805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thiruvananthapuram",
        "addressRegion": "Kerala",
        "postalCode": "695001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "8.5241",
        "longitude": "76.9366"
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Thiruvananthapuram"
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
                    "name": "Government Web Solutions",
                    "description": "Specialized web portals and applications for government departments"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Educational Platforms",
                    "description": "E-learning systems and educational portals"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Development",
                    "description": "Large-scale web applications and enterprise solutions"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Cross-platform mobile applications using Flutter"
                }
            }
        ]
    }
};

export default function ThiruvananthapuramServices() {
    const cityHighlights = [
        {
            icon: "fas fa-university",
            title: "Capital City",
            description: "Kerala's administrative capital with Secretariat, government departments, and major institutions requiring digital solutions"
        },
        {
            icon: "fas fa-satellite-dish",
            title: "Technopark IT Hub",
            description: "India's first IT park with 450+ companies including TCS, Infosys, and startups requiring development services"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Education Center",
            description: "University of Kerala, IIT, medical colleges, and research institutions needing educational platforms"
        },
        {
            icon: "fas fa-globe",
            title: "International Gateway",
            description: "International airport connecting global businesses, expat entrepreneurs, and tourism sector digital needs"
        }
    ];

    const services = [
        {
            icon: "fas fa-landmark",
            title: "Government Web Solutions",
            description: "Specialized web portals and applications for government departments in the Secretariat and state administration. I develop citizen service portals with secure authentication, compliance with government IT standards, and accessibility features for public services. Services include integration with State Data Center, Aadhaar authentication, payment gateways for government fees, and multi-language support for Malayalam and English interfaces serving Kerala's administrative capital.",
            features: ["Secure Development", "Compliance Standards", "Accessibility Features", "Multi-language Support"]
        },
        {
            icon: "fas fa-school",
            title: "Educational Platforms",
            description: "E-learning systems and educational portals for universities, colleges, and institutions throughout Trivandrum. I build comprehensive learning management systems for University of Kerala affiliated colleges, student portals with online examination systems, virtual classroom platforms with video conferencing, and digital library solutions. Includes attendance tracking, grade management, course material delivery, and parent-teacher communication portals for schools and coaching centers in Trivandrum.",
            features: ["LMS Development", "Student Portals", "Online Assessment", "Virtual Classrooms"]
        },
        {
            icon: "fas fa-building",
            title: "Enterprise Development",
            description: "Large-scale web applications and enterprise solutions for corporations at Technopark and business districts. I develop ERP systems, CRM platforms, HR management software, inventory systems, and custom business applications with scalable architecture. Services include integration with existing enterprise systems, API development for third-party services, cloud deployment on AWS/Azure, and performance optimization for high-traffic applications serving Technopark IT companies and large organizations.",
            features: ["Scalable Architecture", "Enterprise Integration", "Security Features", "Performance Optimization"]
        },
        {
            icon: "fab fa-flutter",
            title: "Mobile App Development",
            description: "Cross-platform mobile applications using Flutter for government departments, educational institutions, and enterprises in Trivandrum. I develop citizen service apps for government initiatives, mobile learning apps for schools and universities, employee productivity apps for Technopark companies, and tourism apps showcasing Kerala's capital. All apps include offline functionality, push notifications, secure authentication, and integration with web portals and backend systems.",
            features: ["Government Apps", "Enterprise Mobility", "Citizen Services", "Employee Apps"]
        },
        {
            icon: "fas fa-cogs",
            title: "Custom Software Solutions",
            description: "Tailored software development for specific business requirements in healthcare, tourism, and administrative sectors. I build hospital management systems for medical colleges and healthcare facilities, tourism booking platforms for travel agencies at Kovalam and city hotels, document management systems for government offices, and workflow automation tools. Services include system integration with legacy software, RESTful API development, cloud hosting solutions, and custom reporting dashboards for data-driven decision making.",
            features: ["Custom Development", "System Integration", "API Development", "Cloud Solutions"]
        },
        {
            icon: "fas fa-chart-line",
            title: "Digital Transformation",
            description: "Complete digital transformation services for government departments, educational institutions, and businesses transitioning to digital operations. I help organizations implement paperless offices, automate manual processes, adopt cloud technologies, and digitize services for citizens and customers. Services include digital strategy consulting, technology assessment, process mapping and automation, staff training, and ongoing support to ensure successful adoption of digital solutions across Kerala's administrative capital.",
            features: ["Process Automation", "Digital Strategy", "Technology Consulting", "Change Management"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-shield-alt",
            title: "Security Focus",
            description: "Specialized in secure development practices for government and enterprise projects with encryption, secure authentication, and compliance with India's data protection standards for handling sensitive citizen and business data"
        },
        {
            icon: "fas fa-users",
            title: "Enterprise Experience",
            description: "3+ years of experience working with large organizations, government departments, and Technopark IT companies handling complex requirements, scalable architectures, and mission-critical applications"
        },
        {
            icon: "fas fa-certificate",
            title: "Affordable Pricing",
            description: "Transparent pricing starting from ₹3,000 for basic websites, ₹4,000+ for WordPress solutions, and ₹10,000+ for mobile apps. Custom quotes for government projects and enterprise applications based on requirements"
        },
        {
            icon: "fas fa-headset",
            title: "Professional Support",
            description: "Dedicated support for mission-critical applications in government, healthcare, and education sectors with 48-hour response time, regular updates, and maintenance services for ongoing digital operations"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-vote-yea",
            title: "Government Portal",
            description: "Citizen services portal for state department at Secretariat with secure authentication, online application submissions, document verification, and payment integration for government fees and services",
            tech: ["React", "Node.js", "PostgreSQL", "JWT Security", "Aadhaar API"]
        },
        {
            icon: "fas fa-chalkboard-teacher",
            title: "Educational Platform",
            description: "Comprehensive LMS for University of Kerala affiliated college with 2000+ students, featuring online classes, assignment submissions, grade management, and parent portal system",
            tech: ["React", "Express", "MongoDB", "Video Streaming", "WebRTC"]
        },
        {
            icon: "fas fa-hospital",
            title: "Healthcare System",
            description: "Hospital management system for medical college in Trivandrum with patient portal, appointment booking, electronic health records, pharmacy management, and lab integration for 500+ daily patients",
            tech: ["Flutter", "Node.js", "MySQL", "Real-time Updates", "FHIR Standards"]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="Thiruvananthapuram"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="Expert web development and mobile app development services in Thiruvananthapuram (Trivandrum), Kerala's administrative capital and IT hub. With 3+ years of professional experience, I specialize in government web solutions for state departments at the Secretariat, educational platforms for University of Kerala institutions, and enterprise applications for 450+ companies at Technopark. Services include secure government portals with Aadhaar integration, comprehensive learning management systems for colleges and schools, hospital management systems for medical institutions, and cross-platform mobile apps using Flutter. I work with MERN stack (MongoDB, Express.js, React, Node.js), WordPress for content-heavy sites, and modern technologies to deliver scalable, secure solutions. Whether you need a citizen service portal, educational platform, healthcare system, or enterprise application, I provide transparent pricing starting from ₹3,000 for basic websites, ₹4,000+ for WordPress solutions, and ₹10,000+ for mobile apps. Serving government offices, Technopark companies, educational institutions, healthcare facilities, and businesses across Trivandrum with dedicated support and compliance-ready development practices."
            />
        </>
    );
}
