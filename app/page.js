import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import WhatWeOffer from "@/components/home/whatweoffer";
import WhyChooseMe from "@/components/home/WhyChooseMe";
import Works from "@/components/home/works";
import Script from 'next/script';

export const metadata = {
  title: "Flutter Developer Kerala | MERN Stack Developer Kerala | Web Development Services Kerala - ANAGH K R",
  description: "Professional Flutter developer and MERN stack developer in Kerala. Affordable Flutter app development, custom website development, responsive web design, e-commerce development, and WordPress development services across Kerala including Kochi, Thiruvananthapuram, Kozhikode, and Kasaragod.",
  keywords: "Flutter developer Kerala, MERN stack developer Kerala, Web development services Kerala, Mobile app development Kerala, Freelance web developer Kerala, Custom website development Kerala, React developer Kerala, Node.js developer Kerala, Affordable Flutter app development in Kochi, Best web developer in Thiruvananthapuram Kerala, Professional mobile app development Kozhikode, Custom MERN stack development services Thrissur, Responsive web design company Ernakulam, Cross-platform app development expert Calicut, SEO-optimized website development Kannur, E-commerce development specialist Kollam, Website redesign services Kerala, WordPress development Kerala, Next.js development Kerala, PSD to website conversion Kerala, Figma to website development Kerala, Academic project development Kerala, Startup web development Kerala, Flutter app development, Web developer, MERN stack developer, Mobile app development, Web design services, Website development, App development services, Freelance web developer, SEO optimization, WordPress development",
  author: "ANAGH K R",
  robots: "index, follow",
  canonical: "https://anagh534.github.io",
  ogTitle: "Flutter Developer Kerala | MERN Stack Developer Kerala | Web Development Services Kerala",
  ogDescription: "Professional Flutter developer and MERN stack developer in Kerala. Affordable Flutter app development, custom website development, responsive web design, e-commerce development, and WordPress development services across Kerala.",
  ogUrl: "https://anagh534.github.io",
  ogImage: "/assets/profile.webp",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Flutter Developer Kerala | MERN Stack Developer Kerala",
  twitterDescription: "Professional Flutter developer and MERN stack developer in Kerala offering web and mobile app development services."
};

export default function Home() {
  return (
    <>
      <Script id="schema-person" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Anagh K R",
          "url": "https://anagh534.github.io",
          "image": "https://anagh534.github.io/assets/profile.webp",
          "sameAs": [
            "https://github.com/anagh534",
            "https://www.linkedin.com/in/anagh-k-r"
          ],
          "jobTitle": "Freelance Web Developer and Flutter Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Self-Employed"
          },
          "description": "Professional Flutter developer and MERN stack developer in Kerala offering web and mobile app development services.",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Kerala",
            "addressCountry": "India"
          }
        })
      }} />

      <Script id="schema-service" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Web Development and Mobile App Development",
          "provider": {
            "@type": "Person",
            "name": "Anagh K R"
          },
          "areaServed": {
            "@type": "State",
            "name": "Kerala"
          },
          "description": "Professional web development and mobile app development services in Kerala including Flutter app development, MERN stack development, responsive web design, and e-commerce solutions.",
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR"
            }
          }
        })
      }} />

      <Hero/>
      <About/>
      <Skills/>
      <Works/>
      <WhatWeOffer/>
      <WhyChooseMe/>
    </>
  );
}
