import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data";

type Platform = "Mobile" | "Web" | "Desktop" | "Web & Mobile";

const platformIcon: Record<Platform, React.ReactNode> = {
  Mobile: (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Web: (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  ),
  Desktop: (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  "Web & Mobile": (                                          // ← add this
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="5" y="2" width="9" height="14" rx="1.5" />
      <rect x="14" y="5" width="8" height="11" rx="1.5" />
    </svg>
  ),
};


const FigmaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="currentColor" />
    <path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5a9.5 9.5 0 0 0 0 19Z" fill="currentColor" />
    <path d="M0 19a9.5 9.5 0 0 0 9.5 9.5H19V9.5H9.5A9.5 9.5 0 0 0 0 19Z" fill="currentColor" />
    <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z" fill="currentColor" />
    <path d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0Z" fill="currentColor" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6m0 0v6m0-6L10 14" />
  </svg>
);

interface Props {
  params: Promise<{ slug: string }>;
}

// Add this component near the top of page.tsx, above ProjectPage

function RichText({ content, className }: { content: string; className?: string }) {
  return (
    <div
      className={`
        text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl
        [&_p]:mb-4 last:[&_p]:mb-0
        [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:list-none
        [&_li]:flex [&_li]:items-start [&_li]:gap-2.5
        [&_li]:before:content-[''] [&_li]:before:mt-2 [&_li]:before:w-1.5 [&_li]:before:h-1.5
        [&_li]:before:rounded-full [&_li]:before:bg-[#023581] [&_li]:before:dark:bg-[#4d7fd4] [&_li]:before:shrink-0
        ${className ?? ""}
      `}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[currentIndex - 1] ?? null;
  const next = projects[currentIndex + 1] ?? null;

  const sections = [
    { id: "introduction", label: "Introduction", body: project.introduction },
    { id: "problem",      label: "Problem",      body: project.problem      },
    { id: "goal",         label: "Goal",         body: project.goal         },
    { id: "research",     label: "Research",     body: project.research     },
  ];

  return (
    <main className="relative min-h-screen bg-[#f9fafb] dark:bg-neutral-950 overflow-hidden">

      {/* Bg dots */}
      <div className="absolute right-10 top-24 grid grid-cols-5 gap-3 opacity-10 z-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581]" />
        ))}
      </div>
      <div className="absolute left-10 bottom-24 grid grid-cols-4 gap-3 opacity-10 z-0 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581]" />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">

        {/* Back */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 dark:text-neutral-500 hover:text-[#023581] dark:hover:text-[#4d7fd4] transition-colors mb-12"
        >
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M13 6l-6 6 6 6" />
          </svg>
          Back to all work
        </Link>

        {/* ── Header ─────────────────────────────────────── */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full bg-[#023581] text-white">
              {platformIcon[project.platform]}
              {project.platform}
            </span>
            <span className="text-sm font-medium px-3 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
              {project.year}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="text-sm px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* ── Cover image ─────────────────────────────────── */}
        {project.pageCover ? (
          <div className="relative w-full h-72 sm:h-[440px] rounded-2xl overflow-hidden bg-[#EEF4FF] dark:bg-[#023581]/10 mb-10 border border-neutral-100 dark:border-neutral-800">
            <Image src={project.pageCover} alt={project.title} fill className="object-cover" priority />
          </div>
        ) : (
          <div className="w-full h-72 sm:h-[440px] rounded-2xl bg-[#EEF4FF] dark:bg-[#023581]/10 mb-10 border border-neutral-100 dark:border-neutral-800 flex items-center justify-center">
            <span className="text-base text-neutral-400 dark:text-neutral-500">Cover image coming soon</span>
          </div>
        )}

        {/* ── Meta: Role + Tools ──────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Role */}
          <div className="rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-5">
            <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2">My Role</p>
            <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">{project.role}</p>
          </div>

          {/* Tools */}
          <div className="rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-5">
            <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">Tools</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="text-sm font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Figma + Live links */}
        {(project.figmaLink || project.liveLink) && (
          <div className="flex flex-wrap gap-3 mb-14">
            {project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:border-[#023581]/40 hover:text-[#023581] dark:hover:border-[#4d7fd4]/40 dark:hover:text-[#4d7fd4] transition-all duration-200"
              >
                <Image src="/icons/figma.svg" alt="Figma" width={20} height={20} />
                View in Figma
                <ExternalIcon />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#023581] dark:bg-[#4d7fd4] text-white text-base font-medium hover:opacity-90 transition-all duration-200"
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
                </svg>
                View Live Site
                <ExternalIcon />
              </a>
            )}
          </div>
        )}

        {/* ── Divider ─────────────────────────────────────── */}
        <div className="border-t border-neutral-100 dark:border-neutral-800 mb-14" />

        {/* ── Case study sections ─────────────────────────── */}
        <div className="space-y-16">

          {/* Introduction, Problem, Goal, Research */}
          {sections.map(({ id, label, body }) => (
            <section key={id}>
              <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
                {label}
              </h3>
              <RichText content={body} />
            </section>
          ))}

          {/* Target Users */}
          <section>
            <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
              Target Users
            </h3>
            <RichText content={project.targetUsers} />
          </section>

          {/* User Persona Card */}
          <section>
            <h3 className="text2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-4">
              User Persona
            </h3>
            <div className="rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">

              {/* Persona header */}
              <div className="flex items-center gap-4 px-6 py-6 border-b border-neutral-100 dark:border-neutral-800 bg-[#EEF4FF] dark:bg-[#023581]/10">
                <div className="w-14 h-14 rounded-full bg-[#023581] dark:bg-[#4d7fd4] flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {project.userPersona.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
                    {project.userPersona.name}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {project.userPersona.age} · {project.userPersona.occupation}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="px-6 py-5 border-b border-neutral-100 dark:border-neutral-800">
                <p className="text-base text-neutral-600 dark:text-neutral-400 italic leading-relaxed">
                  "{project.userPersona.quote}"
                </p>
              </div>

              {/* Goals + Pain Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100 dark:divide-neutral-800">
                <div className="px-6 py-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
                    Goals
                  </p>
                  <ul className="space-y-3">
                    {project.userPersona.goals.map((g) => (
                      <li key={g} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-rose-500 dark:text-rose-400 mb-4">
                    Pain Points
                  </p>
                  <ul className="space-y-3">
                    {project.userPersona.painPoints.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Wireframes */}
            
            {/* Wireframes — only shown if the project has wireframe content */}
              {(project.wireframes || project.wireframeImages?.length > 0) && (
                <section>
                  <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
                    Wireframes
                  </h3>
                  {project.wireframes && <RichText content={project.wireframes} />}
                  {project.wireframeImages?.length > 0 && (
                    <div className="flex flex-col gap-6">
                      {project.wireframeImages.map((src, i) => (
                        <div key={i} className="relative h-[480px] rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                          <Image src={src} alt={`Wireframe ${i + 1}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}


          {/* UI Design */}
          <section>
            <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
              UI Design
            </h3>
            <RichText content={project.uiDesign} className="mb-6" />

            {project.uiImages.length > 0 && (
              <div className="flex flex-col gap-6">
  {project.uiImages.map((src, i) => (
    <div key={i} className="relative h-[480px] rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                    <Image src={src} alt={`UI Design ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Design Decision */}
          <section>
            <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
              Design Decision
            </h3>
            <div className="border-l-2 border-[#023581] dark:border-[#4d7fd4] pl-5">
              <RichText content={project.designDecision} />
            </div>
          </section>

          {/* Outcome */}
          <section>
            <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
              Outcome
            </h3>
            <RichText content={project.outcome} />
          </section>

        </div>

        {/* ── Prev / Next ──────────────────────────────────── */}
        <div className="mt-20 pt-8 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-4">
          {prev ? (
            <Link href={prev.href} className="group flex flex-col gap-1 text-left max-w-[45%]">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-[#023581] dark:group-hover:text-[#4d7fd4] transition-colors">
                ← Previous
              </span>
              <span className="text-base font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-[#023581] dark:group-hover:text-[#4d7fd4] transition-colors line-clamp-1">
                {prev.title}
              </span>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={next.href} className="group flex flex-col gap-1 text-right max-w-[45%] ml-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-[#023581] dark:group-hover:text-[#4d7fd4] transition-colors">
                Next →
              </span>
              <span className="text-base font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-[#023581] dark:group-hover:text-[#4d7fd4] transition-colors line-clamp-1">
                {next.title}
              </span>
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  );
}