// next-sitemap.config.js

module.exports = {
  siteUrl: 'https://anagh534.github.io', // Replace with your actual domain
  generateRobotsTxt: true, // (optional)
  exclude: ['/admin/**', '/404'], // Optional: Pages you want to exclude from the sitemap
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }, // Allow all bots to crawl all pages
    ],
  },
  additionalPaths: async (config) => {
    return [
      { loc: '/about', changefreq: 'weekly', priority: 0.8 },
      { loc: '/services', changefreq: 'weekly', priority: 0.9 },
      { loc: '/resume', changefreq: 'weekly', priority: 0.5 },
    ];
  },
};