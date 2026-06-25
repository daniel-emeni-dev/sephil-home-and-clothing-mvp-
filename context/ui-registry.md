# UI Registry

Living document.

Updated whenever a component is created.

Read this file before building any new component.

The goal is consistency.

Never invent a new pattern when an existing component already solves the problem.

---

# How to Use

Before building any component:

1. Check whether a similar component already exists.
2. Reuse existing variants and patterns.
3. Match spacing, typography, radius, and shadows exactly.
4. If no component exists:
   - Follow `ui-rules.md`
   - Follow `ui-tokens.md`
   - Build the component
   - Register it here immediately

This file should always reflect the current state of the application.

---

# Naming Convention

Component names use PascalCase.

Examples:

- ProductCard
- ProductGrid
- CartDrawer
- CheckoutForm

---

# Component Status

Legend:

- ⬜ Not built
- 🟡 In progress
- ✅ Built

---

# Layout Components

| Component | Path | Status |
|------------|------|--------|
| Header | components/layout/header | ⬜ |
| Footer | components/layout/footer | ⬜ |
| MobileMenuDrawer | components/layout/mobile-menu-drawer | ⬜ |
| FloatingWhatsappButton | components/shared/floating-whatsapp-button | ⬜ |
| Container | components/layout/container | ⬜ |
| Section | components/layout/section | ⬜ |

---

# Hero Components

| Component | Path | Status |
|------------|------|--------|
| HeroSection | components/home/hero-section | ⬜ |
| PromoBanner | components/home/promo-banner | ⬜ |
| CategoryHighlights | components/home/category-highlights | ⬜ |

---

# Search Components

| Component | Path | Status |
|------------|------|--------|
| SearchBar | components/search/search-bar | ⬜ |
| SearchInput | components/search/search-input | ⬜ |
| SearchResults | components/search/search-results | ⬜ |

---

# Product Components

| Component | Path | Status |
|------------|------|--------|
| ProductCard | components/products/product-card | ⬜ |
| ProductGrid | components/products/product-grid | ⬜ |
| ProductCarousel | components/products/product-carousel | ⬜ |
| ProductBadge | components/products/product-badge | ⬜ |
| ProductImageGallery | components/products/product-image-gallery | ⬜ |
| ProductInfo | components/products/product-info | ⬜ |
| RelatedProducts | components/products/related-products | ⬜ |

---

# Cart Components

| Component | Path | Status |
|------------|------|--------|
| CartDrawer | components/cart/cart-drawer | ⬜ |
| CartItem | components/cart/cart-item | ⬜ |
| CartSummary | components/cart/cart-summary | ⬜ |
| QuantitySelector | components/cart/quantity-selector | ⬜ |
| EmptyCart | components/cart/empty-cart | ⬜ |

---

# Checkout Components

| Component | Path | Status |
|------------|------|--------|
| CheckoutForm | components/checkout/checkout-form | ⬜ |
| OrderSummary | components/checkout/order-summary | ⬜ |
| PaymentInstructions | components/checkout/payment-instructions | ⬜ |
| WhatsappCheckoutButton | components/checkout/whatsapp-checkout-button | ⬜ |

---

# Shared Components

| Component | Path | Status |
|------------|------|--------|
| Button | components/ui/Button | ✅ |
| Input | components/ui/Input | ✅ |
| Textarea | components/ui/Textarea | ✅ |
| Badge | components/ui/Badge | ✅ |
| Container | components/ui/Container | ✅ |
| Section | components/ui/Section | ✅ |
| Modal | components/ui/Modal | ✅ |
| Toast | components/ui/Toast | ✅ |
| EmptyState | components/ui/EmptyState | ✅ |
| Skeleton | components/shared/skeleton | ⬜ |

---

# Admin Components

