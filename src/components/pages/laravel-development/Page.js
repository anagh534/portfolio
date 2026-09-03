import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Plug, Gauge, KeyRound, Server, Layers, Database } from 'lucide-react';

export const metadata = {
    title: "Laravel Developer Kerala | Backend Services | ANAGH K R",
    description: "Hire an expert Laravel developer in Kerala. Build robust, secure, and scalable PHP backend systems, APIs, and custom web applications.",
    keywords: "Laravel developer Kerala, PHP developer Kerala, backend developer Kerala, API developer Kerala, scalable backend Kerala, Laravel development Kochi, Laravel developer Calicut, hire Laravel developer Kerala",
    alternates: { canonical: "https://www.anaghkr.in/laravel-development/" },
    openGraph: {
        title: "Laravel Developer Kerala | Backend API Development | ANAGH K R",
        description: "Expert Laravel backend development in Kerala. Build robust, secure PHP backend systems and APIs.",
        url: "https://www.anaghkr.in/laravel-development/",
        type: "website",
        images: [
            {
                url: "https://www.anaghkr.in/assets/services/webdev.webp",
                width: 1200,
                height: 630,
                alt: "Laravel Developer Kerala - Backend Development Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Laravel Developer Kerala | ANAGH K R",
        description: "Expert Laravel backend development in Kerala. Build robust, secure PHP backend systems and APIs.",
        images: ["https://www.anaghkr.in/assets/services/webdev.webp"],
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Laravel Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in/" },
    "serviceType": "Laravel Backend Development",
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
    "description": "Secure server-side development, REST API creation, and custom PHP web applications using the Laravel framework.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/laravel-development/"
};

export default function LaravelDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="Laravel Development"
            title="Robust Laravel"
            titleHighlight="Backend Solutions"
            description="Highly secure, robust backend systems, RESTful APIs, and custom web applications built with Laravel. Leveraging elegant PHP syntax, eloquent ORM, and secure API integration for businesses in Kerala and globally."
            heroStats={[
                { number: "PHP", label: "Elegant Syntax" },
                { number: "Eloquent", label: "Advanced ORM" },
                { number: "Sanctum", label: "Secured APIs" },
                { number: "3+", label: "Years Backend Exp" },
            ]}
            whatYouGet={[
                { icon: <Plug size={22} />, title: "REST APIs", desc: "Designing comprehensive APIs for mobile apps and SPAs with proper resource routing, versioning, and secure policies." },
                { icon: <Server size={22} />, title: "Custom Web Apps", desc: "Building full-stack monolithic web applications using Laravel Blade, Livewire, or Inertia.js." },
                { icon: <KeyRound size={22} />, title: "Hardened Security", desc: "Implementing Laravel Sanctum or Passport for API authentication, CSRF protection, mass assignment protection, and secure hashing." },
                { icon: <Gauge size={22} />, title: "Queue & Background Jobs", desc: "Offloading heavy tasks like email sending, report generation, and notifications to Redis-backed queues." },
                { icon: <Layers size={22} />, title: "Modular Architecture", desc: "Creating maintainable codebases with service classes, repositories, and custom artisan commands." },
                { icon: <Database size={22} />, title: "Eloquent ORM", desc: "Seamless database interactions using Eloquent ORM with complex relationships, eager loading, and query optimization." },
            ]}
            technologies={[
                { category: "Framework", items: ["Laravel", "PHP 8+"] },
                { category: "Frontend Stack", items: ["Blade", "Livewire", "Inertia.js", "Tailwind CSS"] },
                { category: "Database & Cache", items: ["MySQL", "PostgreSQL", "Redis", "Eloquent ORM"] },
                { category: "Auth & Security", items: ["Sanctum", "Passport", "OAuth2", "Rate Limiting"] },
            ]}
            process={[
                { title: "Planning & DB Design", desc: "Structuring database migrations, relationships, and API endpoints before writing code." },
                { title: "Implementation", desc: "Writing elegant PHP code following PSR standards and Laravel best practices." },
                { title: "Testing", desc: "Writing unit and feature tests using PHPUnit and Pest." },
                { title: "Deployment", desc: "Deploying to optimized VPS servers using Laravel Forge, Envoyer, or Docker." },
            ]}
            faqs={[
                { question: "Why use Laravel for backend development?", answer: "Laravel provides an elegant syntax, robust security features, built-in authentication, and a powerful ORM, making it an excellent choice for custom web applications and APIs." },
                { question: "Can Laravel power a mobile app or React frontend?", answer: "Yes, Laravel is frequently used as a headless API backend (using Laravel Sanctum or Passport) to serve data to React, Next.js, Vue, or Flutter mobile apps." },
                { question: "Do you optimize Laravel applications for speed?", answer: "Yes, I implement route/config caching, Redis for cache and queues, eager loading in Eloquent, and proper database indexing to ensure fast load times." },
                { question: "Do you integrate third-party services?", answer: "Yes, I integrate payment gateways (Razorpay, Stripe), SMS APIs, external CRMs, and email services securely." },
            ]}
            relatedServices={[
                { title: "Next.js Development", desc: "React frontends to connect with Laravel APIs", href: "/nextjs-development/" },
                { title: "Web Development", desc: "Custom web solutions", href: "/web-development/" },
                { title: "Mobile App Development", desc: "Flutter apps powered by Laravel APIs", href: "/mobile-app-development/" },
            ]}
            schemaData={schemaData}
        />
    );
}
