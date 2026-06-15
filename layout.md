# Portfolio Single-Page Architecture (Next.js 15 + Tailwind v4)

## 1. Global Setup & Design Tokens
**Tech Stack:** Next.js 15 (App Router, React Server Components), Tailwind CSS v4.
**Structure:** Single-page application (`app/page.tsx`) with smooth scrolling to sections (`#home`, `#work`, `#about`, `#shelf`).

### Tailwind v4 `@theme` (in `app/globals.css`)
- **Fonts:** - Sans-serif: `'Inter', ui-sans-serif, system-ui` (Used for UI elements, labels, metadata).
  - Serif: `'Playfair Display', ui-serif, Georgia` (Used for Editoral headlines, section titles).
- **Colors:**
  - Canvas (Background): `#fafafa` (Off-white/warm gray).
  - Ink (Primary Text): `#111111` (Deep black).
  - Ink Muted (Secondary Text): `#555555`.
- **Custom Utilities:**
  - `shadow-bento`: `0 4px 24px -4px rgba(0, 0, 0, 0.05)`
  - `border-ink/10`: Subtle 1px borders for all cards and dividers.

---

## 2. Component Layout Specifications

### Navigation Bar (`<NavBar />`)
- **Behavior:** `sticky top-0 z-50`.
- **Style:** Backdrop blur (`backdrop-blur-md`), semi-transparent canvas background, 1px bottom border.
- **Layout:** Flexbox, `justify-between`, max-width 6xl.
- **Elements:** - Left: Bold site name/logo (e.g., "Name.").
  - Right: Horizontal list of anchor links (Home, Work, About, Shelf). Hidden on mobile (replace with hamburger menu).

### Section 1: Home / Bento Box (`<HomeHero id="home" />`)
- **Layout:** 12-column CSS Grid (`grid-cols-1 md:grid-cols-12`). Mobile is `grid-cols-1`.
- **Spacing:** `gap-4`, padding top for nav clearance.
- **Blocks (All have `rounded-3xl border border-ink/10 bg-white p-6 shadow-bento`):**
  1. **Top-Left (4 cols):** "Three Word About Me". Small, uppercase, tracking-widest text (e.g., "DEVELOPER. ARCHITECT. TIFOSI.").
  2. **Top-Right (8 cols, span 2 rows):** Main Picture. `overflow-hidden` with `aspect-[2/1]` on desktop, standard aspect ratio on mobile. Contains an `<img>`.
  3. **Center-Left (4 cols):** About Me Hero Text. Minimum height ~250px, flex column, justified center. Large bold sans-serif greeting, muted subtext.
  4. **Mid-Right (8 cols):** Name / Tagline / Socials. Flex row, align items center. Contains social icons/links.
  5. **Bottom Row (4 blocks, 3 cols each):** `aspect-square`. 
     - Block A: "Current Read"
     - Block B: "Writes / 2centss"
     - Block C: "What I'm up to"
     - Block D: "Spotify Playlist"

### Section 2: Work Showcase (`<Work id="work" />`)
- **Layout:** Max-width 6xl, vertical flex column layout with `gap-12`. Top border separator.
- **Header:** Large serif `h2` ("Selected Work").
- **Card Structure:** Each project is a 12-column grid (`grid-cols-1 md:grid-cols-12 gap-8 items-center group`).
  - **Text Side (5 cols):** - Bold headline (`h3`), changes color on group hover.
    - Short description (muted text).
    - Flex-wrap container of pill-shaped tags (skills/tech stack) with thin borders.
  - **Image Side (7 cols):** - `rounded-2xl overflow-hidden border border-ink/10 aspect-video`.
    - Note: On desktop, alternate image/text sides or keep uniform (text left, image right). On mobile, stack image *above* text.

### Section 3: About Me (`<About id="about" />`)
- **Layout:** Asymmetric 2-column split using 12-column grid (`md:grid-cols-12 gap-16`).
- **Left Column - Timeline (7 cols):**
  - Continuous vertical flow, no card boxes.
  - **Experience:** Serif header. Items have left-border (`border-l-2`) for timeline effect. Includes role, company, dates, and short description emphasizing impact.
  - **Education:** Follows same visual pattern as Experience.
- **Right Column - Details (5 cols):**
  - **Skills Box:** `rounded-3xl border bg-white p-8 shadow-bento`. Categorized lists of technical skills.
  - **Contact Form Box:** `rounded-3xl bg-ink text-canvas p-8` (Inverted color scheme for visual weight). Contains Name, Email, Message inputs with transparent backgrounds and bottom borders only. Full-width submit button.

### Section 4: Shelf / Editorial (`<Shelf id="shelf" />`)
- **Layout:** Strict single-column centered layout constrained to optimal reading width (`max-w-2xl mx-auto`).
- **Header:** Flex container (`justify-between items-end`), large serif uppercase title, bottom border.
- **Article List View:** - Standard HTML structure: `<article>`.
  - Metadata: Date and read time in small, sans-serif, muted text.
  - Title: Large, bold serif text (`h3`). On hover, underline (`underline-offset-4`).
- **Expanded Article View (Typography details):**
  - Heavy use of Tailwind typography (`prose prose-lg`).
  - Large drop-cap for the first letter of the first paragraph (`first-letter:text-7xl first-letter:font-serif first-letter:float-left`).
  - Blockquotes: Thick left border (`border-l-4 border-ink`), italicized serif text, larger font size.
  - Dividers: `<hr className="border-ink/10" />` between items.