import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Plug, Gauge, KeyRound, Radio, Layers, Database } from 'lucide-react';

export const metadata = {
    title: "Node.js Developer Kerala | Backend Development Services | ANAGH K R",
    description: "Expert Node.js backend development services in Kerala. RESTful APIs, microservices, real-time apps, and server-side solutions by ANAGH K R. Serving Kochi, Kozhikode, Kasaragod, Kannur, and all Kerala.",
    keywords: "Node.js developer Kerala, backend developer Kerala, Express.js developer Kerala, REST API developer Kerala, Node.js development Kochi, Node.js developer Kozhikode, Node.js developer Kasaragod, server side development Kerala, API development Kerala, microservices Kerala, Node.js backend Kerala, hire Node.js developer Kerala, Node.js developer Kannur, Node.js developer Thrissur, backend web development Kerala, JavaScript backend Kerala",
    alternates: { canonical: "https://www.anaghkr.in/nodejs-development" },
    openGraph: {
        title: "Node.js Developer Kerala | Backend API Development | ANAGH K R",
        description: "Expert Node.js backend development services — RESTful APIs, microservices, real-time features, and scalable server architecture.",
        url: "https://www.anaghkr.in/nodejs-development",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Developer Kerala | ANAGH K R",
        description: "Backend API and server-side development with Node.js in Kerala.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Node.js Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
    "serviceType": "Node.js Backend Development",
    "areaServed": "Kerala, India",
    "description": "Scalable server-side development, REST API creation, and microservices architecture using Node.js and Express.js.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/nodejs-development"
};

export default function NodejsDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="Node.js Development"
            title="Scalable Node.js"
            titleHighlight="Backend Solutions"
            description="High-performance, event-driven backend systems and APIs built with Node.js and Express.js. From simple REST APIs to complex microservices architectures — reliable, secure, and built to scale."
            heroStats={[
                { number: "Fast", label: "Non-Blocking I/O" },
                { number: "REST", label: "API Architecture" },
                { number: "24/7", label: "Uptime Reliability" },
                { number: "5+", label: "Years Experience" },
            ]}
            whatYouGet={[
                { icon: <Plug size={22} />, title: "RESTful APIs", desc: "Well-documented, versioned REST APIs following industry standards, ready for web, mobile, and third-party integrations." },
                { icon: <Gauge size={22} />, title: "High Performance", desc: "Asynchronous, non-blocking architecture that handles thousands of concurrent connections without performance degradation." },
                { icon: <KeyRound size={22} />, title: "Secure Authentication", desc: "JWT, OAuth2, and session-based authentication systems with role-based access control and token refresh flows." },
                { icon: <Radio size={22} />, title: "Real-time Capabilities", desc: "WebSocket and Socket.IO integration for real-time messaging, live notifications, and collaborative features." },
                { icon: <Layers size={22} />, title: "Microservices", desc: "Loosely coupled, independently deployable service architectures that scale horizontally for enterprise needs." },
                { icon: <Database size={22} />, title: "Database Integration", desc: "Seamless integration with MongoDB, PostgreSQL, MySQL, Redis, and Firebase with proper ORM setup and query optimization." },
            ]}
            technologies={[
                { category: "Runtime & Framework", items: ["Node.js", "Express.js", "Fastify", "NestJS", "Koa"] },
                { category: "APIs & Protocols", items: ["REST", "GraphQL", "WebSockets", "Socket.IO", "gRPC", "Webhooks"] },
                { category: "Database & Cache", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma ORM"] },
                { category: "Auth & Security", items: ["JWT", "OAuth2", "bcrypt", "Helmet.js", "Rate Limiting", "CORS"] },
            ]}
            process={[
                { title: "API Design", desc: "Endpoints, data models, and authentication flows documented in OpenAPI / Swagger before development begins." },
                { title: "Development", desc: "Clean, modular Node.js code with proper error handling, logging, and middleware architecture." },
                { title: "Testing", desc: "Unit tests, integration tests, and API testing with Jest and Postman for production-grade reliability." },
                { title: "Deployment", desc: "Containerized with Docker, deployed to AWS/VPS, with environment configuration and monitoring setup." },
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
                { title: "MERN Stack Development", desc: "Full-stack with MongoDB, Express, React, Node", href: "/mern-stack-development" },
                { title: "React Development", desc: "Dynamic React frontends", href: "/react-development" },
                { title: "Next.js Development", desc: "React with SSR and API routes", href: "/nextjs-development" },
                { title: "Web Development", desc: "End-to-end custom website development", href: "/web-development" },
                { title: "Mobile App Development", desc: "Flutter apps powered by Node.js APIs", href: "/mobile-app-development" },
                { title: "E-commerce Development", desc: "Online stores with backend APIs", href: "/ecommerce-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
