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
| Button | components/shared/button | ⬜ |
| Input | components/shared/input | ⬜ |
| Textarea | components/shared/textarea | ⬜ |
| Badge | components/shared/badge | ⬜ |
| Modal | components/shared/modal | ⬜ |
| Toast | components/shared/toast | ⬜ |
| Skeleton | components/shared/skeleton | ⬜ |
| EmptyState | components/shared/empty-state | ⬜ |

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

No components have been built yet.

Entries will be added after implementation.

Example:

---

## ProductCard

Path:

```txt
components/products/product-card.tsx
```

Status:

```txt
✅ Built
```

Styles:

```txt
bg-surface
rounded-2xl
border-border
shadow-soft
p-5
```

Notes:

- Product image uses rounded-xl.
- Title limited to two lines.
- Price always appears below title.
- Equal card heights inside grids.

---

# Invariants

- Reuse before creating.
- Match existing spacing and typography.
- Do not duplicate components.
- Keep variants inside the same component.
- Register every new component after implementation.
- ui-rules.md and ui-tokens.md remain the source of truth.