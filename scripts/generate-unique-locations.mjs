import fs from 'fs';
import path from 'path';

const configMap = {
    kochi: {
        cityName: "Kochi",
        metaTitle: "Flutter & Website Developer in Kochi | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Kochi, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Kochi, Kerala.",
        description: "Professional web development and mobile app development in Kochi, Kerala. Offering custom website design, local store e-commerce setups, mobile-first Flutter apps, and technical search engine optimization for local boutiques, academies, clinics, and personal brands.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Custom digital solutions built specifically for Kochi's local shops, independent service providers, and creator portfolios."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Enabling easy-to-manage web pages, simple contact forms, and WhatsApp contact buttons for local businesses."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Building responsive cross-platform Flutter applications to connect with Kochi's active mobile consumer base."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Optimizing code structures and local keyword lists to rank higher on Google search results in Kochi."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Premium React & Next.js website design. I build clean, fast, and responsive portfolio sites that establish your brand online.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Secure online store setup. Built with simple product lists, Razorpay/UPI payment gateways, and easy checkout flows.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Native-performing iOS & Android apps built using Flutter to showcase your services and engage users.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "Custom WordPress setups and landing pages. Responsive designs built with security, speed, and easy-to-use admin panels for local studios and blogs.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "Custom admin dashboards and secure database systems built to organize your records and manage inquiries.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Rank higher with on-page SEO, speed optimization, and Google Maps local profile setup.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Transparent scope, milestone-based updates, and active collaboration from planning to deployment."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Clearly outlined phases with realistic targets, reviews, and post-launch verification."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Pages and schema markup optimized to target local search queries."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Pricing based on project requirements, aligned with small business budgets."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Business Website Concept",
                description: "A high-performance Next.js company profile with custom forms, WhatsApp click-to-chat, and optimized local schema.",
                tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "E-commerce Concept",
                description: "A conversion-friendly online retail storefront with customizable shopping cards, Razorpay integration, and mobile layouts.",
                tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile App Concept",
                description: "A cross-platform Flutter utility showcasing user profile onboarding, push notification alerts, and API dashboards.",
                tech: ["Flutter", "Node.js API", "Notifications", "Dashboard"]
            }
        ]
    },
    thiruvananthapuram: {
        cityName: "Trivandrum",
        folderName: "thiruvananthapuram",
        componentName: "TrivandrumServices",
        metaTitle: "Flutter & Website Developer in Trivandrum | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Trivandrum, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Trivandrum, Kerala.",
        description: "Professional web development and mobile app development services in Thiruvananthapuram (Trivandrum), Kerala. Offering customized web pages, WordPress development, MERN dashboards, and robust cross-platform mobile apps for local clinics, academies, and creators.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Custom web layouts designed specifically for Trivandrum's local educators, clinical practices, and freelance professionals."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Focusing on clean booking systems, portfolio showcases, and clear calls to action for local clients."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Developing native-performing Android & iOS apps with clean layouts for Trivandrum users."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Implementing schema markup and page speed best practices to drive search traffic in Trivandrum."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Tailored Next.js website creation in Trivandrum. I specialize in fast-loading portfolios and responsive service websites.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Conversion-optimized e-commerce in Trivandrum. Integrated secure checkouts, simple cart listings, and UPI payment options.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Get native-performing iOS & Android mobile apps in Trivandrum using Flutter for clean performance.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "WordPress website building in Trivandrum. Custom themes, security audits, and easy-to-use admin backends for local blogs and portfolios.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "MERN stack web application development in Trivandrum. Secure databases, user roles, and interactive frontends.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Technical search engine optimization in Trivandrum. Fast page loads, semantic HTML tags, and clean schema markup.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Clear explanations of features, milestone logs, and direct access during development."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Logical delivery stages, ensuring each feature is tested and reviewed before launch."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Code layouts and metadata structured to rank for local searches in Trivandrum."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Competitive pricing models structured around the feature list and launch roadmap."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Professional Profile Concept",
                description: "A fast-loading React website featuring modern service grids, inquiry forms, and semantic tag structures.",
                tech: ["React.js", "SEO Metadata", "Inquiry Forms", "WhatsApp CTA"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Online Store Concept",
                description: "A secure online storefront with integrated shopping carts, simple checkout forms, and secure local payment options.",
                tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile App Concept",
                description: "An iOS & Android application mockup featuring user authentication, push alerts, and local data storage options.",
                tech: ["Flutter", "Local SQLite", "Notifications", "Dashboard"]
            }
        ]
    },
    kozhikode: {
        cityName: "Kozhikode",
        metaTitle: "Flutter & Website Developer in Kozhikode | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Kozhikode, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Kozhikode, Kerala.",
        description: "Professional web development and Flutter mobile app development services in Kozhikode, Kerala. Designing custom React portals, WooCommerce stores, MERN dashboards, and SEO assets for retail boutiques, clinics, and personal portfolios.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "High-performance digital platforms created for Kozhikode's retail boutiques, home bakers, and creative portfolios."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Unlocking simple online order catalogs and WhatsApp inquiry buttons for local shops."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Engineering fast, touch-friendly Flutter mobile apps to drive user retention for Kozhikode users."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Fine-tuning meta tags, search layouts, and local map SEO elements for Kozhikode visibility."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Modern React web development in Kozhikode. Get high-performance, responsive sites with custom layouts and clean semantic code.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Responsive online stores in Kozhikode. I build shopping portals with secure inventory controls, payment setups, and smooth UI.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Cross-platform mobile app development in Kozhikode. I construct interactive Flutter apps with responsive user screens.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "WordPress website development in Kozhikode. Clean theme code, custom service layouts, and search-friendly structures.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "Full-stack MERN development in Kozhikode. I build secure databases, custom admin dashboards, and Express APIs.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Local SEO optimization in Kozhikode. I adjust page architectures, meta tags, and local maps queries to boost ranking.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Open chat channel, weekly milestone summaries, and prompt feedback loop."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Organized project phases with regular code commits and performance checks."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Targeted optimization targeting Kozhikode search habits and local maps terms."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Budget-aligned project estimations based on custom features and design layouts."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Service Directory Concept",
                description: "A responsive business showcase page featuring localized schema data, direct call buttons, and fast static loading.",
                tech: ["Next.js", "Static Export", "Lead Forms", "WhatsApp CTA"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Retail E-commerce Concept",
                description: "A mobile-first shopping site featuring automated tax estimations, instant payment forms, and custom product views.",
                tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile App Concept",
                description: "A Flutter mobile utility showcasing location-based searches, customer push alerts, and database integration.",
                tech: ["Flutter", "Node.js API", "Notifications", "Dashboard"]
            }
        ]
    },
    thrissur: {
        cityName: "Thrissur",
        metaTitle: "Flutter & Website Developer in Thrissur | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Thrissur, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Thrissur, Kerala.",
        description: "Professional web development and mobile app development services in Thrissur, Kerala. Building high-performance websites, custom booking setups, WordPress templates, and cross-platform apps to help local boutiques, independent studios, and service portfolios.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Clean, responsive business sites optimized for Thrissur's independent academies, local photographers, and shops."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Implementing simple contact methods and clear services showcases to turn site visitors into local clients."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Creating lightweight, modern mobile apps for Thrissur clients demanding smooth on-the-go access."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Boosting local visibility in Thrissur search queries with semantic HTML and optimized speed scores."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Custom business websites in Thrissur using Next.js and Tailwind. I create fast, secure, and mobile-friendly business portfolios.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Secure retail e-commerce in Thrissur. Modern product grids, automated email/WhatsApp alerts, and simple payment integrations.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Hire an expert Flutter developer in Thrissur to deliver clean, modern, and interactive mobile apps.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "Custom WordPress sites in Thrissur. Optimized for local services, clinics, and businesses with simple admin pages.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "Database-driven web apps in Thrissur. Custom MERN solutions featuring secure user accounts and responsive views.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Google search visibility optimization in Thrissur. High speed index setup, metadata checks, and schema generation.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Responsive check-ins, straightforward specifications, and clear project updates."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Detailed execution plan, delivering working versions at every milestone."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Structured headers and metadata targeting local service terms in Thrissur."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Flexible billing structures matching specific feature requests and client priorities."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Agency Portal Concept",
                description: "A modern React business page featuring interactive pricing cards, simple booking forms, and high-performance loads.",
                tech: ["React.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Shopping Cart Concept",
                description: "A clean online retail store with customized cart controls, Razorpay payment integrations, and inventory filters.",
                tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile App Concept",
                description: "A cross-platform mobile app featuring user onboarding flows, real-time alert updates, and database storage.",
                tech: ["Flutter", "Node.js API", "Notifications", "Dashboard"]
            }
        ]
    },
    ernakulam: {
        cityName: "Ernakulam",
        metaTitle: "Flutter & Website Developer in Ernakulam | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Ernakulam, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Ernakulam, Kerala.",
        description: "Professional web development and mobile app development services in Ernakulam, Kerala. Custom designed for local boutique shops, tutors, clinics, and personal brands looking for clean, indexable code.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Sleek, scalable React web designs tailored for Ernakulam's independent consultants, academies, and small shops."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Boosting online inquiries, simple sales paths, and user feedback channels for local services."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Engineering next-generation Flutter apps and responsive web interfaces for Ernakulam mobile users."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Developing search-engine-ready React and Next.js sites that rank top for Ernakulam search terms."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Next.js web development in Ernakulam. I build clean, scalable, and responsive web platforms for modern businesses.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Custom e-commerce layouts in Ernakulam. Responsive product grids, secure payments, and simplified catalog managers.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Scalable Flutter mobile app engineering in Ernakulam. I build native-grade apps with secure API integrations.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "WordPress development in Ernakulam. I build custom themes, secure page builders, and responsive web layouts.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "Full-stack MERN stack development in Ernakulam. High-performance databases, custom APIs, and secure roles.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "SEO optimization and performance in Ernakulam. I tune Core Web Vitals, write schema data, and target search keywords.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Professional progress updates, detailed specifications, and responsive developer access."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Agile delivery sprints, ensuring functional builds are ready for review."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Targeted SEO and performance tuning for Ernakulam location searches."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Transparent quotes tailored to freelance requirements and small portfolios."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Freelance Portfolio Concept",
                description: "A fast Next.js landing page featuring interactive elements, signup forms, and search engine optimizations.",
                tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Retail Store Concept",
                description: "A conversion-friendly storefront featuring user order flows, payment options, and automated invoices.",
                tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile App Concept",
                description: "An iOS & Android mobile application showcasing offline database support, API dashboards, and push notifications.",
                tech: ["Flutter", "Node.js API", "Notifications", "Dashboard"]
            }
        ]
    },
    calicut: {
        cityName: "Calicut",
        metaTitle: "Flutter & Website Developer in Calicut | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Calicut, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Calicut, Kerala.",
        description: "Professional web development and mobile app development in Calicut, Kerala. Custom designed for local creators, shops, clinics, and service portfolios looking for optimized SEO.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Modern web portals and custom setups designed to elevate Calicut's local event planners and creative portfolios."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Streamlining the digital onboarding process and optimizing client lead pathways for Calicut businesses."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Developing intuitive mobile app interfaces using Flutter for Calicut's customer-focused businesses."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Improving search index rates with clean canonical links and targeted local Calicut keywords."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "High-performance React sites in Calicut. Custom designs engineered for optimal speeds, security, and responsive layouts.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Modern e-commerce store design in Calicut. User-friendly checkouts, secure online banking options, and clean mobile performance.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Modern mobile app development in Calicut. Responsive iOS & Android apps built using the powerful Flutter framework.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "WordPress theme customization in Calicut. Get secure, SEO-optimized business blogs and corporate websites.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "Scalable MERN web systems in Calicut. Robust Express backend routers, secure Mongo models, and dynamic React templates.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Technical SEO tuning in Calicut. Schema data insertion, sub-second performance audits, and local ranking audits.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Clear project scope documents, regular updates, and responsive support channels."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Systematic milestones, including code reviews, speed tests, and client previews."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "On-page search optimization targeting local Calicut audience queries."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Value-focused pricing quotes based on exact specifications and timelines."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Service Profile Concept",
                description: "A clean React business profile with automated booking links, WhatsApp CTA buttons, and local SEO schema.",
                tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Boutique E-commerce Concept",
                description: "A conversion-oriented online shopping platform with cart systems, Razorpay payment modules, and fast checkouts.",
                tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile App Concept",
                description: "A custom Flutter app mock with interactive catalogs, real-time notifications, and API-based database flows.",
                tech: ["Flutter", "Node.js API", "Notifications", "Dashboard"]
            }
        ]
    },
    kannur: {
        cityName: "Kannur",
        metaTitle: "Flutter & Website Developer in Kannur | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Kannur, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Kannur, Kerala.",
        description: "Professional web development and mobile app development services in Kannur, Kerala. Offering custom website design, local store e-commerce setups, mobile-first Flutter apps, and technical search engine optimization for local boutiques, dental practices, and personal portfolios.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Professional website setups customized for Kannur's local tutors, dental clinics, and personal brands."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Providing simple WhatsApp CTA buttons, maps directions, and contact forms for Kannur small businesses."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Building clean, mobile-first business templates and responsive apps for Kannur local markets."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Building lightweight pages optimized to rank on Google for local Kannur service searches."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Custom business site design in Kannur. Fast-loading, responsive web portals built with React and optimized for local traffic.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Local store e-commerce setup in Kannur. Fast mobile cart experiences, secure payment gateways, and straightforward admin controls.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Professional Flutter developer in Kannur. Get native-performing iOS & Android mobile apps with clean codebase structure.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "WordPress website creation in Kannur. Easy-to-manage local business portfolios, custom layouts, and search optimization.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "Database web apps in Kannur. Secure React dashboards with Node.js/MongoDB APIs built for local operations.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Local search engine visibility in Kannur. Page speed optimization, structural meta tags, and schema validation.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Friendly developer updates, clear project roadmaps, and prompt replies."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Structured release cycles, ensuring the site is tested on multiple screen sizes."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Page content and tags optimized for local searches in Kannur districts."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Honest, scope-based pricing quotes with no hidden maintenance fees."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Local Shop Concept",
                description: "A clean business website layout with maps integrations, custom contact forms, and local SEO setup.",
                tech: ["Next.js", "SEO Metadata", "Maps", "WhatsApp CTA"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Boutique E-commerce Concept",
                description: "A simple e-commerce setup with Razorpay integrations, mobile-ready shopping views, and inventory grids.",
                tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile Utility Concept",
                description: "A Flutter application concept displaying basic user registers, instant alerts, and secure databases.",
                tech: ["Flutter", "SQLite", "Notifications", "API"]
            }
        ]
    },
    kasaragod: {
        cityName: "Kasaragod",
        metaTitle: "Flutter & Website Developer in Kasaragod | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Kasaragod, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Kasaragod, Kerala.",
        description: "Professional web development and mobile app development services in Kasaragod, Kerala. Custom website designs, lightweight e-commerce storefronts, and cross-platform Flutter applications optimized for local shops and personal portfolios.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Lightweight, highly optimized web layouts designed for Kasaragod's local shops and personal portfolios."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Driving business inquiries and local discoverability through clean, modern lead collection architectures."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Structuring clean mobile applications and responsive websites that perform perfectly on slow networks."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Enforcing modern SEO rules, fast load speeds, and search-friendly layouts for Kasaragod pages."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Clean website development in Kasaragod. Lightweight static pages and custom React applications with clean mobile designs.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Lightweight e-commerce pages in Kasaragod. Clean layouts, simplified search filters, and direct customer contact integrations.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Lightweight mobile apps in Kasaragod. Built using Flutter for quick load times and offline support.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "Lightweight WordPress setup in Kasaragod. Clean business pages, secure plugins, and fast loading configurations.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "Lightweight MERN web tools in Kasaragod. Simple database forms, clean Express backends, and responsive React grids.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "SEO and performance optimization in Kasaragod. Semantic HTML setups, speed improvements, and search visibility.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Direct developer access, easy scope definitions, and prompt milestone updates."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Reliable delivery schedules with security checks and responsiveness audits."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Local search optimization targeting Kasaragod business directories."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Affordable project estimations based on exact user requests and pages."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Retail Landing Concept",
                description: "A fast static website featuring contact forms, WhatsApp links, and search-optimized tags.",
                tech: ["HTML5", "CSS3", "JavaScript", "WhatsApp CTA"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Small Shop Concept",
                description: "A lightweight shopping cart setup with direct UPI payments, item filters, and mobile-friendly grids.",
                tech: ["E-commerce", "UPI Payments", "Fast checkout", "Alt tags"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Flutter Mockup Concept",
                description: "A mobile application concept featuring offline local registers, simple layouts, and fast loading APIs.",
                tech: ["Flutter", "Hive Local DB", "Clean UI", "API Mock"]
            }
        ]
    },
    kanhangad: {
        cityName: "Kanhangad",
        metaTitle: "Flutter & Website Developer in Kanhangad | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Kanhangad, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Kanhangad, Kerala.",
        description: "Professional web development and mobile app development services in Kanhangad, Kerala. Build customized Next.js personal pages, WordPress templates, mobile app utilities, and local SEO optimizations tailored for local shops and services.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Custom landing pages and business portals tailored for Kanhangad's local studios and retail stores."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Creating simple online schedules and WhatsApp-driven booking flows for local Kanhangad service providers."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Developing fast, responsive mobile layouts and easy-to-use Flutter apps for Kanhangad services."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Optimizing titles, meta tags, and local maps listings to boost Kanhangad business visibility."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Responsive web portal creation in Kanhangad. Premium designs focusing on speed, clear navigation, and local optimization.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Retail e-commerce setups in Kanhangad. Easy catalog management, Razorpay payment integrations, and responsive checkout views.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Custom mobile apps in Kanhangad. I deliver responsive Flutter applications with clean, interactive user elements.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "WordPress site setup in Kanhangad. Custom local service themes, responsive galleries, and security-minded setups.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "MERN stack web development in Kanhangad. Clean Node.js APIs, MongoDB integration, and responsive React controls.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Local SEO and site speed in Kanhangad. Optimization of search listings, keyword structures, and page assets.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Simple project summaries, milestone tracking, and active developer support."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Logical development stages, with mobile-readiness tests before launch."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Search visibility optimization targeting Kanhangad service searches."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Practical pricing options aligned with feature lists and launch schedules."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Business Listing Concept",
                description: "A lightweight Next.js portal featuring responsive services grids, WhatsApp CTA, and local search schema.",
                tech: ["Next.js", "CSS Grid", "WhatsApp CTA", "SEO tags"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "E-commerce Layout Concept",
                description: "A mobile-first shopping layout with integrated UPI checkouts, item listings, and clean code paths.",
                tech: ["E-commerce", "Mobile Grid", "Razorpay", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Flutter Client Concept",
                description: "A cross-platform mobile utility featuring simple user profiles, push alerts, and API integration.",
                tech: ["Flutter", "JSON API", "Alerts", "Profile UI"]
            }
        ]
    },
    palakkad: {
        cityName: "Palakkad",
        metaTitle: "Flutter & Website Developer in Palakkad | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Palakkad, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Palakkad, Kerala.",
        description: "Professional web development and mobile app development services in Palakkad, Kerala. Build customized Next.js portfolios, WordPress templates, mobile app utilities, and local SEO optimizations tailored for local shops and service providers.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Lightweight, SEO-friendly websites developed for Palakkad's local trainers, tuition hubs, and retail stores."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Helping Palakkad service businesses display services online and capture client inquiries efficiently."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Structuring lightweight mobile experiences and simple Flutter apps built for reliability and speed."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Configuring SEO metadata and image alt tags to boost Palakkad local directories on search."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Lightweight website design in Palakkad. Get fast, responsive, and SEO-optimized HTML/React business portals.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Product catalog and e-commerce setups in Palakkad. Clean digital listings with Razorpay gateway integrations and secure flow.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Lightweight mobile app design in Palakkad. Custom Flutter apps featuring stable performance and simple layouts.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "WordPress site design in Palakkad. Simple, fast-loading corporate themes with secure page management systems.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "Custom admin portals in Palakkad. Full-stack MERN portals engineered for simple data entry and secure connections.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Local search ranking improvements in Palakkad. Fast-loading pages, search-friendly titles, and metadata audits.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Direct developer communication, detailed project logs, and quick feedback loops."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Carefully planned delivery steps, guaranteeing functional mockups at every phase."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Structured JSON-LD schema layouts matching Palakkad local search terms."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Cost-effective estimates matching project scope and functional requirements."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Local Showcase Concept",
                description: "A lightweight static business page featuring product galleries, contact forms, and custom local search meta.",
                tech: ["React.js", "TailwindCSS", "SEO Meta", "Contact Form"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Simple Commerce Concept",
                description: "A secure shopping portal demo with direct payment buttons, customizable listings, and quick mobile checkout.",
                tech: ["E-commerce", "Razorpay", "UPI", "Fast checkouts"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile Dashboard Concept",
                description: "A cross-platform Flutter utility showing data tracking graphs, user settings, and secure login screens.",
                tech: ["Flutter", "Line charts", "Secure Local Storage", "Charts API"]
            }
        ]
    },
    kollam: {
        cityName: "Kollam",
        metaTitle: "Flutter & Website Developer in Kollam | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Kollam, Kerala. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Kollam, Kerala.",
        description: "Professional web development, ecommerce platforms, and Flutter mobile apps in Kollam (Quilon), Kerala. Serving boutiques, local service clinics, academies, and retail shops with clean, optimized code and native performance.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Reliable custom portals and booking systems matching the needs of Kollam's local clinics and family businesses."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Creating straightforward quote inquiry forms and retail-to-online conversion funnels for Kollam local shops."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Designing responsive mobile screens and fast Flutter applications optimized for Kollam retail services."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Applying structured JSON-LD data and clean index paths to rank Kollam service sites on Google."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Professional web development in Kollam. I build lightweight, responsive websites with quick load times and clean code bases.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Wholesale and retail e-commerce in Kollam. Simple shopping cart structures, direct UPI integrations, and optimized checkout pages.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Custom mobile app creation in Kollam. I develop fast, responsive Flutter applications with clean database connections.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "Clean WordPress portals in Kollam. Lightweight business themes, optimized speeds, and responsive local listings.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "MERN stack dashboard creation in Kollam. Secure API setups, custom MongoDB databases, and react user portals.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Technical site speed and local SEO in Kollam. Clean heading structures, image alt tags, and JSON-LD schemas.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Clear communication, documented feature lists, and regular check-in sessions."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Step-by-step release process, including QA tests and mobile-responsiveness audits."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Local SEO optimization targeting search terms in Kollam and local hubs."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Pricing options designed around project complexity and launch deadlines."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Store Showcase Concept",
                description: "A high-speed React website with inquiries checklists, product directories, and local SEO schema setups.",
                tech: ["React.js", "SEO Metadata", "Directory schema", "WhatsApp CTA"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Agro Store Concept",
                description: "An online bulk booking platform supporting direct UPI checkouts, tax calculators, and admin invoice views.",
                tech: ["E-commerce", "Bulk Orders", "UPI Gateways", "Calculators"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Local Delivery App Concept",
                description: "A Flutter app mockup displaying interactive shop lists, custom notifications, and backend REST APIs.",
                tech: ["Flutter", "REST APIs", "Local JSON", "Listings UX"]
            }
        ]
    },
    mangalore: {
        cityName: "Mangalore",
        state: "Karnataka",
        metaTitle: "Flutter & Website Developer in Mangalore | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Mangalore. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Mangalore, Karnataka.",
        description: "Professional website development and mobile app development services in Mangalore, Karnataka. Get custom designed React frontends, secure checkouts, native iOS & Android Flutter apps, and schema-structured local SEO architectures.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Robust website designs and clean portfolios built for Mangalore's local educators, agencies, and clinics."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Optimizing landing page structures to capture student, patient, or client inquiries for Mangalore portfolios."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Designing feature-rich mobile app prototypes and web screens optimized for Mangalore users."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Designing schema-rich pages that help Mangalore educational and local sites stand out on Google."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Professional web development in Mangalore. Custom-tailored React sites featuring sub-second load speeds and responsive layouts.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Secure digital storefronts in Mangalore. I build clean shopping carts with payment gateway integrations and admin setups.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Mobile app development in Mangalore. Hire a Flutter expert to design custom iOS & Android app prototypes.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "Custom WordPress designs in Mangalore. Get responsive layouts, lightweight plugins, and search engine friendly code.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "Full-stack web engineering in Mangalore. I build secure React web portals connected to Express/Node.js servers.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Technical SEO and speed tuning in Mangalore. I implement rich schema markups, image optimizations, and fast loads.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Clear project definitions, milestone-based updates, and open feedback loops."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Timely delivery phases, ensuring code compiles cleanly at every release."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Technical metadata optimization targeting Mangalore search terms."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Competitive project estimates based on features and layout designs."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Clinic Website Concept",
                description: "A secure React layout with contact forms, responsive calendar slots, and optimized local metadata.",
                tech: ["React.js", "SEO Metadata", "Forms", "Calendar API"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Shopping Portal Concept",
                description: "An online store setup featuring customizable shopping carts, secure checkout, and basic order trackers.",
                tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile App Concept",
                description: "A mobile application concept featuring user onboarding, custom alerts, and REST API database links.",
                tech: ["Flutter", "Node.js API", "Mockups", "User UX"]
            }
        ]
    },
    coimbatore: {
        cityName: "Coimbatore",
        state: "Tamil Nadu",
        metaTitle: "Flutter & Website Developer in Coimbatore | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Coimbatore, Tamil Nadu. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Coimbatore, Tamil Nadu.",
        description: "Professional website developer and cross-platform Flutter mobile app coder in Coimbatore, Tamil Nadu. Creating scalable Next.js company portals, robust local shop catalogs, MERN database layouts, and search-optimized architectures.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Fast-loading websites engineered for Coimbatore's local retailers, design studios, and freelance professionals."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Building efficient local inquiry grids and product directories to capture regional and online leads."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Developing clean Flutter mobile utilities and responsive web catalogs for Coimbatore local users."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Structuring semantic code bases to target search ranking for Coimbatore local terms."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Custom corporate website design in Coimbatore. Get high-speed, secure, and mobile-friendly Next.js web applications.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Custom e-commerce in Coimbatore. Scalable shopping carts, simple order forms, and secure payment integrations.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Engineering custom mobile utilities in Coimbatore. Cross-platform Flutter apps with robust database connections.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "WordPress development in Coimbatore. Custom theme structures, fast-loading assets, and secure backend integration.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "MERN stack developer in Coimbatore. Custom CRM dashboards, secure databases, and high-performance Express APIs.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Search visibility optimization in Coimbatore. Semantic tags, structured schemas, and speed improvements.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Direct project tracking, detailed technical summaries, and quick reviews."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Structured project milestones, ensuring optimal performance from day one."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "On-page keyword structures targeting Coimbatore local service searches."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Pricing packages designed around exact modules and launch roadmaps."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Store Catalog Concept",
                description: "A high-speed React database-driven catalog with inquiry checklists and local SEO tags.",
                tech: ["Next.js", "B2C catalog", "SEO Tags", "Contact Form"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "Retail Store Concept",
                description: "A secure shopping site featuring custom order forms, Razorpay payments, and responsive cart structures.",
                tech: ["E-commerce", "Razorpay integration", "Retail UX", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Utility App Concept",
                description: "A Flutter application displaying offline database inputs, chart visualizers, and notification alerts.",
                tech: ["Flutter", "Local SQLite", "Offline Support", "Charts"]
            }
        ]
    },
    chennai: {
        cityName: "Chennai",
        state: "Tamil Nadu",
        metaTitle: "Flutter & Website Developer in Chennai | ANAGH K R",
        metaDesc: "Professional website developer and mobile app (Flutter) expert in Chennai. I design responsive portfolios, local shop sites, and custom apps.",
        schemaDesc: "Professional website design, mobile apps, and local search optimization in Chennai, Tamil Nadu.",
        description: "Professional web development and mobile app development services in Chennai, Tamil Nadu. I engineer fast-loading React interfaces, secure custom e-commerce checkouts, and native-grade iOS & Android Flutter applications for local shops, tutors, and agencies.",
        cityHighlights: [
            {
                icon: "fas fa-building",
                title: "Local Market Fit",
                description: "Modern, responsive web designs and clean portfolios crafted for Chennai's independent creators and service providers."
            },
            {
                icon: "fas fa-chart-line",
                title: "Digital Growth Opportunity",
                description: "Deploying high-converting portfolios and automated contact collection forms for local creators."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile-First Demand",
                description: "Engineering highly interactive Flutter mobile applications and high-fidelity layouts for Chennai local services."
            },
            {
                icon: "fas fa-globe",
                title: "SEO Visibility",
                description: "Enforcing clean semantic headers and fast server-side optimization to rank Chennai pages."
            }
        ],
        services: [
            {
                icon: "fas fa-laptop-code",
                title: "Custom Website Development",
                description: "Scalable Next.js web development in Chennai. High-performance, clean-coded business portals built to convert visitors.",
                features: ["Responsive Next.js", "SEO Architectures", "Sub-Second Speeds", "Conversion Focus"]
            },
            {
                icon: "fas fa-shopping-cart",
                title: "E-commerce Development",
                description: "Sleek e-commerce portals in Chennai. Custom shopping workflows, automated invoice generation, and secure payments.",
                features: ["Custom Catalogs", "Razorpay / Cashfree", "Secure Order Flow", "Admin Dashboard"]
            },
            {
                icon: "fab fa-flutter",
                title: "Mobile App Development",
                description: "Sleek mobile app development in Chennai. I build native-grade Flutter apps with real-time push alerts.",
                features: ["Flutter Framework", "API Integration", "Push Alerts", "Play Store & App Store Support"]
            },
            {
                icon: "fab fa-wordpress",
                title: "WordPress Development",
                description: "Premium WordPress design in Chennai. Scalable themes, drag-and-drop page editor optimization, and security audits.",
                features: ["Custom Themes", "Fast Loading Pages", "Security Audits", "Easy Admin Panels"]
            },
            {
                icon: "fas fa-database",
                title: "MERN Stack Development",
                description: "Scalable MERN stack systems in Chennai. I build robust Express backend layers and high-converting React frontends.",
                features: ["Custom Dashboards", "API Architectures", "Secure Roles", "Scalable Mongo/Node databases"]
            },
            {
                icon: "fas fa-search",
                title: "SEO and Performance",
                description: "Technical SEO and speed optimization in Chennai. Get faster page loads, structural JSON-LD schemas, and search ranks.",
                features: ["Local GEO Audits", "Structured Schemas", "Core Web Vitals", "Keyword Research"]
            }
        ],
        benefits: [
            {
                icon: "fas fa-handshake",
                title: "Professional Communication",
                description: "Professional developer reporting, milestone updates, and clear specs."
            },
            {
                icon: "fas fa-clock",
                title: "Structured Delivery",
                description: "Efficient design sprints, ensuring speed and compatibility across browsers."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Local SEO Focus",
                description: "Schema integrations and keywords customized for Chennai service searches."
            },
            {
                icon: "fas fa-rupee-sign",
                title: "Practical Pricing",
                description: "Value-oriented project quotes mapped to technical needs and pages."
            }
        ],
        portfolio: [
            {
                icon: "fas fa-store",
                title: "Creator Website Concept",
                description: "A high-performance Next.js creator layout with custom lead forms, secure login views, and SEO schemas.",
                tech: ["Next.js", "SEO Metadata", "Lead Forms", "WhatsApp CTA"]
            },
            {
                icon: "fas fa-shopping-bag",
                title: "E-commerce Platform Concept",
                description: "A fully custom e-commerce checkout flow supporting Razorpay payments, item filters, and order confirmation emails.",
                tech: ["E-commerce", "Checkout UX", "Payments", "Analytics"]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Native App Concept",
                description: "A custom Flutter mobile app demo featuring API data synchronization, push notifications, and user profiles.",
                tech: ["Flutter", "REST Sync", "Alerts", "Dashboard UI"]
            }
        ]
    }
};

