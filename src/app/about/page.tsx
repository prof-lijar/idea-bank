import type { Metadata } from "next";
import { BrandMark } from "@/components/brand-mark";
import { BRAND_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "What Idea Bank is: problems, solutions, executions—and why ideas are the edge we have.",
};

const constraints = [
  "We can’t beat big tech in skills.",
  "We can’t beat big tech in experiences.",
  "We can’t beat big tech in infrastructures.",
  "We can’t beat big tech in AI.",
  "We can’t beat big tech in tokens.",
  "We can’t generate tokens like them.",
];

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <article className="mx-auto w-full max-w-xl flex-1 px-5 py-14 sm:px-6 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">
          About this project
        </p>
        <div className="mt-4 space-y-2">
          <h1 className="font-normal leading-none text-foreground">
            <BrandMark size="hero" />
          </h1>
          <p className="font-mono text-[11px] leading-relaxed tracking-[0.08em] text-foreground/45 sm:text-[12px]">
            {BRAND_LINE}
          </p>
        </div>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/85">
          <section className="space-y-3">
            <h2 className="font-mono text-[12px] font-normal uppercase tracking-[0.18em] text-foreground/50">
              What is it?
            </h2>
            <p>
              Idea Bank is the collection—the bank—of{" "}
              <strong className="font-medium text-foreground">problems</strong>
              ,{" "}
              <strong className="font-medium text-foreground">solutions</strong>
              , and{" "}
              <strong className="font-medium text-foreground">executions</strong>
              . Some people upload their problems. Some propose solutions to
              specific problems. Some execute those solutions and share what
              happened.
            </p>
          </section>

          <p className="border-l-2 border-foreground/20 pl-5 text-foreground/90">
            The best problem, the best solution, and the best execution is{" "}
            <span className="font-medium text-foreground">rewarded</span>.
          </p>

          <section className="space-y-4">
            <h2 className="font-mono text-[12px] font-normal uppercase tracking-[0.18em] text-foreground/50">
              The constraints
            </h2>
            <ul className="space-y-2.5 border-t border-foreground/10 pt-4">
              {constraints.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-[14px] leading-snug text-foreground/75"
                >
                  <span className="select-none font-mono text-foreground/35">
                    —
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-16 space-y-6 border-t border-foreground/12 pt-12">
          <p className="font-serif text-[1.35rem] leading-snug text-foreground sm:text-[1.5rem]">
            We can beat them in ideas.
          </p>
          <p className="font-serif text-[1.35rem] leading-snug text-foreground sm:text-[1.5rem]">
            We can generate limitless ideas for free.
          </p>
          <p className="font-serif text-[1.45rem] font-medium leading-snug tracking-[-0.02em] text-foreground sm:text-[1.6rem]">
            Our mission is to generate one idea that can beat.
          </p>
        </div>
      </article>
    </main>
  );
}
