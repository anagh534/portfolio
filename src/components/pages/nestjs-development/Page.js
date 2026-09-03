import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Plug, Gauge, KeyRound, Radio, Layers, Database } from 'lucide-react';

export const metadata = {
    title: "NestJS Developer Kerala | Backend Services | ANAGH K R",
    description: "Hire an expert NestJS backend developer in Kerala. Build robust, scalable, and enterprise-grade REST/GraphQL APIs with TypeScript.",
    keywords: "NestJS developer Kerala, backend developer Kerala, TypeScript developer Kerala, API developer Kerala, scalable backend Kerala, NestJS development Kochi, NestJS developer Calicut, hire NestJS developer Kerala",
    alternates: { canonical: "https://www.anaghkr.in/nestjs-development/" },
    openGraph: {
        title: "NestJS Developer Kerala | Backend API Development | ANAGH K R",
        description: "Expert NestJS backend development in Kerala. Build robust, enterprise-grade REST/GraphQL APIs with TypeScript.",
        url: "https://www.anaghkr.in/nestjs-development/",
        type: "website",
        images: [
            {
                url: "https://www.anaghkr.in/assets/services/webdev.webp",
                width: 1200,
                height: 630,
                alt: "NestJS Developer Kerala - Backend API Development Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "NestJS Developer Kerala | ANAGH K R",
        description: "Expert NestJS backend development in Kerala. Build robust, enterprise-grade REST/GraphQL APIs with TypeScript.",
        images: ["https://www.anaghkr.in/assets/services/webdev.webp"],
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NestJS Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in/" },
    "serviceType": "NestJS Backend Development",
    "areaServed": [
    { "@type": "State", "name": "Kerala" },
    { "@type": "City", "name": "Thiruvananthapuram" },
    { "@type": "City", "name": "Kollam" },
    { "@type": "City", "name": "Pathanamthitta" },
    { "@type": "City", "name": "Alappuzha" },
    { "@type": "City", "name": "Kottayam" },
    { "@type": "City", "name": "Idukki" },
    { "@type": "City", "name": "Ernakulam" },
    { "@type": "City", "name": "Kochi" },
    { "@type": "City", "name": "Thrissur" },
    { "@type": "City", "name": "Palakkad" },
    { "@type": "City", "name": "Malappuram" },
    { "@type": "City", "name": "Kozhikode" },
    { "@type": "City", "name": "Wayanad" },
    { "@type": "City", "name": "Kannur" },
    { "@type": "City", "name": "Kasaragod" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "City", "name": "Dubai" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Oman" },
    { "@type": "Country", "name": "Qatar" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Mangalore" }
  ],
    "description": "Enterprise-grade server-side development, REST/GraphQL API creation, and microservices architecture using NestJS and TypeScript.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/nestjs-development/"
};

export default function NestjsDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="NestJS Development"
            title="Enterprise NestJS"
            titleHighlight="Backend Solutions"
            description="Highly scalable, robust backend systems, enterprise-grade REST/GraphQL APIs, and microservices architecture built with NestJS. Engineered with TypeScript for strong typing, dependency injection, and secure API integration for Kerala and global businesses."
            heroStats={[
                { number: "TypeScript", label: "Strongly Typed" },
                { number: "Microservices", label: "Architecture" },
                { number: "JWT/OAuth", label: "Secured APIs" },
                { number: "3+", label: "Years Backend Exp" },
            ]}
            whatYouGet={[
                { icon: <Plug size={22} />, title: "REST & GraphQL APIs", desc: "Designing comprehensive, modular APIs with complete OpenAPI / Swagger documentation, strict versioning, and secure CORS / rate-limiting policies." },
                { icon: <Gauge size={22} />, title: "Scalable Microservices", desc: "Building scalable backend architectures using NestJS's native support for microservices (TCP, Redis, RabbitMQ, Kafka)." },
                { icon: <KeyRound size={22} />, title: "Hardened Security", desc: "Implementing encrypted JWT, secure HTTP-only cookies, OAuth2, role-based access control (RBAC), and Helmet middleware to mitigate OWASP risks." },
                { icon: <Radio size={22} />, title: "Real-time WebSockets", desc: "Integrating ultra-fast WebSockets for high-frequency messaging, collaborative tools, and live location streams." },
                { icon: <Layers size={22} />, title: "Modular Architecture", desc: "Leveraging NestJS's dependency injection and modular structure for maintainable, easily testable enterprise applications." },
                { icon: <Database size={22} />, title: "Database Tuning", desc: "Seamless database schema design and querying (PostgreSQL, MongoDB, MySQL) using ORMs like TypeORM and Prisma." },
            ]}
            technologies={[
                { category: "Framework", items: ["NestJS", "TypeScript", "Node.js"] },
                { category: "APIs & Protocols", items: ["REST", "GraphQL", "WebSockets", "Microservices"] },
                { category: "Database & Cache", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "TypeORM", "Prisma"] },
                { category: "Auth & Security", items: ["JWT", "OAuth2", "Passport", "Helmet", "Rate Limiting"] },
            ]}
            process={[
                { title: "Architecture & DB Design", desc: "Drafting robust database entity schemas, designing API endpoints, and defining role-based middleware guards in Swagger before coding." },
                { title: "Strict Implementation", desc: "Writing modular, clean TypeScript code utilizing NestJS decorators and dependency injection." },
                { title: "Comprehensive Testing", desc: "Writing extensive unit tests and end-to-end (e2e) tests using Jest." },
                { title: "Deployment & Monitoring", desc: "Deploying to Docker containers or cloud providers like AWS/Vercel with CI/CD integration." },
            ]}
            faqs={[
                { question: "Why choose NestJS over Express?", answer: "NestJS provides an out-of-the-box application architecture using TypeScript, making code more structured, maintainable, and scalable for enterprise applications compared to bare Express." },
                { question: "Do you build GraphQL APIs with NestJS?", answer: "Yes, NestJS has excellent native support for GraphQL, and I build both code-first and schema-first GraphQL APIs." },
                { question: "Can NestJS be used for microservices?", answer: "Absolutely. NestJS has built-in microservice architecture support and works seamlessly with message brokers like Redis, RabbitMQ, and Kafka." },
                { question: "Do you integrate third-party APIs?", answer: "Yes, I integrate payment gateways, SMS services, AI APIs, and CRM systems securely into the backend." },
            ]}
            relatedServices={[
                { title: "Node.js Development", desc: "Scalable backends & APIs", href: "/nodejs-development/" },
                { title: "Next.js Development", desc: "React with SSR and API routes", href: "/nextjs-development/" },
                { title: "React Development", desc: "Dynamic React frontends", href: "/react-development/" },
                { title: "Mobile App Development", desc: "Flutter apps powered by APIs", href: "/mobile-app-development/" },
            ]}
            schemaData={schemaData}
        />
    );
}
