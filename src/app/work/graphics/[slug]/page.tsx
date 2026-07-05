import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { graphicProjects } from "../graphicData";

interface Props {
  params: Promise<{ slug: string }>;
}

function RichText({ content, className }: { content: string; className?: string }) {
  return (
    <div
      className={`
        text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl
        [&_p]:mb-4 last:[&_p]:mb-0
        ${className ?? ""}
      `}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export function generateStaticParams() {
  return graphicProjects.map((p) => ({ slug: p.slug }));
}

export default async function GraphicProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = graphicProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = graphicProjects.findIndex((p) => p.slug === slug);
  const prev = graphicProjects[currentIndex - 1] ?? null;
  const next = graphicProjects[currentIndex + 1] ?? null;

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

        {/* ── Hero ─────────────────────────────────────── */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full bg-[#023581] text-white">
              {project.category}
            </span>
            <span className="text-sm font-medium px-3 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
              {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {project.title}
          </h1>
        </div>

        {/* Hero mockup — large */}
        <div className="relative w-full h-72 sm:h-[500px] rounded-2xl overflow-hidden bg-[#EEF4FF] dark:bg-[#023581]/10 mb-14 border border-neutral-100 dark:border-neutral-800">
          <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="space-y-16">

          {/* ── Overview ─────────────────────────────── */}
          <section>
            <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
              Overview
            </h3>
            <RichText content={project.overview} />
          </section>

          {/* ── Project Details ──────────────────────── */}
          <section>
            <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-4">
              Project Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-5">
                <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2">Client</p>
                <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">{project.client}</p>
              </div>
              <div className="rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-5">
                <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2">My Role</p>
                <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">{project.role}</p>
              </div>
              <div className="rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-5 sm:col-span-2">
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
          </section>

          {/* ── Design Elements ──────────────────────── */}
          {(project.colorPalette?.length || project.typography?.length || project.logo) && (
            <section>
              <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-4">
                Design Elements
              </h3>

              <div className="space-y-6">

                {/* Color palette */}
                {project.colorPalette && project.colorPalette.length > 0 && (
                  <div className="rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-5">
                    <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
                      Color Palette
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {project.colorPalette.map((c) => (
                        <div key={c.hex} className="flex flex-col items-center gap-2">
                          <div
                            className="w-14 h-14 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                            {c.name ?? c.hex}
                          </span>
                          <span className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase">
                            {c.hex}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Typography */}
                {project.typography && project.typography.length > 0 && (
                  <div className="rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-5">
                    <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
                      Typography
                    </p>
                    <div className="space-y-4">
                      {project.typography.map((t) => (
                        <div key={t.name} className="flex items-baseline justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3 last:border-0 last:pb-0">
                          <div>
                            <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">{t.name}</p>
                            <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">{t.usage}</p>
                          </div>
                          <span className="text-2xl text-neutral-500 dark:text-neutral-400">
                            {t.sample ?? t.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Logo */}
                {project.logo && (
                  <div className="rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-8 flex items-center justify-center">
                    <div className="relative w-full max-w-xs h-40">
                      <Image src={project.logo} alt={`${project.title} logo`} fill className="object-contain" />
                    </div>
                  </div>
                )}

              </div>
            </section>
          )}

          {/* ── Final Designs (largest section) ──────── 
          <section>
            <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-6">
              Final Designs
            </h3>
            <div className="flex flex-col gap-6">
              {project.finalImages.map((src, i) => (
                <div
                  key={i}
                  className="relative h-[420px] sm:h-[560px] rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900"
                >
                  <Image src={src} alt={`${project.title} — final design ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>*/}

          {/* ── Final Designs (largest section) ──────── */}
<section>
  <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-6">
    Final Designs
  </h3>

  <div className="space-y-12">
    {project.finalDesigns.map((set, setIndex) => (
      <div key={setIndex}>
        {/* Optional heading */}
        {set.heading && (
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            {set.heading}
          </h4>
        )}

        {/* Optional description */}
        {set.description && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl mb-5">
            {set.description}
          </p>
        )}

        {/* One image per row, natural aspect ratio */}
        <div className="flex flex-col gap-6">
          {set.images.map((src, i) => (
            <div
              key={i}
              className="relative w-full rounded-xl overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900"
            >
              <Image
                src={src}
                alt={`${project.title} — ${set.heading ?? "final design"} ${i + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

          {/* ── Reflection ────────────────────────────── */}
          {project.reflection && (
            <section>
              <h3 className="text-2xl font-semibold tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
                Reflection
              </h3>
              <div className="border-l-2 border-[#023581] dark:border-[#4d7fd4] pl-5">
                <RichText content={project.reflection} />
              </div>
            </section>
          )}

        </div>

        {/* ── Prev / Next ──────────────────────────────── */}
        <div className="mt-20 pt-8 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-4">
          {prev ? (
            <Link href={`/work/graphics/${prev.slug}`} className="group flex flex-col gap-1 text-left max-w-[45%]">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-[#023581] dark:group-hover:text-[#4d7fd4] transition-colors">
                ← Previous
              </span>
              <span className="text-base font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-[#023581] dark:group-hover:text-[#4d7fd4] transition-colors line-clamp-1">
                {prev.title}
              </span>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/work/graphics/${next.slug}`} className="group flex flex-col gap-1 text-right max-w-[45%] ml-auto">
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