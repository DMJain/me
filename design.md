# Portfolio Design System
## Design Specification & Styling Blueprint
**Stack:** Next.js 15 (App Router) · Tailwind CSS v4 (CSS-first `@theme`) · React Server Components

---

## 0. Design Philosophy & Aesthetic Contract

This site operates in two distinct visual registers that must never bleed into each other:

| Register | Sections | Character |
|---|---|---|
| **Bento Dashboard** | Home, Work, About | Modular, asymmetric, card-driven, dense-but-playful. Feels like a curated OS home screen. |
| **High-End Editorial** | Shelf | Stark, typographic, whitespace-heavy. Feels like *The New Yorker* meets a Figma-era publication. |

The single signature element: **the Home Bento grid's bottom row of four `aspect-square` tiles.** These are micro-worlds — each self-contained with its own internal hierarchy, color accent, and icon vocabulary. The rest of the page is quiet and lets them breathe.

---

## 1. Design Tokens — Tailwind v4 `@theme`

Place all tokens inside `app/globals.css`. No `tailwind.config.js` is used.

```css
@import "tailwindcss";

@theme {
  /* ─── Fonts ─────────────────────────────────────────────── */
  --font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-serif: 'Playfair Display', ui-serif, Georgia, 'Times New Roman', serif;

  /* ─── Color Palette ─────────────────────────────────────── */

  /* Canvas — site background and card surfaces */
  --color-canvas:       #fafafa;   /* Warm off-white. Primary background. */
  --color-canvas-raised: #ffffff;  /* Pure white. Card/bento box surface. */

  /* Ink — text and borders */
  --color-ink:          #111111;   /* Deep near-black. H1s, strong UI text, inverted card bg. */
  --color-ink-muted:    #555555;   /* Mid-gray. Subtext, metadata, descriptions. */
  --color-ink-faint:    #999999;   /* Light gray. Placeholder text, disabled states. */

  /* Structural borders — derived via opacity, referenced as ink/10, ink/20 */
  /* Tailwind v4 handles this natively with color-mix; define the base only */

  /* Accent — used sparingly: one widget, one hover, one CTA */
  --color-accent:       #c8102e;   /* Ferrari Rosso. Used for the Tifosi widget bg, hover underlines. */
  --color-accent-muted: #f5e6e8;   /* Desaturated rose. Accent card surface tint. */

  /* ─── Spacing Scale (augment Tailwind defaults) ─────────── */
  --spacing-18: 4.5rem;   /* 72px — Section vertical padding on desktop */
  --spacing-22: 5.5rem;   /* 88px — Nav height clearance */

  /* ─── Border Radius ─────────────────────────────────────── */
  /* Uses Tailwind defaults; 3xl = 1.5rem (24px). No overrides needed. */

  /* ─── Box Shadows ───────────────────────────────────────── */
  --shadow-bento: 0 4px 24px -4px rgba(0, 0, 0, 0.05);
  --shadow-card-hover: 0 8px 32px -6px rgba(0, 0, 0, 0.10);

  /* ─── Transitions ───────────────────────────────────────── */
  --ease-snappy: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --duration-fast: 150ms;
  --duration-base: 250ms;
}
```

### Font Loading (`app/layout.tsx`)

```tsx
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});
```

Both variables are applied to `<html>` as `className={`${inter.variable} ${playfair.variable}`}`.

---

## 2. Typography System

Typography is the sharpest differentiator between the two registers. Bento uses type as a **label system**. Editorial uses type as **the entire experience**.

### 2.1 Bento Dashboard Register

| Role | Element | Classes | Notes |
|---|---|---|---|
| Section title | `h2` | `font-serif text-4xl font-bold tracking-tight text-ink` | "Selected Work", "About Me" |
| Card headline | `h3` | `font-sans text-xl font-semibold tracking-tight text-ink` | Project titles in Work cards |
| Body copy (card) | `p` | `font-sans text-sm leading-relaxed text-ink-muted` | Descriptions inside bento boxes |
| Metadata / label | `span` | `font-sans text-xs uppercase tracking-widest text-ink-muted` | "DEVELOPER. ARCHITECT. TIFOSI." |
| Tag / Pill | `span` | `font-sans text-xs font-medium` | Tech stack pills |
| Social link text | `a` | `font-sans text-sm font-medium text-ink` | Nav and social strip |
| Widget title | `p` | `font-sans text-[10px] uppercase tracking-widest text-ink-faint` | Widget label (e.g., "CURRENT READ") |
| Widget content | `p` | `font-serif text-base font-semibold text-ink leading-snug` | Book title, now-playing, status |

