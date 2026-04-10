import { BRAND_MARK } from "@/lib/constants";

type BrandMarkProps = {
  /** Larger on the home hero */
  size?: "header" | "hero";
  className?: string;
};

/**
 * Typographic logo: IB:P.S.E — punctuation slightly muted for scan readability.
 */
export function BrandMark({ size = "header", className = "" }: BrandMarkProps) {
  const text =
    size === "hero"
      ? "text-xl tracking-[0.14em] sm:text-2xl"
      : "text-[13px] tracking-[0.12em] sm:text-[14px]";

  return (
    <span
      className={`inline-flex items-baseline gap-0 font-mono font-medium tabular-nums ${text} ${className}`}
      aria-label={`${BRAND_MARK}, Idea Bank Problem Solution Execution`}
    >
      <span className="text-foreground">IB</span>
      <span className="text-foreground/45" aria-hidden>
        :
      </span>
      <span className="text-foreground">P.S.E</span>
    </span>
  );
}
