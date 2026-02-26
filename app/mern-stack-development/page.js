import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Code2, Server, Network, Database, Wifi, Cloud } from 'lucide-react';

export const metadata = {
    title: "MERN Stack Developer Kerala | MongoDB Express React Node.js | ANAGH K R",
    description: "Expert MERN stack development services in Kerala — MongoDB, Express.js, React, and Node.js full-stack applications. Scalable, real-time web apps for businesses in Kochi, Kozhikode, Kasaragod, and all Kerala.",
    keywords: "MERN stack developer Kerala, full stack developer Kerala, MongoDB developer Kerala, Express.js developer Kerala, React Node.js developer Kerala, MERN stack development Kochi, full stack web developer Kerala, JavaScript full stack Kerala, MERN developer Kozhikode, MERN developer Kasaragod, MERN developer Kannur, MERN developer Thiruvananthapuram, hire MERN stack developer Kerala, MERN stack web development, MongoDB Express React Node Kerala",
    alternates: { canonical: "https://www.anaghkr.in/mern-stack-development" },
    openGraph: {
        title: "MERN Stack Developer Kerala | Full-Stack Web Development | ANAGH K R",
        description: "Expert MERN stack development — MongoDB, Express.js, React, Node.js full-stack applications built for scale and performance.",
        url: "https://www.anaghkr.in/mern-stack-development",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MERN Stack Developer Kerala | ANAGH K R",
        description: "Full-stack MERN development services in Kerala — scalable, real-time web applications.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MERN Stack Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
    "serviceType": "MERN Stack Development",
    "areaServed": "Kerala, India",
    "description": "Full-stack web application development using MongoDB, Express.js, React, and Node.js for businesses across Kerala.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/mern-stack-development"
};

export default function MernStackDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="MERN Stack Development"
            title="Full-Stack MERN"
            titleHighlight="Applications"
            description="End-to-end web applications built on MongoDB, Express.js, React, and Node.js. Scalable architecture, real-time capabilities, and production-ready code for startups and enterprises across Kerala."
            heroStats={[
                { number: "MERN", label: "Full Stack Expertise" },
                { number: "24+", label: "Projects Delivered" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
            ]}
            whatYouGet={[
                { icon: <Code2 size={22} />, title: "React Frontend", desc: "Fast, interactive UIs built with React and modern hooks, delivering smooth user experiences across all browsers." },
                { icon: <Server size={22} />, title: "Node.js Backend", desc: "High-performance, event-driven server-side logic that handles thousands of concurrent requests efficiently." },
                { icon: <Network size={22} />, title: "Express.js API", desc: "Clean, RESTful or GraphQL APIs designed for scalability, security, and easy third-party integrations." },
                { icon: <Database size={22} />, title: "MongoDB Database", desc: "Flexible NoSQL data modeling with proper indexing, aggregation pipelines, and Atlas cloud integration." },
                { icon: <Wifi size={22} />, title: "Real-time Features", desc: "WebSocket and Socket.IO powered real-time chat, notifications, dashboards, and live data streams." },
                { icon: <Cloud size={22} />, title: "Cloud Deployment", desc: "Production deployment on AWS, Vercel, or DigitalOcean with CI/CD pipelines and environment management." },
            ]}
            technologies={[
                { category: "Frontend (React Ecosystem)", items: ["React.js", "Redux / Zustand", "React Router", "Axios", "Tailwind CSS", "TypeScript"] },
                { category: "Backend (Node Ecosystem)", items: ["Node.js", "Express.js", "Socket.IO", "JWT Auth", "Multer", "Nodemailer"] },
                { category: "Database & Cache", items: ["MongoDB", "Mongoose ODM", "Redis", "MongoDB Atlas", "Firebase"] },
                { category: "DevOps & Testing", items: ["Docker", "AWS EC2 / S3", "Vercel", "GitHub Actions", "Jest", "Postman"] },
            ]}
            process={[
                { title: "Requirement Analysis", desc: "Deep dive into your business logic, data models, and user flow to architect the right solution." },
                { title: "API Design", desc: "RESTful or GraphQL API schemas defined and documented with Postman / Swagger before development." },
                { title: "Parallel Dev", desc: "Frontend and backend developed simultaneously with mocked APIs ensuring zero blockers." },
                { title: "Deploy & Scale", desc: "Cloud deployment, load testing, and performance tuning before final handover." },
            ]}
            faqs={[
                { question: "What is MERN stack development?", answer: "MERN stands for MongoDB, Express.js, React, and Node.js — a JavaScript-only full-stack framework for building modern, scalable web applications with a single programming language across frontend and backend." },
                { question: "Why choose MERN stack for my project?", answer: "MERN stack provides fast development cycles, a single language (JavaScript) across the entire stack, excellent community support, and great scalability — making it ideal for startups, SaaS platforms, and enterprise web apps." },
                { question: "Can MERN stack handle high traffic?", answer: "Yes. Node.js is inherently non-blocking and event-driven, making it excellent for high-concurrency applications. Combined with MongoDB's horizontal scaling and proper caching strategies, MERN apps handle significant scale." },
                { question: "Do you build real-time apps with MERN?", answer: "Absolutely. I use Socket.IO integrated with Node.js to build real-time features like live chat, collaborative tools, real-time dashboards, and notification systems." },
                { question: "How long does a MERN stack project take?", answer: "A typical MERN project takes 4–10 weeks depending on scope. Simple CRUD applications can be done in 2–3 weeks, while complex SaaS platforms may require 3–6 months." },
                { question: "Do you provide MERN stack development in Kochi and Kozhikode?", answer: "Yes, I serve all cities in Kerala including Kochi, Kozhikode, Thiruvananthapuram, Kasaragod, Kannur, Thrissur, and more — both in-person consultations and remote development." },
            ]}
            relatedServices={[
                { title: "React Development", desc: "Dynamic, interactive React frontends", href: "/react-development" },
                { title: "Node.js Development", desc: "Scalable backend APIs with Node.js", href: "/nodejs-development" },
                { title: "Next.js Development", desc: "SSR React with Next.js for SEO", href: "/nextjs-development" },
                { title: "Web Development", desc: "Full custom website development", href: "/web-development" },
                { title: "E-commerce Development", desc: "Online stores with payment gatways", href: "/ecommerce-development" },
                { title: "Mobile App Development", desc: "Cross-platform apps with Flutter", href: "/mobile-app-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