**Greeting block (Home hero):**
```
font-serif text-5xl md:text-6xl font-bold tracking-tight text-ink leading-none
```

**Supporting tagline:**
```
font-sans text-base text-ink-muted leading-relaxed mt-2
```

### 2.2 Editorial Register (Shelf)

| Role | Element | Classes | Notes |
|---|---|---|---|
| Section masthead | `h2` | `font-serif text-5xl uppercase tracking-widest font-bold text-ink` | "SHELF" or "THE SHELF" |
| Article title (list) | `h3` | `font-serif text-2xl font-bold text-ink hover:underline underline-offset-4 decoration-1` | On hover, thin underline |
| Article title (expanded) | `h1` | `font-serif text-4xl md:text-5xl font-bold text-ink leading-tight tracking-tight` | |
| Article metadata | `p` | `font-sans text-xs uppercase tracking-widest text-ink-muted` | "Jun 14 2026 · 6 min read" |
| Body prose | `p` | `font-sans text-base md:text-lg leading-[1.85] text-ink` | Primary reading text |
| Blockquote | `blockquote` | `border-l-4 border-ink pl-6 font-serif text-xl italic text-ink-muted` | |
| Inline code | `code` | `font-mono text-sm bg-ink/5 px-1.5 py-0.5 rounded` | |
| Divider | `hr` | `border-0 border-t border-ink/10 my-12` | |

**Drop-cap (first article paragraph):**
```css
.prose-editorial p:first-of-type::first-letter {
  font-family: var(--font-serif);
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 0.75;
  float: left;
  margin-right: 0.12em;
  margin-top: 0.08em;
  color: var(--color-ink);
}
```
Or with Tailwind arbitrary prefix on the `<p>`:
```
first-letter:font-serif first-letter:text-[5.5rem] first-letter:font-bold first-letter:leading-none first-letter:float-left first-letter:mr-2 first-letter:mt-1
```

### 2.3 Type Scale Reference

```
text-[10px]  → 10px / widget micro-labels
text-xs      → 12px / metadata, tags
text-sm      → 14px / card body, nav links
text-base    → 16px / prose body
text-lg      → 18px / prose body (md+)
text-xl      → 20px / card headlines
text-2xl     → 24px / article list titles
text-4xl     → 36px / section titles, expanded article headline
text-5xl     → 48px / section mastheads, home greeting
text-6xl     → 60px / home greeting (md+)
```

---

## 3. Component Specifications

### 3.1 NavBar

**File:** `components/NavBar.tsx`

```
sticky top-0 z-50
border-b border-ink/10
bg-canvas/80 backdrop-blur-md
```

Inner container:
```
mx-auto max-w-6xl px-6 h-16 flex items-center justify-between
```

**Logo/name:**
```
font-serif text-lg font-bold text-ink tracking-tight
```
Text: `"Name."` — the period is intentional punctuation, part of the brand mark.

**Nav links (desktop):**
```
hidden md:flex items-center gap-8
font-sans text-sm font-medium text-ink-muted
hover:text-ink transition-colors duration-150
```
Active link (current section via IntersectionObserver):
```
text-ink
```
No underlines on nav links. Color shift is the only indicator.

**Mobile hamburger (< md):**
```
md:hidden flex flex-col gap-1.5 cursor-pointer p-2
```
Three lines, each: `w-5 h-px bg-ink transition-all duration-250`
Opened state transforms into an `×` using rotate and translate.

---

### 3.2 Bento Box — Base Card Token

Every card in Home, Work sidebar, and About sections inherits:

```
rounded-3xl
border border-ink/10
bg-canvas-raised
p-6
shadow-bento
transition-shadow duration-250
hover:shadow-card-hover
```

