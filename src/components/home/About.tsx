import Image from "next/image";

const focuses = [
  "Designing user flows that reduce friction and improve clarity",
  "Creating scalable UI systems for consistent experiences",
  "Conducting UX thinking through wireframes and structured layouts",
  "Translating ideas into interactive prototypes ready for development",
];

const experience = [
  {
    role: "Intern - UI/UX Designer",
    company: "Konekt Holdings",
    period: "2025 Nov — 2026 April",
    type: "Internship",
    description:
      "Designed and improved user interfaces for web and mobile platforms, including a corporate website and an international school system in Sri Lanka. Contributed to UI revamps by enhancing usability, visual consistency, and overall user experience.",
    highlights: ["User research & usability testing", "Wireframing & prototyping", "Design system contribution"],
  },
  {
    role: "Intern - Business Analyst",
    company: "VizuaMatix (Pvt) Ltd.",
    period: "2024 Dec — 2025 July",
    type: "Internship",
    description:
      "Collaborated with cross-functional teams to analyze business requirements and translate them into technical specifications. Conducted user research and created detailed documentation for product development.",
    highlights: ["Analysis thinking", "Collaboration", "Requirements Gathering"],
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-white dark:bg-neutral-950">

      {/* Background decorations */}
      <div className="absolute right-0 top-1/4 w-[420px] h-[420px] rounded-full bg-[#EEF4FF] dark:bg-[#023581]/8 translate-x-1/2 z-0" />
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] rounded-full bg-[#EEF4FF] dark:bg-[#023581]/8 -translate-x-1/2 z-0" />
      <div className="absolute right-12 bottom-24 grid grid-cols-4 gap-3 z-0 opacity-20 dark:opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581] dark:bg-[#4d7fd4]" />
        ))}
      </div>
      <div className="absolute left-12 top-16 grid grid-cols-5 gap-3 z-0 opacity-15 dark:opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581] dark:bg-[#4d7fd4]" />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section label */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
            About
          </p>
          <h2 className="text-5xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            The Designer Behind the Work
          </h2>
        </div>

        {/* Top block — image + intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-20">

          {/* Image */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-72 h-80 rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 bg-[#EEF4FF] dark:bg-[#023581]/10">
              <Image
                src="/about.png"
                alt="Sasini"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:right-auto md:-left-4 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-xl px-4 py-3 shadow-sm">
              <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mb-0.5">Currently</p>
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">UI/UX Designer-Intern</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-500 font-medium">Available for work</span>
              </div>
            </div>
          </div>

          {/* Intro text */}
          <div>
            <p className="text-xl font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed mb-4">
              I&apos;m a UI/UX Designer focused on designing intuitive, scalable, and user-centered digital experiences.
            </p>
            <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
              I specialize in translating complex problems into clear, structured, and intuitive interfaces that balance both user needs and business goals.
            </p>
            <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
              I have experience designing for both web and mobile platforms, applying design thinking alongside practical implementation. My approach is rooted in usability, consistency, and attention to detail ensuring that every interaction feels purposeful and seamless.
            </p>
            <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Alongside my academic background in Information Systems at the{" "}
              <span className="text-[#023581] dark:text-[#4d7fd4] font-medium">
                University of Colombo School of Computing
              </span>
              , I actively work on real-world design projects and production-level systems, strengthening both design and product thinking.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-100 dark:bg-neutral-800/60 mb-20" />

        {/* Work experience */}
        <div className="mb-20">
          <h3 className="text-m font-medium tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-8">
            Work experience
          </h3>
          <div className="flex flex-col gap-5">
            {experience.map((job) => (
              <div
                key={job.role}
                className="group relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-8 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-[#023581]/20 dark:hover:border-[#4d7fd4]/20 transition-all duration-200"
              >
                <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-[#023581] dark:bg-[#4d7fd4] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">{job.period}</p>
                  <span className="inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-[#EEF4FF] dark:bg-[#023581]/20 text-[#023581] dark:text-[#4d7fd4] font-medium">
                    {job.type}
                  </span>
                </div>
                <div>
                  <h4 className="text-base md:text-lg text-neutral-900 dark:text-neutral-100 mb-0.5">{job.role}</h4>
                  <p className="text-sm text-[#023581] dark:text-[#4d7fd4] font-medium mb-3">{job.company}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.highlights.map((h) => (
                      <span key={h} className="text-[11px] px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-100 dark:bg-neutral-800/60 mb-20" />

        {/* What I focus on + Design approach side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* Focus areas */}
          <div>
            <h3 className="text-m font-medium tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-6">
              What I focus on
            </h3>
            <ul className="flex flex-col gap-3 ">
              {focuses.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#023581] dark:bg-[#4d7fd4] shrink-0" />
                  <span className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Design approach */}
          <div>
            <h3 className="text-m font-medium tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-6">
              Design approach
            </h3>
            <div className="pl-5 border-l-2 border-[#EEF4FF] dark:border-[#023581]/40">
              <p className="text-base md:text-lg text-neutral-900 dark:text-neutral-100 leading-relaxed mb-4">
                I focus on clarity over complexity.
              </p>
              <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Every design decision I make is guided by usability, hierarchy, and user behavior-ensuring interfaces feel natural, efficient, and purposeful.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}