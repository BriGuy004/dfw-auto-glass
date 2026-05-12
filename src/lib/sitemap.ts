import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { learnArticles } from "@/data/learn";

interface SitemapEntry {
  path: string;
  priority: number;
  changefreq: "weekly" | "monthly";
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildSitemapXml(): string {
  const lastmod = new Date().toISOString().split("T")[0];
  const entries: SitemapEntry[] = [
    { path: "/", priority: 1.0, changefreq: "weekly" },
    { path: "/services", priority: 0.8, changefreq: "weekly" },
    { path: "/locations", priority: 0.8, changefreq: "weekly" },
    { path: "/learn", priority: 0.8, changefreq: "weekly" },
    { path: "/about", priority: 0.8, changefreq: "weekly" },
    { path: "/contact", priority: 0.8, changefreq: "weekly" },
    ...services.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.7,
      changefreq: "monthly" as const,
    })),
    ...cities.map((c) => ({
      path: `/locations/${c.slug}`,
      priority: 0.7,
      changefreq: "monthly" as const,
    })),
    ...learnArticles.map((a) => ({
      path: `/learn/${a.slug}`,
      priority: 0.6,
      changefreq: "monthly" as const,
    })),
  ];

  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${escapeXml(`${siteConfig.domain}${e.path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