`shadow-bento` = `0 4px 24px -4px rgba(0, 0, 0, 0.05)`
`shadow-card-hover` = `0 8px 32px -6px rgba(0, 0, 0, 0.10)`

**Inverted card** (Contact Form):
```
rounded-3xl bg-ink text-canvas p-8
```
No border (dark surface reads its own edge). No shadow.

**Accent card** (Tifosi / Ferrari widget):
```
rounded-3xl bg-accent p-6
```
Text inside: `text-white` or `text-canvas-raised`.

---

### 3.3 Section 1 — Home Bento Grid

**File:** `components/HomeHero.tsx`

Outer section:
```
pt-22 pb-16 px-4 md:px-6 max-w-6xl mx-auto
```

Grid container:
```
grid grid-cols-1 md:grid-cols-12 gap-4
```

#### Grid Cell Assignments

| Cell | Col Span | Row Span | Content | Aspect |
|---|---|---|---|---|
| A | `md:col-span-4` | 1 | Three-word header | `min-h-[160px]` |
| B | `md:col-span-8` | 2 | Profile picture | `md:aspect-[2/1] aspect-[4/3]` |
| C | `md:col-span-4` | 1 | Greeting / About me hero | `min-h-[250px]` |
| D | `md:col-span-12` | 1 | Name + Tagline + Socials | `—` (flex row) |
| E | `md:col-span-3` | 1 | Widget: Current Read | `aspect-square` |
| F | `md:col-span-3` | 1 | Widget: Writes | `aspect-square` |
| G | `md:col-span-3` | 1 | Widget: Status | `aspect-square` |
| H | `md:col-span-3` | 1 | Widget: Spotify | `aspect-square` |

**Cell B — Profile Picture:**
```
md:col-span-8 md:row-span-2 rounded-3xl overflow-hidden border border-ink/10 bg-ink/5
aspect-[4/3] md:aspect-[2/1]
```
`<img>` inside: `w-full h-full object-cover object-top`

**Cell C — Greeting:**
```
md:col-span-4 min-h-[250px] flex flex-col justify-center
```
Contents:
```html
<p class="font-sans text-xs uppercase tracking-widest text-ink-muted mb-3">Senior Backend Engineer</p>
<h1 class="font-serif text-5xl md:text-6xl font-bold text-ink leading-none tracking-tight">Hi, I'm<br/>[Name].</h1>
<p class="font-sans text-sm text-ink-muted leading-relaxed mt-4 max-w-xs">
  I architect APIs and distributed systems. Currently building at Indihood.
  Formerly Dassault Systèmes.
</p>
```

**Cell D — Social Strip:**
```
md:col-span-12 flex flex-row items-center gap-6 flex-wrap
```
Each social link:
```
flex items-center gap-2 font-sans text-sm font-medium text-ink-muted
hover:text-ink transition-colors duration-150
```
Use `<svg>` icons (Lucide or Heroicons), `size-4`.

**Bottom Widgets (E, F, G, H):**
Each is `aspect-square` + base card token + relative positioning for internal layout.

Widget internal layout:
```
flex flex-col justify-between h-full
```

Top of widget:
```html
<p class="font-sans text-[10px] uppercase tracking-widest text-ink-faint">CURRENT READ</p>
```

Bottom of widget:
```html
<div>
  <p class="font-serif text-base font-semibold text-ink leading-snug">
    [Book Title]
  </p>
  <p class="font-sans text-xs text-ink-muted mt-1">— [Author]</p>
</div>
```

**Widget G — Status (Tifosi accent):**
Apply `bg-accent` over base card, text switches to white. Contains a small Ferrari shield SVG or `🏎` and current project status. This is the **one accent-colored surface** on the entire page — use it with discipline.

**Widget H — Spotify:**
Use a dark surface: `bg-ink` card, white text. Embed a minimal now-playing UI or static display with a Spotify green `▶` play dot.

---

### 3.4 Section 2 — Work Showcase

**File:** `components/Work.tsx`

Section wrapper:
```
max-w-6xl mx-auto px-4 md:px-6 py-18 border-t border-ink/10
```

