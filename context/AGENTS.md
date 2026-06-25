# AGENTS.md

# Sephil Home & Business

AI operating instructions for this codebase.

This file defines how every AI agent should behave when working on the project. Read this before touching anything.

---

# Project Identity

Sephil Home & Business is a boutique-style Nigerian retail web application.

The experience should feel:

- Premium
- Minimal
- Warm
- Human
- Elegant
- Modern

Never build generic AI-looking ecommerce UI.

The feeling should resemble a boutique brand rather than a marketplace.

---

# Source Of Truth

Always read these files first:

1. project-overview.md
2. architecture.md
3. ui-rules.md
4. ui-tokens.md
5. code-standards.md
6. library-docs.md
7. build-plan.md
8. progress-tracker.md
9. ui-registry.md

Never invent structure.

Architecture.md is the source of truth for folders.

---

# Core Philosophy

Build visible UI first.

Verify:

- Layout
- Spacing
- Responsiveness
- Interaction

Only after UI is complete should logic be added.

Never do backend-first development.

Every feature must be testable immediately.

---

# UI Philosophy

Sephil Home & Business should feel:

- Boutique luxury
- Minimal
- Premium
- Warm
- Human

Avoid:

- AI-looking designs
- Heavy shadows
- Glassmorphism
- Harsh colors
- Gradient card backgrounds
- Dark mode

---

# Design Tokens

Theme comes from ui-tokens.md.

Never hardcode colors inside components.

Never use Tailwind built-in colors.

Wrong:

```tsx
bg-red-500
text-gray-700
```

Correct:

```tsx
bg-primary
text-muted
```

Tokens live inside globals.css.

---

# Typography

Font:

Poppins

Imported using next/font/google.

Never use system fonts.

---

# Theme

Light mode only.

No dark mode.

No theme toggle.

---

# Colors

Primary background:

Warm off-white.

Primary CTA:

Brand red.

WhatsApp green:

Only for WhatsApp actions.

Primary text:

Deep charcoal.

Muted text:

Cool gray.

Never use pure black.

---

# Border Radius

Use:

8px–12px

Cards may use:

16px

Never over-round components.

---

# Shadows

Soft and subtle only.

Avoid heavy elevation.

---

# Layout

Search and browsing come first.

Filtering can come later.

User experience should remain simple.

---

# Cart

Cart uses two experiences:

### Floating Cart Drawer

Animated right-side drawer.

Requirements:

- Overlay
- Body scroll lock
- Smooth animation
- 200–300ms duration

### Dedicated Cart Page

Must exist.

Both experiences should remain synchronized.

---

# WhatsApp

WhatsApp ordering is supported.

WhatsApp green is used only for:

- WhatsApp buttons
- WhatsApp order actions

Everything else uses the brand primary color.

---

# Component Development

Before building any component:

1. Check ui-registry.md.
2. Reuse existing patterns.
3. Match existing styles.
4. Only create a new component if none exists.
5. Update ui-registry.md afterward.

---

# Component Rules

One component per file.

Never export multiple components.

Named exports only.

No default exports.

---

# Next.js Rules

- Next.js 16
- App Router only
- React 19
- Server Components by default

Use "use client" only when necessary:

- useState
- useEffect
- Event listeners
- Browser APIs

Never add "use client" to layouts.

---

# Styling

Tailwind CSS v4.

Theme tokens belong inside globals.css.

Never use tailwind.config.ts for colors.

---

# State

Keep state simple.

Prefer:

- Server Components
- Server Actions
- React state

Avoid unnecessary abstractions.

---

# Database

Backend:

Supabase

Never hardcode keys.

All environment variables belong inside:

.env.local

---

# Admin

The owner currently manages the business.

Admin features are internal.

Public customers should never access admin pages.

Admin dashboard includes:

- Products
- Orders
- Dashboard

Authentication can be added later.

---

# Search

Priority:

1. Search
2. Browse

Filtering is postponed until necessary.

Keep discovery simple.

---

# Build Order

Always follow build-plan.md.

Never skip ahead.

Finish one feature completely before starting another.

---

# Progress

Update progress-tracker.md after every completed feature.

Include:

- Current phase
- Last completed feature
- Next feature

---

# Registry

Update ui-registry.md after every new component.

Include:

- Component name
- File path
- Classes used

---

# Error Handling

User-facing errors must be human readable.

Never expose raw errors.

Always log with context:

```ts
[cart]
[checkout]
[products]
```

---

# Dependencies

Before installing any package ask:

1. Can Next.js do this already?
2. Can React do this already?
3. Is there a native solution?

Prefer fewer dependencies.

---

# Comments

Do not explain what code does.

Code should explain itself.

Comments are only for WHY.

Never leave TODO comments.

---

# Performance

Use:

- next/image
- Lazy loading
- Server Components

Optimize before adding complexity.

---

# Final Principle

Think like a senior engineer.

Think before coding.

Read context files before acting.

Respect architecture.md.

Scope is sacred.

Keep the UI elegant.

Build one thing at a time.

Always prioritize clarity over cleverness.
