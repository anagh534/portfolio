import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src/components/pages');

// Mappings for replacements
const updates = {
  'NotFound.js': {
    canonical: 'https://www.anaghkr.in/404/',
    title: '404 — Page Not Found | Custom Web Solutions by ANAGH K R',
    description: 'The page you are looking for does not exist. Return to the homepage or explore our professional web development services in Kerala to get started.'
  },
  'about/Page.js': {
    description: 'Anagh K R is an expert freelance Flutter & MERN stack developer in Kerala. With 3+ years of experience, I build custom apps and websites for global clients.'
  },
  'chat-app-development/Page.js': {
    description: 'Expert real-time chat app development services in Kerala. Secure messaging, media sharing, and scalable backend architecture for startups and businesses.'
  },  'contact/Page.js': {
    description: 'Get a free quote for your custom web or mobile app project today. Expert full-stack development in Kochi, Calicut & Trivandrum. Contact Anagh K R now.'
  },
  'dating-app-development/Page.js': {
    description: 'Custom dating app development in Kerala. Scalable Flutter & Node.js apps featuring secure profile matching, real-time chat, and robust cloud architecture.'
  },  'locations/Page.js': {
    title: 'Web & Mobile App Development Services in Kerala | ANAGH K R',
    description: 'Professional web and mobile app development services across Kerala. Serving Kochi, Trivandrum, Kozhikode, and all major cities with custom digital solutions.'
  },
  'locations/thiruvananthapuram/Page.js': {
    title: 'Web Development Services in Thiruvananthapuram | ANAGH K R',
    description: 'Professional web development, Flutter, custom websites, and mobile app development services in Thiruvananthapuram. SEO-focused business solutions.'
  },
  'locations/ernakulam/Page.js': {
    description: 'Professional web development, Flutter, custom websites, and mobile app development services in Ernakulam. SEO-focused and conversion-ready solutions.'
  },
  'locations/kanhangad/Page.js': {
    description: 'Professional web development, Flutter, custom websites, and mobile app development services in Kanhangad. SEO-focused and conversion-ready solutions.'
  },
  'locations/kasaragod/Page.js': {
    description: 'Professional web development, Flutter, custom websites, and mobile app development services in Kasaragod. SEO-focused and conversion-ready solutions.'
  },
  'locations/kozhikode/Page.js': {
    description: 'Professional web development, Flutter, custom websites, and mobile app development services in Kozhikode. SEO-focused and conversion-ready solutions.'
  },
  'mern-stack-development/Page.js': {
    description: 'Hire the top MERN stack developer in Kerala. We build scalable full-stack SaaS platforms, interactive dashboards, and custom web applications for businesses.'
  },
  'mobile-app-development/Page.js': {
    description: 'Top mobile app developer in Kerala. We build high-quality, native-like iOS & Android applications using Flutter for businesses in Kochi, Calicut, and Trivandrum.'
  },
  'nextjs-development/Page.js': {
    description: 'Hire an expert Next.js developer in Kerala. We deliver blazing-fast server-side rendering, SEO-first React applications, and full-stack solutions for businesses.'
  },
  'nodejs-development/Page.js': {
    description: 'Expert Node.js backend development in Kerala. Building robust RESTful APIs, high-performance real-time applications, and scalable server-side business solutions.'
  },
  'react-development/Page.js': {
    description: 'Professional React.js development services in Kerala. We build dynamic Single Page Applications (SPAs), interactive dashboards, and fast UIs for your startups.'
  },
  'resume/Page.js': {
    description: 'View the professional resume of Anagh K R, an experienced Flutter and MERN stack developer with 3+ years expertise building high-performance web and mobile apps.'
  },
  'services/Page.js': {
    title: 'Professional Web & Mobile Development Services | ANAGH K R',
    description: 'Explore professional web development services in Kerala. Custom websites, Flutter apps, MERN stack solutions, and native Flutter applications.'
  },  'web-development/Page.js': {
    title: 'Website Developer Kerala | Custom Business Sites | ANAGH K R',
    description: 'Hire a professional web developer in Kerala. We build custom business websites with SEO-optimized design and fast delivery in Kochi, Kozhikode & Trivandrum.'
  },
};

for (const [relativePath, updateData] of Object.entries(updates)) {
  const filePath = path.join(pagesDir, relativePath);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Title
  if (updateData.title) {
    const titleRegex = /title:\s*["']([^"']*)["']/g;
    content = content.replace(titleRegex, (match) => {
        // Find the first instance in `export const metadata`
        return `title: "${updateData.title}"`;
    });
  }

  // Replace Description
  if (updateData.description) {
    const descRegex = /description:\s*["']([^"']*)["']/g;
    content = content.replace(descRegex, (match) => {
        return `description: "${updateData.description}"`;
    });
  }

  // Inject Canonical for NotFound.js
  if (relativePath === 'NotFound.js' && updateData.canonical) {
    if (!content.includes('alternates:')) {
        // Insert alternates object
        content = content.replace(/robots:\s*['"][^'"]*['"],?/g, (match) => {
             return `${match}\n    alternates: {\n        canonical: "${updateData.canonical}",\n    },`;
        });
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${relativePath}`);
}

console.log('Finished applying SEO updates.');