Section header:
```html
<h2 class="font-serif text-4xl font-bold text-ink tracking-tight mb-12">Selected Work</h2>
```

Project stack:
```
flex flex-col gap-16
```

**Each Project Card:**
```
grid grid-cols-1 md:grid-cols-12 gap-8 items-center group
```

Text side (`md:col-span-5`):
```
flex flex-col gap-4
```

- Project number (optional eyebrow):
  ```
  font-sans text-xs text-ink-faint uppercase tracking-widest
  ```
  e.g., `"01 —"`

- Title `h3`:
  ```
  font-serif text-3xl font-bold text-ink tracking-tight
  group-hover:text-accent transition-colors duration-250
  ```

- Description `p`:
  ```
  font-sans text-sm text-ink-muted leading-relaxed
  ```

- Tech pill container:
  ```
  flex flex-wrap gap-2 mt-2
  ```

- Each pill:
  ```
  font-sans text-xs font-medium text-ink border border-ink/20
  rounded-full px-3 py-1
  hover:border-ink/40 transition-colors duration-150
  ```

Image side (`md:col-span-7`):
```
rounded-2xl overflow-hidden border border-ink/10 aspect-video bg-ink/5
```
`<img>` / diagram inside: `w-full h-full object-cover`

On mobile, grid collapses to `grid-cols-1`. Image renders **above** text via `md:order-none order-first` on the image div.

**Alternating layout note:** Keep text-left / image-right uniform. Alternating sides introduces cognitive load in a vertical scroll. Let the type size carry the emphasis shift between projects.

---

### 3.5 Section 3 — About Me

**File:** `components/About.tsx`

Section wrapper:
```
max-w-6xl mx-auto px-4 md:px-6 py-18 border-t border-ink/10
```

Section header:
```html
<h2 class="font-serif text-4xl font-bold text-ink mb-12">About Me</h2>
```

Two-column split:
```
grid grid-cols-1 md:grid-cols-12 gap-16
```

#### Left Column — Timeline (7 cols)

```
md:col-span-7 flex flex-col gap-12
```

**Sub-section header** (Experience / Education):
```
font-serif text-2xl font-bold text-ink mb-6
```

**Timeline item wrapper:**
```
border-l-2 border-ink/10 pl-6 flex flex-col gap-1
relative
```

Add a dot marker with:
```css
/* pseudo-element */
before:absolute before:-left-[5px] before:top-1.5
before:w-2.5 before:h-2.5 before:rounded-full
before:bg-canvas before:border-2 before:border-ink/30
```
Or as a `<span class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-canvas border-2 border-ink/30" />`.

Inside each timeline item:

- Role / Degree:
  ```
  font-sans text-base font-semibold text-ink
  ```
- Company / Institution + Dates (flex row):
  ```
  flex items-center justify-between
  font-sans text-sm text-ink-muted
  ```
- Short description:
  ```
  font-sans text-sm text-ink-muted leading-relaxed mt-2
  ```
  Focus on **impact**, not duties. E.g., "Reduced API response time by 40% through Kafka-backed async processing."

#### Right Column — Skills + Contact (5 cols)

```
md:col-span-5 flex flex-col gap-6
```

**Skills Box** — uses base bento card:
```
rounded-3xl border border-ink/10 bg-canvas-raised p-8 shadow-bento
```

Skills header:
```
font-serif text-xl font-bold text-ink mb-6
```
Text: `"Technical Arsenal"`

Skill category label:
```
font-sans text-[10px] uppercase tracking-widest text-ink-faint mb-2
```

Skill list (inline pills):
```
flex flex-wrap gap-2
```
Each skill tag:
```
font-sans text-xs font-medium text-ink bg-ink/5 rounded-full px-3 py-1
```

Categories to include:
- `LANGUAGES` → Java, Go, Python, TypeScript
- `RUNTIMES & FRAMEWORKS` → Spring Boot, Next.js, Node.js
- `INFRASTRUCTURE` → Kubernetes, Docker, Kafka, Redis
- `DATABASES` → PostgreSQL, MongoDB, Cassandra
- `CLOUD` → AWS (ECS, S3, RDS), GCP

