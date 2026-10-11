import Link from "next/link";
import { profile } from "@/content/profile";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#research", label: "Research" },
  { href: "/#projects", label: "Projects" },
  { href: "/#teaching", label: "Teaching" },
  { href: "/#experience", label: "Experience" },
];

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="font-serif text-lg font-semibold tracking-tight text-ink">
          {profile.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hidden transition-colors hover:text-ink md:inline">
              {n.label}
            </Link>
          ))}
          <Link
            href="/cv/"
            className="rounded-md border border-accent/40 px-3 py-1 font-medium text-accent transition-colors hover:bg-accent-soft"
          >
            CV
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-8 text-sm text-faint sm:flex-row sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Last updated {profile.cvUpdated}</p>
      </div>
    </footer>
  );
}
