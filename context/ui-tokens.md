# UI Tokens

Design tokens for Sephil Home and Business.

All colors, typography, spacing, radii, and component values are defined here and must be used consistently throughout the application.

Never hardcode colors or use raw Tailwind color classes inside components.

---

# How to Use

This project uses Tailwind CSS v4.

All design tokens are defined using the `@theme` directive in `app/globals.css`.

Tailwind v4 automatically generates utility classes from theme variables.

Example:

```tsx
// Correct
className="bg-surface text-text-primary border-border"

// Also correct
style={{ color: 'var(--color-text-primary)' }}

// Never
className="bg-red-500 text-gray-700"

// Never
className="bg-[#D32F2F]"
```

---

# globals.css Token Definitions

```css
@import "tailwindcss";

@theme {

  /* Fonts */
  --font-sans: "Poppins", sans-serif;

  /* Backgrounds */
  --color-background: #F9F8F6;
  --color-surface: #FFFFFF;
  --color-surface-secondary: #EFEBE6;
  --color-surface-muted: #F4F2EE;

  /* Borders */
  --color-border: #E7E2DC;
  --color-border-light: #EFEAE5;

  /* Text */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-text-muted: #8B8B8B;

  /* Brand */
  --color-accent: #D32F2F;
  --color-accent-foreground: #FFFFFF;

  /* WhatsApp */
  --color-whatsapp: #25D366;
  --color-whatsapp-foreground: #FFFFFF;

  /* Sale */
  --color-sale: #8C1C28;

  /* Success */
  --color-success: #2E7D32;
  --color-success-light: #EAF6EC;

  /* Warning */
  --color-warning: #F4A300;
  --color-warning-light: #FFF7E3;

  /* Error */
  --color-error: #B23A48;
  --color-error-light: #FCECEF;

  /* Info */
  --color-info: #4A6FA5;
  --color-info-light: #EEF3FA;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;
}
```

---

# Color Usage

## Backgrounds

| Element | Token |
|----------|--------|
| Page background | `bg-background` |
| Cards | `bg-surface` |
| Secondary sections | `bg-surface-secondary` |
| Muted surfaces | `bg-surface-muted` |

---

## Text

| Element | Token |
|----------|--------|
| Primary text | `text-text-primary` |
| Secondary text | `text-text-secondary` |
| Muted text | `text-text-muted` |

---

## Brand Accent

Used for:

- Add to Cart
- Checkout
- Submit Order
- Active navigation
- CTA buttons

Token:

```txt
bg-accent
```

---

## WhatsApp

Used only for:

- Order via WhatsApp
- Floating WhatsApp button

Token:

```txt
bg-whatsapp
```

---

# Typography

Font family:

**Poppins**

Imported through:

```ts
next/font/google
```

---

## Type Scale

| Element | Size | Weight |
|----------|------|--------|
| Hero title | 48px | 700 |
| Section title | 32px | 600 |
| Card title | 20px | 600 |
| Body text | 16px | 400 |
| Caption | 14px | 400 |
| Small labels | 12px | 500 |

---

# Border Radius

| Token | Value |
|--------|------|
| sm | 8px |
| md | 12px |
| lg | 16px |
| xl | 20px |

Product images:

```tsx
rounded-xl
```

Cards:

```tsx
rounded-2xl
```

---

# Shadows

```css
box-shadow:
0 1px 2px rgba(0,0,0,.04),
0 4px 16px rgba(0,0,0,.05);
```

Heavy shadows should never be used.

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
```

---

## Secondary Button

```txt
bg-surface
border-border
text-text-primary
```

---

## WhatsApp Button

Used only for WhatsApp actions.

```txt
bg-whatsapp
text-white
rounded-xl
```

---

# Product Cards

Background:

```txt
bg-surface
```

Radius:

```txt
rounded-2xl
```

Border:

```txt
border-border
```

Shadow:

Soft shadow only.

---

# Product Badges

## New Arrival

Dusty blue.

## Featured

Warm cream.

## Sale

Burgundy.

## In Stock

Soft green.

## Low Stock

Amber.

## Out of Stock

Muted gray.

---

# Order Status Colors

| Status | Color |
|----------|--------|
| Pending Payment | Warning |
| Payment Confirmed | Success |
| Processing | Info |
| Delivered | Success |
| Cancelled | Error |

---

# Invariants

## Never

- Use raw Tailwind colors.
- Use hardcoded hex values inside components.
- Use pure black.
- Use dark mode.
- Use glassmorphism.
- Use heavy shadows.

## Always

- Use CSS variables via Tailwind v4.
- Use Poppins through next/font/google.
- Use accent color for primary actions.
- Use WhatsApp green only for WhatsApp actions.
- Maintain a warm, elegant, boutique-inspired interface.