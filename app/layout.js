import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO and meta tags */}
        <meta name="google-site-verification" content="AWxjk_Fpn8FzilJKbuxl3i1J8VFgrfVwEkoaqwKp9mo" />
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="sitemap" type="application/xml" title="Sitemap-0" href="/sitemap-0.xml" />
      </head>

      <body>
        <Navbar />
        {children}
        <Footer />

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
      </body>
    </html>
  );
}
