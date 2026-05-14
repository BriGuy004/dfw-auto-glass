import { useForm, ValidationError } from "@formspree/react";
import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface QuoteFormProps {
  source: string;
  compact?: boolean;
}

export function QuoteForm({ source, compact = false }: QuoteFormProps) {
  const [state, handleSubmit] = useForm(siteConfig.formspree.formId);

  if (state.succeeded) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-border bg-card shadow-sm",
          compact ? "p-5" : "p-6 md:p-8",
        )}
      >
        <h3 className="text-xl font-bold">Thanks — we got it.</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          A local Dallas auto glass operator will text you within 5 minutes.
          Please keep your phone handy. If urgent, call{" "}
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="font-semibold text-foreground underline"
          >
            {siteConfig.phone.display}
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card shadow-sm",
        compact ? "p-5" : "p-6 md:p-8",
      )}
    >
      <h3 className={cn("font-bold", compact ? "text-lg" : "text-2xl")}>
        Get a Free Quote
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Tell us about your vehicle and the damage. A local Dallas auto glass
        operator will text you within 5 minutes.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
        <input type="hidden" name="source" value={source} />
        <input
          type="hidden"
          name="_subject"
          value={`New Lead - Dallas Windshield and Auto Glass Pros - ${source}`}
        />
        {/* Honeypot — hidden from real users, often filled in by bots */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
          aria-hidden="true"
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <Field>
            <Label htmlFor={`firstName-${source}`}>First name</Label>
            <input
              id={`firstName-${source}`}
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className={inputClass}
            />
            <ValidationError prefix="First name" field="firstName" errors={state.errors} className="text-xs text-destructive" />
          </Field>
          <Field>
            <Label htmlFor={`lastName-${source}`}>Last name</Label>
            <input
              id={`lastName-${source}`}
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className={inputClass}
            />
            <ValidationError prefix="Last name" field="lastName" errors={state.errors} className="text-xs text-destructive" />
          </Field>
        </div>

        <Field>
          <Label htmlFor={`phone-${source}`}>Phone</Label>
          <input
            id={`phone-${source}`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(214) 555-0100"
            className={inputClass}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-destructive" />
        </Field>

        <Field>
          <Label htmlFor={`vehicle-${source}`}>Vehicle</Label>
          <input
            id={`vehicle-${source}`}
            name="vehicle"
            type="text"
            placeholder="Year, Make, Model"
            className={inputClass}
          />
          <ValidationError prefix="Vehicle" field="vehicle" errors={state.errors} className="text-xs text-destructive" />
        </Field>

        <Field>
          <Label htmlFor={`zip-${source}`}>ZIP code</Label>
          <input
            id={`zip-${source}`}
            name="zip"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{5}"
            placeholder="75201"
            autoComplete="postal-code"
            className={inputClass}
          />
          <ValidationError prefix="ZIP" field="zip" errors={state.errors} className="text-xs text-destructive" />
        </Field>

        <Field>
          <Label htmlFor={`damage-${source}`}>Damage description</Label>
          <textarea
            id={`damage-${source}`}
            name="damage"
            rows={3}
            placeholder="Where on the windshield? Chip, crack, or full break? Approximate size?"
            className={cn(inputClass, "resize-y")}
          />
          <ValidationError prefix="Damage" field="damage" errors={state.errors} className="text-xs text-destructive" />
        </Field>

        <ValidationError errors={state.errors} className="text-sm text-destructive" />

        <button
          type="submit"
          disabled={state.submitting}
          className="mt-1 w-full rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting ? "Sending…" : "Get My Quote"}
        </button>

        <p className="mt-1 text-center text-xs text-muted-foreground">
          We connect you with a vetted local Dallas auto glass operator.
        </p>

        <a
          href={`tel:${siteConfig.phone.tel}`}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent"
        >
          <Phone className="h-4 w-4" />
          Prefer to call? {siteConfig.phone.display}
        </a>
      </form>
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40";

function Field({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1">{children}</div>;
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {children}
    </label>
  );
}
