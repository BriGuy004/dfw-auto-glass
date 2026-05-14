import { siteConfig } from "@/config/site";

const businessId = `${siteConfig.domain}/#localbusiness`;
const DEFAULT_PUBLISH_DATE = "2026-05-12";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": siteConfig.business.type,
    "@id": businessId,
    name: siteConfig.brandName,
    url: siteConfig.domain,
    image: `${siteConfig.domain}/images/hero-technician.png`,
    telephone: siteConfig.phone.tel,
    priceRange: siteConfig.business.priceRange,
    openingHours: siteConfig.business.openingHours,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.7767,
      longitude: -96.7970,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 32.7767,
        longitude: -96.7970,
      },
      geoRadius: "50000",
    },
    areaServed: siteConfig.cities.map((c) => ({
      "@type": "City",
      name: `${c.name}, TX`,
    })),
    sameAs: [] as string[],
  };
}

interface BuildServiceParams {
  serviceName: string;
  serviceDescription: string;
  areaServed: string[];
}

export function buildServiceSchema({
  serviceName,
  serviceDescription,
  areaServed,
}: BuildServiceParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: serviceName,
    description: serviceDescription,
    provider: { "@id": businessId },
    areaServed: areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };
}

interface FAQ {
  question: string;
  answer: string;
}

export function buildFAQPageSchema({ faqs }: { faqs: FAQ[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

export function buildBreadcrumbListSchema({ items }: { items: BreadcrumbItem[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: `${siteConfig.domain}${item.url}`,
    })),
  };
}

interface BuildArticleParams {
  headline: string;
  datePublished?: string;
  dateModified?: string;
  description: string;
}

export function buildArticleSchema({
  headline,
  datePublished = DEFAULT_PUBLISH_DATE,
  dateModified = DEFAULT_PUBLISH_DATE,
  description,
}: BuildArticleParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.domain,
    },
  };
}
