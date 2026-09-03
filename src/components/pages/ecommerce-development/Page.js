import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { ShoppingCart, CreditCard, Box, TrendingUp, Smartphone, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: "E-commerce Website Developer Kerala | Online Store Setup | ANAGH K R",
    description: "Hire an expert e-commerce website developer in Kerala. We build custom online stores using modern tech like React & Node.js for high conversion and speed.",
    keywords: "ecommerce website developer kerala, online store creator kerala, ecommerce web design kochi, build online store kerala, custom ecommerce developer kerala, woocommerce alternative kerala",
    alternates: { canonical: "https://www.anaghkr.in/ecommerce-development/" },
    openGraph: {
        title: "E-commerce Website Developer Kerala | Custom Online Stores",
        description: "Hire an expert e-commerce website developer in Kerala. Custom online stores tailored for fast checkouts and high conversion rates.",
        url: "https://www.anaghkr.in/ecommerce-development/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "E-commerce Website Developer Kerala | ANAGH K R",
        description: "Custom e-commerce web development services in Kerala. We build high-conversion online stores.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-Commerce Website Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in/" },
    "serviceType": "E-Commerce Development",
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
    "description": "Custom E-commerce website and web app development focusing on high conversion, speed, and seamless payment integrations for businesses in Kerala.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/ecommerce-development/"
};

export default function EcommerceDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="E-Commerce Development"
            title="E-commerce Website Developer in"
            titleHighlight="Kerala"
            description="Launch your online store with a custom e-commerce solution built for speed and sales. From product catalogs to seamless payment gateways, I help Kerala businesses sell online effectively."
            heroStats={[
                { number: "24/7", label: "Selling" },
                { number: "100%", label: "Customizable" },
                { number: "Fast", label: "Checkout" },
                { number: "Secure", label: "Payments" },
            ]}
            whatYouGet={[
                { icon: <ShoppingCart size={22} />, title: "Custom Storefronts", desc: "Unique, conversion-optimized designs that guide your customers smoothly from product discovery to checkout." },
                { icon: <CreditCard size={22} />, title: "Payment Gateways", desc: "Integration with major payment providers like Razorpay, Stripe, and PayPal to accept cards, UPI, and net banking." },
                { icon: <Box size={22} />, title: "Inventory Management", desc: "Easy-to-use dashboards to manage your products, track stock levels, and fulfill orders efficiently." },
                { icon: <TrendingUp size={22} />, title: "SEO Optimized", desc: "Structured data for products, fast load times, and dynamic meta tags to ensure your items rank on Google." },
                { icon: <Smartphone size={22} />, title: "Mobile Ready", desc: "A flawless shopping experience across all mobile devices to capture customers on the go." },
                { icon: <ShieldCheck size={22} />, title: "Secure Transactions", desc: "SSL encryption, secure auth, and compliance with data protection standards to keep customer info safe." },
            ]}
            technologies={[
                { category: "Frontend Core", items: ["Next.js", "React", "Tailwind CSS"] },
                { category: "Backend & Logic", items: ["Node.js", "Express", "GraphQL"] },
                { category: "Database & APIs", items: ["MongoDB", "PostgreSQL", "Stripe API", "Razorpay API"] },
                { category: "Hosting & CDN", items: ["Vercel", "AWS", "Cloudflare"] },
            ]}
            process={[
                { title: "Discovery", desc: "We map out your product catalog, payment requirements, and target audience to plan the user journey." },
                { title: "Design", desc: "Creating high-fidelity mockups of your store, focusing on product pages, carts, and checkout flow." },
                { title: "Development", desc: "Building the custom store with modern tech, ensuring blazingly fast load times and a robust backend." },
                { title: "Launch & Support", desc: "Deploying the site, setting up analytics, and providing training on how to manage your new digital storefront." },
            ]}
            faqs={[
                { question: "Why not just use Shopify or WooCommerce?", answer: "While platforms like Shopify are great for starting out, they come with recurring fees, limited customization, and performance bottlenecks. A custom e-commerce site is a one-time investment that gives you absolute ownership, faster speed, and unlimited flexibility to scale." },
                { question: "Can you integrate local Indian payment gateways?", answer: "Yes! I routinely integrate Razorpay, Cashfree, and PayU, allowing you to accept UPI, RuPay, and domestic credit/debit cards seamlessly." },
                { question: "Will I be able to add products myself?", answer: "Absolutely. I provide a secure, user-friendly admin dashboard where you can easily add, edit, or remove products and manage orders without touching any code." },
                { question: "How long does an e-commerce site take to build?", answer: "A custom e-commerce solution typically takes 4 to 8 weeks depending on the complexity of features like user accounts, wishlists, and shipping integrations." },
            ]}
            relatedServices={[
                { title: "Web Development", desc: "Corporate and business websites", href: "/web-development/" },
                { title: "MERN Stack", desc: "Custom full-stack web applications", href: "/mern-stack-development/" },
                { title: "Mobile Apps", desc: "Bring your store to iOS and Android", href: "/mobile-app-development/" },
            ]}
            schemaData={schemaData}
            extraContent={
                <div className="space-y-8 text-gray-300">
                    <h2 className="text-3xl font-black text-white uppercase tracking-tight">Scale Your Business with a Dedicated E-Commerce Developer in Kerala</h2>
                    <p className="leading-relaxed">
                        The retail landscape has fundamentally shifted. If your business isn't selling online, you are missing out on significant revenue. As a specialized <strong>e-commerce website developer in Kerala</strong>, I help local brands, wholesalers, and entrepreneurs transition to the digital space with high-performance, custom-built online stores.
                    </p>
                    <p className="leading-relaxed">
                        Unlike off-the-shelf templates, a custom e-commerce platform allows for unique brand expression and optimized conversion funnels. This means your customers experience zero friction from the moment they land on your site to the final checkout click.
                    </p>
                    <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Features Built for Growth</h3>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Blazing Fast Speeds:</strong> Every millisecond counts in e-commerce. I build lightweight, server-rendered applications that load instantly.</li>
                        <li><strong>Advanced Product Search:</strong> Implement fast, typo-tolerant search so your customers can always find what they are looking for.</li>
                        <li><strong>Data-Driven Insights:</strong> Seamless integration with Google Analytics and Facebook Pixel to track your highest converting products and campaigns.</li>
                    </ul>
                </div>
            }
        />
    );
}
