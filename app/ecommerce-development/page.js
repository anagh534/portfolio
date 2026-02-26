import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { ShoppingCart, CreditCard, Package, LayoutDashboard, Smartphone, Search } from 'lucide-react';

export const metadata = {
    title: "E-commerce Developer Kerala | Online Store Development | ANAGH K R",
    description: "Professional e-commerce development services in Kerala. WooCommerce, custom shopping carts, payment gateway integration, and online store solutions by ANAGH K R. Serving Kochi, Kozhikode, Kasaragod, Kannur, and all Kerala.",
    keywords: "e-commerce developer Kerala, online store development Kerala, WooCommerce developer Kerala, e-commerce website Kerala, payment gateway integration Kerala, online shopping website Kerala, e-commerce development Kochi, e-commerce developer Kozhikode, e-commerce developer Kasaragod, e-commerce website Kannur, Shopify developer Kerala, custom e-commerce Kerala, e-commerce development Thrissur, online shop Kerala, buy online website Kerala, e-commerce development company Kerala",
    alternates: { canonical: "https://www.anaghkr.in/ecommerce-development" },
    openGraph: {
        title: "E-commerce Developer Kerala | Online Store Development | ANAGH K R",
        description: "Professional e-commerce development — WooCommerce stores, custom shopping carts, and online selling platforms for Kerala businesses.",
        url: "https://www.anaghkr.in/ecommerce-development",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "E-commerce Developer Kerala | ANAGH K R",
        description: "Online store and e-commerce development services in Kerala.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-commerce Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
    "serviceType": "E-commerce Development",
    "areaServed": "Kerala, India",
    "description": "Full-featured online store development with payment gateway integration, inventory management, and order processing for businesses across Kerala.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/ecommerce-development"
};

export default function EcommerceDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="E-commerce Development"
            title="Online Stores That"
            titleHighlight="Drive Sales"
            description="High-converting e-commerce websites built to sell. From WooCommerce stores to custom-built shopping platforms — complete with payment gateways, inventory management, and mobile-first design for Kerala businesses."
            heroStats={[
                { number: "UPI", label: "Indian Payments" },
                { number: "Fast", label: "Checkout Flow" },
                { number: "Mobile", label: "First Design" },
                { number: "SEO", label: "Product Rankings" },
            ]}
            whatYouGet={[
                { icon: <ShoppingCart size={22} />, title: "Full Shopping Cart", desc: "Smooth add-to-cart, wishlist, cart management, and a frictionless checkout optimized for conversions." },
                { icon: <CreditCard size={22} />, title: "Payment Integration", desc: "Razorpay, PayPal, Stripe, UPI, net banking, and COD — all major Indian and international payment methods." },
                { icon: <Package size={22} />, title: "Inventory Management", desc: "Product catalog, stock tracking, low-stock alerts, variants (size, color), and bulk product import/export." },
                { icon: <LayoutDashboard size={22} />, title: "Order Dashboard", desc: "Admin panel to manage orders, update shipping status, process refunds, and view sales analytics." },
                { icon: <Smartphone size={22} />, title: "Mobile-First Shopping", desc: "Touch-optimized product pages, fast image loading, and one-tap checkout for mobile shoppers." },
                { icon: <Search size={22} />, title: "Product SEO", desc: "Schema markup for products, optimized URLs, category pages, and sitemaps for Google Shopping visibility." },
            ]}
            technologies={[
                { category: "Platforms", items: ["WooCommerce", "Custom Next.js", "Custom React", "Shopify", "Headless Commerce"] },
                { category: "Payment Gateways", items: ["Razorpay", "PayPal", "Stripe", "PayU", "CCAvenue", "UPI"] },
                { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "PHP / Laravel", "REST APIs"] },
                { category: "Logistics & Marketing", items: ["Shiprocket", "Delhivery API", "Email Marketing", "Google Shopping", "Coupons"] },
            ]}
            process={[
                { title: "Store Strategy", desc: "Identify your product catalog structure, customer journey, and conversion goals before design." },
                { title: "Design & UX", desc: "Category pages, product detail pages, and checkout flow designed in Figma for your review." },
                { title: "Development", desc: "Store built with robust backend, all products loaded, payment and shipping configured and tested." },
                { title: "Launch & SEO", desc: "Google Shopping setup, product schema, sitemap, and launch with performance benchmarking." },
            ]}
            faqs={[
                { question: "How much does an e-commerce website cost in Kerala?", answer: "A WooCommerce store with 50–100 products and standard features starts from ₹15,000–₹30,000. Custom-built e-commerce platforms with advanced features (multi-vendor, subscription, custom workflows) range from ₹50,000–₹2,00,000+." },
                { question: "Which payment gateway is best for Kerala businesses?", answer: "Razorpay is my top recommendation for Indian businesses — it supports UPI, cards, net banking, wallets, and EMI with excellent documentation and low transaction fees. I integrate Razorpay into all e-commerce projects by default." },
                { question: "Can I manage my own products after launch?", answer: "Yes. Every store includes an easy-to-use admin dashboard where you can add products, update prices, manage inventory, process orders, and run offers — no developer needed for day-to-day operations." },
                { question: "Can you build a multi-vendor marketplace?", answer: "Yes. I build multi-vendor marketplace platforms where multiple sellers can register, list products, and manage their own storefront — similar to Amazon or Flipkart but for your niche." },
                { question: "Do you build e-commerce apps too?", answer: "Yes. I can build a companion Flutter mobile app for your e-commerce store, enabling push notifications, faster browsing, and a dedicated shopping experience on iOS and Android." },
                { question: "Do you provide e-commerce development in Kochi and Kozhikode?", answer: "Yes, e-commerce services are available across all Kerala cities — Kochi, Kozhikode, Kasaragod, Kannur, Thrissur, Thiruvananthapuram, and Kollam — with remote service for all other locations." },
            ]}
            relatedServices={[
                { title: "WordPress Development", desc: "WooCommerce-based online stores", href: "/wordpress-development" },
                { title: "Next.js Development", desc: "High-performance headless stores", href: "/nextjs-development" },
                { title: "Mobile App Development", desc: "Shopping apps for iOS and Android", href: "/mobile-app-development" },
                { title: "Web Development", desc: "Custom web application development", href: "/web-development" },
                { title: "MERN Stack Development", desc: "Custom e-commerce backends", href: "/mern-stack-development" },
                { title: "React Development", desc: "React-powered store frontends", href: "/react-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
