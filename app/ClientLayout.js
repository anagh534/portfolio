"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import PageLoader from "@/components/pageLoader/PageLoader";
import ThreeScene from "@/components/ThreeScene";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time and then hide loader
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 1 second loading time - optimized for better UX and SEO

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {/* Page Loader */}
            <PageLoader
                isLoading={isLoading}
                loadingText="Loading..."
                animationType="spinner"
                size="large"
            />

            <Navbar />
            <ThreeScene />
            <AnimatePresence mode="wait">
                <motion.main
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10"
                >
                    {children}
                </motion.main>
            </AnimatePresence>
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
                            "Freelance software developer and Flutter developer based in Kerala specializing in MERN stack development, Flutter apps, and custom website development. Expert in creating responsive websites, mobile apps, and e-commerce platforms for businesses across Kerala.",
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
                                "description": "Professional web development, Flutter app development, and MERN stack development services across Kerala"
                            },
                            "areaServed": [
                                "Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kannur",
                                "Kollam", "Kasaragod", "Palakkad", "Ernakulam", "Calicut", "Kerala"
                            ]
                        }
                    }),
                }}
            />
        </>
    );
}
