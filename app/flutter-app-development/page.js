import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Smartphone, Gauge, Palette, Flame, Upload, Server } from 'lucide-react';

export const metadata = {
    title: "Flutter Developer Kerala | Mobile App Development iOS Android | ANAGH K R",
    description: "Expert Flutter developer in Kerala offering cross-platform mobile app development for iOS and Android. Business apps, startup MVPs, and enterprise mobile solutions by ANAGH K R. Serving Kochi, Kozhikode, Kasaragod, Kannur, and all Kerala.",
    keywords: "Flutter developer Kerala, mobile app development Kerala, Flutter app developer Kerala, iOS developer Kerala, Android developer Kerala, cross platform app development Kerala, Flutter developer Kochi, Flutter developer Kozhikode, Flutter developer Kasaragod, Flutter developer Kannur, Flutter app development Thrissur, Flutter developer Thiruvananthapuram, hire Flutter developer Kerala, Flutter app development company Kerala, Flutter startup app Kerala",
    alternates: { canonical: "https://www.anaghkr.in/flutter-app-development" },
    openGraph: {
        title: "Flutter Developer Kerala | iOS Android App Development | ANAGH K R",
        description: "Expert Flutter mobile app development for iOS and Android — business apps, startup MVPs, and enterprise mobile solutions across Kerala.",
        url: "https://www.anaghkr.in/flutter-app-development",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter Developer Kerala | ANAGH K R",
        description: "Cross-platform Flutter mobile app development services in Kerala.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flutter Mobile App Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in" },
    "serviceType": "Flutter Mobile App Development",
    "areaServed": "Kerala, India",
    "description": "Cross-platform iOS and Android mobile app development using Flutter and Dart for businesses across Kerala.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/flutter-app-development"
};

export default function FlutterAppDevelopmentPage() {
    return (
        <ServicePageTemplate
            badge="Flutter App Development"
            title="iOS & Android Apps"
            titleHighlight="With Flutter"
            description="Write once, ship to iOS and Android. Flutter delivers native-performance mobile apps from a single codebase — saving cost, time, and maintenance overhead without sacrificing user experience."
            heroStats={[
                { number: "2x", label: "Platforms, 1 Codebase" },
                { number: "60fps", label: "Smooth Animations" },
                { number: "24+", label: "Apps Delivered" },
                { number: "5+", label: "Years Experience" },
            ]}
            whatYouGet={[
                { icon: <Smartphone size={22} />, title: "iOS & Android", desc: "A single Flutter codebase that runs natively on both iOS and Android, with consistent UI and behavior across platforms." },
                { icon: <Gauge size={22} />, title: "Native Performance", desc: "Flutter compiles to native ARM machine code, delivering 60/120fps animations and smooth scrolling on all devices." },
                { icon: <Palette size={22} />, title: "Beautiful UI", desc: "Pixel-perfect, highly customizable UIs using Flutter's rich widget library and your brand's design language." },
                { icon: <Flame size={22} />, title: "Firebase Integration", desc: "Real-time database, push notifications, authentication, analytics, and cloud storage integrated seamlessly." },
                { icon: <Upload size={22} />, title: "App Store Publishing", desc: "End-to-end publishing to Google Play Store and Apple App Store, including store listing and review compliance." },
                { icon: <Server size={22} />, title: "API & Backend Integration", desc: "Connect to any REST or GraphQL API, with proper state management, offline support, and data caching." },
            ]}
            technologies={[
                { category: "Core Framework", items: ["Flutter", "Dart", "Material Design", "Cupertino Widgets", "Custom Widgets"] },
                { category: "State Management", items: ["BLoC / Cubit", "Provider", "Riverpod", "GetX", "MobX"] },
                { category: "Backend & Services", items: ["Firebase", "REST API", "GraphQL", "Supabase", "Dio / Http"] },
                { category: "Device & Native", items: ["Camera / Gallery", "GPS / Maps", "Push Notifications", "In-App Purchase", "Biometrics"] },
            ]}
            process={[
                { title: "Requirement & UX", desc: "Define user journeys, wireframes, and app flow before development. Figma prototypes for your approval." },
                { title: "Flutter Development", desc: "Feature-by-feature development with regular APK builds so you can test on real devices throughout." },
                { title: "Testing & QA", desc: "Unit tests, widget tests, and manual testing on multiple Android and iOS device sizes." },
                { title: "Store Submission", desc: "App store optimization (ASO), screenshots, descriptions, and submission handling for both stores." },
            ]}
            faqs={[
                { question: "Why choose Flutter over React Native?", answer: "Flutter uses its own rendering engine (Skia/Impeller), giving it more consistent UI across platforms and typically better performance than React Native's bridge-based architecture. Flutter is backed strongly by Google and has excellent long-term support." },
                { question: "How much does a Flutter app cost in Kerala?", answer: "A basic Flutter app (4–6 screens, REST API integration) starts from around ₹20,000–₹40,000. Feature-rich apps with real-time features, payments, and custom UI typically range from ₹50,000–₹2,00,000+. Contact for a free estimate." },
                { question: "How long does Flutter app development take?", answer: "A simple app takes 3–5 weeks. Medium-complexity apps (10–15 screens with API, auth, notifications) take 6–10 weeks. Enterprise-grade apps can take 3–6 months." },
                { question: "Can Flutter apps be published to both App Store and Play Store?", answer: "Yes, that's one of Flutter's biggest advantages. One codebase is compiled and published to both Google Play Store (Android) and Apple App Store (iOS), reducing development cost significantly." },
                { question: "Do you provide Flutter development across all Kerala cities?", answer: "Yes — Kochi, Kozhikode, Kasaragod, Kannur, Thrissur, Thiruvananthapuram, Kollam, Palakkad, Ernakulam, and beyond. Remote collaboration is available for clients anywhere in India." },
                { question: "Can you add new features to an existing Flutter app?", answer: "Absolutely. I can take over an existing Flutter project, add new features, fix bugs, upgrade dependencies, or completely redesign the UI." },
            ]}
            relatedServices={[
                { title: "Mobile App Development", desc: "Full mobile development overview", href: "/mobile-app-development" },
                { title: "MERN Stack Development", desc: "Backend APIs to power your mobile app", href: "/mern-stack-development" },
                { title: "Node.js Development", desc: "Scalable APIs for Flutter apps", href: "/nodejs-development" },
                { title: "Web Development", desc: "Web companion to your mobile app", href: "/web-development" },
                { title: "React Development", desc: "Web admin panels for your app", href: "/react-development" },
                { title: "E-commerce Development", desc: "Mobile shopping experiences", href: "/ecommerce-development" },
            ]}
            schemaData={schemaData}
        />
    );
}
