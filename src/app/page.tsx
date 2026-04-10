import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { APP_DESCRIPTION, BRAND_LINE } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="font-normal text-foreground">
        <BrandMark size="hero" />
      </h1>
      <p className="mt-3 max-w-lg font-mono text-[11px] leading-relaxed tracking-[0.06em] text-foreground/50 sm:text-[12px]">
        {BRAND_LINE}
      </p>
      <p className="mt-6 max-w-md font-serif text-[17px] leading-relaxed text-foreground/70 sm:text-lg">
        {APP_DESCRIPTION}
      </p>
      <Link
        href="/about"
        className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/45 underline-offset-4 transition-colors hover:text-foreground/80 hover:underline"
      >
        Read the full idea
      </Link>
    </div>
  );
}
