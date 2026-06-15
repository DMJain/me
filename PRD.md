# Product Requirements Document (PRD)
## Personal Portfolio Website

### Document Control
- **Product:** Personal portfolio website
- **Audience:** Recruiters, CTOs, engineering peers, collaborators, and readers
- **Version:** 1.0
- **Status:** Draft
- **Stack:** Next.js 15 (App Router, React Server Components) + Tailwind CSS v4
- **Information architecture:** Single-page application with smooth scroll navigation and four primary sections: Home, Work, About, Shelf

---

## 1. Executive Summary

This product is a high-performance, single-page portfolio website for a Senior Backend Developer. It serves three purposes at once:

1. **Digital resume** — summarize background, roles, education, and technical strengths.
2. **Project showcase** — present selected work with architecture-first storytelling.
3. **Thought-leadership blog** — host long-form writing in a premium editorial reading experience.

The site is intended to feel intentionally designed rather than template-driven. The core visual contract is already established: a **Bento Dashboard** register for Home, Work, and About, and a **high-end editorial register** for Shelf. The Bento system is modular, rounded, and card-driven; the Shelf system is stark, typographic, and reading-focused. The design spec also establishes the site’s exact token direction, typography rules, spacing, motion philosophy, and component behavior. These requirements are part of the product definition, not optional styling ideas.

### Why we are building it
The goal is to create a site that helps visitors quickly answer:
- Who is this person?
- What do they build?
- Why should I trust their technical judgment?
- How do I contact them?
- What do they write about?

### Product goals
- Communicate senior backend engineering depth quickly.
- Showcase architectural thinking, workflow design, API design, and AI/agentic systems.
- Present a personal brand that feels distinct, premium, and credible.
- Make the site easy to maintain using local files before CMS adoption.
- Ensure the experience is fast, SEO-friendly, and accessible.

### Product principles
- Single-page navigation with smooth scrolling.
- Strong hierarchy and readability.
- Minimal client-side JavaScript unless interactivity requires it.
- Static-first architecture.
- Content maintained in local files.
- High contrast, restrained accent usage, and disciplined motion.

---

## 2. Product Vision & Scope

### Vision
A portfolio that functions as a living technical presence: concise enough to scan in seconds, rich enough to study, and editorial enough to remember.

### In Scope
- Sticky navigation with anchor links.
- Smooth scrolling between sections.
- Home section with bento-grid hero and dynamic widgets.
- Work section with stacked project cards and diagram/media split.
- About section with timeline, technical arsenal, and contact form.
- Shelf section with editorial article list and expanded reading view.
- Local file-driven data model for projects and articles.
- SEO metadata, social sharing tags, and image optimization.
- Responsive and accessible UI behavior.

### Out of Scope (v1)
- CMS integration.
- User authentication.
- Comments or reactions.
- Admin dashboard.
- Search across articles.
- Newsletter signup.
- Analytics dashboard.
- Dark mode toggle.
- Multi-language support.
- Project/article CRUD interface.
- Contact CRM automation.

---

## 3. Context & Persona

### Owner profile
The site owner is a Senior Backend Developer with a background spanning Indihood and Dassault Systèmes, a Master’s in Computer Science, and a technical focus on:
- complex workflow architecture,
- API design,
- distributed systems,
- AI-driven agents,
- Generative AI,
- retrieval-augmented generation,
- backend platform thinking.

### Personal identity cues
The site should also subtly surface personality:
- motorsports fandom, especially Ferrari/Tifosi energy,
- chess,
- 90s East Coast Hip-Hop,
- heavy metal.

These should show up as taste markers, not gimmicks.

---

## 4. Target Personas

### 4.1 IT Recruiters
Needs:
- role history,
- stack familiarity,
- project evidence,
- contact method.

Success: recruiter can qualify the candidate quickly.

### 4.2 CTOs / Engineering Managers
Needs:
- architecture depth,
- systems thinking,
- ownership examples,
- evidence of scalability and reliability decisions.

Success: they trust the candidate’s technical judgment.

