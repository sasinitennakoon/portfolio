// app/work/GraphicCard.tsx
import Link from "next/link";
import Image from "next/image";
import { GraphicProject } from "./graphics/graphicData";

export default function GraphicCard({ project }: { project: GraphicProject }) {
  return (
    <Link
      href={`/work/graphics/${project.slug}`}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
    >
      <div className="relative w-full aspect-[4/5] flex-1">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="text-[11px] font-medium text-white/70 mb-1">{project.category}</span>
          <h3 className="text-sm font-semibold text-white">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
}