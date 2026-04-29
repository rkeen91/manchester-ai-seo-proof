const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export default async function sitemap() {
  const now = new Date();

  return [
    {
      url: SITE,
      lastModified: now,
    },
    {
      url: `${SITE}/ai-seo-audit-manchester`,
      lastModified: now,
    },
  ];
}