### 4.3 Open-Source Peers / Engineers
Needs:
- implementation details,
- design choices,
- interesting project writeups,
- ways to reach out or collaborate.

Success: they remember the work and want to connect.

### 4.4 Founders / Clients
Needs:
- execution credibility,
- breadth of capability,
- strong taste,
- clear communication.

Success: they contact the owner.

### 4.5 Readers / Personal Brand Visitors
Needs:
- personality,
- writing voice,
- consistency between visual design and technical identity.

Success: the site feels distinctive and human.

---

## 5. Information Architecture

The product is a single-page application with smooth scroll sections:

- **Home** — first impression, identity, status widgets
- **Work** — selected projects and architecture storytelling
- **About** — experience timeline, skills, contact
- **Shelf** — long-form thoughts and reading list

The site should use anchor-based navigation (`#home`, `#work`, `#about`, `#shelf`) and preserve a clean reading flow.

---

## 6. User Stories & Epics

### Epic A — Global Navigation

**Goal:** Help users move through the site quickly and know where they are.

#### User stories
- As a visitor, I want a sticky navigation bar so I can jump to any section.
- As a recruiter, I want active-state section highlighting so I know where I am on the page.
- As a mobile user, I want the nav to be compact and unobtrusive.
- As a keyboard user, I want the navigation to be fully accessible.

#### Acceptance criteria
- Nav remains sticky at the top.
- Anchor links scroll smoothly to sections.
- Active state updates based on viewport position.
- Mobile navigation remains accessible and usable.
- Focus states are visible for keyboard users.

---

### Epic B — Home / Bento Introduction

**Goal:** Introduce identity, technical focus, and personality immediately.

#### User stories
- As a recruiter, I want to understand the owner’s role and current focus at a glance.
- As a CTO, I want to see evidence of discipline, clarity, and taste.
- As a visitor, I want the page to feel premium and intentional.
- As a mobile user, I want the layout to collapse cleanly.

#### Acceptance criteria
- Home uses a 12-column Bento layout on desktop.
- Includes hero introduction, profile image, name/tagline/social strip, and four square widgets.
- Widgets can represent current read, current work, status, and Spotify integration.
- Layout collapses to a single column on smaller screens without losing hierarchy.

---

### Epic C — Work / Project Showcase

**Goal:** Present selected projects in an architecture-aware, scannable way.

#### User stories
- As a CTO, I want to see what problems the project solves.
- As a recruiter, I want to see the technologies used.
- As an engineering peer, I want to inspect architecture visuals and implementation clues.
- As a mobile user, I want the cards to remain readable.

#### Acceptance criteria
- Projects are displayed as stacked cards.
- Each card separates copy/tags from diagrams/screenshots.
- Tags are easy to scan.
- Project visuals are optimized and responsive.
- Mobile layout stacks media above text.

---

### Epic D — About / Career + Contact

**Goal:** Show experience, education, skills, and provide a contact path.

#### User stories
- As a recruiter, I want to see a timeline of experience and education.
- As a founder, I want to understand the technical arsenal quickly.
- As a visitor, I want a simple, trustworthy contact form.
- As a keyboard user, I want the form to be accessible.

#### Acceptance criteria
- Timeline has clear hierarchy and impact-focused descriptions.
- Skills are grouped by category.
- Contact form validates input.
- Clear error and success states are visible.
- Form works on mobile and desktop.

---

### Epic E — Shelf / Editorial Thoughts

**Goal:** Provide a reading experience that feels like a premium editorial publication.

#### User stories
- As a reader, I want a constrained reading width.
- As a peer, I want to read essays and notes with comfortable typography.
- As a visitor, I want the writing section to feel serious and intentional.

#### Acceptance criteria
- Shelf is constrained to an optimal reading measure (~65ch).
- Large serif typography dominates headlines.
- Drop-cap and thick-bordered blockquotes are supported.
- Long-form reading remains comfortable on mobile.

---

## 7. Page-by-Page Requirements

