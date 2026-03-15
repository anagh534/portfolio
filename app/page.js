import Hero from "@/components/home/hero";
import Script from 'next/script';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/home/about'), { ssr: true });
const Skills = dynamic(() => import('@/components/home/skills'), { ssr: true });
const Works = dynamic(() => import('@/components/home/works'), { ssr: true });
const WhatWeOffer = dynamic(() => import('@/components/home/whatweoffer'), { ssr: true });
const WhyChooseMe = dynamic(() => import('@/components/home/WhyChooseMe'), { ssr: true });

export const metadata = {
    title: "Freelance Web Developer Kerala | Web Design, WordPress, Flutter & MERN",
    description: "Hire a freelance web developer in Kerala for website design, WordPress development, e-commerce solutions, and Flutter app development. Serving Kochi, Calicut, Trivandrum, Kannur, and Kasaragod.",
    keywords: "freelance web developer Kerala, web designer Kerala, freelance web designer Kerala, website development Kerala, WordPress developer Kerala, e-commerce development Kerala, Shopify developer Kerala, Flutter developer Kerala, MERN stack developer Kerala, mobile app developer Kerala, React developer Kerala, Node.js developer Kerala, Next.js developer Kerala, web developer Kochi, web developer Calicut, web developer Trivandrum, web developer Kannur, web developer Kasaragod",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in",
    },
    openGraph: {
        title: "Freelance Web Developer Kerala | Website Design, WordPress & Flutter",
        description: "Freelance web developer and web designer in Kerala for custom websites, WordPress development, e-commerce, and Flutter apps.",
        url: "https://www.anaghkr.in",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Freelance Web Developer Kerala | WordPress, MERN & Flutter",
        description: "Freelance web developer in Kerala offering website design, WordPress development, e-commerce solutions, and Flutter mobile apps.",
    },
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
              "name": "How do I choose a freelance web developer in Kerala?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Choose a developer with proven portfolio work, clear communication, modern technology expertise, and post-launch support. ANAGH K R provides website design, WordPress development, MERN stack web apps, and Flutter app development for businesses across Kerala with transparent timelines and pricing."
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
              "name": "Do you provide website design and WordPress development in Kerala?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. ANAGH K R provides website design and WordPress development services across Kerala, including custom business websites, WooCommerce stores, website redesign, performance optimization, and ongoing maintenance."
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
