# Technical Requirements Document (TRD)
## Personal Portfolio Website

### Document Control
- **Product:** Personal portfolio website
- **Audience:** Engineering, design, and implementation teams
- **Version:** 1.0
- **Status:** Draft
- **Stack:** Next.js 15 (App Router, React Server Components) + Tailwind CSS v4
- **Architecture style:** Static-first single-page application with selective client-side interactivity

---

## 1. Technical Overview

This website should be built with **Next.js 15** using the **App Router** and **React Server Components** for the majority of rendering. Interactive behaviors should be isolated into small Client Components only where needed.

The architecture is intentionally simple:
- a single scrollable page,
- local data files for content,
- server-rendered section composition,
- minimal hydration,
- selective interactivity for navigation state, mobile menu, form behavior, and optional reveal animations.

The product is best treated as a read-heavy site with a small amount of interaction, not as a full application shell.

---

## 2. System Architecture

### 2.1 Architectural goals
- Maximize performance and SEO.
- Keep the app easy to maintain.
- Render as much as possible on the server.
- Use Client Components only for stateful or DOM-dependent features.
- Keep future CMS integration possible without changing the page architecture.

### 2.2 Rendering model

#### Server Components
Use Server Components for:
- the page shell,
- section composition,
- content mapping from local files,
- static metadata generation,
- layout markup without client state.

#### Client Components
Use Client Components for:
- active nav state via scroll spying,
- mobile nav toggle,
- contact form state and validation,
- optional intersection-based reveals,
- audio/embed interactivity if required.

### 2.3 Page structure
Single route:
- `/`

Anchor-based sections:
- `#home`
- `#work`
- `#about`
- `#shelf`

Optional future routes:
- `/work/[slug]`
- `/shelf/[slug]`

The initial implementation does not need these routes, but the content model should not block them later.

---

## 3. Recommended File/Component Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css

components/
  nav/NavBar.tsx
  sections/HomeHero.tsx
  sections/Work.tsx
  sections/About.tsx
  sections/Shelf.tsx
  sections/ContactForm.tsx
  shared/SectionHeading.tsx
  shared/BentoCard.tsx
  shared/ProjectCard.tsx
  shared/TimelineItem.tsx
  shared/ArticleCard.tsx

data/
  projects.ts
  articles.ts
  experience.ts
  socials.ts
  status.ts

types/
  content.ts

hooks/
  useScrollSpy.ts
  useReducedMotionGuard.ts
