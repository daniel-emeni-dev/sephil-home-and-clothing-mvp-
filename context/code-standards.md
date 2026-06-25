# Code Standards

Implementation rules and conventions for the entire Sephil Home and Business project.

These rules prevent pattern drift across sessions and ensure the codebase remains maintainable.

---

# Engineering Mindset

The AI agent on this project operates as a senior engineer.

This means:

- Think before implementing.
- Always read context files first.
- `project-overview.md` and `architecture.md` are the source of truth.
- Scope is sacred — only build what is required.
- Complete one feature before touching another.
- Every feature must be testable.
- Prefer simple code over clever abstractions.
- Readability is more important than optimization.
- Failures are expected — handle them gracefully.
- Never assume. Ask questions when requirements are unclear.

---

# TypeScript

- Strict mode enabled.
- Never use `any`.
- Prefer `unknown` and narrow types properly.
- Avoid type assertions unless absolutely necessary.
- All function parameters must be typed.
- All return values must be typed.
- Use `type` for object shapes and unions.
- Use `interface` only for extendable component props.
- Use `const` by default.
- Use `let` only when reassignment is necessary.
- Every async function must handle errors properly.

---

# Next.js 16 Conventions

- App Router only.
- React 19 APIs.
- Components are Server Components by default.
- Add `"use client"` only when required.

Allowed reasons:

- useState
- useReducer
- useEffect
- Browser APIs
- Event handlers
- Third-party client libraries

Never add `"use client"` unnecessarily.

---

# Server Components

Prefer Server Components whenever possible.

Data fetching should happen on the server.

Client Components should focus on:

- UI interactions
- State
- Animations

---

# Folder Naming

Folders use kebab-case.

Examples:

```txt
product-card
cart-drawer
checkout-form
```

---

# File Naming

Component files:

```txt
ProductCard.tsx
CartDrawer.tsx
Header.tsx
```

Utilities:

```txt
formatCurrency.ts
generateOrderId.ts
```

API routes:

```txt
route.ts
```

One component per file.

Avoid barrel exports outside shared UI components.

---

# Component Structure

Every component follows this order:

```tsx
"use client";

// External imports

// Internal imports

// Types

type Props = {

};

// Component

export function ComponentName({}: Props) {

  // state

  // derived values

  // handlers

  return (
    <>
    </>
  );

}
```

Rules:

- No default exports.
- Always use named exports.
- Props live directly above the component.
- Shared types belong in `/types`.

---

# Styling

All styling uses Tailwind v4 tokens.

Never hardcode colors.

Correct:

```tsx
className="bg-surface text-text-primary border-border"
```

Never:

```tsx
className="bg-red-500"
```

Never:

```tsx
className="bg-[#D32F2F]"
```

No inline styles unless absolutely necessary.

---

# Imports

Always use aliases.

Correct:

```tsx
import { ProductCard } from "@/components/products/ProductCard";
```

Never:

```tsx
import ProductCard from "../../../components/products/ProductCard";
```

Relative imports should never go above one level.

---

# Server Actions

Server Actions live inside:

```txt
actions/
```

Example:

```tsx
"use server";

export async function createOrder() {

  try {

    return {
      success: true,
    };

  } catch (error) {

    console.error("[actions/createOrder]", error);

    return {
      success: false,
      error: "Unable to process order.",
    };

  }

}
```

Rules:

- Every Server Action uses try/catch.
- Never throw errors to the UI.
- Return human-readable messages.
- Revalidate affected paths after mutations.

---

# API Route Handlers

Every route handler:

- Uses try/catch.
- Validates request data.
- Logs errors.
- Returns a consistent response shape.

Example:

```ts
{
  success: true,
  data
}
```

or

```ts
{
  success: false,
  error
}
```

Never expose stack traces.

---

# Validation

All user inputs are validated with Zod.

Examples:

- Checkout forms
- Contact forms
- Product forms
- Admin forms

Never trust client data.

---

# Error Handling

Never use empty catch blocks.

Always:

```ts
console.error("[function-name]", error);
```

User-facing messages should be friendly.

Good:

```txt
Unable to place your order.
```

Bad:

```txt
PrismaError P2002
```

---

# Environment Variables

Never hardcode:

- URLs
- Keys
- Secrets

Everything belongs inside:

```txt
.env.local
```

Secrets should never use:

```txt
NEXT_PUBLIC_
```

unless browser access is required.

---

# Images

Always use:

```tsx
next/image
```

Never use:

```html
<img>
```

Product images:

- Must have alt text.
- Must use proper sizing.
- Avoid layout shifts.

---

# State Management

Keep state local whenever possible.

Use:

- useState
- useReducer

Introduce global state only when necessary.

Examples:

Suitable global state:

- Cart
- User session

Avoid unnecessary complexity.

---

# Forms

Forms should use:

- React Hook Form
- Zod validation

Never manually manage large forms with multiple useState calls.

---

# Currency

Prices must always be displayed in Nigerian Naira.

Utility:

```ts
formatCurrency(5000)
```

Output:

```txt
₦5,000
```

Never manually concatenate:

```txt
₦5000
```

---

# Dates

Use utility functions for formatting.

Example:

```txt
24 Jun 2026
```

Keep date formats consistent.

---

# Cart Logic

Cart calculations must live inside utility functions.

Never duplicate:

- subtotal calculations
- total calculations
- item quantity calculations

Single source of truth.

---

# WhatsApp Integration

WhatsApp green is reserved exclusively for:

- Floating WhatsApp button
- Order via WhatsApp button

Never use WhatsApp styling elsewhere.

---

# Search

Search should be:

- Debounced.
- Fast.
- Case-insensitive.

Filtering is out of scope for v1.

Never implement filters unless the scope changes.

---

# Comments

Avoid comments explaining obvious code.

Comments explain why, not what.

Bad:

```ts
// increment count
count++;
```

Good:

```ts
// Prevent duplicate orders during refresh
```

Never leave TODO comments in committed code.

---

# Dependencies

Before installing a package, ask:

1. Does Next.js already solve this?
2. Can React solve this?
3. Is there a simpler approach?

Approved packages:

- zod
- react-hook-form
- lucide-react
- tailwindcss
- shadcn/ui
- clsx
- class-variance-authority
- sonner
- framer-motion
- next-themes (only if scope changes in future)

Do not add new dependencies without updating this file.

---

# Animations

Animations should be subtle.

Preferred:

- Framer Motion
- CSS transitions

Duration:

```txt
200ms–300ms
```

Used for:

- Cart drawer
- Mobile menu
- Modals
- Hover states

Never use flashy animations.

---

# Testing Mindset

Every feature should be verifiable immediately after implementation.

Examples:

Product card:

- Image renders.
- Price displays correctly.
- Add to cart works.

Cart drawer:

- Opens smoothly.
- Closes properly.
- Locks body scroll.

Checkout:

- Form validates.
- Order summary updates.

Incomplete features are not acceptable.

---

# Invariants

- Never use default exports.
- Never hardcode colors.
- Never use raw Tailwind colors.
- Never implement dark mode.
- Never expose technical errors.
- Never sacrifice readability.
- Never build beyond scope.
- Always consult context files first.
- Always keep the UI warm, boutique, and premium.