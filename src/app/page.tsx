import Link from "next/link";
import { profile } from "@/content/profile";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { EntryBlock, ExtLink, LinkRow, Section, Tags } from "@/components/ui";
import { CapIcon, FileIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "@/components/icons";

function Sidebar() {
  const items = [
    { icon: <CapIcon />, content: profile.affiliation },
    { icon: <PinIcon />, content: profile.location },
    { icon: <MailIcon />, content: <ExtLink href={`mailto:${profile.email}`}>{profile.email}</ExtLink> },
    { icon: <GitHubIcon />, content: <ExtLink href={profile.links.github}>github.com/ahmadrkh</ExtLink> },
    { icon: <LinkedInIcon />, content: <ExtLink href={profile.links.linkedin}>linkedin.com/in/ahmadreza-khanari</ExtLink> },
  ];

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="flex items-center gap-5 lg:block">
        <div
          aria-hidden
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-line bg-accent-soft font-serif text-2xl font-semibold text-accent lg:h-28 lg:w-28 lg:text-4xl"
        >
          AK
        </div>
        <div className="lg:mt-6">
          <h1 className="font-serif text-3xl font-semibold leading-tight tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-muted">{profile.headline}</p>
        </div>
      </div>

      <ul className="mt-6 space-y-2.5 text-sm text-muted">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2.5 [overflow-wrap:anywhere]">
            <span className="text-faint">{it.icon}</span>
            {it.content}
          </li>
        ))}
      </ul>

      <Link
        href="/cv/"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
      >
        <FileIcon />
        Curriculum Vitae
      </Link>
    </aside>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[17rem_1fr] lg:gap-16 lg:py-16">
        <Sidebar />

        <div className="min-w-0 space-y-8">
          <Section id="about" title="About">
            <div className="max-w-prose space-y-4 text-[1.05rem] leading-[1.8] text-ink/90">
              {profile.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-surface p-5">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-faint">Research Interests</h3>
                <ul className="space-y-1.5">
                  {profile.interests.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-line bg-surface p-5">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-faint">Education</h3>
                <div className="space-y-4">
                  {profile.education.map((e) => (
                    <div key={e.degree}>
                      <p className="font-medium">{e.degree}</p>
                      <p className="text-muted">{e.org}</p>
                      <p className="text-sm text-faint">{e.period}</p>
                      {e.thesis && (
                        <p className="mt-1 text-sm text-muted">
                          Thesis: <span className="italic">{e.thesis.title}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section id="research" title="Research Experience">
            <div className="space-y-10">
              {profile.research.map((r) => (
                <EntryBlock key={r.title} entry={r} />
              ))}
            </div>
          </Section>

          <Section id="projects" title="Selected Projects">
            <div className="grid gap-4">
              {profile.projects.map((p) => (
                <article key={p.title} className="flex flex-col rounded-lg border border-line bg-surface p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-faint">
                    {p.context}
                    {p.year && ` · ${p.year}`}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[0.95rem] text-ink/85">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <Tags items={p.tags} />
                    {p.links && <LinkRow links={p.links} />}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="teaching" title="Teaching">
            <p className="mb-6 max-w-prose text-muted">
              Teaching assistant at Sharif University of Technology for seven undergraduate courses, 2023 – 2025.
            </p>
            <ol className="relative space-y-6 border-l border-line pl-6">
              {profile.teaching.map((t) => (
                <li key={t.course} className="relative">
                  <span className="absolute -left-[1.72rem] top-2 h-2 w-2 rounded-full border-2 border-paper bg-accent" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                    <h3 className="font-medium">
                      {t.course}
                      <span className="font-normal text-muted"> — {t.role}</span>
                    </h3>
                    <p className="text-sm tabular-nums text-faint">{t.terms.join(", ")}</p>
                  </div>
                  <p className="text-sm text-muted">Instructor: {t.instructor}</p>
                  {t.bullets && <p className="mt-1 text-[0.95rem] text-ink/85">{t.bullets.join(" ")}</p>}
                </li>
              ))}
            </ol>
          </Section>

          <Section id="experience" title="Industry Experience">
            <div className="space-y-10">
              {profile.experience.map((e) => (
                <EntryBlock key={e.org} entry={e} />
              ))}
            </div>
          </Section>

          <Section id="skills" title="Skills & Languages">
            <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-[10rem_1fr]">
              {profile.skills.map((s) => (
                <div key={s.group} className="contents">
                  <dt className="text-sm font-semibold text-muted">{s.group}</dt>
                  <dd>{s.items.join(" · ")}</dd>
                </div>
              ))}
              {profile.languages.map((l) => (
                <div key={l.name} className="contents">
                  <dt className="text-sm font-semibold text-muted">{l.name}</dt>
                  <dd>{l.level}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="service" title="Service & Outreach">
            <div className="space-y-8">
              {profile.service.map((s) => (
                <EntryBlock key={s.title} entry={s} />
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <p className="max-w-prose text-ink/90">
              I welcome enquiries about research positions, graduate study, and collaboration. The best way to reach
              me is by email at <ExtLink href={`mailto:${profile.email}`}>{profile.email}</ExtLink>.
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
