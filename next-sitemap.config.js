// next-sitemap.config.js

module.exports = {
  siteUrl: 'https://www.anaghkr.in',
  generateRobotsTxt: true,
  exclude: ['/admin/**', '/404', '/_next/**', '/api/**'],
  generateIndexSitemap: false, // Generate single sitemap instead of index
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        comment: 'Allow all bots to crawl all pages'
      },
      {
        userAgent: '*',
        disallow: ['/admin/', '/_next/', '/api/', '/.git/'],
        comment: 'Block admin and system directories'
      },
    ],
    additionalSitemaps: [
      'https://www.anaghkr.in/sitemap.xml',
    ],
    transformRobotsTxt: async (_, robotsTxt) => {
      return `# Robots.txt for anaghkr.in - ANAGH K R Portfolio Website
# Professional MERN Stack Developer & Mobile App Developer in Kerala

${robotsTxt}

# Allow important SEO pages
Allow: /about
Allow: /services  
# Allow: /resume
Allow: /locations
Allow: /contact

# Allow location-specific pages for local SEO
Allow: /locations/kochi
Allow: /locations/thiruvananthapuram
Allow: /locations/kozhikode
Allow: /locations/thrissur
Allow: /locations/kannur
Allow: /locations/kollam
Allow: /locations/ernakulam
Allow: /locations/calicut
Allow: /locations/kasaragod
Allow: /locations/palakkad
Allow: /locations/kanhangad

# Be polite to crawlers
Crawl-delay: 1`;
    },
  },

  additionalPaths: async (config) => {
    const currentDate = new Date().toISOString();

    return [
      // Main pages with high priority
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: currentDate
      },
      {
        loc: '/about',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: currentDate
      },
      {
        loc: '/services',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: currentDate
      },
      {
        loc: '/resume',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: currentDate
      },
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: currentDate
      },

      // Locations main page
      {
        loc: '/locations',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: currentDate
      },

      // Kerala city pages - High SEO value
      {
        loc: '/locations/kochi',
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: currentDate
      },
      {
        loc: '/locations/thiruvananthapuram',
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: currentDate
      },
      {
        loc: '/locations/kozhikode',
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: currentDate
      },
      {
        loc: '/locations/thrissur',
        changefreq: 'weekly',
        priority: 0.6,
        lastmod: currentDate
      },
      {
        loc: '/locations/kannur',
        changefreq: 'weekly',
        priority: 0.6,
        lastmod: currentDate
      },
      {
        loc: '/locations/kollam',
        changefreq: 'weekly',
        priority: 0.6,
        lastmod: currentDate
      },
      {
        loc: '/locations/ernakulam',
        changefreq: 'weekly',
        priority: 0.6,
        lastmod: currentDate
      },
      {
        loc: '/locations/calicut',
        changefreq: 'weekly',
        priority: 0.6,
        lastmod: currentDate
      },
      {
        loc: '/locations/kasaragod',
        changefreq: 'weekly',
        priority: 0.5,
        lastmod: currentDate
      },
      {
        loc: '/locations/palakkad',
        changefreq: 'weekly',
        priority: 0.5,
        lastmod: currentDate
      },
      {
        loc: '/locations/kanhangad',
        changefreq: 'weekly',
        priority: 0.5,
        lastmod: currentDate
      },
    ];
  },

  transform: async (config, path) => {
    // Custom transform for specific paths
    const customPaths = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/about': { priority: 0.9, changefreq: 'weekly' },
      '/services': { priority: 0.9, changefreq: 'weekly' },
      '/locations': { priority: 0.8, changefreq: 'weekly' },
    };

    if (customPaths[path]) {
      return {
        loc: path,
        changefreq: customPaths[path].changefreq,
        priority: customPaths[path].priority,
        lastmod: new Date().toISOString(),
      };
    }

    // Default return
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};