"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white dark:bg-neutral-950">

      {/* Background blob */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-[#EEF4FF] dark:bg-[#023581]/10 -translate-y-1/4 translate-x-1/4 z-0" />

      {/* Dot grid decoration bottom-left */}
      <div className="absolute left-6 bottom-24 grid grid-cols-4 gap-3 z-0 opacity-20 dark:opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581] dark:bg-[#4d7fd4]" />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-16 w-full">

        {/* Left — text content */}
        <div className="flex-1 max-w-xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF4FF] dark:bg-[#023581]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#023581] dark:bg-[#4d7fd4] animate-pulse" />
            <span className="text-[11px] font-medium tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4]">
              Available for opportunities
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-100 mb-5">
            UI/UX Designer{" "}
            <span className="italic text-[#023581] dark:text-[#4d7fd4]">focused</span>{" "}
            on creating clear, usable digital experiences.
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3 max-w-lg">
            I design user-centered interfaces that combine usability, clarity, and visual polish.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="px-6 py-3 rounded-full bg-[#023581] dark:bg-[#4d7fd4] text-white text-sm font-medium hover:opacity-85 transition-opacity"
            >
              View Work
            </Link>
            <a
              href="/TMSS Tennakoon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#023581] dark:border-[#4d7fd4] text-[#023581] dark:text-[#4d7fd4] text-sm font-medium hover:bg-[#EEF4FF] dark:hover:bg-[#023581]/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3M4 20h16" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Right — SVG illustration */}
        <div className="flex-shrink-0 w-full md:w-[420px]">
          {mounted && (
            <Image
              src={theme === "dark" ? "/Black Hero.gif" : "/hero.gif"}
              alt="Hero illustration"
              width={420}
              height={420}
              className="w-full h-auto object-contain"
              priority
            />
          )}
        </div>
      </div>

    </section>
  );
}