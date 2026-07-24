import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { PenTool, Figma, MonitorPlay, Sparkles, Layout, Code2 } from 'lucide-react';

export const metadata = {
    title: "Web Design & Figma to Code Services Kerala | ANAGH K R",
    description: "Expert web design service in Kerala. We convert Figma, PSD, and AI designs into pixel-perfect, responsive, and blazing-fast React & Next.js websites.",
    keywords: "web design service kerala, figma to react conversion service, psd to html coding expert, ai website design conversion, ui ux design agency kochi, ui ux developer in kochi, custom website design kerala, seo-friendly web design kochi, best web design company in kerala, figma to website developer, frontend developer kerala",
    alternates: { canonical: "https://www.anaghkr.in/web-design/" },
    openGraph: {
        title: "Web Design & Figma to Code Services Kerala",
        description: "Transforming Figma, PSD, and AI mockups into interactive, high-performance websites.",
        url: "https://www.anaghkr.in/web-design/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Design & Figma to Code Kerala | ANAGH K R",
        description: "Transforming Figma, PSD, and AI mockups into interactive, high-performance websites.",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Design & Figma to Code Services",
    "provider": { "@type": "Person", "name": "Anagh K R", "url": "https://www.anaghkr.in/" },
    "serviceType": "Web Design and Frontend Development",
    "areaServed": "Kerala, India",
    "description": "Premium web design and frontend development services. Specializing in converting Figma, PSD, and AI-generated designs into pixel-perfect, interactive websites using React and Next.js.",
    "offers": { "@type": "Offer", "priceCurrency": "INR" },
    "mainEntityOfPage": "https://www.anaghkr.in/web-design/"
};

export default function WebDesignPage() {
    return (
        <ServicePageTemplate
            badge="Web Design & UI/UX"
            title="Design to Code Expert in"
            titleHighlight="Kerala"
            description="Turn your stunning designs into living, breathing websites. I specialize in pixel-perfect conversions from Figma, PSD, or AI-generated concepts into blazing-fast, interactive web applications."
            heroStats={[
                { number: "Pixel", label: "Perfect" },
                { number: "100%", label: "Responsive" },
                { number: "React", label: "Powered" },
                { number: "Animations", label: "Included" },
            ]}
            whatYouGet={[
                { icon: <Figma size={22} />, title: "Figma to Website", desc: "Flawless translation of your Figma prototypes into semantic HTML, Tailwind CSS, React, or Next.js code." },
                { icon: <PenTool size={22} />, title: "PSD to Code", desc: "Breathing life into legacy Photoshop (PSD) designs with modern frontend frameworks and responsive layouts." },
                { icon: <Sparkles size={22} />, title: "AI Design to Reality", desc: "Got an AI-generated mockup from Midjourney or DALL-E? I'll re-create it as a fully functional, interactive website." },
                { icon: <MonitorPlay size={22} />, title: "Fluid Animations", desc: "Adding micro-interactions and scroll animations using Framer Motion or GSAP to make your site feel alive." },
                { icon: <Layout size={22} />, title: "Responsive Layouts", desc: "Your design will look stunning and function perfectly across all screen sizes, from mobile phones to 4K monitors." },
                { icon: <Code2 size={22} />, title: "Clean Architecture", desc: "Component-driven development ensuring your codebase is scalable, maintainable, and highly optimized for SEO." },
            ]}
            technologies={[
                { category: "Design Tools", items: ["Figma", "Adobe XD", "Photoshop", "AI Mockups"] },
                { category: "Frontend Frameworks", items: ["React", "Next.js", "Astro", "HTML5/CSS3"] },
                { category: "Styling & UI", items: ["Tailwind CSS", "Framer Motion", "GSAP", "SASS"] },
                { category: "Optimization", items: ["Core Web Vitals", "Lighthouse", "SEO Semantics"] },
            ]}
            process={[
                { title: "Design Review", desc: "We analyze your Figma, PSD, or AI files to identify assets, fonts, interactions, and responsive breakpoints." },
                { title: "Asset Extraction", desc: "Optimizing images, exporting SVGs, and setting up the design tokens (colors, typography) in Tailwind CSS." },
                { title: "Component Build", desc: "Coding the layout pixel-by-pixel, starting with a mobile-first approach and scaling up to desktop." },
                { title: "Animation & QA", desc: "Adding interactive elements, checking cross-browser compatibility, and ensuring perfect Lighthouse scores." },
            ]}
            faqs={[
                { question: "Can you convert an AI-generated image into a real website?", answer: "Yes! While AI designs (like Midjourney) are just flat images, I can extract the layout structure, recreate the UI elements, and code it into a fully functional, responsive website." },
                { question: "Do you match the Figma design exactly?", answer: "Absolutely. I pride myself on 'pixel-perfect' development. The final website will look exactly like your approved Figma mockup, with added hover states and animations." },
                { question: "What technologies do you use for frontend development?", answer: "I primarily use Next.js, React, Astro, and Tailwind CSS. This modern stack ensures your website is incredibly fast, secure, and SEO-friendly." },
                { question: "Can you add a CMS to my Figma design?", answer: "Yes. Once the frontend is built from your design, I can integrate it with headless CMS options like Sanity, Strapi, or even a custom Node.js backend so you can edit the content easily." },
            ]}
            relatedServices={[
                { title: "Web Development", desc: "Full-stack web solutions", href: "/web-development/" },
                { title: "React Development", desc: "Interactive UI engineering", href: "/react-development/" },
                { title: "Next.js Development", desc: "SEO-optimized server rendering", href: "/nextjs-development/" },
            ]}
            schemaData={schemaData}
            extraContent={
                <div className="space-y-8 text-gray-300">
                    <h2 className="text-3xl font-black text-white uppercase tracking-tight">Bridging the Gap Between Vision and Code</h2>
                    <p className="leading-relaxed">
                        A beautiful design is only the first step. The real magic happens when that design is translated into clean, performant code. As a specialized frontend engineer and <strong>web design expert in Kerala</strong>, I bridge the gap between creative vision and technical execution. Whether you are a UI/UX designer looking to bring your Figma prototypes to life, or a business owner with an AI-generated concept, I deliver websites that look breathtaking and perform flawlessly.
                    </p>
                    <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Pixel-Perfect Figma & PSD Conversions</h3>
                    <p className="leading-relaxed">
                        Nothing is more frustrating than receiving a coded website that looks nothing like the design you approved. As a leading <strong>UI/UX developer in Kochi</strong>, my development process guarantees <strong>pixel-perfect accuracy</strong>. Every margin, padding, typography scale, and color gradient from your Figma, Adobe XD, or PSD file is meticulously translated into modern CSS and component architectures.
                    </p>
                    <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Pioneering AI Design to Website Development</h3>
                    <p className="leading-relaxed">
                        The future of web design is here. Many clients now use generative AI to conceptualize their websites. However, AI only gives you a static image. I possess the structural expertise to take those flat, visionary AI concepts and engineer them into interactive, responsive, and <strong>SEO-friendly web design</strong> platforms using React and Tailwind CSS. I breathe life into static pixels with advanced micro-interactions and fluid animations.
                    </p>
                    <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Top Custom Website Design in Kerala</h3>
                    <p className="leading-relaxed">
                        Whether you are an agency looking for a reliable <strong>Figma to React conversion service</strong> or a business seeking the <strong>best web design company in Kerala</strong> to handle your digital presence end-to-end, I provide tailored solutions. My focus is always on delivering high-performance, custom-coded web experiences that outshine generic templates.
                    </p>
                    <h3 className="text-2xl font-bold text-white mt-8 uppercase tracking-tight">Why Choose My Frontend Services?</h3>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Zero Compromises on Performance:</strong> Beautiful websites shouldn't be slow. I ensure top-tier Core Web Vitals and lightning-fast load times.</li>
                        <li><strong>Interactive & Engaging:</strong> Flat designs are boring. I implement subtle scroll effects and hover states that captivate your users.</li>
                        <li><strong>Developer-Friendly Code:</strong> My component-driven architecture means your codebase is clean, documented, and ready for future scaling.</li>
                    </ul>
                </div>
            }
        />
    );
}
