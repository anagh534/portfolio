import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Zap } from 'lucide-react';

export const metadata = {
    title: "Custom eCommerce Software Development Kerala | ANAGH K R",
    description: "Custom eCommerce software development in Kerala and UAE. Sub-second Next.js storefronts, multi-vendor marketplaces, zero monthly Shopify fees, and payment integrations.",
    keywords: "ecommerce software development kerala, custom ecommerce developer kochi, online store development uae, mern ecommerce website india, headless commerce nextjs",
    alternates: { canonical: "https://www.anaghkr.in/ecommerce-software/" },
    openGraph: {
        title: "Custom eCommerce Software Development Kerala | ANAGH K R",
        description: "Custom eCommerce software development in Kerala and UAE. Sub-second Next.js storefronts, multi-vendor marketplaces, zero monthly Shopify fees, and payment integrations.",
        url: "https://www.anaghkr.in/ecommerce-software/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom eCommerce Software Development Kerala | ANAGH K R",
        description: "Custom eCommerce software development in Kerala and UAE. Sub-second Next.js storefronts, multi-vendor marketplaces, zero monthly Shopify fees, and payment integrations.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Custom eCommerce Software",
            "serviceType": "High-Performance Digital Commerce",
            "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in/" },
            "areaServed": [
                { "@type": "State", "name": "Kerala" },
                { "@type": "City", "name": "Kochi" },
                { "@type": "City", "name": "Thiruvananthapuram" },
                { "@type": "City", "name": "Kozhikode" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "City", "name": "Dubai" },
                { "@type": "Country", "name": "Saudi Arabia" },
                { "@type": "Country", "name": "Qatar" },
                { "@type": "Country", "name": "Oman" }
            ],
            "description": "Custom eCommerce software development in Kerala and UAE. Sub-second Next.js storefronts, multi-vendor marketplaces, zero monthly Shopify fees, and payment integrations.",
            "mainEntityOfPage": "https://www.anaghkr.in/ecommerce-software/"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why build custom eCommerce instead of using Shopify or WooCommerce?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Shopify takes transaction fees on top of high monthly subscription fees, and WooCommerce gets sluggish with large inventories. A custom Next.js storefront gives you sub-second page speeds, unlimited customization, and zero monthly platform cuts." }
                },
                {
                    "@type": "Question",
                    "name": "Can this system handle tens of thousands of products and high traffic spikes?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Engineered with headless microservice architecture, edge caching, and PostgreSQL, our systems easily scale during festival sales and viral traffic surges." }
                }
            ]
        }
    ]
};

export default function Page() {
    return (
        <ServicePageTemplate
            badge="High-Performance Digital Commerce"
            title="Custom eCommerce"
            titleHighlight="Software"
            description="Custom eCommerce software development in Kerala and UAE. Sub-second Next.js storefronts, multi-vendor marketplaces, zero monthly Shopify fees, and payment integrations."
            heroStats={[
                { number: "< 800ms", label: "Page Load Speeds" },
                { number: "0%", label: "Platform Revenue Share" },
                { number: "Multi-vendor", label: "Marketplace Ready" },
                { number: "100%", label: "Custom Checkout UX" }
            ]}
            whatYouGet={[
                { icon: <Zap size={22} />, title: "Headless Next.js Storefronts", desc: "Sub-second product browsing, instant filtering, and ultra-smooth checkout flows that dramatically reduce cart abandonment." },
                { icon: <Zap size={22} />, title: "Comprehensive Merchant Admin", desc: "Effortlessly manage product variants, real-time stock levels, promo discount codes, and multi-courier shipping." },
                { icon: <Zap size={22} />, title: "Localized Payment & Logistics", desc: "Direct integration with Razorpay, Cashfree, Stripe, PayTabs, and automated courier APIs (Shiprocket, DHL, Aramex)." },
                { icon: <Zap size={22} />, title: "Mobile-First Responsive Design", desc: "Pixel-perfect mobile shopping experience optimized for handheld shoppers with single-click UPI/Apple Pay." }
            ]}
            technologies={[
                { category: "Storefront Tech", items: ["Next.js 15","React 19","Tailwind CSS","Framer Motion"] },
                { category: "Backend & Cart", items: ["Node.js","NestJS","Redis Cart Cache","PostgreSQL"] },
                { category: "Payments & Tax", items: ["Razorpay","Stripe","Cashfree","PayTabs GCC"] },
                { category: "Search & Assets", items: ["Algolia / Meilisearch","Cloudinary Image CDN","AWS S3","Docker"] }
            ]}
            process={[
                { title: "Business Workflow Discovery", desc: "We map your operational bottlenecks, team roles, and data input flows into clear technical specifications." },
                { title: "Figma UI/UX & Architecture", desc: "Interactive clickable prototypes for desktop and mobile, ensuring intuitive navigation before writing code." },
                { title: "Agile Development & Integrations", desc: "Sprint-by-sprint engineering with live preview links, automated tests, and third-party API wiring." },
                { title: "Deployment, Training & Support", desc: "Zero-downtime deployment, staff onboarding documentation, and ongoing maintenance coverage." }
            ]}
            faqs={[
                {
                    question: "Why build custom eCommerce instead of using Shopify or WooCommerce?",
                    answer: "Shopify takes transaction fees on top of high monthly subscription fees, and WooCommerce gets sluggish with large inventories. A custom Next.js storefront gives you sub-second page speeds, unlimited customization, and zero monthly platform cuts."
                },
                {
                    question: "Can this system handle tens of thousands of products and high traffic spikes?",
                    answer: "Yes. Engineered with headless microservice architecture, edge caching, and PostgreSQL, our systems easily scale during festival sales and viral traffic surges."
                },
                {
                    question: "Does it support Multi-Vendor Marketplace functionality?",
                    answer: "Yes. We can architect vendor dashboards where individual sellers manage products, fulfill orders, and receive automated commission payouts."
                }
            ]}
            relatedServices={[
                { title: "MERN Stack Development", href: "/mern-stack-development/", desc: "Custom full-stack web platforms." },
                { title: "Flutter App Development", href: "/flutter-app-development/", desc: "Cross-platform mobile apps for iOS and Android." },
                { title: "Hire Remote Kerala Developer", href: "/hire-kerala-developer-remotely/", desc: "Dedicated software engineering for GCC businesses." }
            ]}
            schemaData={schemaData}
            extraContent={
                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <h2 className="text-3xl font-black text-white">Outperform Bloated SaaS Storefronts with Sub-Second Headless Commerce</h2>
                    <p>Every 100ms delay in website load speed lowers eCommerce conversion rates by 7%. Traditional platforms like WooCommerce or standard Shopify themes often suffer from third-party plugin bloat.</p>
                    <p>We build custom headless eCommerce architectures where the front-facing store loads near-instantaneously, keeping shoppers engaged and maximizing completed purchases.</p>
                    <h3 className="text-2xl font-bold text-white">Tailored for Kerala, India & GCC Retail</h3>
                    <p>Includes native support for UPI single-tap checkout in India, alongside GCC payment gateways, bilingual English/Arabic layouts, and WhatsApp order notification webhooks.</p>
                </div>
            }
        />
    );
}
