import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Plug, Gauge, KeyRound, Radio, Layers, Database } from 'lucide-react';

export const metadata = {
    title: "Node.js Developer Kerala | Backend Services | ANAGH K R",
    description: "Expert Node.js backend development in Kerala. RESTful APIs, real-time apps, and server-side solutions in Kochi & Calicut.",
    keywords: "Node.js developer Kerala, backend developer Kerala, Express.js developer Kerala, REST API developer Kerala, Node.js development Kochi, Node.js developer Kozhikode, Node.js developer Kasaragod, server side development Kerala, API development Kerala, microservices Kerala, Node.js backend Kerala, hire Node.js developer Kerala, Node.js developer Kannur, Node.js developer Thrissur, backend web development Kerala, JavaScript backend Kerala",
    alternates: { canonical: "https://www.anaghkr.in/nodejs-development/" },
    openGraph: {
        title: "Node.js Developer Kerala | Backend API Development | ANAGH K R",
        description: "Expert Node.js backend development services — RESTful APIs, microservices, real-time features, and scalable server architecture.",
        url: "https://www.anaghkr.in/nodejs-development/",
        type: "website",
        images: [
            {
                url: "https://www.anaghkr.in/assets/services/webdev.webp",
                width: 1200,
                height: 630,
                alt: "Node.js Developer Kerala - Backend API Development Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Developer Kerala | ANAGH K R",
        description: "Backend API and server-side development with Node.js in Kerala.",
        images: ["https://www.anaghkr.in/assets/services/webdev.webp"],
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Node.js Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in/" },
    "serviceType": "Node.js Backend Development",
    "areaServed": "Kerala, India",
    "description": "Scalable server-side development, REST API creation, and microservices architecture using Node.js and Express.js.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/nodejs-development/"
};

export default function NodejsDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="Node.js Development"
            title="Scalable Node.js"
            titleHighlight="Backend Solutions"
            description="High-performance, event-driven backend systems, enterprise-grade REST/GraphQL APIs, and robust server-side architecture built with Node.js. Engineered for non-blocking asynchronous processes, Redis caching, microservices, and secure API integration for Kerala and global businesses."
            heroStats={[
                { number: "Event", label: "Loop Async" },
                { number: "Redis", label: "Cache Tuning" },
                { number: "JWT/SSL", label: "Secured APIs" },
                { number: "3+", label: "Years Backend Exp" },
            ]}
            whatYouGet={[
                { icon: <Plug size={22} />, title: "REST & GraphQL APIs", desc: "Designing comprehensive, modular APIs with complete OpenAPI / Swagger documentation, strict versioning, and secure CORS / rate-limiting policies." },
                { icon: <Gauge size={22} />, title: "Asynchronous Scaling", desc: "Building asynchronous, non-blocking I/O backends using the Node.js cluster module and PM2 process management to comfortably handle high concurrent traffic spikes." },
                { icon: <KeyRound size={22} />, title: "Hardened Security", desc: "Implementing encrypted JWT, secure HTTP-only cookies, OAuth2, role-based access control (RBAC), bcrypt hashing, and Helmet middleware to mitigate OWASP risks." },
                { icon: <Radio size={22} />, title: "Real-time SSE & Sockets", desc: "Integrating ultra-fast WebSockets (Socket.IO) and Server-Sent Events (SSE) for high-frequency messaging, collaborative tools, and live location streams." },
                { icon: <Layers size={22} />, title: "BullMQ & Workers", desc: "Offloading heavy computational tasks, image processing, and PDF generation to robust background workers using BullMQ, Redis, or Node worker threads." },
                { icon: <Database size={22} />, title: "Database Tuning", desc: "Seamless database schema design and querying (PostgreSQL, MongoDB, MySQL) using ORMs like Prisma and Mongoose with Redis caching for sub-millisecond lookups." },
            ]}
            technologies={[
                { category: "Runtime & Framework", items: ["Node.js", "Express.js", "Fastify", "NestJS", "Koa"] },
                { category: "APIs & Protocols", items: ["REST", "GraphQL", "WebSockets", "Socket.IO", "gRPC", "Webhooks"] },
                { category: "Database & Cache", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma ORM"] },
                { category: "Auth & Security", items: ["JWT", "OAuth2", "bcrypt", "Helmet.js", "Rate Limiting", "CORS"] },
            ]}
            process={[
                { title: "Architecture & DB Design", desc: "Drafting robust database entity schemas, designing API endpoints, and defining role-based middleware guards in Swagger before coding." },
                { title: "Secure Implementation", desc: "Writing modular, clean JavaScript / TypeScript code with structured logging (Winston/Pino) and comprehensive validation schemas (Zod/Joi)." },
                { title: "Stress & API Testing", desc: "Conducting stress and load testing with Autocannon or k6, along with strict integration testing via Jest and Supertest to ensure high uptime." },
                { title: "Deployment & Monitoring", desc: "Deploying to Docker containers or Ubuntu VPS with PM2 monitoring, automatic SSL renew, and reverse-proxy setups using Nginx." },
            ]}
            faqs={[
                { question: "Why use Node.js for backend development?", answer: "Node.js is ideal for real-time applications, data-intensive APIs, and microservices due to its non-blocking I/O model. It's used by companies like Netflix, LinkedIn, and Uber for its performance and scalability." },
                { question: "Can Node.js handle high traffic?", answer: "Yes. Node.js excels at handling concurrent connections. With proper clustering, load balancing, and Redis caching, Node.js applications can serve millions of requests efficiently." },
                { question: "Do you build REST APIs with Node.js?", answer: "Yes. REST API development is a core service — including CRUD operations, authentication, file uploads, third-party integrations, webhooks, and full API documentation." },
                { question: "Can you integrate Node.js with my existing frontend?", answer: "Absolutely. I can build Node.js backends to power any frontend — React, Next.js, Vue, Angular, Flutter mobile apps, or even a WordPress site." },
                { question: "Do you offer Node.js development in Kochi?", answer: "Yes, I provide Node.js development services across all Kerala cities including Kochi, Kozhikode, Kasaragod, Kannur, Thrissur, and Thiruvananthapuram, as well as remotely." },
                { question: "How is Node.js different from PHP for backends?", answer: "Node.js uses JavaScript (same language as your frontend), is non-blocking and typically faster for I/O operations, handles WebSockets natively, and has a massive npm ecosystem. It's generally preferred for modern, real-time web applications." },
            ]}
            relatedServices={[
                { title: "MERN Stack Development", desc: "Full-stack with MongoDB, Express, React, Node", href: "/mern-stack-development/" },
                { title: "React Development", desc: "Dynamic React frontends", href: "/react-development/" },
                { title: "Next.js Development", desc: "React with SSR and API routes", href: "/nextjs-development/" },
                { title: "Web Development", desc: "End-to-end custom website development", href: "/web-development/" },
                { title: "Mobile App Development", desc: "Flutter apps powered by Node.js APIs", href: "/mobile-app-development/" },
                { title: "E-commerce Development", desc: "Online stores with backend APIs", href: "/ecommerce-development/" },
            ]}
            schemaData={schemaData}
        />
    );
}