| Component | Path | Status |
|------------|------|--------|
| AdminSidebar | components/admin/admin-sidebar | ⬜ |
| ProductTable | components/admin/product-table | ⬜ |
| OrderTable | components/admin/order-table | ⬜ |
| ProductForm | components/admin/product-form | ⬜ |
| OrderStatusBadge | components/admin/order-status-badge | ⬜ |

---

# Registry Entries

## Button

Path:

```txt
components/ui/Button.tsx
```

Status:

```txt
✅ Built
```

Purpose:

Primary interaction element for all user actions (CTAs, form submission, navigation).

Variants:

- **primary** — Default accent red for main CTAs (Add to Cart, Checkout, Submit)
- **secondary** — Muted gray for alternative actions
- **outline** — Border variant for tertiary actions
- **ghost** — Text-only for minimal contexts
- **danger** — Red error state for destructive actions

Sizes:

- xs, sm, md (default), lg, xl

Styles:

```txt
bg-accent (primary)
text-accent-foreground
rounded-lg
px-4 py-2.5 (md)
font-medium
transition-all duration-200
disabled:opacity-50
focus-visible:ring-2 focus-visible:ring-accent
```

Notes:

- Never use button colors outside of these variants.
- Always use `rounded-lg` for consistency.
- Loading state includes spinner icon.
- Fullwidth variant for mobile forms.

---

## Input

Path:

```txt
components/ui/Input.tsx
```

Status:

```txt
✅ Built
```

Purpose:

Form input for text, email, phone, number, date fields.

Styles:

```txt
bg-surface
border-border
rounded-md (12px)
px-4 py-2.5
text-text-primary
placeholder-text-muted
focus:ring-2 focus:ring-accent
```

Features:

- Optional label above input
- Error state with red border and error message
- Helper text for additional guidance
- Disabled state with gray background

Notes:

- Always include label for accessibility
- Use proper `type` attribute (email, phone, number)
- Error messages in `text-error` color
- Helper text in `text-text-muted`

---

## Textarea

Path:

```txt
components/ui/Textarea.tsx
```

Status:

```txt
✅ Built
```

Purpose:

Form input for longer text content (notes, messages, descriptions).

Styles:

```txt
bg-surface
border-border
rounded-md (12px)
px-4 py-2.5
text-text-primary
resize-none
```

Features:

- Optional label
- Error and helper text support
- Configurable row height
- Matches Input styling for consistency

Notes:

- Never allow user resize (resize-none)
- Use for order notes, customer feedback
- Maintain same visual style as Input for form consistency

---

## Badge

Path:

```txt
components/ui/Badge.tsx
```

Status:

```txt
✅ Built
```

Purpose:

Small tag for categorization, status indication, inventory state.

Variants:

- **default** — Neutral gray
- **primary** — Brand accent red
- **success** — Green for confirmed states
- **warning** — Orange for sale/limited items
- **danger** — Red for errors/sold-out
- **info** — Blue for informational

Sizes:

- sm, md (default), lg

Styles:

```txt
rounded-full
px-3 py-1 (md)
text-xs font-semibold
inline-flex items-center justify-center gap-1
```

Usage:

- Product categories: `<Badge variant="primary">New In</Badge>`
- Order status: `<Badge variant="success">Confirmed</Badge>`
- Inventory: `<Badge variant="danger">Sold Out</Badge>`

Notes:

- Never hardcode badge colors
- Use tokens from ui-tokens.md
- Keep text short (1-2 words)
- Icon-friendly layout

---

## Container

Path:

```txt
components/ui/Container.tsx
```

Status:

```txt
✅ Built
```

Purpose:

Responsive wrapper for page width, centering, and horizontal padding.

Sizes:

- sm — max-w-2xl
- md — max-w-4xl
- lg (default) — max-w-6xl
- xl — max-w-7xl
- full — max-w-none

Responsive Padding:

```txt
px-4 (mobile: 16px)
sm:px-6 (tablet: 24px)
lg:px-8 (desktop: 32px)
```

