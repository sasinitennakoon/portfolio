"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects } from "./data";

type Filter = "All" | Platform;

export type Platform = "Mobile" | "Web" | "Desktop" | "Web & Mobile";

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


const typeStyles = {
  "Case Study": "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
  "Assessment": "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300",
  "Freelance": "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",
};

const filters: Filter[] = ["All", "Mobile", "Web", "Web & Mobile"];
export default function WorkPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.platform === active);

     const typeStyles = {
    "Case Study": "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
    "Assessment": "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300",
    "Freelance": "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",
  };
  return (
    <main className="relative min-h-screen bg-[#f9fafb] dark:bg-neutral-950 overflow-hidden">

      {/* Background dots top-right */}
      <div className="absolute right-10 top-24 grid grid-cols-5 gap-3 opacity-10 dark:opacity-10 z-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581]" />
        ))}
      </div>

      {/* Background dots bottom-left */}
      <div className="absolute left-10 bottom-24 grid grid-cols-4 gap-3 opacity-10 dark:opacity-10 z-0">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581]" />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-24">

        {/* Page header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
            Portfolio
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight mb-3">
            All work
          </h1>
          <p className="text-sm text-neutral-400 dark:text-neutral-500 max-w-sm">
            A collection of projects across mobile, web, and desktop — from research through to final design.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? "bg-[#023581] dark:bg-[#4d7fd4] text-white border-[#023581] dark:border-[#4d7fd4]"
                    : "bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700 hover:border-[#023581]/40 hover:text-[#023581] dark:hover:border-[#4d7fd4]/40 dark:hover:text-[#4d7fd4]"
                }`}
              >
                {f !== "All" && (
                  <span className={isActive ? "text-white" : "text-current"}>
                    {platformIcon[f as Platform]}
                  </span>
                )}
                {f === "All" ? "All projects" : `${f} design`}
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-medium ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500"
                  }`}
                >
                  {f === "All"
                    ? projects.length
                    : projects.filter((p) => p.platform === f).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project count */}
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-6 text-center">
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex flex-col rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:border-[#023581]/30 dark:hover:border-[#4d7fd4]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Cover */}
              <div className="relative w-full h-48 bg-[#EEF4FF] dark:bg-[#023581]/10 overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-500 dark:text-neutral-400 backdrop-blur-sm">
                  {project.year}
                </span>
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#023581] text-white">
                  {platformIcon[project.platform]}
                  {project.platform}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
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
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-[#023581] dark:group-hover:text-[#4d7fd4] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <span
                    className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${typeStyles[project.projectType]}`}
                  >
                    {project.projectType}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-[#023581] dark:text-[#4d7fd4] group-hover:gap-2 transition-all duration-200">
                    View
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-neutral-400 dark:text-neutral-500 text-sm">
              No projects found for this filter.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}