import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, Link as LinkIcon } from "lucide-react";
import { personal, socials, widgets } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size: number; strokeWidth: number }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
  peerlist: LinkIcon,
};

export default function HomeHero() {
  return (
    <section id="home" className="pt-14 pb-16 px-4 md:px-6 max-w-6xl mx-auto">
      {/* Upper section — 70 / 30 split on desktop */}
      <div className="flex flex-col md:flex-row gap-4 md:items-start">
        {/* Left column (70%) */}
        <div className="contents md:flex md:flex-[7] md:flex-col md:gap-4">
          {/* Three-word header */}
          <div className="order-1 px-6 py-5">
            <p className="font-sans text-xs uppercase tracking-widest text-ink-muted">
              {personal.descriptors.join(". ")}.
            </p>
          </div>

          {/* About Me */}
          <div className="order-4 px-6 py-4">
            <p className="font-sans text-xs uppercase tracking-widest text-ink-muted mb-3">
              {personal.title}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink tracking-tight mb-6">
              About Me
            </h2>
            <div className="flex flex-col gap-4">
              {personal.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-sm text-ink-muted leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right column (30%, sticky on desktop) */}
        <div className="contents md:flex md:flex-[3] md:flex-col md:gap-4 md:sticky md:top-22">
          {/* Profile photo */}
          <div className="order-2 rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[4/5] relative">
            <Image
              src={personal.image}
              alt={personal.fullName}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 30vw"
              className="object-cover object-top"
            />
          </div>

          {/* Social links */}
          <div className="order-3 px-2 py-3 flex flex-row flex-wrap items-center gap-4">
            {socials.map((social) => {
              const Icon = ICON_MAP[social.platform] ?? LinkIcon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target={social.platform === "email" ? undefined : "_blank"}
                  rel={social.platform === "email" ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 font-sans text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-150"
                >
                  <Icon size={16} strokeWidth={1.5} />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {/* Current Read */}
        <div className="aspect-square rounded-3xl border border-ink/10 bg-canvas-raised p-6 shadow-bento transition-shadow duration-250 hover:shadow-card-hover">
          <div className="flex flex-col justify-between h-full">
            <p className="font-sans text-[10px] uppercase tracking-widest text-ink-faint">
              Current Read
            </p>
            <div>
              <p className="font-serif text-base font-semibold text-ink leading-snug">
                {widgets.currentRead.title}
              </p>
              <p className="font-sans text-xs text-ink-muted mt-1">
                &mdash; {widgets.currentRead.author}
              </p>
            </div>
          </div>
        </div>

        {/* Writes */}
        <div className="aspect-square rounded-3xl border border-ink/10 bg-canvas-raised p-6 shadow-bento transition-shadow duration-250 hover:shadow-card-hover">
          <div className="flex flex-col justify-between h-full">
            <p className="font-sans text-[10px] uppercase tracking-widest text-ink-faint">
              Writes
            </p>
            <div>
              <p className="font-serif text-base font-semibold text-ink leading-snug">
                {widgets.writes.title}
              </p>
              <p className="font-sans text-xs text-ink-muted mt-1">
                {widgets.writes.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="aspect-square rounded-3xl bg-accent p-6">
          <div className="flex flex-col justify-between h-full">
            <p className="font-sans text-[10px] uppercase tracking-widest text-canvas-raised/60">
              What I&apos;m Into
            </p>
            <div>
              <span
                className="text-4xl leading-none block mb-2"
                aria-hidden="true"
              >
                {widgets.status.emoji}
              </span>
              <p className="font-serif text-base font-semibold text-canvas-raised leading-snug">
                {widgets.status.title}
              </p>
              <p className="font-sans text-xs text-canvas-raised/70 mt-1">
                {widgets.status.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Spotify */}
        <div className="aspect-square rounded-3xl bg-ink p-6">
          <div className="flex flex-col justify-between h-full">
            <p className="font-sans text-[10px] uppercase tracking-widest text-canvas/40">
              On Repeat
            </p>
            <div>
              <span
                className="text-lg leading-none block mb-1"
                style={{ color: "#1DB954" }}
              >
                ▶
              </span>
              <p className="font-serif text-base font-semibold text-canvas leading-snug">
                {widgets.spotify.title}
              </p>
              <p className="font-sans text-xs text-canvas/50 mt-1">
                {widgets.spotify.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
