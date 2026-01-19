export const metadata = {
    title: "Web Developer Kochi | Flutter App Development Kochi | MERN Stack Developer Ernakulam - Anagh K R",
    description: "Professional web development and Flutter app development services in Kochi, Ernakulam. Custom website development, e-commerce solutions, mobile app development, and digital marketing services for businesses in Kochi.",
    keywords: "web developer Kochi, Flutter developer Kochi, app development Kochi, website design Kochi, Kochi web development services, mobile app development Kochi, e-commerce development Kochi, MERN stack developer Kochi, React developer Kochi, Node.js developer Kochi, responsive web design Kochi, WordPress development Kochi, Ernakulam web developer, Kochi website design company, custom website development Kochi, professional web developer Kochi, best web developer Kochi, affordable web development Kochi",
    author: "ANAGH K R",
    robots: "index, follow",
    canonical: "https://www.anaghkr.in/locations/kochi",
    ogTitle: "Web Developer Kochi | Flutter App Development Kochi | MERN Stack Developer",
    ogDescription: "Professional web development and Flutter app development services in Kochi, Ernakulam. Custom solutions for businesses in Kerala's commercial capital.",
    ogUrl: "https://www.anaghkr.in/locations/kochi",
    ogType: "website"
};

import LocationTemplate from '../../../components/locations/LocationTemplate';

export default function KochiServices() {
    const cityHighlights = [
        {
            icon: "fas fa-building",
            title: "Commercial Hub",
            description: "Kerala's business capital with thriving startups and enterprises"
        },
        {
            icon: "fas fa-ship",
            title: "Major Port",
            description: "International trade gateway requiring modern digital solutions"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "IT Education",
            description: "Home to premier tech institutions and skilled professionals"
        },
        {
            icon: "fas fa-chart-line",
            title: "Growing Economy",
            description: "Rapid business growth demanding digital transformation"
        }
    ];

    const services = [
        {
            icon: "fas fa-laptop-code",
            title: "Custom Website Development",
            description: "Professional websites tailored for Kochi businesses with modern design and functionality",
            features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First Approach"]
        },
        {
            icon: "fas fa-shopping-cart",
            title: "E-commerce Solutions",
            description: "Complete online stores for Kochi retailers and businesses to expand their reach",
            features: ["Payment Integration", "Inventory Management", "Order Tracking", "Customer Portal"]
        },
        {
            icon: "fab fa-flutter",
            title: "Flutter App Development",
            description: "Cross-platform mobile applications for iOS and Android with native performance",
            features: ["Cross-Platform", "Native Performance", "Real-time Updates", "Offline Support"]
        },
        {
            icon: "fas fa-database",
            title: "MERN Stack Development",
            description: "Full-stack web applications using MongoDB, Express, React, and Node.js",
            features: ["Scalable Architecture", "Real-time Features", "API Development", "Cloud Integration"]
        },
        {
            icon: "fab fa-wordpress",
            title: "WordPress Development",
            description: "Custom WordPress websites and plugins for easy content management",
            features: ["Custom Themes", "Plugin Development", "Content Management", "SEO Friendly"]
        },
        {
            icon: "fas fa-search",
            title: "Digital Marketing",
            description: "Complete digital marketing solutions to grow your business online",
            features: ["SEO Services", "Social Media Marketing", "Google Ads", "Analytics Setup"]
        }
    ];

    const benefits = [
        {
            icon: "fas fa-map-marker-alt",
            title: "Local Market Knowledge",
            description: "Deep understanding of Kochi's business landscape and customer preferences"
        },
        {
            icon: "fas fa-handshake",
            title: "Personal Service",
            description: "Direct communication and personalized attention to your project requirements"
        },
        {
            icon: "fas fa-clock",
            title: "Quick Response",
            description: "Fast turnaround times and immediate support for urgent requirements"
        },
        {
            icon: "fas fa-rupee-sign",
            title: "Competitive Pricing",
            description: "Affordable rates without compromising on quality and professional standards"
        }
    ];

    const portfolio = [
        {
            icon: "fas fa-store",
            title: "E-commerce Platform",
            description: "Modern online store for Kochi-based retailer with payment integration",
            tech: ["React", "Node.js", "MongoDB", "Payment Gateway"]
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Business App",
            description: "Flutter mobile app for local service provider with booking system",
            tech: ["Flutter", "Firebase", "Real-time Chat", "GPS Integration"]
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Educational Portal",
            description: "Learning management system for Kochi educational institution",
            tech: ["React", "Node.js", "Video Streaming", "Progress Tracking"]
        }
    ];

    return (
        <LocationTemplate
            cityName="Kochi"
            cityHighlights={cityHighlights}
            services={services}
            benefits={benefits}
            portfolio={portfolio}
            description="Professional web development and Flutter app development services in Kochi, Kerala's commercial capital. Specialized solutions for businesses in Ernakulam district with focus on e-commerce, startups, and enterprise applications."
        />
    );
}
