"use client";

import { useState, useEffect } from "react";
import {
  FileText,
  BookOpen,
  Disc,
  Quote,
  ExternalLink,
  ArrowUpDown,
} from "lucide-react";
import { shelfItems } from "@/lib/data";
import type { ShelfItem } from "@/lib/data";

type ShelfType = "article" | "book" | "music" | "insight";
type ShelfOrigin = "work" | "recommendation";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function navigate(item: ShelfItem) {
  window.open(item.url, item.isExternal ? "_blank" : "_self");
}

/* ── Upper-section badges (Lead + Sidebar only) ───────────────── */

function OriginBadge({ origin }: { origin: ShelfOrigin }) {
  if (origin === "work") {
    return (
      <span className="inline-block bg-ink text-canvas px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
        By Me
      </span>
    );
  }
  return (
    <span className="inline-block border border-ink/70 text-ink px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
      Curated
    </span>
  );
}

function TypeLabel({ type }: { type: ShelfType }) {
  const labels: Record<ShelfType, string> = {
    article: "Article",
    book: "Book",
    music: "Music",
    insight: "Insight",
  };
  return (
    <span className="font-sans text-[10px] uppercase tracking-widest text-ink-faint">
      {labels[type]}
    </span>
  );
}

/* ── Grid metadata line (flat text, no boxes) ─────────────────── */

function MetaLine({ type, origin }: { type: ShelfType; origin: ShelfOrigin }) {
  const typeLabels: Record<ShelfType, string> = {
    article: "Article",
    book: "Book",
    music: "Music",
    insight: "Insight",
  };
  const typeIcons: Record<ShelfType, typeof FileText> = {
    article: FileText,
    book: BookOpen,
    music: Disc,
    insight: Quote,
  };
  const Icon = typeIcons[type];
  return (
    <div className="flex justify-between items-start mb-3">
      <p className="flex items-center gap-0">
        <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-ink-faint">
          {typeLabels[type]}
        </span>
        <span className="text-ink-faint mx-2 text-[10px] select-none">/</span>
        <span
          className={`font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] ${
            origin === "work" ? "text-accent" : "text-ink-muted"
          }`}
        >
          {origin === "work" ? "By Me" : "Curated"}
        </span>
      </p>
      <Icon size={16} strokeWidth={1.5} className="text-ink/20 flex-shrink-0" />
    </div>
  );
}

/* ── Polymorphic Grid Cards (naked flat editorial) ────────────── */

function ArticleCard({ item }: { item: ShelfItem }) {
  return (
    <div
      onClick={() => navigate(item)}
      onKeyDown={(e) => e.key === "Enter" && navigate(item)}
      role="link"
      tabIndex={0}
      className="cursor-pointer group"
    >
      <MetaLine type={item.type} origin={item.origin} />
      <h3 className="font-serif text-2xl font-bold text-ink leading-snug group-hover:text-accent transition-colors duration-150 mb-2">
        {item.title}
      </h3>
      {item.excerpt && (
        <p className="font-sans text-sm text-ink-muted leading-relaxed mb-3">
          {item.excerpt}
        </p>
      )}
      <div className="flex items-center gap-2">
        <span className="font-sans text-[10px] text-ink-faint uppercase tracking-wider">
          {formatDate(item.date)}
        </span>
        {item.isExternal && <ExternalLink size={10} className="text-ink-faint" />}
      </div>
    </div>
  );
}

