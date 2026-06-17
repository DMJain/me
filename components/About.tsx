import HomeHero from "@/components/HomeHero";
import { experience, education, skills } from "@/lib/data";

export default function About() {
  return (
    <>
      <HomeHero showWidgets={false} />

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-18">
        {/* ── Unified Timeline ─────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-ink tracking-tight mb-8">
            Timeline
          </h2>

          <div className="border-l border-ink/20 ml-1">
            {/* Experience */}
            <p className="pl-6 font-sans text-[10px] uppercase tracking-widest text-ink-faint mb-6">
              Experience
            </p>

            {experience.map((item) => (
              <div key={item.company} className="pl-6 relative mb-8">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 bg-ink" />
                <p className="font-sans text-base font-semibold text-ink">
                  {item.role}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-0.5 gap-0.5">
                  <p className="font-sans text-sm text-ink-muted">
                    {item.company} &middot; {item.location}
                  </p>
                  <p className="font-sans text-sm text-ink-faint">
                    {item.period}
                  </p>
                </div>
                <p className="font-sans text-sm text-ink-muted leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Education */}
            <p className="pl-6 font-sans text-[10px] uppercase tracking-widest text-ink-faint mb-6 mt-10">
              Education
            </p>

            {education.map((item, i) => (
              <div
                key={item.institution}
                className={`pl-6 relative ${
                  i < education.length - 1 ? "mb-8" : ""
                }`}
              >
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 bg-ink" />
                <p className="font-sans text-base font-semibold text-ink">
                  {item.degree}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-0.5 gap-0.5">
                  <p className="font-sans text-sm text-ink-muted">
                    {item.institution} &middot; {item.location}
                  </p>
                  <p className="font-sans text-sm text-ink-faint">
                    {item.period}
                  </p>
                </div>
                <p className="font-sans text-sm text-ink-muted leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Technical Arsenal (full-width grid) ────────────── */}
        <div className="border-t border-ink/10 pt-12">
          <h2 className="font-serif text-2xl font-bold text-ink tracking-tight mb-2">
            Technical Arsenal
          </h2>
          <p className="font-sans text-sm text-ink-faint mb-0">
            Tools and technologies I work with daily.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="font-sans text-[10px] uppercase tracking-widest text-ink-faint mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="font-sans text-sm font-medium text-ink bg-ink/5 px-3 py-1 hover:bg-ink/10 transition-colors duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
