const tools = [
  {
    name: "Figma",
    logo: <img src="/icons/figma.svg" className="w-7 h-7" />,
  },
  {
    name: "Miro",
    logo: <img src="/icons/miro.svg" className="w-7 h-7" />,
  },
  {
    name: "Illustrator",
    logo: <img src="/icons/illustrator.svg" className="w-7 h-7" />,
  },
  {
    name: "Photoshop",
    logo: <img src="/icons/photoshop.svg" className="w-7 h-7" />,
  },
  {
    name: "Notion",
    logo: <img src="/icons/notion.svg" className="w-7 h-7" />,
  },
  {
    name: "HTML",
    logo: <img src="/icons/html-5.svg" className="w-7 h-7" />,
  },
  {
    name: "CSS",
    logo: <img src="/icons/css.svg" className="w-7 h-7" />,
  },
  {
    name: "Tailwind CSS",
    logo: <img width="24" height="24" src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css"/>
  },
  {
    name: "Next JS",
    logo: <img src="/icons/next-js.svg" className="w-7 h-7" />,
  },
  {
    name: "React",
    logo: <img src="/icons/react.svg" className="w-7 h-7" />,
  },
  {
    name: "Typescript",
    logo: <img src="/icons/typescript.svg" className="w-7 h-7" />,
  },
  {
    name: "Strapi",
    logo: <img src="/icons/strapi.svg" className="w-15 h-10" />,
  },
];

const designSkills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "UI Design",
  "UX Design",
  "Design Thinking",
  "Design Systems",
  "Usability Testing",
  "Information Architecture",
  "Interaction Design",
  "Mobile Design",
  "Web Design",
];

export default function Skills() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f9fafb] dark:bg-neutral-900/40">

      {/* Subtle background dots */}
      <div className="absolute left-10 top-10 grid grid-cols-6 gap-3 z-0 opacity-10 dark:opacity-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581]" />
        ))}
      </div>
      <div className="absolute right-10 bottom-10 grid grid-cols-5 gap-3 z-0 opacity-10 dark:opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#023581]" />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-[#023581] dark:text-[#4d7fd4] mb-3">
            Expertise
          </p>
          <h2 className="text-5xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            Tools & skills
          </h2>
        </div>

        {/* Tools I use */}
        <div className="mb-16">
          <h3 className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-8 text-center">
            Tools I use
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-[#023581]/20 dark:hover:border-[#4d7fd4]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                {tool.logo}
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium text-center leading-tight">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 mb-16" />

        {/* Design skills — chips */}
        <div>
          <h3 className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-8 text-center">
            Design skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {designSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-[#023581]/40 hover:text-[#023581] dark:hover:border-[#4d7fd4]/40 dark:hover:text-[#4d7fd4] transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}