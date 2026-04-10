import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="shrink-0 border-b border-foreground/12 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-5 sm:px-6">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          {APP_NAME}
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
