# UI Rules

Concise rules for building the Sephil Home and Business UI.

These rules preserve the boutique, premium, and minimal experience defined by the design system. Design assets and `ui-tokens.md` are the source of truth for all visual decisions.

---

# Font

Always import Poppins using `next/font/google` in the root layout.

```typescript
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
```

Apply the font variable to the `<html>` element.

Never use system fonts as the primary font.

---

# Theme

- Light mode only.
- Never implement dark mode.
- Never add theme toggles.
- Backgrounds should feel warm, soft, and premium.
- Avoid interfaces that feel overly futuristic or AI-generated.

---

# Layout

- Max page width: 1440px
- Content centered horizontally
- Horizontal page padding:
  - Desktop: 32px
  - Tablet: 24px
  - Mobile: 16px
- Gap between major sections: 48px
- Gap between components: 24px
- Use generous whitespace.

---

# Header

Header height:

```txt
72px
```

Properties:

- Sticky top navigation
- Full width
- White background
- Soft bottom border
- Small shadow on scroll only

Header padding:

```txt
0 24px
```

Navigation should remain simple and uncluttered.

---

# Navigation

Primary navigation:

- Home
- Shop
- Categories
- About
- Contact

Desktop:

- Horizontal navigation

Mobile:

- Slide-in drawer menu

Active link:

```txt
text-accent
font-medium
```

Never use underlines.

Active states should be communicated through color only.

---

# Cards

Cards should feel premium and minimal.

```txt
background: bg-surface
border: border-border
border-radius: 16px
padding: 24px
```

Shadow:

```css
0 1px 2px rgba(0,0,0,.04),
0 4px 16px rgba(0,0,0,.05)
```

Rules:

- Avoid heavy shadows.
- Avoid colored card backgrounds.
- Use color inside cards through badges and buttons.
- Keep cards visually calm.

---

# Product Cards

Product cards should prioritize imagery.

Structure:

1. Product image
2. Category label
3. Product name
4. Price
5. Action buttons

Rules:

- Image radius: 12px
- Card radius: 16px
- Product names max two lines
- Prices must be visually prominent
- Maintain equal heights across grids

---

# Typography Hierarchy

## Hero Heading

```txt
48px
700
text-text-primary
```

---

## Section Heading

```txt
32px
600
text-text-primary
```

---

## Card Title

```txt
20px
600
text-text-primary
```

---

## Body Text

```txt
16px
400
text-text-primary
```

---

## Secondary Text

```txt
14px
400
text-text-secondary
```

---

## Caption

```txt
12px
400
text-text-muted
```

---

# Buttons

## Primary Button

Used for:

- Add to Cart
- Checkout
- Submit Order

```txt
bg-accent
text-white
rounded-xl
px-4 py-2
font-medium
```

---

## Secondary Button

```txt
bg-surface
border-border
text-text-primary
rounded-xl
```

---

## Ghost Button

```txt
transparent
text-text-secondary
```

Hover:

```txt
bg-surface-secondary
```

---

## WhatsApp Button

Reserved exclusively for:

- Order via WhatsApp
- Floating WhatsApp CTA

```txt
bg-whatsapp
text-white
rounded-xl
```

Never use WhatsApp green for regular buttons.

---

# Forms

Inputs:

```txt
bg-surface
border-border
rounded-xl
px-3 py-2
text-text-primary
```

Placeholder:

```txt
text-text-muted
```

Focus:

```txt
ring-1 ring-accent
```

Forms should feel clean and spacious.

---

# Product Badges

## New Arrival

Soft blue.

---

## Featured

Warm cream.

---

## Sale

Burgundy.

---

## In Stock

Green.

---

## Low Stock

Amber.

---

## Out of Stock

Muted gray.

Badges use pill shapes:

```txt
rounded-full
px-2 py-1
text-xs
font-medium
```

---

# Order Status

## Pending Payment

Warning color.

---

## Payment Confirmed

Success color.

---

## Processing

Info color.

---

## Delivered

Success color.

---

## Cancelled

Error color.

---

# Empty States

Every empty screen should include:

- Small illustration or icon
- Short human-readable message
- Optional action button

Examples:

### Empty Cart

"Your cart is empty."

### No Search Results

"No products matched your search."

### No Orders

"No orders have been placed yet."

Never expose technical language to users.

---

# Toast Messages

Messages should always be human-friendly.

Good:

```txt
Product added to cart.
```

Good:

```txt
Order submitted successfully.
```

Bad:

```txt
Supabase request failed.
```

Bad:

```txt
Error code 500.
```

---

# Modals

Use for:

- Order confirmation
- Delete confirmation
- Important actions

Properties:

```txt
rounded-2xl
bg-surface
soft shadow
```

Never use fullscreen modals on desktop.

---

# Mobile

Mobile experience is first-class.

Rules:

- Touch targets minimum 44px
- Single-column layouts where possible
- Drawer navigation on small screens
- Sticky bottom cart button allowed
- Horizontal scrolling should never occur

---

# Tailwind v4 Rules

Tokens live inside:

```txt
app/globals.css
```

using:

```css
@theme
```

Never define colors in:

```txt
tailwind.config.ts
```

Always use token classes.

Correct:

```tsx
className="bg-surface text-text-primary border-border"
```

Never:

```tsx
className="bg-red-500 text-gray-700"
```

Never:

```tsx
className="bg-[#D32F2F]"
```

---

# Do Nots

- Never implement dark mode.
- Never use raw Tailwind colors.
- Never hardcode hex values inside components.
- Never use glassmorphism.
- Never use heavy shadows.
- Never use pure black.
- Never make cards colorful.
- Never use gradients as backgrounds.
- Never expose technical error messages.
- Never use WhatsApp green outside WhatsApp actions.
- Never create interfaces that feel overly futuristic or AI-generated.
- Never sacrifice whitespace to fit more elements.
- Never allow horizontal scrolling.
- Never prioritize aesthetics over usability.

---

# Design Philosophy

Sephil should feel:

- Warm
- Boutique
- Premium
- Elegant
- Minimal
- Timeless

The experience should resemble a carefully curated physical store rather than a modern dashboard.