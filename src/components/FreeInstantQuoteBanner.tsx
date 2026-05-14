interface FreeInstantQuoteBannerProps {
  className?: string;
}

// Inline SVG. Speech-bubble card with a stacked shadow layer, green outline,
// "FREE INSTANT QUOTE" + "ENTER YOUR INFO BELOW", chunky downward chevron.
export function FreeInstantQuoteBanner({
  className,
}: FreeInstantQuoteBannerProps) {
  const green = "#16a34a";
  const greenDeep = "#15803d";

  return (
    <svg
      role="img"
      aria-label="Free instant quote — enter your info below"
      viewBox="0 0 600 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Stacked shadow card behind */}
      <rect
        x="22"
        y="22"
        width="556"
        height="140"
        rx="22"
        ry="22"
        fill={greenDeep}
        opacity="0.18"
      />

      {/* Main speech-bubble card */}
      <rect
        x="10"
        y="10"
        width="556"
        height="140"
        rx="22"
        ry="22"
        fill="#ffffff"
        stroke={green}
        strokeWidth="6"
      />

      {/* Headline */}
      <text
        x="288"
        y="74"
        textAnchor="middle"
        fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
        fontSize="40"
        fontWeight="800"
        letterSpacing="1"
        fill={green}
      >
        FREE INSTANT QUOTE
      </text>

      {/* Subhead */}
      <text
        x="288"
        y="112"
        textAnchor="middle"
        fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
        fontSize="18"
        fontWeight="600"
        letterSpacing="3"
        fill={green}
      >
        ENTER YOUR INFO BELOW
      </text>

      {/* Downward chevron arrow — chunky V, bottom-right of card */}
      <path
        d="M 430 170 L 478 208 L 526 170"
        fill="none"
        stroke={green}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
