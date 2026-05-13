import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "adas-calibration")!;

const SERVICE_DESCRIPTION =
  "ADAS recalibration after windshield replacement across DFW — Dallas, Plano, Frisco, Garland, Irving. Lane assist, automatic braking, adaptive cruise. Call or text (214) 555-0100.";

const FAQS = [
  {
    question: "What is ADAS calibration?",
    answer:
      "ADAS — Advanced Driver Assistance Systems — covers features like lane keep assist, automatic emergency braking, adaptive cruise control, and lane departure warning. These features rely on cameras and sensors aligned with the windshield. When the windshield is replaced, those cameras often need to be recalibrated so the safety systems point at the right reference.",
  },
  {
    question: "Does every vehicle need ADAS calibration after a windshield replacement?",
    answer:
      "No. Older vehicles without these systems do not need calibration at all. Many newer vehicles do — but how, where, and how long it takes depends on the year, make, model, and specific features. When your vehicle requires it, calibration is handled as part of the job.",
  },
  {
    question: "What is the difference between static and dynamic calibration?",
    answer:
      "Static calibration uses targets set up at specific distances in a controlled space — usually a shop setting. Dynamic calibration uses a scan tool while driving the vehicle on a road that meets the manufacturer's requirements. Some vehicles need both. The vehicle's procedure determines which applies.",
  },
  {
    question: "What happens if I skip ADAS calibration?",
    answer:
      "Skipping required calibration can mean lane assist drifts, automatic braking triggers at the wrong distance, or adaptive cruise misreads traffic — the safety systems still operate, but not against the reference they were designed for. When your vehicle calls for calibration, it is not optional in the sense of safe to skip.",
  },
  {
    question: "Does insurance cover ADAS calibration?",
    answer:
      "Most comprehensive policies that cover windshield replacement also cover calibration as part of the same claim. Coverage depends on your policy and carrier — it is smart to confirm before assuming.",
  },
];

export const Route = createFileRoute("/services/adas-calibration")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "ADAS Calibration Dallas, TX | Auto Glass Calibration",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/adas-calibration",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "ADAS Calibration",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "ADAS Calibration", url: "/services/adas-calibration", position: 3 },
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
        <h1 className="text-4xl font-bold tracking-tight">Dallas ADAS Calibration Specialists</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Lane assist, auto braking, adaptive cruise — these need recalibration after windshield replacement on most 2018+ vehicles.
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
