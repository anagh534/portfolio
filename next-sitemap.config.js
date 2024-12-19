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
  };
  