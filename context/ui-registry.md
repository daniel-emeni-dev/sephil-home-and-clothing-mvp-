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
3. Match spacing, typography, radius, and shadows.
4. If no component exists:
   - Follow ui-rules.md
   - Follow ui-tokens.md
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

- ⬜ Not Built
- 🟡 In Progress
- ✅ Built

---

# Layout Components

| Component | Path | Status |
|-----------|------|--------|
| Header | components/layout/Header.tsx | ✅ |
| Footer | components/layout/Footer.tsx | ✅ |
| MobileMenu | components/layout/MobileMenu.tsx | ⬜ |
| FloatingWhatsAppButton | components/layout/FloatingWhatsAppButton.tsx | ⬜ |

---

# Homepage Components

| Component | Path | Status |
|-----------|------|--------|
| Hero | components/home/Hero.tsx | ✅ |
| CategorySection | components/home/CategorySection.tsx | ✅ |
| FeaturedProducts | components/home/FeaturedProducts.tsx | ⬜ |
| PromotionalBanner | components/home/PromotionalBanner.tsx | ⬜ |
| Testimonials | components/home/Testimonials.tsx | ⬜ |

---

# Product Components

| Component | Path | Status |
|-----------|------|--------|
| ProductCard | components/product/ProductCard.tsx | ⬜ |
| ProductGrid | components/product/ProductGrid.tsx | ⬜ |
| ProductImageGallery | components/product/ProductImageGallery.tsx | ⬜ |
| ProductInfo | components/product/ProductInfo.tsx | ⬜ |
| RelatedProducts | components/product/RelatedProducts.tsx | ⬜ |

---

# Search Components

| Component | Path | Status |
|-----------|------|--------|
| SearchBar | components/search/SearchBar.tsx | ⬜ |
| SearchInput | components/search/SearchInput.tsx | ⬜ |
| SearchResults | components/search/SearchResults.tsx | ⬜ |

---

# Cart Components

| Component | Path | Status |
|-----------|------|--------|
| CartDrawer | components/cart/CartDrawer.tsx | ⬜ |
| CartItem | components/cart/CartItem.tsx | ⬜ |
| CartSummary | components/cart/CartSummary.tsx | ⬜ |
| QuantitySelector | components/cart/QuantitySelector.tsx | ⬜ |
| EmptyCart | components/cart/EmptyCart.tsx | ⬜ |

---

# Checkout Components

| Component | Path | Status |
|-----------|------|--------|
| CheckoutForm | components/checkout/CheckoutForm.tsx | ⬜ |
| OrderSummary | components/checkout/OrderSummary.tsx | ⬜ |
| PaymentInstructions | components/checkout/PaymentInstructions.tsx | ⬜ |
| WhatsAppCheckoutButton | components/checkout/WhatsAppCheckoutButton.tsx | ⬜ |

---

# Shared UI Components

| Component | Path | Status |
|-----------|------|--------|
| Button | components/ui/Button.tsx | ✅ |
| Input | components/ui/Input.tsx | ✅ |
| Textarea | components/ui/Textarea.tsx | ✅ |
| Badge | components/ui/Badge.tsx | ✅ |
| Container | components/ui/Container.tsx | ✅ |
| Section | components/ui/Section.tsx | ✅ |
| EmptyState | components/ui/EmptyState.tsx | ✅ |
| Modal | components/ui/Modal.tsx | ✅ |
| Toast | components/ui/Toast.tsx | ✅ |

---

# Admin Components

| Component | Path | Status |
|-----------|------|--------|
| AdminSidebar | components/admin/AdminSidebar.tsx | ⬜ |
| ProductTable | components/admin/ProductTable.tsx | ⬜ |
| ProductForm | components/admin/ProductForm.tsx | ⬜ |
| OrderTable | components/admin/OrderTable.tsx | ⬜ |
| OrderStatusBadge | components/admin/OrderStatusBadge.tsx | ⬜ |

---

# Shared Component Patterns

## Button

**Path**

components/ui/Button.tsx

**Status**

✅ Built

**Variants**

- primary
- secondary
- ghost
- whatsapp

---

## Badge

**Path**

components/ui/Badge.tsx

**Status**

✅ Built

**Variants**

- featured
- sale
- new
- success
- warning
- muted

---

## Container

**Path**

components/ui/Container.tsx

**Status**

✅ Built

**Purpose**

Provides consistent page width and horizontal padding.

---

## Section

**Path**

components/ui/Section.tsx

**Status**

✅ Built

**Purpose**

Provides consistent vertical spacing between page sections.

---

## Input

**Path**

components/ui/Input.tsx

**Status**

✅ Built

---

## Textarea

**Path**

components/ui/Textarea.tsx

**Status**

✅ Built

---

## EmptyState

**Path**

components/ui/EmptyState.tsx

**Status**

✅ Built

---

## Modal

**Path**

components/ui/Modal.tsx

**Status**

✅ Built

---

## Toast

**Path**

components/ui/Toast.tsx

**Status**

✅ Built

---

# Registry Rules

- Reuse components before creating new ones.
- Keep variants inside existing components where appropriate.
- Follow ui-rules.md and ui-tokens.md.
- Update this registry immediately after a component is added or modified.
- Keep paths synchronized with architecture.md.
- Remove deprecated entries rather than leaving duplicates.