Usage:

```tsx
<Container size="lg">
  <Section>
    {/* Page content */}
  </Section>
</Container>
```

Notes:

- Use on every page for max-width 1440px
- Always wrap Section children inside Container
- Maintains consistent horizontal padding across breakpoints
- Pairs with Section for vertical rhythm

---

## Section

Path:

```txt
components/ui/Section.tsx
```

Status:

```txt
✅ Built
```

Purpose:

Semantic vertical spacing wrapper for major content sections.

Spacing Options:

- compact — py-6 sm:py-8 lg:py-10
- normal (default) — py-12 sm:py-16 lg:py-20
- comfortable — py-16 sm:py-20 lg:py-24

Background Options:

- white (default) — bg-surface
- gray — bg-surface-secondary (for visual separation)
- black — bg-black (rare, footer only)

Usage:

```tsx
<Section spacing="normal" background="white">
  <Container>
    <h2>Section Title</h2>
    {/* Content */}
  </Container>
</Section>
```

Notes:

- All major page sections wrapped in Section
- Maintains 48px gap between sections (via padding)
- Background color creates visual hierarchy
- Mobile padding automatically adjusts via spacing option

---

## EmptyState

Path:

```txt
components/ui/EmptyState.tsx
```

Status:

```txt
✅ Built
```

Purpose:

Placeholder UI when no content available (empty cart, no orders, no wishlist items).

Styles:

```txt
flex flex-col items-center justify-center
py-12 px-4
```

Features:

- Optional icon (circles with muted gray color)
- Title in `text-text-primary` (18px, semibold)
- Description in `text-text-secondary`
- Optional action button (CTA)

Usage:

```tsx
<EmptyState
  icon={<ShoppingBagIcon />}
  title="Your cart is empty"
  description="Add items from our collection to get started."
  action={<Button variant="primary">Start Shopping</Button>}
/>
```

Notes:

- Used on /cart, /orders, /wishlist pages
- Icon is optional but recommended
- Action button is usually a primary CTA
- Maintains boutique, premium feel even in empty states

---

## Modal

Path:

```txt
components/ui/Modal.tsx
```

Status:

```txt
✅ Built
```

Purpose:

Overlay dialog for alerts, confirmations, forms.

Features:

- Backdrop with black 50% opacity
- Centered on screen
- Header with title and close button
- Body content area
- Optional footer for actions

Sizes:

- sm — max-w-sm (384px)
- md (default) — max-w-md (448px)
- lg — max-w-lg (512px)
- xl — max-w-xl (576px)

Styles:

```txt
bg-surface
rounded-lg
border-border (subtle)
shadow-soft
```

Notes:

- Close button on top right
- Click backdrop to close
- Max-width responsive with mx-4
- Never create nested modals

---

## Toast

Path:

```txt
components/ui/Toast.tsx
```

Status:

```txt
✅ Built
```

Purpose:

Temporary notification for success, error, warning, info messages.

Types:

- **success** — Green (operations completed)
- **error** — Red (operations failed)
- **warning** — Orange (cautions, limited stock)
- **info** — Blue (informational only)

Features:

- Auto-dismiss after 4s (configurable)
- Icon matching type
- Close button
- Optional action button (e.g., "Undo")

Styles:

```txt
rounded-lg px-4 py-3
text-white
shadow-lg
flex items-center gap-3
```

Usage:

```tsx
<Toast
  message="Order placed successfully!"
  type="success"
  duration={4000}
  onClose={() => {}}
/>
```

Notes:

- Position via toast container (floating, bottom-right)
- Multiple toasts can queue
- Never use for critical errors (use modal)
- Message should be concise

---

# Invariants

- Reuse before creating.
- Match existing spacing and typography.
- Do not duplicate components.
- Keep variants inside the same component.
- Register every new component after implementation.
- ui-rules.md and ui-tokens.md remain the source of truth.