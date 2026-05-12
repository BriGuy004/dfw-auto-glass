import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-tight md:text-xl">
            {siteConfig.brandName}
          </span>
        </Link>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[480px] grid-cols-2 gap-1 p-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <NavigationMenuLink asChild>
                          <a
                            href={`/services/${s.slug}`}
                            className="block rounded-md p-3 text-sm leading-tight no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="font-medium">{s.shortName}</div>
                            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                              {s.excerpt}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] grid-cols-2 gap-1 p-4">
                    {cities.map((c) => (
                      <li key={c.slug}>
                        <NavigationMenuLink asChild>
                          <a
                            href={`/locations/${c.slug}`}
                            className="block rounded-md px-3 py-2 text-sm font-medium no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {c.name}, TX
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="/learn">Learn</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a href="/about">About</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone.display}
          </a>
          <a
            href={`tel:${siteConfig.phone.tel}`}
            aria-label={`Call ${siteConfig.phone.display}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 sm:hidden"
          >
            <Phone className="h-4 w-4" />
          </a>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto">
              <SheetHeader>
                <SheetTitle>{siteConfig.brandName}</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-6 text-sm">
                <MobileSection title="Services">
                  {services.map((s) => (
                    <MobileLink
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onSelect={() => setMobileOpen(false)}
                    >
                      {s.shortName}
                    </MobileLink>
                  ))}
                </MobileSection>

                <MobileSection title="Locations">
                  {cities.map((c) => (
                    <MobileLink
                      key={c.slug}
                      href={`/locations/${c.slug}`}
                      onSelect={() => setMobileOpen(false)}
                    >
                      {c.name}, TX
                    </MobileLink>
                  ))}
                </MobileSection>

                <MobileSection title="More">
                  <MobileLink href="/learn" onSelect={() => setMobileOpen(false)}>
                    Learn
                  </MobileLink>
                  <MobileLink href="/about" onSelect={() => setMobileOpen(false)}>
                    About
                  </MobileLink>
                </MobileSection>

                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground shadow"
                >
                  <Phone className="h-4 w-4" />
                  Call {siteConfig.phone.display}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

function MobileLink({
  href,
  children,
  onSelect,
  className,
}: {
  href: string;
  children: React.ReactNode;
  onSelect?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onSelect}
      className={cn(
        "rounded-md px-2 py-2 text-base font-medium hover:bg-accent",
        className,
      )}
    >
      {children}
    </a>
  );
}
