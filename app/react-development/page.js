import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Monitor, LayoutDashboard, Component, GitBranch, Plug, Sparkles } from 'lucide-react';

export const metadata = {
    title: "React Developer Kerala | React.js Development Services | ANAGH K R",
    description: "Professional React.js development services in Kerala. Single-page applications, dashboards, interactive UIs, and React component libraries by ANAGH K R. Serving Kochi, Kozhikode, Kasaragod, and all Kerala.",
    keywords: "React developer Kerala, React.js developer Kerala, React development services Kerala, frontend developer Kerala, React developer Kochi, React developer Kozhikode, React developer Kasaragod, React developer Kannur, hire React developer Kerala, React SPA development Kerala, React component development, React dashboard Kerala, React frontend Kerala, ReactJS developer Kerala, React web app Kerala",
    alternates: { canonical: "https://www.anaghkr.in/react-development" },
    openGraph: {
        title: "React Developer Kerala | React.js Development Services | ANAGH K R",
        description: "Professional React.js development — SPAs, admin dashboards, interactive UIs, and component libraries built for performance.",
        url: "https://www.anaghkr.in/react-development",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "React Developer Kerala | ANAGH K R",
        description: "React.js development services in Kerala — SPAs, dashboards, and modern frontends.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "React.js Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
    "serviceType": "React.js Frontend Development",
    "areaServed": "Kerala, India",
    "description": "Modern single-page applications, interactive dashboards, and React component libraries for businesses across Kerala.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/react-development"
};

export default function ReactDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="React.js Development"
            title="Modern React"
            titleHighlight="Frontend Development"
            description="Fast, interactive, and maintainable React.js applications. From single-page apps to complex admin dashboards — built with React best practices, clean architecture, and exceptional user experience."
            heroStats={[
                { number: "React", label: "Expert Level" },
                { number: "SPA", label: "Specialization" },
                { number: "24+", label: "Apps Built" },
                { number: "5+", label: "Years Experience" },
            ]}
            whatYouGet={[
                { icon: <Monitor size={22} />, title: "Single-Page Applications", desc: "Blazing-fast SPAs with client-side routing, code splitting, and lazy loading for seamless navigation." },
                { icon: <LayoutDashboard size={22} />, title: "Admin Dashboards", desc: "Feature-rich management interfaces with charts, data tables, real-time updates, and role-based permissions." },
                { icon: <Component size={22} />, title: "Reusable Components", desc: "Modular, well-documented component libraries that speed up development and ensure UI consistency." },
                { icon: <GitBranch size={22} />, title: "State Management", desc: "Redux Toolkit, Zustand, or React Context for predictable, scalable state across complex applications." },
                { icon: <Plug size={22} />, title: "API Integration", desc: "Seamless REST and GraphQL API consumption with Axios, React Query, and proper loading/error states." },
                { icon: <Sparkles size={22} />, title: "Beautiful UIs", desc: "Polished interfaces with Framer Motion animations, Tailwind CSS, or styled-components for maximum visual impact." },
            ]}
            technologies={[
                { category: "Core React", items: ["React 18", "Hooks", "Context API", "React Router", "React Query"] },
                { category: "State Management", items: ["Redux Toolkit", "Zustand", "Jotai", "MobX", "React Context"] },
                { category: "Styling", items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Framer Motion", "Shadcn/ui"] },
                { category: "Build & Test", items: ["Vite", "Webpack", "Jest", "React Testing Library", "Storybook"] },
            ]}
            process={[
                { title: "Component Architecture", desc: "Plan the component hierarchy, data flow, and state management approach before writing code." },
                { title: "UI Development", desc: "Build reusable components with proper TypeScript types, accessibility, and responsive design." },
                { title: "API Integration", desc: "Connect frontend to backend APIs with proper loading states, error handling, and caching." },
                { title: "Optimization", desc: "Code splitting, memoization, bundle analysis, and Lighthouse audits before delivery." },
            ]}
            faqs={[
                { question: "What is React.js used for?", answer: "React.js is a JavaScript library for building dynamic user interfaces. It's used for SPAs, e-commerce frontends, admin dashboards, social platforms, and any web app that requires interactive, real-time UI updates." },
                { question: "React vs Next.js — which should I choose?", answer: "If your app is primarily client-side (dashboards, tools, apps behind a login), React alone works great. If you need SEO, fast initial page loads, or server-side rendering for public pages, Next.js (which uses React) is the better choice." },
                { question: "Can you convert my existing website to React?", answer: "Yes. I can migrate static HTML/CSS sites or aging jQuery-based websites to modern React applications, improving maintainability, performance, and user experience." },
                { question: "Do you build mobile apps with React?", answer: "I primarily use Flutter for mobile apps (which is superior for mobile performance). For web-only solutions with mobile-responsive design, React is a great choice." },
                { question: "How do you handle large amounts of data in React?", answer: "I use React Query or SWR for server-state management, virtualized lists (react-window) for large datasets, Redis caching on the backend, and proper pagination or infinite scroll patterns." },
                { question: "Do you provide React development in Kochi and Kasaragod?", answer: "Yes, I offer React development services across all Kerala cities — Kochi, Kozhikode, Kasaragod, Kannur, Thrissur, Thiruvananthapuram, and more — both in-person and remotely." },
            ]}
            relatedServices={[
                { title: "Next.js Development", desc: "React with SSR, ISR, and App Router", href: "/nextjs-development" },
                { title: "MERN Stack Development", desc: "Full-stack with React, Node, MongoDB", href: "/mern-stack-development" },
                { title: "Node.js Development", desc: "Backend APIs to power React apps", href: "/nodejs-development" },
                { title: "Web Development", desc: "Full custom website development", href: "/web-development" },
                { title: "E-commerce Development", desc: "Online Stores with React frontends", href: "/ecommerce-development" },
                { title: "WordPress Development", desc: "Headless WordPress with React", href: "/wordpress-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
