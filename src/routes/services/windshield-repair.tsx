import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "windshield-repair")!;

const SERVICE_DESCRIPTION =
  "Windshield chip and crack repair across DFW — Dallas, Plano, Frisco, Garland, Irving. Mobile service, insurance often helps depending on policy. Call or text (214) 555-0100.";

const FAQS = [
  {
    question: "How long does a windshield chip repair take?",
    answer:
      "Most chip repairs take about 30 minutes on-site. The technician cleans the chip, injects resin, cures it under UV light, and inspects the result. You can usually drive the vehicle right away after the work is complete.",
  },
  {
    question: "When is a chip repairable versus needing full replacement?",
    answer:
      "Chips smaller than a quarter and short cracks — generally under about six inches — are often repairable. Damage that is larger, in the driver's direct line of sight, or has spread into multiple cracks usually needs full windshield replacement. Send a photo by text and we can usually tell you which situation you are in.",
  },
  {
    question: "Does insurance cover windshield chip repair?",
    answer:
      "In many cases yes. Texas comprehensive auto policies often cover chip repair with little or no out-of-pocket cost, because repair is much cheaper than full replacement. Coverage depends on your policy — confirm specifics with your insurer before assuming.",
  },
  {
    question: "Will I be able to see the chip after it is repaired?",
    answer:
      "A repaired chip is usually still faintly visible up close, but the structural damage is sealed and the spread is stopped. The goal of repair is to keep a small problem from becoming a full replacement, not to make the glass look brand new.",
  },
  {
    question: "Can a small chip really turn into a full crack?",
    answer:
      "Yes — Texas heat is hard on damaged glass. A chip can spread within hours after a temperature swing, a bump in the road, or a hot day sitting in the sun. The earlier the repair, the more likely the damage stops at repair and does not become a full replacement.",
  },
];

export const Route = createFileRoute("/services/windshield-repair")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Windshield Repair Dallas, TX | Chip & Crack Repair",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/windshield-repair",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Windshield Repair",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Windshield Repair", url: "/services/windshield-repair", position: 3 },
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
        <h1 className="text-4xl font-bold tracking-tight">Dallas Windshield Chip & Crack Repair</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Small chips and cracks repaired in 30 minutes. Often free with insurance — Texas waives the deductible on chip repair.
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
