import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Link as LinkIcon,
} from "lucide-react";
import {
  personal,
  socials,
  experience,
  education,
  skills,
} from "@/lib/data";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size: number; strokeWidth: number }>
> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
  peerlist: LinkIcon,
};

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-18">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="mb-16">
        <p className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-ink-faint mb-4">
          {personal.descriptors.join(". ")}.
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.1] mb-6">
          Hi, I&apos;m {personal.fullName}.
        </h1>
        <p className="font-sans text-base text-ink-muted leading-relaxed max-w-2xl mb-8">
          {personal.bio[0]}
        </p>
        <div className="flex items-center flex-wrap gap-5">
          {socials.map((social) => {
            const Icon = ICON_MAP[social.platform] ?? LinkIcon;
            return (
              <a
                key={social.platform}
                href={social.url}
                target={social.platform === "email" ? undefined : "_blank"}
                rel={
                  social.platform === "email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="flex items-center gap-2 font-sans text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-150"
              >
                <Icon size={16} strokeWidth={1.5} />
                {social.label}
              </a>
            );
          })}
        </div>
      </div>

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
                <p className="font-sans text-sm text-ink-faint">{item.period}</p>
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
                <p className="font-sans text-sm text-ink-faint">{item.period}</p>
              </div>
              <p className="font-sans text-sm text-ink-muted leading-relaxed mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills (unboxed) ─────────────────────────────────── */}
      <div>
        <h2 className="font-serif text-2xl font-bold text-ink tracking-tight mb-8">
          Technical Arsenal
        </h2>
        <div className="flex flex-col gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-faint mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-xs font-medium text-ink bg-ink/5 px-3 py-1 hover:bg-ink/10 transition-colors duration-150"
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
  );
}