function BookCard({ item }: { item: ShelfItem }) {
  return (
    <div
      onClick={() => navigate(item)}
      onKeyDown={(e) => e.key === "Enter" && navigate(item)}
      role="link"
      tabIndex={0}
      className="cursor-pointer group"
    >
      <MetaLine type={item.type} origin={item.origin} />
      <div className="overflow-hidden">
        <div className="float-left w-14 h-20 bg-ink/5 border border-ink/10 flex items-center justify-center mr-4 mb-1">
          <BookOpen size={16} className="text-ink-faint" />
        </div>
        <h3 className="font-serif text-lg font-bold text-ink leading-snug group-hover:text-accent transition-colors duration-150 mb-1">
          {item.title}
        </h3>
        {item.excerpt && (
          <p className="font-sans text-sm text-ink-muted leading-relaxed">
            {item.excerpt}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-3 clear-both">
        <span className="font-sans text-[10px] text-ink-faint uppercase tracking-wider">
          {formatDate(item.date)}
        </span>
        {item.isExternal && <ExternalLink size={10} className="text-ink-faint" />}
      </div>
    </div>
  );
}

function MusicCard({ item }: { item: ShelfItem }) {
  return (
    <div
      onClick={() => navigate(item)}
      onKeyDown={(e) => e.key === "Enter" && navigate(item)}
      role="link"
      tabIndex={0}
      className="cursor-pointer group"
    >
      <MetaLine type={item.type} origin={item.origin} />
      <h3 className="font-mono text-base text-ink leading-snug group-hover:text-accent transition-colors duration-150 mb-1">
        {item.title}
      </h3>
      {item.excerpt && (
        <p className="font-sans text-sm text-ink-muted leading-relaxed mb-3">
          {item.excerpt}
        </p>
      )}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">
          {formatDate(item.date)}
        </span>
        <span style={{ color: "#1DB954" }} className="text-xs">
          ▶
        </span>
      </div>
    </div>
  );
}

function InsightCard({ item }: { item: ShelfItem }) {
  return (
    <div
      onClick={() => navigate(item)}
      onKeyDown={(e) => e.key === "Enter" && navigate(item)}
      role="link"
      tabIndex={0}
      className="cursor-pointer group"
    >
      <MetaLine type={item.type} origin={item.origin} />
      <h3 className="font-serif text-xl italic text-ink leading-snug group-hover:text-accent transition-colors duration-150 mb-2">
        {item.title}
      </h3>
      {item.excerpt && (
        <p className="font-sans text-sm text-ink-muted leading-relaxed mb-3">
          {item.excerpt}
        </p>
      )}
      <span className="font-sans text-[10px] text-ink-faint uppercase tracking-wider">
        {formatDate(item.date)}
      </span>
    </div>
  );
}

function ShelfCard({ item }: { item: ShelfItem }) {
  switch (item.type) {
    case "article":
      return <ArticleCard item={item} />;
    case "book":
      return <BookCard item={item} />;
    case "music":
      return <MusicCard item={item} />;
    case "insight":
      return <InsightCard item={item} />;
  }
}

/* ── Main Component ───────────────────────────────────────────── */

export default function Shelf() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [typeFilter, setTypeFilter] = useState<"all" | ShelfType>("all");
  const [originFilter, setOriginFilter] = useState<"all" | ShelfOrigin>("all");
  const [sortBy, setSortBy] = useState<"date" | "alpha">("date");

  const featured = shelfItems.filter((item) => item.isFeatured);
  const pinned = shelfItems.filter((item) => item.isPinned);

  useEffect(() => {
    if (featured.length <= 1) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setFeaturedIndex((prev) => (prev + 1) % featured.length);
        setIsTransitioning(false);
      }, 700);
    }, 10000);
    return () => clearInterval(interval);
  }, [featured.length]);

  const gridItems = shelfItems
    .filter((item) => !item.isFeatured && !item.isPinned)
    .filter((item) => typeFilter === "all" || item.type === typeFilter)
    .filter((item) => originFilter === "all" || item.origin === originFilter)
    .sort((a, b) => {
      if (sortBy === "alpha") return a.title.localeCompare(b.title);
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const currentFeatured = featured[featuredIndex];
  const nextFeatured1 = featured[(featuredIndex + 1) % featured.length];
  const nextFeatured2 = featured[(featuredIndex + 2) % featured.length];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-18">
      {/* ── Masthead ────────────────────────────────────────── */}
      <header className="border-b-2 border-ink pb-4 mb-10">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-5xl md:text-6xl font-bold uppercase tracking-tight text-ink leading-none">
            The Shelf
          </h2>
          <span className="font-sans text-[10px] text-ink-muted uppercase tracking-widest hidden sm:block">
            Reads &middot; Writes &middot; Sounds
          </span>
        </div>
        <p className="font-sans text-xs text-ink-faint mt-2 uppercase tracking-widest">
          A curated collection of writing, reading, listening, and thinking
        </p>
      </header>

      {/* ── Above the Fold: Lead + Pinned Sidebar ───────────── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 mb-12">
        {/* Lead column — active featured + next two */}
        {currentFeatured && (
          <div className="md:col-span-8 md:border-r md:border-ink/10 md:pr-8">
            <div
              className={`transition-opacity duration-700 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div
                onClick={() => navigate(currentFeatured)}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigate(currentFeatured)
                }
                role="link"
                tabIndex={0}
                className="cursor-pointer group pb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">
                    Featured
                  </span>
                  <OriginBadge origin={currentFeatured.origin} />
                  <TypeLabel type={currentFeatured.type} />
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-ink tracking-tight leading-[1.1] mb-4 group-hover:text-accent transition-colors duration-150">
                  {currentFeatured.title}
                </h2>
                <span className="font-sans text-[10px] text-ink-faint uppercase tracking-widest block mb-4">
                  {formatDate(currentFeatured.date)}
                </span>
                {currentFeatured.excerpt && (
                  <p className="font-sans text-base text-ink-muted leading-relaxed max-w-xl">
                    {currentFeatured.excerpt}
                  </p>
                )}
              </div>
            </div>

            {/* Next two featured — fills space below */}
            <div className="grid grid-cols-2 gap-0 border-t border-ink/10">
              {[nextFeatured1, nextFeatured2].map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => navigate(item)}
                  onKeyDown={(e) => e.key === "Enter" && navigate(item)}
                  role="link"
                  tabIndex={0}
                  className={`pt-5 pb-2 cursor-pointer group ${
                    i === 1 ? "border-l border-ink/10 pl-6" : "pr-6"
                  }`}
                >
                  <span className="font-sans text-[10px] text-ink-faint uppercase tracking-widest block mb-2">
                    Up Next
                  </span>
                  <OriginBadge origin={item.origin} />
                  <h4 className="font-serif text-base font-bold text-ink leading-snug mt-2 group-hover:text-accent transition-colors duration-150">
                    {item.title}
                  </h4>
                  <span className="font-sans text-[10px] text-ink-faint uppercase tracking-wider block mt-2">
                    {formatDate(item.date)}
                  </span>
                </div>
              ))}
            </div>

            {/* Rotation indicators */}
            <div className="flex gap-2 mt-4">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFeaturedIndex(i)}
                  className={`h-0.5 transition-all duration-150 cursor-pointer ${
                    i === featuredIndex
                      ? "w-6 bg-ink"
                      : "w-3 bg-ink/20 hover:bg-ink/40"
                  }`}
                  aria-label={`Show featured item ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Sidebar — pinned items */}
        {pinned.length > 0 && (
          <aside className="md:col-span-4 md:pl-8 mt-8 md:mt-0">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-ink-faint border-b border-ink/10 pb-2 mb-0 block">
              Pinned
            </span>
            <div className="flex flex-col divide-y divide-ink/10">
              {pinned.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(item)}
                  onKeyDown={(e) => e.key === "Enter" && navigate(item)}
                  role="link"
                  tabIndex={0}
                  className="py-5 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <OriginBadge origin={item.origin} />
                    <TypeLabel type={item.type} />
                  </div>
                  <h3 className="font-serif text-base font-bold text-ink leading-snug group-hover:text-accent transition-colors duration-150 mb-1">
                    {item.title}
                  </h3>
                  {item.excerpt && (
                    <p className="font-sans text-xs text-ink-muted leading-relaxed line-clamp-2 mb-2">
                      {item.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[10px] text-ink-faint uppercase tracking-wider">
                      {formatDate(item.date)}
                    </span>
                    {item.isExternal && (
                      <ExternalLink size={10} className="text-ink-faint" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>

      {/* ── Section Divider / Filter Bar ────────────────────── */}
      <nav className="border-t-4 border-ink pt-3 border-b border-ink/20 pb-3 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Type filters */}
          <div className="flex items-center flex-wrap">
            {(
              [
                ["all", "All"],
                ["article", "Articles"],
                ["book", "Books"],
                ["music", "Music"],
                ["insight", "Insights"],
              ] as const
            ).map(([value, label], i) => (
              <span key={value} className="flex items-center">
                {i > 0 && (
                  <span
                    className="text-ink-faint mx-2.5 text-xs select-none"
                    aria-hidden="true"
                  >
                    &middot;
                  </span>
                )}
                <button
                  onClick={() => setTypeFilter(value)}
                  className={`font-sans text-sm uppercase tracking-widest transition-colors duration-150 cursor-pointer ${
                    typeFilter === value
                      ? "text-ink font-bold"
                      : "text-ink-muted hover:text-accent"
                  }`}
                >
                  {label}
                </button>
              </span>
            ))}
          </div>

          {/* Origin filter + Sort toggle */}
          <div className="flex items-center flex-wrap">
            {(
              [
                ["all", "All"],
                ["work", "Mine"],
                ["recommendation", "Curated"],
              ] as const
            ).map(([value, label], i) => (
              <span key={value} className="flex items-center">
                {i > 0 && (
                  <span
                    className="text-ink-faint mx-2.5 text-xs select-none"
                    aria-hidden="true"
                  >
                    &middot;
                  </span>
                )}
                <button
                  onClick={() => setOriginFilter(value)}
                  className={`font-sans text-sm uppercase tracking-widest transition-colors duration-150 cursor-pointer ${
                    originFilter === value
                      ? "text-ink font-bold"
                      : "text-ink-muted hover:text-accent"
                  }`}
                >
                  {label}
                </button>
              </span>
            ))}
            <span
              className="text-ink-faint mx-2.5 text-xs select-none"
              aria-hidden="true"
            >
              /
            </span>
            <button
              onClick={() =>
                setSortBy((prev) => (prev === "date" ? "alpha" : "date"))
              }
              className="flex items-center gap-1.5 font-sans text-sm uppercase tracking-widest text-ink-muted hover:text-accent transition-colors duration-150 cursor-pointer"
            >
              <ArrowUpDown size={12} />
              {sortBy === "date" ? "Latest" : "A–Z"}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Broadsheet Grid ─────────────────────────────────── */}
      {gridItems.length === 0 ? (
        <p className="font-sans text-sm text-ink-muted text-center py-16">
          No items match the current filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="border-t border-ink/20 pt-4 pb-8"
            >
              <ShelfCard item={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