```

### 3.1 `app/page.tsx`
`page.tsx` should stay thin and declarative:
- import the four section components,
- import typed content arrays,
- pass data into sections,
- preserve the order of the page,
- avoid business logic.

### 3.2 Section components
Each section component should own its own presentational logic:
- `HomeHero` for the hero grid and widgets,
- `Work` for projects,
- `About` for timeline and contact form,
- `Shelf` for article listing and article content.

### 3.3 Shared components
Use reusable primitives for:
- section headings,
- Bento cards,
- project cards,
- timeline items,
- article cards.

This keeps styling and spacing consistent across sections.

---

## 4. System Behavior Requirements

### 4.1 Navigation behavior
- Sticky nav.
- Backdrop blur.
- Minimalist anchor links.
- Active state based on section in viewport.
- Smooth scrolling on anchor click.
- Mobile nav fallback if required.

### 4.2 Section reveal behavior
Optional but restrained:
- fade-up reveal only at the section level,
- no overly animated staggered micro-entrance for every card,
- respect reduced motion preferences.

### 4.3 Contact form behavior
- Validate required fields.
- Show inline errors.
- Disable submit while pending.
- Provide success and error feedback.
- Make sure labels and focus behavior remain accessible.

### 4.4 Media behavior
- Use optimized images.
- Ensure aspect ratios are reserved.
- Use consistent cropping rules.
- Avoid layout shifts.
- Prefer architecture diagrams or screenshots over stock imagery.

---

## 5. Styling Architecture

The styling architecture should use **Tailwind CSS v4** with the CSS-first `@theme` system defined in `app/globals.css`. The uploaded design specification is the source of truth for the palette, typography, spacing, shadows, and the two visual registers. It defines:
- Canvas and Ink colors,
- serif/sans font split,
- soft Bento shadows,
- restrained accent usage,
- editorial reading layout,
- section-specific typography rules,
- custom prose overrides,
- smooth scrolling,
- drop-cap behavior,
- card identity and spacing.  
These choices are part of the implementation contract. fileciteturn0file0

### 5.1 Token strategy
Define all theme tokens in `@theme`. Do not rely on a separate `tailwind.config.js`.

#### Required token families
- Fonts
- Colors
- Shadows
- Motion/easing
- Spacing extensions if needed

### 5.2 Color tokens
Recommended semantic tokens:
- `--color-canvas`
- `--color-canvas-raised`
- `--color-ink`
- `--color-ink-muted`
- `--color-ink-faint`
- `--color-accent`
- `--color-accent-muted`

These should drive:
- site background,
- card surfaces,
- text,
- borders,
- hover states,
- accent interactions.

### 5.3 Typography tokens
Recommended semantic tokens:
- `--font-sans`
- `--font-serif`

Use sans-serif for:
- labels,
- metadata,
- navigation,
- body copy inside Bento sections.

Use serif for:
- section headings,
- hero headline moments,
- Shelf articles,
- widget content,
- editorial prose emphasis.

### 5.4 Motion tokens
Recommended:
- `--ease-snappy`
- `--duration-fast`
- `--duration-base`

Use a restrained motion system:
- hover color changes,
- card shadow transitions,
- scroll reveal transitions,
- no excessive animation on every element.

### 5.5 Styling rules by register

#### Bento Dashboard register
Applies to Home, Work, About.
- rounded-3xl cards,
- subtle borders,
- soft shadows,
- muted background surfaces,
- one disciplined accent color,
- concise UI typography,
- modular grid structure.

#### Editorial register
Applies to Shelf.
- narrow reading measure,
- serif-led headlines,
- thick blockquotes,
- large opening drop-cap,
- dense but comfortable reading rhythm,
- minimal decoration.

---

## 6. Layout Architecture

### 6.1 Root layout
`app/layout.tsx` should:
- load fonts,
- set metadata,
- wrap the page in the appropriate HTML structure,
- attach CSS variables / font variables,
- establish the global page shell.

### 6.2 Global layout
Use:
- `max-w-6xl` for main page sections,
- `max-w-2xl` for Shelf content,
- `px-4 md:px-6` for responsive horizontal padding,
- `py-18` or similar for section spacing,
- additional top clearance for the sticky nav.

### 6.3 Home section
Use a 12-column grid on desktop:
- hero intro,
- image block,
- greeting block,
- social strip,
- four bottom square widgets.

Important:
- bottom widgets should remain square,
- accent usage should be limited,
- image block should preserve aspect ratio sensibly across breakpoints.

### 6.4 Work section
Use stacked project cards:
- `grid grid-cols-1 md:grid-cols-12`,
- text and media split,
- media on one side, narrative on the other,
- stack vertically on mobile,
- keep the layout consistent rather than alternating sides unpredictably.

### 6.5 About section
Use an asymmetric split:
- left: experience and education timeline,
- right: technical arsenal and contact form.

### 6.6 Shelf section
Use a centered editorial column:
- constrain width to about 65 characters per line,
- render article list and expanded reading view in the same typography system,
- keep the visual weight on the text itself.

---

## 7. Component Strategy

### 7.1 `NavBar.tsx`
Responsibilities:
- sticky header,
- blur backdrop,
- brand mark,
- anchor links,
- active-state highlighting,
- mobile menu pattern if needed.

Implementation notes:
- active-state detection should use `IntersectionObserver`,
- nav should be semantically structured,
- links should remain keyboard accessible.

### 7.2 `HomeHero.tsx`
Responsibilities:
- hero heading,
- role statement,
- profile image,
- current read widget,
- current status widget,
- Spotify slot,
- social strip.

Implementation notes:
- keep widget content data-driven,
- reserve image dimensions,
- use modular Bento card primitives,
- accent block must remain sparse and intentional.

### 7.3 `Work.tsx`
Responsibilities:
- map `projects` data into project cards,
- render summary, stack, and architecture notes,
- render image or diagram,
- render external links if provided.

Implementation notes:
- card title may use hover accent change,
- tags should be data-driven,
- media should use `next/image` or equivalent optimized handling.

### 7.4 `About.tsx`
Responsibilities:
- render experience timeline,
- render education timeline,
- render technical arsenal,
- render contact form.

Implementation notes:
- timeline items should emphasize outcomes, not job duties,
- contact form should be visually inverted for contrast,
- form inputs should use transparent backgrounds and bottom borders if following the visual spec.

### 7.5 `Shelf.tsx`
Responsibilities:
- render article list,
- render expanded article content,
- apply editorial typography,
- support blockquotes, code, headings, emphasis, and drop-cap styling.

Implementation notes:
- body content should ideally be MD or MDX-compatible later,
- list view and expanded view should share the same content model,
- keep prose width constrained.

### 7.6 Shared primitives
Use reusable primitives for:
- cards,
- section headings,
- article cards,
- project cards,
- timeline items.

This ensures consistent spacing, border logic, shadow system, and typography.

---

## 8. Data Modeling

The product should be driven by local data files first, with a clean path to CMS later.

### 8.1 Data strategy
Preferred approach:
- `data/*.ts` files exporting typed arrays and objects.
- Optionally mirror the same shape as JSON for future CMS compatibility.

### 8.2 Work section model

#### TypeScript types
```ts
export type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      width?: number;
      height?: number;
      aspectRatio?: "video" | "square" | "portrait" | string;
    }
  | {
      type: "diagram";
      src: string;
      alt: string;
    };

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  summary: string;
  longDescription?: string;
  role?: string;
  stack: string[];
  highlights?: string[];
  architectureNotes?: string[];
  media: ProjectMedia;
  links?: ProjectLink[];
  featured?: boolean;
  order: number;
}
```

#### JSON shape
```json
{
  "id": "webide-2",
  "slug": "webide-2",
  "title": "WebIDE 2.0",
  "summary": "Collaborative browser-based IDE with containerized runtimes and live sync.",
  "longDescription": "Built around Docker-backed sandboxes, Socket.IO event sync, and workspace orchestration.",
  "role": "Backend / Platform Architecture",
  "stack": ["Docker", "Socket.IO", "Next.js", "Node.js", "Monaco Editor"],
  "highlights": ["Container orchestration", "Live file sync", "Workspace isolation"],
  "architectureNotes": [
    "Each project runs inside an isolated Docker container.",
    "Frontend communicates through Socket.IO for live collaboration."
  ],
  "media": {
    "type": "image",
    "src": "/projects/webide.png",
    "alt": "WebIDE interface and container preview"
  },
  "links": [
    { "label": "Case Study", "href": "/work/webide-2" },
    { "label": "GitHub", "href": "https://github.com/..." }
  ],
  "featured": true,
  "order": 1
}
```

### 8.3 Shelf section model

#### TypeScript types
```ts
export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readTimeMinutes: number;
  tags?: string[];
  coverImage?: {
    src: string;
    alt: string;
  };
  body: string;
  featured?: boolean;
  order: number;
}
```

#### JSON shape
```json
{
  "id": "build-systems-that-dont-fight-you",
  "slug": "build-systems-that-dont-fight-you",
  "title": "Build Systems That Do Not Fight You",
  "subtitle": "Notes on developer experience, workflow design, and composability.",
  "excerpt": "A practical note on designing interfaces and processes that reduce cognitive load.",
  "publishedAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "readTimeMinutes": 6,
  "tags": ["DX", "Workflow", "Architecture"],
  "coverImage": {
    "src": "/articles/systems.jpg",
    "alt": "Editorial desk and notebook"
  },
  "body": "Long-form markdown or MDX content goes here.",
  "featured": true,
  "order": 1
}
```

### 8.4 Supporting content models
Recommended additional local files:
- `experience.ts`
- `education.ts`
- `socials.ts`
- `status.ts`

This keeps the system modular and easy to evolve.

---

## 9. Performance Strategy

### 9.1 Rendering performance
- Prefer Server Components.
- Keep the client surface area small.
- Avoid unnecessary global state.
- Avoid heavy third-party libraries unless necessary.

### 9.2 Image performance
- Use `next/image`.
- Reserve dimensions to avoid CLS.
- Use modern formats where possible.
- Apply responsive sizes.
- Avoid loading giant assets unnecessarily.

### 9.3 Hydration strategy
Only hydrate:
- nav interactions,
- mobile menu,
- form state,
- optional interactive embeds.

Do not hydrate:
- static text blocks,
- project cards,
- article lists,
- the majority of the page shell.

### 9.4 Core Web Vitals targets
- LCP: under 2.5s
- CLS: under 0.1
- INP: in the good range

---

## 10. SEO Strategy

### 10.1 Metadata
Use Next.js metadata API for:
- title,
- description,
- canonical URL,
- Open Graph tags,
- Twitter card tags.

### 10.2 Semantic structure
Use:
- `<header>` for navigation,
- `<main>` for primary content,
- `<section>` for each major area,
- `<article>` for work/article items where appropriate,
- `<footer>` if a closing section is added later.

### 10.3 Content signals
- Strong heading hierarchy.
- Descriptive alt text.
- Indexable anchor structure.
- Clean internal navigation.
- Optional JSON-LD later for person/article/project metadata.

### 10.4 Share previews
Prepare OG image and social metadata for:
- home page,
- article pages later,
- project pages later.

---

## 11. Accessibility Requirements

- Visible keyboard focus states.
- Semantic labels for form fields.
- High-contrast text and UI surfaces.
- Mobile navigation operable via keyboard and touch.
- Reduced motion respect.
- No hover-only essential interactions.
- No color-only status indicators.
- Form errors associated with inputs.

Focus ring recommendation:
- use a strong ring on light surfaces,
- invert or adjust ring on dark surfaces like the contact card.

---

## 12. Deployment & CI/CD

### 12.1 Hosting
Recommended host: **Vercel**.

Why:
- tight Next.js integration,
- preview deployments,
- simple rollback,
- fast static and hybrid delivery.

### 12.2 Pipeline
1. Push to branch.
2. Run linting.
3. Run type checking.
4. Run tests if present.
5. Build production bundle.
6. Deploy preview.
7. Review preview.
8. Merge to main.
9. Production deploy automatically.

### 12.3 Quality gates
- `eslint`
- `tsc --noEmit`
- production build validation
- accessibility spot checks
- metadata validation
- image sanity check

### 12.4 Suggested scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  }
}
```

### 12.5 Environment variables
Keep minimal for v1:
- `SITE_URL`
- optional contact submission integration keys
- optional analytics key later

---

## 13. Implementation Notes by Section

### 13.1 Home
- Use a 12-column grid.
- Keep the bottom row as four square widgets.
- Reserve image dimensions.
- Keep accent usage rare.
- Make the hero copy concise and authoritative.

### 13.2 Work
- Render each project from local data.
- Keep copy and visuals split.
- Use architecture notes or bullets for depth.
- Support both screenshots and diagrams.
- Keep card spacing breathable.

### 13.3 About
- Timeline on the left.
- Skills and contact on the right.
- Make the form feel visually distinct.
- Keep descriptions impact-focused.

### 13.4 Shelf
- Constrain width.
- Use serif typography heavily.
- Support drop cap, blockquotes, and long-form prose.
- Keep the reading experience calm and premium.

---

## 14. Styling and Content Rules That Must Not Be Broken

These are implementation constraints, not suggestions:
- Bento UI and Editorial UI must remain visually separate.
- Serif should not leak into ordinary Bento body copy.
- Accent color should remain tightly controlled.
- Cards should stay rounded and softly shadowed.
- Shelf should remain narrow and typographically driven.
- Scroll animation should be restrained.
- Local files should remain the source of truth for content.
- Inline styles should be avoided unless absolutely necessary.

---

## 15. Future Extensions

The system should remain compatible with:
- `/work/[slug]` project detail pages,
- `/shelf/[slug]` article pages,
- CMS integration,
- richer analytics,
- newsletter signup,
- contact backend integration.

These are future-capable, but not required for v1.

---

## 16. Final Technical Acceptance Criteria

The implementation is complete when:
- the site renders as a polished SPA,
- navigation is sticky and functional,
- Home, Work, About, and Shelf all match the intended visual registers,
- content is sourced from local typed data,
- performance is strong,
- SEO metadata is present,
- forms validate correctly,
- the site works well on mobile and desktop,
- the experience feels like a serious technical portfolio rather than a generic template.
