import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import WhatWeOffer from "@/components/home/whatweoffer";
import WhyChooseMe from "@/components/home/WhyChooseMe";
import Works from "@/components/home/works";
import Script from 'next/script';

export const metadata = {
  title: "Flutter Developer Kerala | Freelance Web Developer Kerala | MERN Stack Developer - ANAGH K R",
  description: "Top-rated freelance Flutter developer and web developer in Kerala. Specialized in MERN stack development, Flutter app development, WordPress development, website design, and LMS development. Serving Calicut, Trivandrum, Kannur, Kasaragod, Kochi, and all Kerala. Affordable custom website development and mobile app development services.",
  keywords: "flutter developer kerala, freelance web developer kerala, web development calicut, website designer in kasaragod, lms development companies in trivandrum, app developers in trivandrum, web developer in kerala, freelance website developer kerala, flutter developers near me, flutter development in kannur, ecommerce development kannur, flutter training calicut, web development company in kannur, MERN stack developer Kerala, Mobile app development Kerala, Custom website development Kerala, React developer Kerala, Node.js developer Kerala, Affordable Flutter app development, Best web developer Kerala, Professional mobile app development, Responsive web design Kerala, E-commerce development Kerala, WordPress development Kerala, Next.js development Kerala, best node js vemobile app developer kerala, hire web developer, hire freelance web developer, freelancer website designer, freelancer web developer, freelancer for website development, freelancer android app developer, freelance website developer, freelance web developer, freelance web designer near me, freelance mobile app developer, freelance app developers near me, freelance app developers cost, freelance app developers, flutter developer, fiverr web development, fiverr web developer, fiverr react developer, fiverr app development, fiverr app developer, app development freelance, app developers in kerala, app developer freelancer",
  author: "ANAGH K R",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  canonical: "https://www.anaghkr.in",
  ogTitle: "Flutter Developer Kerala | Freelance Web Developer Kerala | MERN Stack Developer",
  ogDescription: "Top-rated freelance Flutter developer and web developer in Kerala. Specialized in MERN stack development, Flutter app development, website design, and LMS development. Serving all Kerala.",
  ogUrl: "https://www.anaghkr.in",
  ogImage: "/assets/profile.png",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Flutter Developer Kerala | MERN Stack Developer Kerala",
  twitterDescription: "Professional Flutter developer and MERN stack developer in Kerala offering web and mobile app development services."
};

export default function Home() {
  return (
    <>


      <Script id="schema-service" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Web Development, WordPress Development and Mobile App Development",
          "provider": {
            "@type": "Person",
            "name": "Anagh K R"
          },
          "areaServed": {
            "@type": "State",
            "name": "Kerala"
          },
          "description": "Professional web development, WordPress development, and mobile app development services in Kerala including Flutter app development, MERN stack development, responsive web design, and e-commerce solutions.",
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR"
            }
          }
        })
      }} />

      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who is the best freelance web developer in Kerala?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ANAGH K R is a highly-rated freelance web developer in Kerala specializing in MERN stack development, Flutter app development, and custom website design. Serving clients across Kerala including Kochi, Calicut, Trivandrum, Kannur, and Kasaragod with affordable and professional web development services."
              }
            },
            {
              "@type": "Question",
              "name": "What web development services are available in Calicut (Kozhikode)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In Calicut, ANAGH K R offers comprehensive web development services including custom website development, Flutter app development, e-commerce platforms, LMS development, responsive web design, WordPress development, and MERN stack solutions for businesses of all sizes."
              }
            },
            {
              "@type": "Question",
              "name": "Are there professional Flutter developers in Kannur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ANAGH K R provides expert Flutter development services in Kannur and across Kerala. Specializing in cross-platform mobile app development, Flutter training, and custom mobile applications for both Android and iOS platforms."
              }
            },
            {
              "@type": "Question",
              "name": "How much does website development cost in Kerala?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Website development costs in Kerala vary based on project requirements. ANAGH K R offers affordable and transparent pricing for custom website development, starting from basic portfolio websites to complex e-commerce and LMS platforms. Contact for a free quote tailored to your needs."
              }
            },
            {
              "@type": "Question",
              "name": "Which cities in Kerala offer Flutter app development services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ANAGH K R provides Flutter app development services across all major cities in Kerala including Kochi, Thiruvananthapuram (Trivandrum), Kozhikode (Calicut), Thrissur, Kannur, Kollam, Kasaragod, Palakkad, Ernakulam, and Kanhangad with remote support available statewide."
              }
            },
            {
              "@type": "Question",
              "name": "What is MERN stack development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MERN stack development uses MongoDB, Express.js, React, and Node.js to build modern, scalable web applications. ANAGH K R specializes in full-stack MERN development, creating fast, responsive, and SEO-friendly websites and web applications for businesses in Kerala."
              }
            }
          ]
        })
      }} />

      <Hero />
      <About />
      <Skills />
      <Works />
      <WhatWeOffer />
      <WhyChooseMe />
    </>
  );
}
