import Link from "next/link";
import Image from "next/image";

export type Platform = "Mobile" | "Web" | "Desktop" | "Web & Mobile";

interface Project {
  title: string;
  description: string;
  tags: string[];
  platform: Platform;
  year: string;
  cover: string;
  href: string;
  projectType: "Case Study" | "Assessment" | "Freelance";
}

const projects: Project[] = [
  {
    title: "Vithursha Kamaleswaran-Personal Blog Publishing Site",
    description: "A content-focused blog platform designed to deliver a clean reading experience with strong visual hierarchy and easy navigation.",
    tags: ["UX Research", "UI Design"],
    platform: "Web",
    year: "2025",
    cover: "/front2.jpeg",
    href: "/work/vithursha-blog",
    projectType: "Freelance",
  },
  {
    title: "Shirohana Villa-Home Page Design",
    description: "A responsive homepage design for a luxury villa, focused on creating a visually engaging and seamless booking experience across web and mobile platforms.",
    tags: ["UX Design", "Usability Testing"],
    platform: "Web & Mobile",
    year: "2024",
    cover: "/Shirohana.jpeg",
    href: "/work/shirohana-villa",
    projectType: "Assessment",
  },
  {
    title: "Eco Shopper – Mobile App Redesign",
    description: "A redesign of an e-commerce mobile app focused on improving usability, visual consistency, and overall user experience.",
    tags: ["Design Systems", "UI Design"],
    platform: "Mobile",
    year: "2023",
    cover: "/eco.jpeg",
    href: "/work/eco-shopper-redesign",
    projectType: "Case Study",
  },
];

const platformIcon: Record<Platform, React.ReactNode> = {
  Mobile: (
    <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Web: (
    <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  ),
  Desktop: (
    <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

// ✅ typeStyles defined here — outside the component, at the top level
const typeStyles: Record<Project["projectType"], string> = {
  "Case Study": "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
  "Assessment": "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300",
  "Freelance":  "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",
};

export default function FeaturedWork() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f9fafb] dark:bg-neutral-950">

      {/* Background decorations */}
      {/* Large blob top-left */}
      <div className="absolute -left-40 -top-40 w-[500px] h-[500px] rounded-full bg-[#EEF4FF] dark:bg-[#023581]/8 z-0" />
      {/* Small blob bottom-right */}
      <div className="absolute -right-24 bottom-0 w-[320px] h-[320px] rounded-full bg-[#EEF4FF] dark:bg-[#023581]/8 z-0" />
      {/* Dot grid top-right */}
      <div className="absolute right-10 top-16 grid grid-cols-5 gap-3 z-0 opacity-20 dark:opacity-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581] dark:bg-[#4d7fd4]" />
        ))}
      </div>
      {/* Dot grid bottom-left */}
      <div className="absolute left-10 bottom-16 grid grid-cols-4 gap-3 z-0 opacity-15 dark:opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581] dark:bg-[#4d7fd4]" />
        ))}
      </div>
      {/* Thin horizontal accent line */}
      <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#023581]/10 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
            Portfolio
          </p>
          <h2 className="text-5xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight mb-3">
            Selected Work
          </h2>
          <p className="text-m text-neutral-400 dark:text-neutral-500 max-w-sm">
            A few projects I&apos;m proud of-from research to polished final designs.
          </p>
        </div>

        {/* Vertical card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex flex-col rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:border-[#023581]/30 dark:hover:border-[#4d7fd4]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Cover image */}
              <div className="relative w-full h-48 bg-[#EEF4FF] dark:bg-[#023581]/10 overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Year badge */}
                <span className="absolute top-3 right-3 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-500 dark:text-neutral-400 backdrop-blur-sm">
                  {project.year}
                </span>
                {/* Platform badge */}
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#023581] text-white">
                  {platformIcon[project.platform]}
                  {project.platform}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-[#023581] dark:group-hover:text-[#4d7fd4] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${typeStyles[project.projectType]}`}>
                    {project.projectType}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-[#023581] dark:text-[#4d7fd4] group-hover:gap-2 transition-all duration-200">
                    View
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all work button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#023581] dark:border-[#4d7fd4] text-[#023581] dark:text-[#4d7fd4] text-sm font-medium hover:bg-[#023581] dark:hover:bg-[#4d7fd4] hover:text-white dark:hover:text-neutral-900 transition-all duration-200"
          >
            View all work
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}