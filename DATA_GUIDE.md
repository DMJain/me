# Data Guide — `lib/data.ts`

All site content lives in **`lib/data.ts`**. Edit values there and every page updates automatically. This guide explains each field, where it appears, and how to format it.

---

## Quick Reference

| Export | Page | Component |
|---|---|---|
| `meta` | All (browser tab) | `app/layout.tsx` |
| `personal` | Home | `HomeHero`, `NavBar` |
| `socials` | Home | `HomeHero` |
| `widgets` | Home | `HomeHero` |
| `projects` | /work | `Work` |
| `experience` | /about | `About` |
| `education` | /about | `About` |
| `skills` | /about | `About` |
| `shelfItems` | /shelf | `Shelf` |

---

## `meta`

Browser tab title and SEO description.

| Field | Type | Where it shows |
|---|---|---|
| `siteTitle` | string | Browser tab, search results |
| `siteDescription` | string | Search result snippet, social shares |

---

## `personal`

Your identity, displayed on the Home page hero.

| Field | Type | Where it shows | Notes |
|---|---|---|---|
| `name` | string | NavBar logo (rendered as "Name.") | First name only. The period is added automatically. |
| `fullName` | string | Profile image alt text, meta | Used for accessibility and SEO. |
| `image` | string | Home page — right column photo | Path relative to `/public`. e.g. `"/image.png"` |
| `title` | string | Home page — small label above "About Me" | e.g. "Senior Backend Engineer" |
| `descriptors` | string[] | Home page — top tile, single line | Exactly 3 words. Rendered as `"Word. Word. Word."` |
| `bio` | string[] | Home page — About Me paragraphs | Array of paragraphs. Each string = one `<p>` tag. 3–6 paragraphs recommended. |

---

## `socials`

Links shown below the profile photo on Home.

| Field | Type | Notes |
|---|---|---|
| `platform` | string | Icon key. Supported: `"github"`, `"linkedin"`, `"twitter"`, `"email"`, `"peerlist"`. Others get a generic link icon. |
| `url` | string | Full URL. For email use `"mailto:you@example.com"`. |
| `label` | string | Display text next to the icon. e.g. `"GitHub"` |

**To add a social:** add a new object to the array. It appears automatically.

---

## `widgets`

The four square tiles at the bottom of the Home page. Each has a fixed visual style.

### `widgets.currentRead` — white card, book-style
| Field | Type | Notes |
|---|---|---|
| `title` | string | Book title. Keep under ~40 characters or it wraps. |
| `author` | string | Rendered with an em-dash: `"— Author Name"` |

### `widgets.writes` — white card, blog-style
| Field | Type | Notes |
|---|---|---|
| `title` | string | Blog / newsletter tagline |
| `subtitle` | string | Small secondary text below |

### `widgets.status` — red accent card
| Field | Type | Notes |
|---|---|---|
| `emoji` | string | Large emoji displayed above the title. e.g. `"🏎"` |
| `title` | string | Main text. e.g. `"Tifosi Forever"` |
| `subtitle` | string | Small text. e.g. `"Formula 1 · Scuderia Ferrari"` |

### `widgets.spotify` — dark card, now-playing style
| Field | Type | Notes |
|---|---|---|
| `title` | string | Genre or playlist name |
| `subtitle` | string | Artists, separated by `·` |

---

## `projects`

Project cards on the /work page. Rendered in array order.

| Field | Type | Notes |
|---|---|---|
| `number` | string | Eyebrow label. e.g. `"01"`, `"02"`. |
| `title` | string | Project name. Shown large, turns red on hover. |
| `description` | string | 1–3 sentences. What it does + key technical detail. |
| `tags` | string[] | Tech pills. 4–8 items recommended. e.g. `["React", "Docker"]` |
| `image` | string \| null | Screenshot path in `/public/projects/`. Set `null` for a text placeholder. |
| `href` | string | Link (opens in new tab). GitHub URL, live demo, or `"#"` if none. |

**To add a project:** push a new object. Increment the `number`. Add a screenshot to `/public/projects/` and set `image` to its path.

---

## `experience`

Work timeline on the /about page. Most recent first.

