import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { profile, type Entry } from "@/content/profile";
import { SiteHeader } from "@/components/site-header";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: `Curriculum vitae of ${profile.name}.`,
};

function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 flex items-center gap-3 font-serif text-[1.2rem] font-semibold text-accent">
        {title}
        <span className="h-px flex-1 bg-line" />
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Row({ left, right, sub }: { left: ReactNode; right?: ReactNode; sub?: ReactNode }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6">
        <div className="font-semibold">{left}</div>
        {right && <div className="text-sm tabular-nums text-muted">{right}</div>}
      </div>
      {sub && <div className="italic text-muted">{sub}</div>}
    </div>
  );
}

function Bullets({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-faint">
      {items.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}

function CvEntry({ e }: { e: Entry }) {
  return (
    <div className="avoid-break">
      <Row left={e.title} right={e.period} sub={[e.role, e.org].filter(Boolean).join(", ")} />
      <Bullets items={e.bullets} />
    </div>
  );
}

export default function CvPage() {
  const host = profile.site.replace(/^https?:\/\//, "");

  return (
    <>
      <SiteHeader />
      <div className="no-print mx-auto flex max-w-[52rem] items-center justify-between gap-4 px-5 pt-8 sm:px-8">
        <Link href="/" className="text-sm text-muted hover:text-ink">
          ← Back to homepage
        </Link>
        <PrintButton />
      </div>

      <main className="mx-auto my-6 max-w-[52rem] border border-line bg-surface px-6 py-10 text-[0.95rem] leading-relaxed shadow-sm sm:px-12 print:m-0 print:max-w-none print:border-0 print:p-0 print:shadow-none">
        <header className="text-center">
          <h1 className="font-serif text-4xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-muted">{profile.headline}</p>
          <p className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-muted">
            <span>{profile.location}</span>
            <span aria-hidden>·</span>
            <a href={`mailto:${profile.email}`} className="text-accent">{profile.email}</a>
            <span aria-hidden>·</span>
            <a href={profile.site} className="text-accent">{host}</a>
            <span aria-hidden>·</span>
            <a href={profile.links.github} className="text-accent">github.com/ahmadrkh</a>
          </p>
        </header>

        <CvSection title="Research Interests">
          <p>{profile.interests.join(" · ")}</p>
        </CvSection>

        <CvSection title="Education">
          {profile.education.map((e) => (
            <div key={e.degree} className="avoid-break">
              <Row left={e.org} right={e.period} sub={`${e.degree}, ${e.location}`} />
              {(e.thesis || e.coursework) && (
                <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-faint">
                  {e.thesis && (
                    <li>
                      Bachelor&apos;s project: <span className="italic">{e.thesis.title}</span> — supervised by{" "}
                      {e.thesis.supervisor}
                    </li>
                  )}
                  {e.coursework && <li>Relevant coursework: {e.coursework.join(", ")}</li>}
                </ul>
              )}
            </div>
          ))}
        </CvSection>

        <CvSection title="Research Experience">
          {profile.research.map((e) => (
            <CvEntry key={e.title} e={e} />
          ))}
        </CvSection>

        <CvSection title="Teaching Experience">
          {profile.teaching.map((t) => (
            <div key={t.course} className="avoid-break">
              <Row
                left={
                  <>
                    {t.course}
                    <span className="font-normal">, {t.role}</span>
                  </>
                }
                right={t.terms.join(", ")}
                sub={`Instructor: ${t.instructor}`}
              />
              <Bullets items={t.bullets} />
            </div>
          ))}
        </CvSection>

        <CvSection title="Selected Projects">
          {profile.projects.map((p) => (
            <div key={p.title} className="avoid-break">
              <Row left={p.title} right={p.year} sub={p.context} />
              <p className="mt-1">{p.summary}</p>
            </div>
          ))}
        </CvSection>

        <CvSection title="Industry Experience">
          {profile.experience.map((e) => (
            <CvEntry key={e.org} e={e} />
          ))}
        </CvSection>

        <CvSection title="Skills">
          <dl className="grid gap-x-6 gap-y-1 sm:grid-cols-[9.5rem_1fr]">
            {profile.skills.map((s) => (
              <div key={s.group} className="contents">
                <dt className="font-semibold">{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </CvSection>

        <CvSection title="Languages">
          <dl className="grid gap-x-6 gap-y-1 sm:grid-cols-[9.5rem_1fr]">
            {profile.languages.map((l) => (
              <div key={l.name} className="contents">
                <dt className="font-semibold">{l.name}</dt>
                <dd>{l.level}</dd>
              </div>
            ))}
          </dl>
        </CvSection>

        <CvSection title="Service & Outreach">
          {profile.service.map((e) => (
            <CvEntry key={e.title} e={e} />
          ))}
        </CvSection>

        <p className="mt-10 text-right text-xs italic text-faint">Last updated {profile.cvUpdated}</p>
      </main>
    </>
  );
}