**Contact Form Box** — inverted card:
```
rounded-3xl bg-ink text-canvas p-8
```

Form header:
```
font-serif text-xl font-bold text-canvas mb-6
```
Text: `"Say Hello"`

Input fields — bottom-border only, transparent background:
```
w-full bg-transparent border-0 border-b border-canvas/20
font-sans text-sm text-canvas placeholder:text-canvas/40
py-3 focus:outline-none focus:border-canvas/60
transition-colors duration-150
```

Fields: Name, Email, Message (textarea, `rows="4"`).

Submit button:
```
w-full mt-6 bg-canvas text-ink font-sans text-sm font-semibold
py-3 rounded-full
hover:bg-accent hover:text-canvas transition-all duration-250
```
The hover state into Ferrari red is the **only accent interaction** in this section.

---

### 3.6 Section 4 — Shelf (Editorial)

**File:** `components/Shelf.tsx`

Section wrapper:
```
max-w-6xl mx-auto px-4 md:px-6 py-18 border-t border-ink/10
```

**Section header row:**
```
flex items-end justify-between border-b border-ink pb-4 mb-12
```

Masthead title:
```
font-serif text-5xl font-bold uppercase tracking-widest text-ink leading-none
```
Text: `"Shelf"` or `"The Shelf"`.

Header right — count or descriptor:
```
font-sans text-xs text-ink-muted uppercase tracking-widest
```
Text: `"Essays & Notes"`

**Article list container:**
```
max-w-2xl mx-auto flex flex-col
```
`max-w-2xl` ≈ `672px`. For body text at `text-lg`, this yields ~65 characters per line — the optimal reading measure.

**Article list item (not expanded):**
```html
<article class="py-8 border-b border-ink/10 group cursor-pointer">
  <p class="font-sans text-xs uppercase tracking-widest text-ink-muted mb-2">
    Jun 14 2026 · 6 min read
  </p>
  <h3 class="font-serif text-2xl font-bold text-ink
             group-hover:underline underline-offset-4 decoration-1
             transition-all duration-150 leading-snug">
    Article Title Goes Here
  </h3>
  <p class="font-sans text-sm text-ink-muted leading-relaxed mt-3 line-clamp-2">
    Short excerpt or description of the article contents...
  </p>
</article>
```

**Divider between articles:**
No `<hr>` — the `border-b border-ink/10` on each `<article>` serves as the divider. Clean.

#### Expanded Article View

The expanded article renders inside a centered column:
```
max-w-2xl mx-auto pt-12
```

Back link:
```
font-sans text-sm text-ink-muted hover:text-ink flex items-center gap-2 mb-12
transition-colors duration-150
```

Article headline:
```
font-serif text-4xl md:text-5xl font-bold text-ink leading-tight tracking-tight mb-6
```

Metadata row:
```
flex items-center gap-4 font-sans text-xs uppercase tracking-widest text-ink-muted
border-b border-ink/10 pb-6 mb-10
```

**Prose body** — use `@tailwindcss/typography` plugin with custom overrides:
```
prose prose-lg prose-ink max-w-none
```

Custom prose overrides in `globals.css`:
```css
.prose {
  --tw-prose-body: var(--color-ink);
  --tw-prose-headings: var(--color-ink);
  --tw-prose-lead: var(--color-ink-muted);
  --tw-prose-links: var(--color-ink);
  --tw-prose-bold: var(--color-ink);
  --tw-prose-counters: var(--color-ink-muted);
  --tw-prose-bullets: var(--color-ink/40);
  --tw-prose-hr: var(--color-ink/10);
  --tw-prose-quotes: var(--color-ink-muted);
  --tw-prose-quote-borders: var(--color-ink);
  --tw-prose-captions: var(--color-ink-muted);
  --tw-prose-code: var(--color-ink);
  --tw-prose-pre-code: var(--color-canvas);
  --tw-prose-pre-bg: var(--color-ink);
}

/* Blockquote override — thick left border, serif italic */
.prose blockquote {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-style: italic;
  border-left-width: 4px;
  border-left-color: var(--color-ink);
  padding-left: 1.5rem;
  color: var(--color-ink-muted);
}

/* Remove default blockquote quotes */
.prose blockquote p::before,
.prose blockquote p::after {
  content: none;
}
```