function generatePageCode(city, config) {
    const cityName = config.cityName || city.charAt(0).toUpperCase() + city.slice(1);
    const componentName = config.componentName || (cityName.replace(/[^a-zA-Z]/g, '') + 'Services');
    const folderName = config.folderName || city;

    return `export const metadata = {
    title: "${config.metaTitle}",
    description: "${config.metaDesc}",
    keywords: "website developer ${city}, flutter developer ${city}, web developer ${city}, mobile app development ${city}, WordPress ${city}, local SEO ${city}",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://www.anaghkr.in/locations/${folderName}/",
    },
    openGraph: {
        title: "${config.metaTitle}",
        description: "${config.metaDesc}",
        url: "https://www.anaghkr.in/locations/${folderName}/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "${config.metaTitle}",
        description: "${config.metaDesc}",
    },
};

import LocationTemplate from '@/components/locations/LocationTemplate';

const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANAGH K R - Web & App Development in ${cityName}",
    "description": "${config.schemaDesc}",
    "url": "https://www.anaghkr.in/locations/${folderName}/",
    "telephone": "+91-8281571805",
    "email": "anaghkrkkl@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "${cityName}",
        "addressRegion": "${config.state || 'Kerala'}",
        "addressCountry": "IN"
    },
    "areaServed": [
        { "@type": "City", "name": "${cityName}" },
        { "@type": "State", "name": "${config.state || 'Kerala'}" }
    ]
};

export default function ${componentName}() {
    const cityHighlights = ${JSON.stringify(config.cityHighlights, null, 8)};

    const services = ${JSON.stringify(config.services, null, 8)};

    const benefits = ${JSON.stringify(config.benefits, null, 8)};

    const portfolio = ${JSON.stringify(config.portfolio, null, 8)};

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <LocationTemplate
                cityName="${cityName}"
                cityHighlights={cityHighlights}
                services={services}
                benefits={benefits}
                portfolio={portfolio}
                description="${config.description}"
            />
        </>
    );
}
`;
}

async function run() {
    const locationsDir = path.resolve('src/components/pages/locations');
    const folders = fs.readdirSync(locationsDir).filter(f => fs.statSync(path.join(locationsDir, f)).isDirectory());

    console.log(`Found location folders: ${folders.join(', ')}`);

    for (const folder of folders) {
        // Find matching config key
        const key = folder.toLowerCase();
        const config = configMap[key];

        if (!config) {
            console.warn(`No unique config defined for ${folder}. Skipping dynamic generation.`);
            continue;
        }

        const filePath = path.join(locationsDir, folder, 'Page.js');
        const code = generatePageCode(key, config);

        fs.writeFileSync(filePath, code, 'utf-8');
        console.log(`Successfully generated unique content for ${filePath}`);
    }

    console.log('All location pages rewritten with unique, landmark-free content successfully!');
}

run().catch(console.error);
