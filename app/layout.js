"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import PageLoader from "@/components/pageLoader/PageLoader";
import ThreeScene from "@/components/ThreeScene";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function RootLayout({ children }) {
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
    <html lang="en">
      <head>
        {/* SEO and meta tags */}
        <meta name="google-site-verification" content="AWxjk_Fpn8FzilJKbuxl3i1J8VFgrfVwEkoaqwKp9mo" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
        <meta name="author" content="ANAGH K R" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kerala" />
        <meta name="geo.position" content="10.8505;76.2711" />
        <meta name="ICBM" content="10.8505, 76.2711" />

        {/* Sitemap Links */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="sitemap" type="application/xml" title="Sitemap-0" href="/sitemap-0.xml" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Additional SEO */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>

      <body>
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
                "LMS Development", "Firebase", "Git", "CI/CD", "DevOps", "Docker", "AWS"
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
      </body>
    </html>
  );
}
