/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "**" }],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
      {
        source: "/sitemap/:slug.xml",
        destination: "/sitemap/:slug",
      },
      {
        source: "/sitemap/:slug/:id.xml",
        destination: "/sitemap/:slug/:id",
      },
      {
        source: "/:catSlug/:slug-:id(\\d+).html",
        destination: "/blogs/detail",
      },
      {
        source: "/:slug",
        destination: "/blogs/category",
      },
      {
        source: "/",
        destination: "/blogs",
      },
    ];
  },
};

module.exports = nextConfig;
