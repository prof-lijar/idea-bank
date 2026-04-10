import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  return (
    <header className="shrink-0 border-b border-foreground/12 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-5 sm:px-6">
        <Link
          href="/"
          className="text-foreground transition-opacity hover:opacity-70"
        >
          <BrandMark />
        </Link>
        <nav className="flex items-center gap-5 text-[13px]">
          <Link
            href="/about"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55 transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
