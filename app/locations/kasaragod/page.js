export const metadata = {
    title: "Web Developer Kasaragod | Flutter App Development Kasaragod | Local Digital Solutions - Anagh K R",
    description: "Local web development and Flutter app development services in Kasaragod. Personalized digital solutions, custom websites, mobile applications, and e-commerce platforms for businesses in the northernmost district of Kerala.",
    keywords: "web developer Kasaragod, Flutter developer Kasaragod, app development Kasaragod, website design Kasaragod, Kasaragod web services, mobile app development Kasaragod, local digital solutions, custom mobile apps, e-commerce development, local business websites, digital marketing Kasaragod, multilingual solutions, personalized web development, MERN stack developer Kasaragod, React developer Kasaragod, Node.js developer Kasaragod",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kasaragod",
    ogTitle: "Web Developer Kasaragod | Flutter App Development Kasaragod",
    ogDescription: "Local web development and Flutter app development services in Kasaragod. Personalized digital solutions for businesses in Kerala's northernmost district.",
    ogUrl: "https://www.anaghkr.in/locations/kasaragod",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

export default function KasaragodServices() {
    const cityHighlights = [
        {
            icon: "fas fa-home",
            title: "Local Expertise",
            description: "Deep understanding of local business culture and community needs"
        },
        {
            icon: "fas fa-language",
            title: "Multilingual Solutions",
            description: "Support for Malayalam, Tulu, Kannada, and English languages"
        },
        {
            icon: "fas fa-user-friends",
            title: "Personalized Service",
            description: "Direct communication and customized solutions for each client"
        },
        {
            icon: "fas fa-map-pin",
            title: "Border District",
            description: "Strategic location connecting Kerala and Karnataka markets"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Personalized Web Solutions",
            description: "Custom websites designed specifically for local businesses with personal attention",
            features: ["Custom Design", "Local SEO", "Personal Consultation", "Ongoing Support"]
        },
        {
            icon: "fab fa-flutter",
            title: "Custom Mobile Apps",
            description: "Tailored mobile applications for local businesses and service providers",
            features: ["Flutter Development", "Local Features", "Offline Support", "Push Notifications"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Development",
            description: "Online stores for local retailers to expand their customer reach",
            features: ["Local Payment Options", "Inventory Management", "Customer Support", "Multi-language"]
        },
        {
            icon: "fas fa-store",
            title: "Local Business Websites",
            description: "Professional websites for local services, shops, and professionals",
            features: ["Business Listings", "Contact Forms", "Gallery Showcase", "Google Integration"]
        },
        {
            icon: "fas fa-bullhorn",
            title: "Digital Marketing",
            description: "Local digital marketing strategies to reach Kasaragod customers",
            features: ["Local SEO", "Social Media", "Google My Business", "Community Engagement"]
        },
        {
            icon: "fas fa-globe",
            title: "Multilingual Solutions",
            description: "Websites and apps supporting multiple regional languages",
            features: ["Malayalam Support", "Tulu Integration", "Kannada Content", "English Version"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-heart",
            title: "Community Connection",
            description: "Strong ties with local business community and understanding of regional needs"
        },
        {
            icon: "fas fa-handshake",
            title: "Personal Relationships",
            description: "Building long-term partnerships with local businesses and entrepreneurs"
        },
        {
            icon: "fas fa-clock",
            title: "Quick Response",
            description: "Immediate support and quick turnaround for urgent business requirements"
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Local Pricing",
            description: "Affordable rates designed for local market with flexible payment options"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-clinic-medical",
            title: "Healthcare Center Website",
            description: "Professional website for local healthcare center with appointment booking",
            tech: ["React", "Appointment System", "Multilingual", "Mobile Responsive"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational App",
            description: "Learning app for local educational institution with offline content",
            tech: ["Flutter", "Offline Support", "Progress Tracking", "Local Language"]
        },
        {
            icon: "fas fa-utensils",
            title: "Restaurant Platform",
            description: "Online ordering system for popular local restaurant chain",
            tech: ["React", "Order Management", "Payment Gateway", "Delivery Tracking"]
        }
    ];

    return (
        <LocationTemplate
            cityName="Kasaragod"
            cityHighlights={cityHighlights}
            services={services}
            benefits={benefits}
            portfolio={portfolio}
            description="Local web development and Flutter app development services in Kasaragod. Offering personalized digital solutions with deep understanding of local business culture and community needs in Kerala's northernmost district."
        />
    );
}
