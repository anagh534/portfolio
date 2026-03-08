import Hero from "@/components/home/hero";
import Script from 'next/script';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/home/about'), { ssr: true });
const Skills = dynamic(() => import('@/components/home/skills'), { ssr: true });
const Works = dynamic(() => import('@/components/home/works'), { ssr: true });
const WhatWeOffer = dynamic(() => import('@/components/home/whatweoffer'), { ssr: true });
const WhyChooseMe = dynamic(() => import('@/components/home/WhyChooseMe'), { ssr: true });

export const metadata = {
  title: "Flutter Developer Kerala | Freelance Web Developer Kerala | MERN Stack Developer - ANAGH K R",
  description: "Professional freelance web developer and Flutter app developer in Kerala with 5+ years experience. Specializing in MERN stack development, custom website design, e-commerce solutions, and mobile app development. Serving businesses across Kochi, Calicut, Trivandrum, Kannur, Kasaragod, and all Kerala with affordable, high-quality digital solutions.",
  keywords: "Flutter developer Kerala, freelance web developer Kerala, MERN stack developer Kerala, web development Kerala, mobile app development Kerala, website design Kerala, custom website development, e-commerce development Kerala, React developer Kerala, Node.js developer Kerala, WordPress development Kerala, Next.js developer Kerala, app developer Kerala, freelance developer Kerala, web developer Kochi, web developer Calicut, web developer Trivandrum",
  author: "ANAGH K R",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  canonical: "https://www.anaghkr.in",
  ogTitle: "Professional Flutter & Web Developer Kerala | MERN Stack Expert - ANAGH K R",
  ogDescription: "Experienced freelance Flutter developer and MERN stack web developer in Kerala. Building custom websites, mobile apps, and e-commerce solutions for businesses across Kerala with 5+ years of expertise.",
  ogUrl: "https://www.anaghkr.in",
  ogImage: "/assets/profile.png",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Flutter Developer Kerala | MERN Stack Developer Kerala - ANAGH K R",
  twitterDescription: "Professional Flutter and MERN stack developer in Kerala offering custom web and mobile app development services for businesses."
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
                "text": "ANAGH K R is an experienced freelance web developer in Kerala with 5+ years of professional experience and 24+ successful projects. Specializing in MERN stack development, Flutter app development, and custom website design, serving clients across Kerala including Kochi, Calicut, Trivandrum, Kannur, and Kasaragod with affordable and high-quality web development services."
              }
            },
            {
              "@type": "Question",
              "name": "What web development services are available in Kerala?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ANAGH K R offers comprehensive web development services across Kerala including custom website development, Flutter mobile app development, e-commerce platforms, WordPress development, responsive web design, MERN stack solutions, and SEO optimization for businesses of all sizes in Calicut, Kochi, Trivandrum, and throughout Kerala."
              }
            },
            {
              "@type": "Question",
              "name": "How can I hire a Flutter developer in Kerala?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can hire ANAGH K R, a professional Flutter developer in Kerala, for your mobile app development needs. With expertise in cross-platform app development for Android and iOS, contact through WhatsApp at +91-8075541805 or email at anaghkrkkl@gmail.com for Flutter app development services across Kannur, Kochi, Calicut, and all Kerala cities."
              }
            },
            {
              "@type": "Question",
              "name": "How much does website development cost in Kerala?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Website development costs in Kerala vary based on project scope and complexity. ANAGH K R offers transparent and affordable pricing starting from basic portfolio websites to complex e-commerce and custom web applications. Contact for a free consultation and personalized quote based on your specific business requirements."
              }
            },
            {
              "@type": "Question",
              "name": "What is MERN stack development and why choose it?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MERN stack development uses MongoDB, Express.js, React, and Node.js to build modern, scalable, and high-performance web applications. It enables fast development, excellent user experiences, and SEO-friendly websites. ANAGH K R specializes in full-stack MERN development for businesses across Kerala, delivering robust and maintainable solutions."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide WordPress development services in Kerala?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ANAGH K R provides professional WordPress development services across Kerala including custom theme development, plugin integration, WooCommerce e-commerce setup, website migration, and ongoing WordPress maintenance. Serving businesses in Kochi, Calicut, Trivandrum, Thrissur, and all major Kerala cities with reliable WordPress solutions."
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
