import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Smartphone, Bell, MapPin, MessageSquare, CreditCard, Upload, Layers } from 'lucide-react';

export const metadata = {
    title: "Mobile App Developer Kerala | iOS & Android Apps | ANAGH K R",
    description: "Top mobile app developer in Kerala. We build high-quality, native-like iOS & Android applications using Flutter for businesses in Kochi, Calicut, and Trivandrum.",
    keywords: "mobile app developer kerala, app developer kerala, best app developer kerala, iOS app developer kerala, Android app developer kerala, flutter developer kerala, mobile app development kochi, app developer calicut, mobile app developer trivandrum, startup app developer kerala",
    alternates: { canonical: "https://www.anaghkr.in/mobile-app-development/" },
    openGraph: {
        title: "Mobile App Developer Kerala | iOS & Android Apps | ANAGH K R",
        description: "Top mobile app developer in Kerala. We build high-quality, native-like iOS & Android applications using Flutter for businesses in Kochi, Calicut, and Trivandrum.",
        url: "https://www.anaghkr.in/mobile-app-development/",
        type: "website",
        images: [
            {
                url: "https://www.anaghkr.in/assets/services/app.webp",
                width: 1200,
                height: 630,
                alt: "Mobile App Developer Kerala - iOS and Android App Development",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Developer Kerala | ANAGH K R",
        description: "Top mobile app developer in Kerala. We build high-quality, native-like iOS & Android applications using Flutter for businesses in Kochi, Calicut, and Trivandrum.",
        images: ["https://www.anaghkr.in/assets/services/app.webp"],
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in/" },
    "serviceType": "Mobile App Development",
    "areaServed": "Kerala, India",
    "description": "Cross-platform iOS and Android mobile application development using Flutter for businesses, startups, and enterprises across Kerala.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/mobile-app-development/"
};

export default function MobileAppDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="App Development"
            title="Mobile App Developer in"
            titleHighlight="Kerala"
            description="Turn your idea into a polished mobile app that users love. From startup MVPs to enterprise-grade apps — I am your local expert for cross-platform iOS and Android development in Kerala."
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
                { icon: <Layers size={22} />, title: "Popular App Examples", desc: "Food delivery apps, booking apps, custom web apps apps, education apps, healthcare apps, dating apps, chat apps, and service marketplace apps." },
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
                { question: "Where are you located in Kerala?", answer: "I build apps for businesses worldwide, but I am locally available for face-to-face meetings across Kerala, primarily in Kochi, Calicut (Kozhikode), and Trivandrum. I offer full support in both Malayalam and English." },
                { question: "How much does a mobile app cost in Kerala?", answer: "A simple mobile app starts from ₹20,000–₹40,000. Feature-rich apps with real-time tracking, payments, maps, and custom UI typically range ₹60,000–₹2,50,000. Contact me for a detailed estimate." },
                { question: "How long does it take to build an app?", answer: "An MVP typically takes 4–8 weeks. Full-featured apps take 3–6 months. I provide regular builds so you can track progress." },
                { question: "What type of apps do you build?", answer: "I build custom web apps, delivery, booking, education, healthcare, social, dating, chat, fintech wallets, and marketplace apps." },
                { question: "Do I need separate apps for iOS and Android?", answer: "Not with Flutter. A single Flutter codebase produces native apps for both iOS and Android, meaning you get both platforms at roughly the cost of building one." },
                { question: "Can you build a delivery or booking app?", answer: "Yes. I've built logistics and service booking apps with real-time GPS tracking, push notifications, payment integration, and driver dashboards." },
            ]}
            relatedServices={[
                { title: "Flutter App Development", desc: "Detailed Flutter mobile development", href: "/flutter-app-development/" },
                { title: "Chat App Development", desc: "Real-time messaging applications", href: "/chat-app-development/" },
                { title: "Dating App Development", desc: "Interactive safety-first matching apps", href: "/dating-app-development/" },
                { title: "Node.js Development", desc: "Backend APIs to power your app", href: "/nodejs-development/" },
                { title: "Web Development", desc: "Web counterpart to your mobile app", href: "/web-development/" },
            ]}
            schemaData={schemaData}
            extraContent={
                <div className="space-y-8 text-gray-300">
                    <h2 className="text-3xl font-black text-white uppercase tracking-tight">Why Hire a Dedicated Mobile App Developer in Kerala?</h2>
                    <p className="leading-relaxed">
                        Finding the right <strong>mobile app developer in Kerala</strong> can make or break your business. With the digital landscape evolving rapidly, having a robust mobile presence is no longer optional. Whether you are a startup in Kochi or an established enterprise in Trivandrum, custom mobile app development ensures you reach your target audience directly on their smartphones.
                    </p>
                    <p className="leading-relaxed">
                        As a top-rated <strong>app developer in Kerala</strong>, I specialize in creating high-performance, native-like iOS and Android applications. Unlike traditional agencies that might charge exorbitant fees with slow turnaround times, working with an independent expert guarantees direct communication, transparent pricing, and rapid delivery.
                    </p>
                    <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Comprehensive App Development Services</h3>
                    <p className="leading-relaxed">
                        My process covers every phase of the app development lifecycle. From initial UX/UI design to backend API integration using Node.js or Firebase, right down to App Store and Google Play Store deployment. If you're looking for a <strong>mobile app developer in Kerala</strong> who understands both the technical challenges and local market dynamics, you're in the right place.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Cross-Platform Excellence:</strong> Using Flutter to build apps that perform beautifully on both iOS and Android platforms simultaneously.</li>
                        <li><strong>Startup-Friendly MVPs:</strong> Fast-tracking development for startups in Kerala to help you test your idea in the market swiftly.</li>
                        <li><strong>Business Digitization:</strong> Creating custom ERPs, delivery apps, and booking systems tailored to Kerala's specific business needs.</li>
                    </ul>
                    <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">A Partner You Can Trust</h3>
                    <p className="leading-relaxed">
                        I don't just write code; I partner with you to ensure your app succeeds post-launch. This includes App Store Optimization (ASO), long-term maintenance, and scaling infrastructure as your user base grows.
                    </p>
                </div>
            }
        />
    );
}
