import Link from "next/link";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="font-serif text-3xl font-normal tracking-[-0.02em] text-foreground sm:text-4xl">
        {APP_NAME}
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/65">
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
