import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Smartphone, Bell, MapPin, MessageSquare, CreditCard, Upload } from 'lucide-react';

export const metadata = {
    title: "Mobile App Developer Kerala | iOS Android App Development | ANAGH K R",
    description: "Professional mobile app development services in Kerala — cross-platform iOS and Android apps using Flutter. Business apps, startup MVPs, and enterprise mobile solutions by ANAGH K R. Serving Kochi, Kozhikode, Kasaragod, and all Kerala.",
    keywords: "mobile app developer Kerala, mobile app development Kerala, iOS app developer Kerala, Android app developer Kerala, mobile app development Kochi, mobile app developer Kozhikode, mobile app development Kasaragod, mobile app developer Kannur, cross platform app Kerala, Android development Kerala, iOS development Kerala, hybrid app development Kerala, mobile app development company Kerala, startup app Kerala, business app development Kerala, app developer near me Kerala",
    alternates: { canonical: "https://www.anaghkr.in/mobile-app-development" },
    openGraph: {
        title: "Mobile App Developer Kerala | iOS & Android Apps | ANAGH K R",
        description: "Professional mobile app development — cross-platform iOS and Android apps using Flutter for businesses across Kerala.",
        url: "https://www.anaghkr.in/mobile-app-development",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Developer Kerala | ANAGH K R",
        description: "iOS and Android mobile app development services in Kerala by ANAGH K R.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
    "serviceType": "Mobile App Development",
    "areaServed": "Kerala, India",
    "description": "Cross-platform iOS and Android mobile application development using Flutter for businesses, startups, and enterprises across Kerala.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/mobile-app-development"
};

export default function MobileAppDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="Mobile App Development"
            title="Mobile Apps for"
            titleHighlight="iOS & Android"
            description="Turn your idea into a polished mobile app that users love. From startup MVPs to enterprise-grade apps — cross-platform iOS and Android development using Flutter, delivering native performance and beautiful design."
            heroStats={[
                { number: "iOS", label: "App Store" },
                { number: "Android", label: "Play Store" },
                { number: "1 Codebase", label: "Both Platforms" },
                { number: "24+", label: "Apps Delivered" },
            ]}
            whatYouGet={[
                { icon: <Smartphone size={22} />, title: "Cross-Platform Apps", desc: "One Flutter codebase delivering truly native-feeling apps on both iOS and Android — halving your cost." },
                { icon: <Bell size={22} />, title: "Push Notifications", desc: "FCM-powered push notifications to re-engage users with timely alerts, deals, and reminders." },
                { icon: <MapPin size={22} />, title: "GPS & Maps", desc: "Google Maps integration, live location tracking, geofencing, and location-based features." },
                { icon: <MessageSquare size={22} />, title: "In-App Chat", desc: "Real-time messaging with Firebase or custom WebSocket-based chat modules." },
                { icon: <CreditCard size={22} />, title: "In-App Payments", desc: "Razorpay, Stripe, PayPal, and in-app purchase integration for both Android and iOS." },
                { icon: <Upload size={22} />, title: "Store Submission", desc: "App store listing, screenshots, descriptions, and submission guidance to get your app live on both stores." },
            ]}
            technologies={[
                { category: "Development Framework", items: ["Flutter", "Dart", "Native Modules", "Platform Channels"] },
                { category: "State & Architecture", items: ["BLoC", "Provider", "Riverpod", "Clean Architecture", "MVVM"] },
                { category: "Backend & APIs", items: ["Firebase", "REST APIs", "GraphQL", "Supabase", "WebSockets"] },
                { category: "Device & Publishing", items: ["FCM Notifications", "Google Maps", "In-App Purchase", "App Store Connect", "Play Console"] },
            ]}
            process={[
                { title: "Idea & Scope", desc: "Define the app's core features, user personas, and MVP scope to keep the first release focused and fast." },
                { title: "Design", desc: "UX wireframes and polished Figma UI mockups reviewed and approved before any code is written." },
                { title: "Build & Test", desc: "Iterative development with regular TestFlight / APK builds so you test on real devices continuously." },
                { title: "Launch", desc: "Final testing, store submission, and go-live with post-launch monitoring and support." },
            ]}
            faqs={[
                { question: "How much does mobile app development cost in Kerala?", answer: "A simple mobile app (5–8 screens, basic API integration) starts from ₹20,000–₹40,000. Feature-rich apps with real-time, payments, maps, and custom UI typically range ₹60,000–₹2,50,000. Contact me for a detailed estimate." },
                { question: "How long does it take to build a mobile app?", answer: "An MVP typically takes 4–8 weeks. Full-featured apps with complex workflows, integrations, and custom backends take 3–6 months. I provide regular builds so you can track progress throughout." },
                { question: "Do I need separate apps for iOS and Android?", answer: "Not with Flutter. A single Flutter codebase produces fully native apps for both iOS and Android, meaning you get both platforms at roughly the cost of building one — without compromising on quality." },
                { question: "Can you build a delivery or booking app?", answer: "Yes. I've built logistics, service booking, and on-demand apps with real-time GPS tracking, push notifications, payment integration, and driver/provider dashboards." },
                { question: "Do you support the app after launch?", answer: "Yes. I offer maintenance packages for bug fixes, OS update compatibility, feature additions, and performance improvements post-launch." },
                { question: "Can my existing web API power my mobile app?", answer: "Absolutely. Flutter apps can connect to any existing REST or GraphQL API. If you already have a web backend, building a mobile frontend on top of it is straightforward and cost-effective." },
            ]}
            relatedServices={[
                { title: "Flutter App Development", desc: "Detailed Flutter mobile development", href: "/flutter-app-development" },
                { title: "Node.js Development", desc: "Backend APIs to power your app", href: "/nodejs-development" },
                { title: "MERN Stack Development", desc: "Full-stack solution with mobile app", href: "/mern-stack-development" },
                { title: "E-commerce Development", desc: "Mobile shopping experiences", href: "/ecommerce-development" },
                { title: "Web Development", desc: "Web counterpart to your mobile app", href: "/web-development" },
                { title: "React Development", desc: "Web admin panels for your mobile app", href: "/react-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
