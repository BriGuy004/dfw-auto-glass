import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "side-window-replacement")!;

const SERVICE_DESCRIPTION =
  "Side window and door glass replacement across DFW — Dallas, Plano, Frisco, Garland, Irving. Mobile service, glass vacuum, often same day. Call or text (214) 555-0100.";

const FAQS = [
  {
    question: "My side window was broken in a break-in. What is the first step?",
    answer:
      "File a police report if you have not already, then call or text us a photo of the affected window and the vehicle's year, make, and model. Most side window replacements can be scheduled same-day or next-day. The technician brings a shop vacuum to clean glass from the door cavity and the interior.",
  },
  {
    question: "Will all the broken glass be cleaned out?",
    answer:
      "Yes. Tempered side glass shatters into small pieces that fall inside the door and into the seat tracks. The replacement process includes vacuuming out the door cavity and the interior. Some pieces of glass can stay buried in carpet — a thorough vacuum after delivery picks up the last of it.",
  },
  {
    question: "Is side window glass the same as windshield glass?",
    answer:
      "No. Side windows are tempered glass — designed to shatter into small, less-sharp pieces on impact. Windshields are laminated — designed to stay in one piece. The materials, sourcing, and installation are different, which is why one breaks differently than the other.",
  },
  {
    question: "Can a side window be replaced the same day?",
    answer:
      "For common vehicles, often yes — pricing and availability depend on the year, make, and model. Specialty or vintage side glass sometimes needs to be ordered. Send a photo of the damage and the vehicle and we will tell you what same-day looks like for your specific case.",
  },
  {
    question: "Will my power windows still work after replacement?",
    answer:
      "Yes, when the regulator and motor were not damaged in the break-in. If the impact damaged the window regulator or mechanism, that is a separate repair. The technician inspects the mechanism during the visit and tells you what they see before completing the replacement.",
  },
];

export const Route = createFileRoute("/services/side-window-replacement")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Side Window Replacement Dallas, TX | Door Glass Replacement",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/side-window-replacement",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Side Window Replacement",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Side Window Replacement", url: "/services/side-window-replacement", position: 3 },
          ],
        }),
        buildFAQPageSchema({ faqs: FAQS }),
      ],
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Car Side Window Replacement</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Broken door glass or quarter window? We replace side glass same-day at your location.
        </p>
        <div className="mt-8">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90"
          >
            Call {siteConfig.phone.display}
          </a>
        </div>
        <p className="mt-12 text-sm text-muted-foreground">
          Full content for this page coming soon. Call now for an immediate free quote.
        </p>
      </section>
    </main>
  );
}
