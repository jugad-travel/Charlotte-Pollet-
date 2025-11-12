/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://christine-solignac.vercel.app",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
};

