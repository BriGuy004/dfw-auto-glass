import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { learnArticles } from "@/data/learn";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const topLearn = learnArticles.slice(0, 8);

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-extrabold tracking-tight">
              {siteConfig.brandName}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone.display}
            </a>
          </div>

          <FooterColumn title="Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.shortName}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Locations">
            {cities.map((c) => (
              <FooterLink key={c.slug} href={`/locations/${c.slug}`}>
                {c.name}, TX
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {topLearn.map((a) => (
              <FooterLink key={a.slug} href={`/learn/${a.slug}`}>
                {a.h1}
              </FooterLink>
            ))}
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">TOS</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
            Service Area
          </p>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c) => (
              <li key={c.slug}>
                <a
                  href={`/locations/${c.slug}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  SERVING: {c.name}, Texas
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Auto Glass Pros Dallas shares information with local, licensed, and insured auto glass vendors who will reach out and contact you the consumer with the information provided here.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
        {title}
      </p>
      <ul className="flex flex-col gap-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </a>
    </li>
  );
}
