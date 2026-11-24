import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Smartphone, Gauge, Palette, Flame, Upload, Server } from 'lucide-react';

export const metadata = {
    title: "Flutter Developer Kerala | iOS & Android App Expert | ANAGH K R",
    description: "Hire an expert Flutter developer in Kerala for iOS & Android apps, startup MVPs, and business solutions. Serving Kochi, Calicut & Kannur. Free consultation.",
    keywords: "Flutter developer Kerala, Flutter app developer Kerala, hire Flutter developer Kerala, Flutter app development company Kerala, flutter application development company kerala, flutter app developers in kochi, Flutter developer Kochi, Flutter developer Kozhikode, Flutter developer Kasaragod, Flutter developer Kannur, Flutter app development Thrissur, Flutter developer Thiruvananthapuram, mobile app development Kerala, cross platform app development Kerala, Flutter startup app Kerala",
    alternates: { canonical: "https://www.anaghkr.in/flutter-app-development/" },
    openGraph: {
        title: "Flutter Developer Kerala | iOS Android App Development | ANAGH K R",
        description: "Expert Flutter mobile app development for iOS and Android — business apps, startup MVPs, and enterprise mobile solutions across Kerala.",
        url: "https://www.anaghkr.in/flutter-app-development/",
        type: "website",
        images: [{
            url: "https://www.anaghkr.in/assets/services/app.webp",
            width: 1200,
            height: 630,
            alt: "Flutter App Development Services in Kerala"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter Developer Kerala | ANAGH K R",
        description: "Cross-platform Flutter mobile app development services in Kerala.",
        images: ["https://www.anaghkr.in/assets/services/app.webp"]
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flutter Mobile App Development Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in/" },
    "serviceType": "Flutter Mobile App Development",
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
    "description": "Cross-platform iOS and Android mobile app development using Flutter and Dart for businesses across Kerala.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/flutter-app-development/"
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
                { number: "3+", label: "Years Experience" },
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
                { title: "Mobile App Development", desc: "Full mobile development overview", href: "/mobile-app-development/" },
                { title: "MERN Stack Development", desc: "Backend APIs to power your mobile app", href: "/mern-stack-development/" },
                { title: "Node.js Development", desc: "Scalable APIs for Flutter apps", href: "/nodejs-development/" },
                { title: "Web Development", desc: "Web companion to your mobile app", href: "/web-development/" },
                { title: "React Development", desc: "Web admin panels for your app", href: "/react-development/" },
            ]}
            schemaData={schemaData}
            extraContent={
                <div className="space-y-12 text-gray-300">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
                            Leading Flutter Developer in Kerala & UAE
                        </h2>
                        <p className="leading-relaxed text-lg">
                            When it comes to building modern, performant, and visually stunning mobile applications, Google Flutter is the undisputed industry standard. As an experienced <strong>Flutter developer in Kerala</strong> with previous agency tenure at Canadian digital firm Dotscape, I harness the full power of Google's UI toolkit and Impeller rendering engine to craft natively compiled mobile applications for iOS and Android from a single codebase.
                        </p>
                        <p className="leading-relaxed mt-4">
                            For startups, commercial enterprises, and retail brands across <a href="/locations/kochi/" className="text-blue-400 hover:underline font-semibold">Kochi (Infopark)</a>, <a href="/locations/kozhikode/" className="text-blue-400 hover:underline font-semibold">Calicut (Cyberpark)</a>, <a href="/locations/thiruvananthapuram/" className="text-blue-400 hover:underline font-semibold">Trivandrum (Technopark)</a>, and the <a href="/locations/dubai/" className="text-blue-400 hover:underline font-semibold">UAE & GCC region</a>, choosing Flutter cuts development and maintenance costs by up to 50% without compromising on 60fps/120fps native performance.
                        </p>
                    </div>

                    {/* Featured Production Case Studies */}
                    <div className="p-8 rounded-[36px] bg-white/[0.03] border border-white/10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                            Proven Production Track Record
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                            Real-World Flutter Apps Engineered for Scale
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                                <h4 className="text-xl font-bold text-white">DamMonitor (10k+ Users)</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Real-time flood alert and reservoir water level tracking mobile app built for Kerala residents. Features background API sync, low-latency push notifications, and offline data caching.
                                </p>
                                <a href="/blog/dammonitor-kerala-dam-monitoring-app-real-time-water-levels-2026/" className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-blue-300 uppercase tracking-wider">
                                    Read Case Study &rarr;
                                </a>
                            </div>
                            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                                <h4 className="text-xl font-bold text-white">QuickTransfer (P2P File Sharing)</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    High-speed local Wi-Fi peer-to-peer file transfer utility connecting macOS and Android devices without internet or cloud intermediaries. Direct socket streaming.
                                </p>
                                <a href="/blog/quicktransfer-mac-android-offline-file-sharing/" className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-blue-300 uppercase tracking-wider">
                                    Read Case Study &rarr;
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">
                            Why Hire a Specialized Flutter Developer Over Generic Agencies?
                        </h3>
                        <p className="leading-relaxed">
                            Working directly with a dedicated <strong>Flutter app developer in Kochi and Kerala</strong> eliminates the middleman, project manager miscommunications, and heavy agency markup. You get direct senior engineering collaboration, weekly APK builds you can test on real devices, and full intellectual property ownership.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li><strong className="text-white">Custom UI & Micro-Interactions:</strong> Smooth 60fps/120fps animations, custom design system implementation, and dark/light mode theming.</li>
                            <li><strong className="text-white">Robust State Management:</strong> Enterprise architecture using BLoC, Riverpod, or Provider with clean dependency separation.</li>
                            <li><strong className="text-white">Native Hardware Bridging:</strong> Geofencing, GPS tracking, Bluetooth BLE peripherals, Camera/Gallery, and biometrics.</li>
                            <li><strong className="text-white">App Store & Play Store Launch:</strong> End-to-end management of iOS App Store and Google Play Store compliance, review approvals, and App Store Optimization (ASO).</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">
                            Remote Collaboration for Dubai, UAE & International Founders
                        </h3>
                        <p className="leading-relaxed">
                            Dubai and Gulf businesses save between 60% and 70% in software development costs by hiring remote senior Flutter developers from Kerala. With only a 1.5-hour time difference between the UAE and Indian Standard Time (IST), you benefit from seamless real-time daily coordination via Slack, WhatsApp, and Google Meet.
                        </p>
                    </div>
                </div>
            }
        />
    );
}
