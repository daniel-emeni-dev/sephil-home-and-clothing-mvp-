# UI Registry

Living document.

Updated whenever a component is created or significantly refined.

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
| MobileMenu | components/layout/MobileMenu.tsx | ✅ |
| FloatingWhatsAppButton | components/layout/FloatingWhatsAppButton.tsx | ⬜ |

---

# Homepage Components

| Component | Path | Status |
|-----------|------|--------|
| Hero | components/home/Hero.tsx | ✅ |
| CategoryCard | components/home/CategoryCard.tsx | ✅ |
| CategorySection | components/home/CategorySection.tsx | ✅ |
| FeaturedProducts | components/home/FeaturedProducts.tsx | ✅ |
| PromotionalBanner | components/home/PromotionalBanner.tsx | ✅ |
| Testimonials | components/home/Testimonials.tsx | ✅ |

---

# Product Components

| Component | Path | Status |
|-----------|------|--------|
| ProductCard | components/product/ProductCard.tsx | ✅ |
| ProductGrid | components/product/ProductGrid.tsx | ✅ |
| ProductImageGallery | components/product/ProductImageGallery.tsx | ✅ |
| ProductInfo | components/product/ProductInfo.tsx | ✅ |
| RelatedProducts | components/product/RelatedProducts.tsx | ✅ |

---

# Search Components

| Component | Path | Status |
|-----------|------|--------|
| SearchBar | components/search/SearchBar.tsx | ✅ |
| SearchInput | components/search/SearchInput.tsx | ✅ |
| SearchResults | components/search/SearchResults.tsx | ✅ |

---

# Cart Components

| Component | Path | Status |
|-----------|------|--------|
| CartDrawer | components/cart/CartDrawer.tsx | ✅ |
| CartEmptyState | components/cart/CartEmptyState.tsx | ✅ |
| QuantitySelector | components/cart/QuantitySelector.tsx | ✅ |
| CartItem | components/cart/CartItem.tsx | ⬜ |
| CartSummary | components/cart/CartSummary.tsx | ⬜ |
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
| Providers | components/ui/Providers.tsx | ✅ |

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

## Header

**Path**

components/layout/Header.tsx

**Status**

✅ Built

**Purpose**

Sticky storefront header with navigation, brand presence, and a prominent WhatsApp call-to-action.

---

## Footer

**Path**

components/layout/Footer.tsx

**Status**

✅ Built

**Purpose**

Bottom-of-page information block for contact details, business info, and additional navigation.

---

## MobileMenu

**Path**

components/layout/MobileMenu.tsx

**Status**

✅ Built

**Purpose**

Compact mobile navigation drawer for the boutique storefront experience.

---

## Hero

**Path**

components/home/Hero.tsx

**Status**

✅ Built

**Purpose**

Primary landing section with strong brand messaging and main call-to-action.

---

## CategorySection

**Path**

components/home/CategorySection.tsx

**Status**

✅ Built

**Purpose**

Shows the key product categories on the homepage in a structured, visually balanced grid.

---

## FeaturedProducts

**Path**

components/home/FeaturedProducts.tsx

**Status**

✅ Built

**Purpose**

Highlights selected products for discovery and conversion on the homepage.

---

## PromotionalBanner

**Path**

components/home/PromotionalBanner.tsx

**Status**

✅ Built

**Purpose**

Used for short promotional messaging or seasonal offers.

---

## Testimonials

**Path**

components/home/Testimonials.tsx

**Status**

✅ Built

**Purpose**

Displays social proof and customer sentiment in a polished storefront format.

---

## ProductCard

**Path**

components/product/ProductCard.tsx

**Status**

✅ Built

**Purpose**

Reusable product teaser card for shop and collection pages with image, title, price, and action area.

---

## ProductGrid

**Path**

components/product/ProductGrid.tsx

**Status**

✅ Built

**Purpose**

Responsive layout for displaying collections of product cards with consistent spacing.

---

## ProductImageGallery

**Path**

components/product/ProductImageGallery.tsx

**Status**

✅ Built

**Purpose**

Image-focused gallery for product detail pages.

---

## ProductInfo

**Path**

components/product/ProductInfo.tsx

**Status**

✅ Built

**Purpose**

Shows product details, pricing, availability cues, and purchase actions on the product page.

---

## RelatedProducts

**Path**

components/product/RelatedProducts.tsx

**Status**

✅ Built

**Purpose**

Suggests similar products to support browsing and upsell behavior.

---

## SearchBar

**Path**

components/search/SearchBar.tsx

**Status**

✅ Built

**Purpose**

Primary search entry point for the storefront experience.

---

## SearchInput

**Path**

components/search/SearchInput.tsx

**Status**

✅ Built

**Purpose**

Reusable text input used for search interactions and filtering flows.

---

## SearchResults

**Path**

components/search/SearchResults.tsx

**Status**

✅ Built

**Purpose**

Displays search results and empty-state handling for the lookup experience.

---

## CartDrawer

**Path**

components/cart/CartDrawer.tsx

**Status**

✅ Built

**Purpose**

Main cart experience for reviewing selected items and moving to checkout.

---

## CartEmptyState

**Path**

components/cart/CartEmptyState.tsx

**Status**

✅ Built

**Purpose**

Empty-state experience for the cart flow.

---

## QuantitySelector

**Path**

components/cart/QuantitySelector.tsx

**Status**

✅ Built

**Purpose**

Reusable quantity adjustment control for cart and product actions.

---

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

## Providers

**Path**

components/ui/Providers.tsx

**Status**

✅ Built

**Purpose**

Wraps the app with shared client-side providers used by the storefront.

---

# Registry Rules

- Reuse components before creating new ones.
- Keep variants inside existing components where appropriate.
- Follow ui-rules.md and ui-tokens.md.
- Update this registry immediately after a component is added or modified.
- Keep paths synchronized with architecture.md.
- Remove deprecated entries rather than leaving duplicates.