import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Server, FileCode, RefreshCw, Plug, ImageIcon, Layout } from 'lucide-react';

export const metadata = {
    title: "Next.js Developer Kerala | Next.js Development Services | ANAGH K R",
    description: "Expert Next.js developer in Kerala offering server-side rendering, static site generation, and full-stack Next.js applications. SEO-first React apps with the App Router by ANAGH K R. Serving Kochi, Kozhikode, Kasaragod, and all Kerala.",
    keywords: "Next.js developer Kerala, Next.js development services Kerala, Next.js developer Kochi, Next.js developer Kozhikode, Next.js developer Kasaragod, Next.js developer Kannur, server side rendering Kerala, static site generation Kerala, React Next.js developer Kerala, Next.js App Router Kerala, hire Next.js developer Kerala, Next.js SEO development Kerala, Next.js full stack Kerala, SSR web development Kerala, Next.js website Kerala",
    alternates: { canonical: "https://www.anaghkr.in/nextjs-development" },
    openGraph: {
        title: "Next.js Developer Kerala | SSR React Development | ANAGH K R",
        description: "Expert Next.js development — server-side rendering, App Router, ISR, and full-stack React applications built for performance and SEO.",
        url: "https://www.anaghkr.in/nextjs-development",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js Developer Kerala | ANAGH K R",
        description: "Next.js development services in Kerala — SSR, ISR, App Router, and full-stack applications.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Next.js Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
    "serviceType": "Next.js Development",
    "areaServed": "Kerala, India",
    "description": "Server-side rendered and statically generated React applications using Next.js App Router for superior SEO and performance.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/nextjs-development"
};

export default function NextjsDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="Next.js Development"
            title="Fast, SEO-First"
            titleHighlight="Next.js Apps"
            description="Next.js is the gold standard for production React applications. Server components, App Router, ISR, and built-in API routes — delivering the best possible performance, SEO scores, and developer experience."
            heroStats={[
                { number: "100", label: "Lighthouse Score" },
                { number: "SSR", label: "Server Rendering" },
                { number: "ISR", label: "Incremental Regen" },
                { number: "SEO", label: "First-Class" },
            ]}
            whatYouGet={[
                { icon: <Server size={22} />, title: "Server-Side Rendering", desc: "Pages rendered on the server for instant first-paint, better SEO, and faster Time to First Byte (TTFB)." },
                { icon: <FileCode size={22} />, title: "Static Generation", desc: "Pre-built HTML pages at build time for maximum performance and CDN-level caching globally." },
                { icon: <RefreshCw size={22} />, title: "Incremental Regen (ISR)", desc: "Automatically update static pages in the background without full rebuilds — always fresh content." },
                { icon: <Plug size={22} />, title: "API Routes", desc: "Built-in Next.js API routes serve your backend logic — serverless functions without separate infrastructure." },
                { icon: <ImageIcon size={22} />, title: "Image Optimization", desc: "Automatic WebP conversion, lazy loading, and responsive images via next/image — zero config needed." },
                { icon: <Layout size={22} />, title: "App Router & Layouts", desc: "Next.js 14 App Router with nested layouts, loading UI, error boundaries, and parallel routes." },
            ]}
            technologies={[
                { category: "Next.js Core", items: ["Next.js 14", "App Router", "Server Components", "Server Actions", "Middleware"] },
                { category: "Rendering Strategies", items: ["SSR", "SSG", "ISR", "CSR", "Streaming/Suspense"] },
                { category: "Integrations", items: ["Tailwind CSS", "Prisma", "tRPC", "Sanity CMS", "Contentful", "Supabase"] },
                { category: "Deployment", items: ["Vercel", "AWS Lambda", "Docker", "Edge Functions", "Cloudflare Pages"] },
            ]}
            process={[
                { title: "Architecture Planning", desc: "Decide on rendering strategies (SSR vs SSG vs ISR) per route for the best performance/freshness balance." },
                { title: "Next.js Development", desc: "App Router structure, layouts, server components, and data fetching patterns implemented to production standards." },
                { title: "Performance Audit", desc: "Core Web Vitals, Lighthouse audits, bundle analysis, and image optimization before delivery." },
                { title: "Deploy to Vercel", desc: "Zero-config Vercel deployment with automatic preview deployments, edge caching, and analytics." },
            ]}
            faqs={[
                { question: "What is Next.js and why use it?", answer: "Next.js is a React framework that adds server-side rendering, static generation, API routes, and image optimization. It solves the main weakness of React — SEO — while providing a superior developer experience and better Core Web Vitals scores." },
                { question: "Is this website built with Next.js?", answer: "Yes! This portfolio (anaghkr.in) is built with Next.js 14 using the App Router — making it the best live example of what I can deliver for your project." },
                { question: "Next.js vs plain React — which should I choose?", answer: "For public-facing websites that need Google ranking, Next.js is far superior due to SSR and SSG. For private dashboards or SPAs behind a login (where SEO doesn't matter), plain React (with Vite) is simpler and perfectly adequate." },
                { question: "Can Next.js handle large-scale applications?", answer: "Yes. Companies like Vercel, TikTok, Hulu, Twitch, and many Fortune 500s run production workloads on Next.js at massive scale. With proper caching, ISR, and edge deployment, it handles enterprise traffic excellently." },
                { question: "Can you migrate my existing React app to Next.js?", answer: "Absolutely. I can migrate existing Vite/CRA React apps to Next.js App Router, improving SEO, performance, and adding server-side capabilities to existing pages." },
                { question: "Do you build Next.js apps in Kochi and Kozhikode?", answer: "Yes — Next.js development services are available across all Kerala cities including Kochi, Kozhikode, Kasaragod, Kannur, Thrissur, Thiruvananthapuram, and more. Remote development available for all of India." },
            ]}
            relatedServices={[
                { title: "React Development", desc: "Client-side React applications", href: "/react-development" },
                { title: "MERN Stack Development", desc: "Full-stack with Node.js backend", href: "/mern-stack-development" },
                { title: "Web Development", desc: "End-to-end custom web development", href: "/web-development" },
                { title: "E-commerce Development", desc: "Next.js powered online stores", href: "/ecommerce-development" },
                { title: "Node.js Development", desc: "Backend APIs for Next.js apps", href: "/nodejs-development" },
                { title: "WordPress Development", desc: "Headless WordPress with Next.js", href: "/wordpress-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
