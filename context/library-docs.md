# Library Docs

Project-specific usage patterns for every third-party library used in Sephil Home and Business.

This file documents how libraries are used inside this project.

Always check this file before implementing features that depend on external libraries.

---

# Before Using Any Library

Before implementing anything:

1. Check AGENTS.md if one exists.
2. Check whether an MCP server is available.
3. Read this file for project-specific rules.

Authority order:

MCP → AGENTS.md → library-docs.md → general knowledge

Never rely solely on training knowledge.

---

# Next.js

Version:

```txt
Next.js 16
```

Rules:

- App Router only.
- Server Components by default.
- Route handlers inside:

```txt
app/api/
```

- Server Actions inside:

```txt
actions/
```

- Use next/image for images.
- Use next/link for navigation.
- Use loading.tsx and error.tsx when needed.
- Avoid unnecessary client components.

---

# Tailwind CSS v4

Tokens live inside:

```txt
app/globals.css
```

using:

```css
@theme
```

Rules:

Never use:

```tsx
bg-red-500
text-gray-600
```

Never hardcode:

```tsx
bg-[#D32F2F]
```

Always use project tokens:

```tsx
bg-primary
bg-surface
text-text-primary
border-border
```

No colors belong in tailwind.config.ts.

---

# shadcn/ui

Used for UI primitives.

Examples:

- Dialog
- Sheet
- Dropdown Menu
- Toast
- Tabs

Rules:

- Use as a foundation.
- Customize using project tokens.
- Never keep default colors.
- Radius and spacing must follow ui-tokens.md.
- Components should feel boutique and premium.

---

# Framer Motion

Used for:

- Cart drawer
- Mobile menu
- Modal animations
- Product hover transitions

Preferred duration:

```txt
200ms–300ms
```

Rules:

Animations should be subtle.

Avoid:

- Bounce effects
- Excessive scaling
- Flashy motion

Preferred:

- Fade
- Slide
- Opacity
- Soft transforms

---

# React Hook Form

Used for:

- Checkout form
- Contact form
- Admin forms

Rules:

Large forms should not use multiple useState calls.

Combine with Zod validation.

Example:

```tsx
const form = useForm<FormValues>({
  resolver: zodResolver(schema),
});
```

---

# Zod

Used for:

- Form validation
- Server Actions
- API routes

Rules:

Validate all external input.

Never trust client data.

Example:

```tsx
const schema = z.object({
  fullName: z.string().min(2),
  phone: z.string(),
});
```

---

# Sonner

Used for:

- Success notifications
- Error messages

Examples:

```tsx
toast.success("Product added to cart");
```

```tsx
toast.error("Unable to place order");
```

Rules:

Messages should be human-friendly.

Never expose technical errors.

---

# Lucide React

Used for icons.

Examples:

- Search
- ShoppingCart
- Menu
- Heart
- ChevronRight
- Minus
- Plus

Rules:

Default size:

```txt
18px–22px
```

Use:

```tsx
strokeWidth={1.8}
```

Avoid heavy icons.

---

# clsx

Used for conditional classes.

Example:

```tsx
clsx(
  "rounded-xl",
  active && "bg-primary text-white"
)
```

Avoid long template literals.

---

# class-variance-authority

Used for component variants.

Examples:

- Buttons
- Badges
- Inputs

Rules:

Keep variants centralized.

Avoid duplicate styling logic.

---

# next/image

Always preferred over img tags.

Example:

```tsx
<Image
  src={image}
  alt={name}
  fill
/>
```

Rules:

Every image needs:

- alt text
- proper sizes
- optimized loading

Avoid layout shifts.

---

# Zustand

Used only if global state becomes necessary.

Suitable for:

- Cart state
- Wishlist state

Avoid using it for local UI state.

Local state should stay inside components.

---

# WhatsApp Integration

WhatsApp links use:

```txt
https://wa.me/
```

Rules:

WhatsApp green is reserved only for:

- Floating WhatsApp button
- Order via WhatsApp CTA

Everything else uses the brand primary color.

---

# Utility Functions

## formatCurrency

Purpose:

Convert prices into Nigerian Naira format.

Example:

```ts
formatCurrency(15000)
```

Output:

```txt
₦15,000
```

---

## generateOrderId

Purpose:

Generate readable order IDs.

Example:

```txt
SPH-483920
```

---

## cn()

Purpose:

Merge Tailwind classes.

Implementation:

```tsx
cn("rounded-xl", active && "bg-primary")
```

Built using:

- clsx
- tailwind-merge

---

# Dependencies Approved

Core:

- next
- react
- react-dom
- typescript

Styling:

- tailwindcss
- shadcn/ui
- class-variance-authority
- clsx
- tailwind-merge

Forms:

- react-hook-form
- zod
- @hookform/resolvers

Animations:

- framer-motion

Notifications:

- sonner

Icons:

- lucide-react

State (optional):

- zustand

No new dependency should be added without updating this file.

---

# Invariants

- Never use libraries without checking this file.
- Prefer native solutions first.
- Keep dependencies minimal.
- Use project tokens everywhere.
- Preserve the premium boutique feel.
- Favor simplicity over complexity.

---

# Zustand

Used for global state.

Current usage:

- Cart state
- Cart drawer state

Future usage:

- Wishlist (if introduced later)

Rules:

- Persist cart to localStorage.
- Avoid putting local UI state in Zustand.
- Keep stores small and focused.

Example:

CartStore

- items
- addItem()
- removeItem()
- updateQuantity()
- clearCart()
- subtotal()

---

# Local Storage

Used for:

- Cart persistence

Rules:

- Restore cart automatically on refresh.
- Guest users should never lose cart items.
- Clear cart after successful order placement.
- Store only necessary information.

Never store:

- Payment details
- Customer sensitive information

---

# Admin Dashboard

Used by the business owner.

Features:

- Product management
- Order management
- Order status updates

Rules:

- Admin components live under:

app/admin/

- Reuse existing components whenever possible.
- Maintain the same boutique styling.
- No separate design language.

Future sections may include:

- Analytics
- Customer management
- Inventory management

---

# Payments

Current version:

Bank Transfer only.

Rules:

- No payment gateway integration in v1.
- Customer receives bank details during checkout.
- Order remains pending until manually confirmed.
- Order statuses:

pending
confirmed
completed
cancelled

Future integrations:

- Paystack
- Flutterwave

---

# Authentication

Current version:

Guest checkout only.

Rules:

- No customer accounts.
- No login page.
- No signup page.

Future versions may introduce:

- User accounts
- Order history
- Saved addresses
- Wishlist
