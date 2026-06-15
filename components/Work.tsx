import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Work() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-18">
      <h2 className="font-serif text-4xl font-bold text-ink tracking-tight mb-12">
        Selected Work
      </h2>

      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <a
            key={project.number}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center group"
          >
            {/* Text side */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <span className="font-sans text-xs text-ink-faint uppercase tracking-widest">
                {project.number} —
              </span>

              <h3 className="font-serif text-3xl font-bold text-ink tracking-tight group-hover:text-accent transition-colors duration-250">
                {project.title}
              </h3>

              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs font-medium text-ink border border-ink/20 rounded-full px-3 py-1 hover:border-ink/40 transition-colors duration-150"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-ink-muted group-hover:text-ink transition-colors duration-150 mt-2">
                View Project
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>

            {/* Image side */}
            <div className="md:col-span-7 rounded-2xl overflow-hidden border border-ink/10 aspect-video bg-ink/5 relative order-first md:order-none">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-400"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-serif text-3xl text-ink-faint/40 select-none">
                    {project.title}
                  </span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
