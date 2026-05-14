import { siteConfig } from "@/config/site";

// Brand suffix is 36 chars; we prefer "{title} | {brand}" but fall back to
// "{title} | {brandAbbr}" if the full version pushes title past ~65 chars.
function buildTitle(title: string): string {
  const full = `${title} | ${siteConfig.shortName}`;
  if (full.length <= 65) return full;
  return `${title} | ${siteConfig.brandAbbr}`;
}

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
    ? buildTitle(title)
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
