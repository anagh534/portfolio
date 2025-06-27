import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO and external stylesheets */}
        <meta name="google-site-verification" content="AWxjk_Fpn8FzilJKbuxl3i1J8VFgrfVwEkoaqwKp9mo" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="sitemap" type="application/xml" title="Sitemap-0" href="/sitemap-0.xml" />

        {/* ✅ Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "ANAGH K R",
              "description":
                "I'm ANAGH K R, a freelance software developer based in Kerala specializing in MERN stack and Flutter apps. I specialize in creating custom websites, mobile apps, and responsive designs tailored for businesses of all sizes.",
              "url": "https://www.anaghkr.in/",
              "email": "mailto:anaghkrkkl@gmail.com",
              "sameAs": [
                "https://in.linkedin.com/in/anagh-k-r",
                "https://github.com/anagh534",
                "https://instagram.com/mr._uni_que___",
                "https://www.fiverr.com/anaghkr/"
              ],
              "jobTitle": "Freelance Software Developer",
              "knowsAbout": [
                "JavaScript", "Flutter", "MongoDB", "React", "Laravel", "Php",
                "Node Js", "Express js", "MySql", "C#", "Git", "CI/CD", "DevOps",
                "Docker", "Aws", "Firebase"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Kannur University"
              }
            }),
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />

        {/* Bootstrap JS Bundle */}
        <script
          rel="preload"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