---

## 4. Layout & Responsive System

### 4.1 Breakpoints (Tailwind defaults — no overrides needed)

```
sm:  640px   → Minor adjustments (font sizes)
md:  768px   → Main layout breakpoint. 12-col grid activates.
lg:  1024px  → Max-width containers reach comfortable width.
xl:  1280px  → Optional: increase max-w-6xl if needed.
```

All layouts use `grid-cols-1` by default (mobile-first), promoting to `md:grid-cols-12`.

### 4.2 Max-Width Containers

| Context | Class | Width |
|---|---|---|
| All page sections | `max-w-6xl mx-auto` | 1152px |
| Shelf article list | `max-w-2xl mx-auto` | 672px |
| Nav inner | `max-w-6xl mx-auto` | 1152px |

### 4.3 Section Padding

```
py-18           → 4.5rem (72px) top + bottom padding on each section
px-4 md:px-6   → 16px mobile, 24px desktop horizontal padding
```

Add `pt-22` (88px) to the first section (`HomeHero`) to clear the sticky nav.

### 4.4 Grid Gaps

| Context | Gap | Value |
|---|---|---|
| Home Bento grid | `gap-4` | 16px — tight grid, cards define themselves |
| Work project stack | `gap-16` | 64px — breathing room between projects |
| Work card internal | `gap-8` | 32px — text ↔ image separation |
| About 2-col split | `gap-16` | 64px — asymmetric columns breathe |
| Timeline items | `gap-12` | 48px — clear separation between Experience entries |
| About right column | `gap-6` | 24px — Skills box and Contact form separation |

### 4.5 Mobile-Specific Rules

- Nav links: `hidden md:flex` — replace with hamburger `md:hidden`
- Home bento: all cells collapse to `grid-cols-1`. Bottom widgets stack vertically with `aspect-square` retained.
- Cell B (profile image): `aspect-[4/3]` on mobile (taller crop), `md:aspect-[2/1]` on desktop.
- Work cards: image renders **above** text via `order-first md:order-none` on the image element.
- About columns: stack vertically. Right column (Skills + Contact) renders below Timeline.
- Shelf: `max-w-2xl` becomes full width with `px-4` padding on mobile.

### 4.6 Smooth Scrolling

In `globals.css`:
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem; /* nav height clearance */
}
```

---

## 5. Interaction Design

### 5.1 Hover States

| Element | Default | Hover | Transition |
|---|---|---|---|
| Nav links | `text-ink-muted` | `text-ink` | `colors 150ms ease` |
| Bento cards | `shadow-bento` | `shadow-card-hover` | `shadow 250ms ease` |
| Work card title | `text-ink` | `text-accent` | `colors 250ms ease` |
| Shelf article title | no underline | `underline underline-offset-4 decoration-1` | `all 150ms ease` |
| Contact submit | `bg-canvas text-ink` | `bg-accent text-canvas` | `all 250ms ease` |
| Social links | `text-ink-muted` | `text-ink` | `colors 150ms ease` |
| Skill pills | `bg-ink/5` | `bg-ink/10` | `background 150ms ease` |

### 5.2 Focus States

All interactive elements must have visible focus rings for keyboard accessibility:
```css
:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 3px;
  border-radius: 4px;
}
```

For inverted surfaces (contact form on `bg-ink`):
```css
.bg-ink *:focus-visible {
  outline-color: var(--color-canvas);
}
```

### 5.3 Scroll-Triggered Reveals (Optional, Restrained)

Use `IntersectionObserver` for a single consistent entrance animation — sections and cards fade up:
```css
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 400ms var(--ease-snappy), transform 400ms var(--ease-snappy);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Apply only to **section containers**, not individual cards. Staggering every element feels AI-generated. One clean entrance per section is enough.

Respect reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### 5.4 Transition Timing

```
duration-150  → Micro-interactions (color, border)
duration-250  → Shadow lifts, background color shifts
duration-400  → Scroll reveals, page-level transitions
```

