import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site";

export function StickyMobileCallBar() {
  return (
    <a
      href={`tel:${siteConfig.phone.tel}`}
      aria-label={`Call ${siteConfig.phone.display}`}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-3 bg-primary text-primary-foreground shadow-[0_-2px_8px_rgba(0,0,0,0.15)] md:hidden"
      style={{
        paddingTop: "12px",
        paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        minHeight: "56px",
      }}
    >
      <Phone className="h-5 w-5" />
      <span className="text-base font-bold tracking-wide">
        Call {siteConfig.phone.display}
      </span>
    </a>
  );
}