### 7.1 Home
Required content:
- hero introduction,
- senior backend positioning,
- profile image,
- dynamic status widgets,
- current read slot,
- Spotify slot,
- social links.

Behavior:
- hero should immediately communicate role and identity,
- bottom row widgets should remain square on desktop,
- accent color must remain disciplined and sparse.

### 7.2 Work
Required content:
- project title,
- short summary,
- stack tags,
- architecture notes or bullets,
- screenshot/diagram/media,
- optional external links.

Behavior:
- cards must be easy to scan,
- text and media must be visually distinct,
- no dense paragraphs without structure,
- media should not dominate the text.

### 7.3 About
Required content:
- experience timeline,
- education timeline,
- technical arsenal,
- contact form.

Behavior:
- split layout on desktop,
- stacked layout on mobile,
- contact form should be visually distinct and high-contrast.

### 7.4 Shelf
Required content:
- article list,
- article metadata,
- excerpts,
- expanded article reading state.

Behavior:
- editorial spacing,
- large serif headers,
- reading width constraint,
- drop-cap support,
- strong quote styling.

---

## 8. Functional Requirements

### 8.1 Navigation
- Sticky top nav.
- Anchor links to each section.
- Smooth scrolling.
- Active-state nav behavior.
- Mobile fallback nav.
- Accessible keyboard behavior.

### 8.2 Home widgets
- Current read widget.
- Current work/status widget.
- Spotify slot.
- Social links with icon support.
- Optional dynamic content updates from local data.

### 8.3 Work cards
- Render from structured local data.
- Support image, diagram, or screenshot media.
- Stack tags as pills.
- Support external and internal links.
- Handle missing media gracefully.

### 8.4 About section
- Timeline entries for work and education.
- Skills grouped by category.
- Contact form validation:
  - name required,
  - valid email required,
  - message required,
  - optional minimum message length,
  - clear inline errors.
- Submission states:
  - idle,
  - submitting,
  - success,
  - failure.

### 8.5 Shelf section
- Show article index.
- Show date and read time.
- Show excerpt.
- Render full article body in an editorial style.
- Support blockquotes, code, emphasis, and headings.
- Maintain a narrow measure for readability.

---

## 9. Edge Cases

- Mobile screens under 375px.
- Very long project titles.
- Very long article titles.
- Empty project list.
- Empty article list.
- Missing image assets.
- Broken external links.
- Form validation failures.
- Reduced-motion preferences.
- Slow network / image loading delays.
- Very large content expansion in Shelf articles.
- Hover-only interactions must not be the only way to understand content.

---

## 10. Non-Functional Requirements

### Performance
- Fast initial load.
- Static-first rendering.
- Minimal hydration.
- Optimized images.
- Avoid layout shifts.
- Keep JavaScript light.

### Accessibility
- Semantic landmarks.
- Keyboard navigable controls.
- Strong focus rings.
- Good contrast.
- Reduced-motion handling.
- Proper form labels and error associations.

### Maintainability
- Content stored in local files.
- Reusable section components.
- Token-driven styling.
- No inline style sprawl.
- No hard-coded content duplicated across components.

### Reliability
- Failure states should degrade gracefully.
- Missing data should not break the page.
- Form submission should be robust and user-friendly.

---

## 11. Editorial / Visual Contract

The design is not just a theme; it is a product rule.

### Bento Dashboard register
Applies to:
- Home,
- Work,
- About.

Characteristics:
- modular cards,
- rounded corners,
- subtle shadows,
- structured density,
- restrained accent use,
- sans-first utility text,
- serif for headline moments only.

### Editorial register
Applies to:
- Shelf.

Characteristics:
- narrow measure,
- serif-led typography,
- strict contrast,
- larger reading rhythm,
- thick blockquotes,
- drop-cap opening,
- calm whitespace.

The visual split must remain clear and intentional.

---

## 12. Acceptance Summary

The product is successful if a visitor can:
- understand the owner’s role and technical strengths quickly,
- browse selected work without confusion,
- contact the owner easily,
- read essays comfortably,
- remember the brand because it feels like a serious technical portfolio rather than a generic template.