| Field | Type | Notes |
|---|---|---|
| `role` | string | Job title. e.g. `"Backend Engineer"` |
| `company` | string | Company name. Used as the React key — must be unique. |
| `location` | string | City or "Remote" |
| `period` | string | Date range. Use `"—"` (em-dash). e.g. `"2024 — Present"` |
| `description` | string | 1–2 sentences. Focus on **impact**, not duties. e.g. "Reduced API latency by 40%" not "Responsible for APIs". |

---

## `education`

Education timeline on the /about page, below experience. Same format.

| Field | Type | Notes |
|---|---|---|
| `degree` | string | Degree name. e.g. `"MS Computer Science"` |
| `institution` | string | School name. Used as React key — must be unique. |
| `location` | string | City or "Remote" |
| `period` | string | Date range with em-dash. |
| `description` | string | 1–2 sentences on focus area, thesis, or notable project. |

---

## `skills`

Categorised skill pills on the /about page.

```ts
skills: Record<string, string[]>
```

- **Key** = category label (rendered as an uppercase micro-heading). e.g. `"Languages"`, `"Infrastructure"`
- **Value** = array of skill names rendered as rounded pills.

**To add a category:** add a new key-value pair. It appears automatically.

---

## `shelfItems`

Magazine-style editorial items on the /shelf page. Each item renders as a polymorphic card whose visual style is determined by its `type`.

```ts
interface ShelfItem {
  id: string;
  title: string;
  excerpt?: string;
  date: string;            // ISO date: "2026-06-08"
  type: "article" | "book" | "music" | "insight";
  origin: "work" | "recommendation";
  url: string;
  isExternal: boolean;
  isFeatured: boolean;
  isPinned: boolean;
  mediaUrl?: string;
}
```

| Field | Type | Notes |
|---|---|---|
| `id` | string | Unique kebab-case slug. Used as React key. e.g. `"kafka-wikipulse"` |
| `title` | string | Headline. Serif for articles/books, monospace for music, sans-serif for insights. |
| `excerpt` | string? | 1–2 sentence summary. For books, rendered as a blockquote. |
| `date` | string | **ISO format** (`"2026-06-08"`). Parsed for sorting and formatted for display. |
| `type` | enum | Determines card styling. See **Card types** below. |
| `origin` | enum | `"work"` = your original content. `"recommendation"` = curated external content. |
| `url` | string | Where the card navigates. Use `"#"` for items without a live link. |
| `isExternal` | boolean | `true` opens in new tab with `noopener`. Shows external link icon. |
| `isFeatured` | boolean | `true` = appears in the rotating lead section above the fold. Max 3–4 recommended. |
| `isPinned` | boolean | `true` = appears in the pinned sidebar. Max 3 recommended. |
| `mediaUrl` | string? | Reserved for future use (cover images, album art). |

### Card types

| Type | Visual style | Annotation tag |
|---|---|---|
| `article` | Serif title, bento card with shadow | "Curated Reading" if `origin === "recommendation"`, hidden if `"work"` |
| `book` | Split layout with thumbnail placeholder + blockquote excerpt | Always "Recommended" |
| `music` | Inverted dark card (`bg-ink`), monospace font | Always "On Rotation" |
| `insight` | Sans-serif, structural border, engineering-log feel | "Insight" label with Zap icon |

### Layout zones

Items are distributed across three zones based on flags:

1. **Featured lead** (above the fold, left 8 columns) — items with `isFeatured: true`. Rotates every 10 seconds with an opacity fade.
2. **Pinned sidebar** (above the fold, right 4 columns) — items with `isPinned: true`. Static vertical stack.
3. **Masonry grid** (below the fold) — all remaining items. Filtered by type/origin and sorted by date or alphabetically.

An item should only have one of `isFeatured` or `isPinned` set to `true`, not both.

### Adding a shelf item

Push a new object to the array with a unique `id`. Set `isFeatured` and `isPinned` to `false` unless you want it pinned or featured. It will appear automatically in the masonry grid.

---

## Adding images

1. Drop the image file into `public/projects/` (for projects) or `public/` (for profile).
2. Reference it by path: `"/projects/my-screenshot.png"`.
3. Recommended: `.png` or `.webp`, 1200px+ wide for crisp display.

---

## AI Prompt Template

If you want an AI to generate or update your data, give it this prompt:

```
Read the file DATA_GUIDE.md in my project for the schema.
Then read lib/data.ts to see the current content.
Update the following section: [experience / projects / articles / etc.]
with this information: [paste your raw notes here].
Write the updated lib/data.ts file.
```
