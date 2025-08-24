import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import Works from "@/components/home/works";

export const metadata = {
  title: "Flutter Developer Kerala | MERN Stack Developer Kerala | Web Development Services Kerala - ANAGH K R",
  description: "Professional Flutter developer and MERN stack developer in Kerala. Affordable Flutter app development, custom website development, responsive web design, e-commerce development, and WordPress development services across Kerala including Kochi, Thiruvananthapuram, Kozhikode, and Kasaragod.",
  keywords: "Flutter developer Kerala, MERN stack developer Kerala, Web development services Kerala, Mobile app development Kerala, Freelance web developer Kerala, Custom website development Kerala, React developer Kerala, Node.js developer Kerala, Affordable Flutter app development in Kochi, Best web developer in Thiruvananthapuram Kerala, Professional mobile app development Kozhikode, Custom MERN stack development services Thrissur, Responsive web design company Ernakulam, Cross-platform app development expert Calicut, SEO-optimized website development Kannur, E-commerce development specialist Kollam, Website redesign services Kerala, WordPress development Kerala, Next.js development Kerala, PSD to website conversion Kerala, Figma to website development Kerala, Academic project development Kerala, Startup web development Kerala, Flutter app development, Web developer, MERN stack developer, Mobile app development, Web design services, Website development, App development services, Freelance web developer, SEO optimization, WordPress development",
  author: "ANAGH K R",
  robots: "index, follow",
  canonical: "https://anagh534.github.io",
  ogTitle: "Flutter Developer Kerala | MERN Stack Developer Kerala | Web Development Services Kerala",
  ogDescription: "Professional Flutter developer and MERN stack developer in Kerala. Affordable Flutter app development, custom website development, responsive web design, e-commerce development, and WordPress development services across Kerala.",
  ogUrl: "https://anagh534.github.io",
  ogImage: "/assets/profile.webp",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Flutter Developer Kerala | MERN Stack Developer Kerala",
  twitterDescription: "Professional Flutter developer and MERN stack developer in Kerala offering web and mobile app development services."
};

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
    </>
  );
}
