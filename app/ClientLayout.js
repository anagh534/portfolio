"use client"
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function ClientLayout({ children }) {
    return (
        <>
            <div className="fixed inset-0 -z-1 bg-[#050505]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>

            <Navbar />

            <main className="relative z-10">
                {children}
            </main>
            
            <Footer />

            {/* ✅ Structured Data for Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "ANAGH K R",
                        "alternateName": "Anagh K R",
                        "description":
                            "Freelance software developer and Flutter developer based in Kerala specializing in MERN stack development, Flutter apps, WordPress development, and custom website development. Expert in creating responsive websites, mobile apps, and e-commerce platforms for businesses across Kerala.",
                        "url": "https://www.anaghkr.in/",
                        "email": "mailto:anaghkrkkl@gmail.com",
                        "sameAs": [
                            "https://in.linkedin.com/in/anagh-k-r",
                            "https://github.com/anagh534",
                            "https://instagram.com/mr._uni_que___",
                            "https://www.fiverr.com/anaghkr/"
                        ],
                        "jobTitle": "Freelance Web Developer & Flutter Developer",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Self-Employed"
                        },
                        "knowsAbout": [
                            "Flutter Development", "MERN Stack Development", "JavaScript", "React",
                            "Node.js", "MongoDB", "Express.js", "Laravel", "PHP", "MySQL",
                            "WordPress Development",
                            "Mobile App Development", "Web Development", "E-commerce Development",
                            "LMS Development", "Firebase", "Git", "CI/CD", "DevOps", "Docker", "AWS",
                            "best node js vemobile app developer kerala", "hire web developer", "hire freelance web developer",
                            "freelancer website designer", "freelancer web developer", "freelancer for website development",
                            "freelancer android app developer", "freelance website developer", "freelance web developer",
                            "freelance web designer near me", "freelance mobile app developer", "freelance app developers near me",
                            "freelance app developers cost", "freelance app developers", "flutter developer",
                            "fiverr web development", "fiverr web developer", "fiverr react developer",
                            "fiverr app development", "fiverr app developer", "app development freelance",
                            "app developers in kerala", "app developer freelancer"
                        ],
                        "alumniOf": {
                            "@type": "CollegeOrUniversity",
                            "name": "Kannur University"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Kasaragod",
                            "addressRegion": "Kerala",
                            "addressCountry": "India"
                        },
                        "offers": {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Web Development Services",
                                "description": "Professional web development, WordPress development, Flutter app development, and MERN stack development services across Kerala"
                            },
                            "areaServed": [
                                "Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kannur",
                                "Kollam", "Kasaragod", "Palakkad", "Ernakulam", "Calicut", "Kerala"
                            ]
                        }
                    }),
                }}
            />
            
            {/* Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "ANAGH K R",
                        "alternateName": "Anagh K R - Web Developer Kerala",
                        "url": "https://www.anaghkr.in",
                        "logo": "https://www.anaghkr.in/logo.png",
                        "description": "Professional web development and mobile app development services in Kerala. Specialized in MERN stack, Flutter, WordPress, and custom software development.",
                        "email": "anaghkrkkl@gmail.com",
                        "telephone": "+91-8075541805",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Kasaragod",
                            "addressRegion": "Kerala",
                            "postalCode": "671121",
                            "addressCountry": "IN"
                        },
                        "sameAs": [
                            "https://in.linkedin.com/in/anagh-k-r",
                            "https://github.com/anagh534",
                            "https://www.fiverr.com/anaghkr/",
                            "https://instagram.com/mr._uni_que___"
                        ],
                        "founder": {
                            "@type": "Person",
                            "name": "Anagh K R"
                        },
                        "foundingDate": "2019",
                        "areaServed": {
                            "@type": "State",
                            "name": "Kerala, India"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Development Services",
                            "itemListElement": [
                                {
                                    "@type": "OfferCatalog",
                                    "name": "Web Development",
                                    "itemListElement": [
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "MERN Stack Development"}},
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "React Development"}},
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Node.js Development"}},
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Next.js Development"}},
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "WordPress Development"}}
                                    ]
                                },
                                {
                                    "@type": "OfferCatalog",
                                    "name": "Mobile Development",
                                    "itemListElement": [
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Flutter App Development"}},
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "iOS Development"}},
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Android Development"}}
                                    ]
                                },
                                {
                                    "@type": "OfferCatalog",
                                    "name": "E-commerce",
                                    "itemListElement": [
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "E-commerce Development"}},
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Online Store Setup"}},
                                        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Payment Gateway Integration"}}
                                    ]
                                }
                            ]
                        }
                    }),
                }}
            />
        </>
    );
}
