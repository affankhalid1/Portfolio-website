/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://affankhalid.vercel.app",
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 5000,
  generateIndexSitemap: false,
};

module.exports = config; // ✅ Use CommonJS export