Always use `transition-{property}` rather than `transition-all` except on the submit button (justified because both background and text color change simultaneously).

---

## 6. Iconography & Imagery

### 6.1 Icons

Use **Lucide React** (`lucide-react`). Default size: `size-4` (16px) for inline text icons, `size-5` (20px) for standalone icons.

Stroke width: default (`strokeWidth={1.5}`) — thinner stroke reads as premium and aligns with the border weight of the cards.

Social icons sourced from `lucide-react`: `Github`, `Linkedin`, `Twitter`, `Mail`.

### 6.2 Photography / Profile Image

- `object-position: object-top` — ensures face is always in frame.
- Wrap in `overflow-hidden rounded-3xl` container — no separate `border-radius` on the `<img>` itself.
- Add subtle `bg-ink/5` to the container as a loading state background.
- No filters (no `grayscale`, no `sepia`). Raw color is intentional.

### 6.3 Project Images / Diagrams

- Aspect ratio locked to `aspect-video` (16:9).
- Use architecture diagrams or clean UI screenshots — no stock imagery.
- Container: `rounded-2xl overflow-hidden border border-ink/10 bg-ink/5`.
- On hover of the parent group, a subtle zoom:
  ```
  group-hover:scale-[1.02] transition-transform duration-400
  ```
  Apply to the `<img>` inside, not the container.

---

## 7. Globals & Reset

Full `globals.css` preamble:

```css
@import "tailwindcss";

/* — tokens defined in Section 1 — */
@theme { ... }

/* ─── Base Reset ────────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  background-color: var(--color-canvas);
  color: var(--color-ink);
  font-family: var(--font-sans);
  line-height: 1.5;
}

/* ─── Selection Color ──────────────────────────────────── */
::selection {
  background-color: var(--color-ink);
  color: var(--color-canvas);
}

/* ─── Scrollbar (optional, WebKit) ─────────────────────── */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--color-canvas);
}
::-webkit-scrollbar-thumb {
  background: var(--color-ink-faint);
  border-radius: 9999px;
}

/* ─── Focus Ring ────────────────────────────────────────── */
:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ─── Drop-cap ──────────────────────────────────────────── */
.prose-editorial > p:first-of-type::first-letter {
  font-family: var(--font-serif);
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 0.75;
  float: left;
  margin-right: 0.12em;
  margin-top: 0.08em;
  color: var(--color-ink);
}

/* ─── Scroll Reveal ─────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

---

## 8. File / Component Map

```
app/
├── globals.css          ← @theme tokens + base resets
├── layout.tsx           ← Font variables, <html> classes
└── page.tsx             ← Section composition (Server Component)

components/
├── NavBar.tsx
├── HomeHero.tsx         ← Bento grid
├── Work.tsx             ← Project cards
├── About.tsx            ← Timeline + Skills + Contact
└── Shelf.tsx            ← Editorial article list + expanded view

hooks/
└── useScrollSpy.ts      ← Active nav link detection via IntersectionObserver
```

---

## 9. Anti-Patterns — What Not To Do

| ❌ Avoid | ✅ Instead |
|---|---|
| Mixing serif fonts in the Bento UI body copy | Sans-serif for all Bento UI text; serif only for headlines and widget content |
| Using `rounded-xl` (12px) on bento boxes | Always use `rounded-3xl` (24px) — it's part of the card identity |
| Using `border-ink` (full opacity) for card borders | Use `border-ink/10` — opacity 10% gives subtlety without disappearing |
| Applying the accent color to more than 2 elements | Accent `#c8102e` belongs to: (1) Tifosi widget bg, (2) contact submit hover, (3) work card title hover. Nowhere else. |
| Adding scroll animation to every element | Animate sections only, not individual cards |
| `prose` without custom `--tw-prose-*` overrides | Always override to use `--color-ink` tokens — default prose gray conflicts with the palette |
| Inline `style=` attributes | All styling via Tailwind utilities or `globals.css` |
| `aspect-video` on mobile project images | Drop the aspect ratio constraint on mobile; let the image fill naturally |

---

*This document is the single source of truth for all styling decisions. No design choices should be made in component files that are not derivable from the tokens, specs, and rules defined here.*
