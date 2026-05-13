import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ENTRY = services.find((s) => s.slug === "side-window-replacement")!;
const PHONE = siteConfig.phone.display;
const TEL = `tel:${siteConfig.phone.tel}`;
const SMS = `sms:${siteConfig.phone.tel}`;

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

const RELATED_SERVICES = [
  { slug: "windshield-replacement", name: "Windshield Replacement" },
  { slug: "back-window-replacement", name: "Back Window Replacement" },
  { slug: "mobile-auto-glass", name: "Mobile Auto Glass" },
  { slug: "same-day-service", name: "Same-Day Service" },
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
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            DFW Side Window &amp; Door Glass Replacement
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Side Window Replacement Dallas, TX — Door &amp; Quarter Glass
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Broken door glass after a break-in or accident? Call {PHONE} and we will connect you with a vetted DFW operator who can come to you, replace the tempered glass, and vacuum the door cavity and interior clean — often the same day across the ten cities we serve.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={TEL}
              className="rounded-md bg-brand px-6 py-3 text-lg font-bold text-brand-foreground shadow hover:opacity-90"
            >
              Call {PHONE}
            </a>
            <a
              href={SMS}
              className="rounded-md border border-border bg-background px-6 py-3 text-lg font-semibold hover:bg-accent"
            >
              Text a Photo of the Damage
            </a>
          </div>
        </div>
      </section>

      {/* H2 #1: What is side window replacement and when do I need it? */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">What is side window replacement, and when do I need it?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              Side window replacement covers any of the tempered glass panels on the sides of a vehicle: the front and rear door glass, the smaller quarter glass behind the rear doors, and the fixed vent windows on some trucks and older vehicles. Tempered glass is different from the laminated glass used in windshields — when it breaks, it shatters into small, less-sharp pieces rather than holding together. That is by design, but it also means the door cavity and the interior are filled with glass that needs to be cleaned out before the new pane goes in.
            </p>
            <p>
              The most common reason DFW drivers need side window replacement is a break-in — parking lots at apartment complexes, retail centers, and trailheads see a steady stream of smash-and-grab incidents, particularly in the Dallas urban core and along the Bush Turnpike retail corridors. Collision damage from a side impact is the other common reason. Either way, a broken side window is not safe to drive on — the door no longer locks weather out, and what is left of the glass can finish breaking from a small bump.
            </p>
            <p>
              Call {PHONE} or text a photo of the broken window with the vehicle year, make, and model, and we will tell you what the appointment looks like.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #2: Process */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">How does the side window replacement process work?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              Side window replacement runs faster than a windshield job in most cases, but the cleanup is where time can add up:
            </p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                <span className="font-semibold text-foreground">Confirm the right glass and source it.</span> Door glass is vehicle-specific — front driver, front passenger, rear driver, rear passenger, and quarter glass are usually all different pieces. Tinted versus clear matters too.
              </li>
              <li>
                <span className="font-semibold text-foreground">Remove the door panel.</span> The interior panel comes off so the technician can access the regulator and the inside of the door cavity. On a clean break, this is also where the regulator is inspected.
              </li>
              <li>
                <span className="font-semibold text-foreground">Vacuum out the broken glass.</span> A shop vacuum clears the door cavity, the window track, the seat tracks, and the floor. Tempered shatter spreads further than people expect.
              </li>
              <li>
                <span className="font-semibold text-foreground">Install the new glass.</span> The new pane is set into the regulator, the door panel goes back on, and the window is cycled up and down to confirm smooth operation.
              </li>
              <li>
                <span className="font-semibold text-foreground">Final vacuum and inspection.</span> A final vacuum picks up anything that worked loose during installation. Window seals are checked for proper contact.
              </li>
            </ol>
            <p>
              Call {PHONE} for a phone walkthrough of what the appointment looks like for your specific vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #3: Insurance */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">Will my Texas insurance cover side window replacement?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              In many cases, yes — comprehensive coverage on a Texas policy commonly pays for side window damage from break-ins, vandalism, and collision-adjacent incidents. The Auto Glass Endorsement that waives the deductible on chip repair sometimes applies to side glass as well, depending on the carrier and the way the policy is written. Coverage varies, so it is worth confirming with your insurer rather than assuming.
            </p>
            <p>
              For break-in claims specifically, a police report is usually required before the carrier will pay. The DFW operators we route to regularly bill State Farm, GEICO, Progressive, Allstate, USAA, Liberty Mutual, Farmers, and Nationwide on side window jobs. If the deductible exceeds the replacement cost — which is common on liability-plus-comprehensive policies in Texas — paying cash is often the cleaner option. Both are quoted when you call {PHONE}.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #4: Where in DFW */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-3xl font-bold">Where in DFW do operators provide side window replacement?</h2>
          <p className="mt-4 text-muted-foreground">
            Mobile side window replacement is available across all ten DFW cities we serve. Apartment lots, office decks, and residential driveways are all standard setups — call {PHONE} to confirm your address.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {siteConfig.cities.map((c) => (
              <li
                key={c.slug}
                className="rounded-lg border border-border bg-card p-4"
              >
                <a
                  className="font-semibold hover:text-brand hover:underline"
                  href={`/locations/${c.slug}`}
                >
                  Side Window Replacement {c.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Related services</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {RELATED_SERVICES.map((s) => (
                <li key={s.slug}>
                  <a
                    className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:text-brand hover:underline"
                    href={`/services/${s.slug}`}
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* H2 #5: FAQ */}
      <section id="faq" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">Side Window Replacement FAQ</h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-14 text-brand-foreground"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Broken Side Window? Call {PHONE} Now.
          </h2>
          <p className="mt-3 opacity-80">
            Same-day mobile side glass replacement across DFW. Door cavity vacuum included.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={TEL}
              className="rounded-md bg-brand px-8 py-4 text-lg font-bold text-brand-foreground shadow hover:opacity-90"
            >
              Call {PHONE}
            </a>
            <a
              href={SMS}
              className="rounded-md border border-brand-foreground/40 bg-transparent px-8 py-4 text-lg font-bold text-brand-foreground hover:bg-brand-foreground/10"
            >
              Text a Photo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
