import { siteConfig } from "@/config/site";

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: object[];
}

export function buildSeo({
  title,
  description,
  canonical,
  ogImage,
  noindex,
  schema,
}: SeoProps = {}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : `${siteConfig.brandName} | ${siteConfig.tagline}`;

  const desc = description ?? siteConfig.description;
  const canonicalUrl = canonical
    ? `${siteConfig.domain}${canonical}`
    : siteConfig.domain;
  const image = `${siteConfig.domain}${ogImage ?? siteConfig.ogImage}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: desc },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1e40af" },
      noindex
        ? { name: "robots", content: "noindex, nofollow" }
        : { name: "robots", content: "index, follow" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:locale", content: siteConfig.locale },
      { property: "og:site_name", content: siteConfig.brandName },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: desc },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: image },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: desc },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
    scripts: (schema ?? []).map((s) => ({
      type: "application/ld+json",
      children: JSON.stringify(s),
    })),
  };
}
