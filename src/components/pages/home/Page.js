/**
 * Home page metadata only.
 * The default export (Home component) was removed — it was dead code.
 * index.astro renders all sections directly and inlines schema JSON via set:html.
 */
export const metadata = {
  title: "Freelance Website & Flutter Developer Kerala | ANAGH K R",
  description: "Top freelance website developer & Flutter developer in Kerala. Expert custom mobile apps, MERN stack websites, and web apps in Kochi, Calicut & Trivandrum.",
  keywords: "Flutter developer Kerala, hire Flutter developer Kerala, Flutter app developer Kerala, mobile app developer Kerala, freelance web developer Kerala, freelance web developer in kerala, website development Kerala, MERN stack developer Kerala, React developer Kerala, Node.js developer Kerala, Next.js developer Kerala, flutter app developers in kochi, Flutter developer Calicut, Flutter developer Trivandrum, Flutter developer Kannur, Flutter developer Kasaragod, custom web development in kerala, app development company in kerala",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.anaghkr.in/",
  },
  openGraph: {
    title: "Flutter Developer Kerala | iOS Android Apps & Web Development",
    description: "Expert Flutter developer in Kerala for iOS and Android apps, custom websites, and MERN stack solutions.",
    url: "https://www.anaghkr.in/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter Developer Kerala | MERN & Web Development",
    description: "Hire a Flutter developer in Kerala for mobile apps, custom websites, and full stack web projects.",
  },
};
