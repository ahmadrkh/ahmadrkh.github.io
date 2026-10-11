import type { ReactNode } from "react";
import type { Entry, Link } from "@/content/profile";
import { ArrowUpRight } from "./icons";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-line pt-10 pb-4 first:border-t-0 first:pt-0">
      <h2 className="mb-6 font-serif text-[1.65rem] font-semibold tracking-tight text-ink">{title}</h2>
      {children}
    </section>
  );
}

export function ExtLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`text-accent underline decoration-accent/30 underline-offset-[3px] transition-colors hover:decoration-accent ${className}`}
    >
      {children}
    </a>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="rounded border border-line bg-surface px-2 py-0.5 text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function LinkRow({ links }: { links: Link[] }) {
  return (
    <div className="flex gap-4 text-sm font-medium">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-accent hover:underline"
        >
          {l.label}
          <ArrowUpRight />
        </a>
      ))}
    </div>
  );
}

export function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <article className="grid gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto]">
      <div>
        <h3 className="font-serif text-lg font-semibold leading-snug text-ink">{entry.title}</h3>
        {(entry.org || entry.role) && (
          <p className="text-muted">
            {[entry.role, entry.org].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
      <p className="text-sm tabular-nums text-faint sm:pt-1 sm:text-right">{entry.period}</p>
      {entry.bullets && (
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-ink/90 marker:text-faint sm:col-span-2">
          {entry.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {(entry.tags || entry.links) && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 sm:col-span-2">
          {entry.tags && <Tags items={entry.tags} />}
          {entry.links && <LinkRow links={entry.links} />}
        </div>
      )}
    </article>
  );
}
