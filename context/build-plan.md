# Build Plan

## Core Principle

Build every page visually first with mock data.

Verify layout, responsiveness, spacing, animations, and interactions before wiring any logic.

No backend-first development.

Every feature must be visible and testable before moving to the next.

Supabase integration comes after UI validation.

---

# Phase 1 — Foundation

## 01 Project Setup

### Setup

- Next.js 16
- TypeScript
- Tailwind CSS v4
- App Router
- Folder structure
- Theme tokens
- Poppins font
- Global styles
- Supabase setup
- Environment variables

### Requirements

- Light theme only
- Warm off-white boutique palette
- Premium minimal styling
- No dark mode

---

## 02 Shared Components

Build reusable UI components.

- Button
- Input
- Textarea
- Badge
- Container
- Section
- EmptyState
- Modal
- Toast
- QuantitySelector
- ProductImageGallery

Register every component in ui-registry.md.

---

## 03 Header

- Logo
- Search bar
- Cart icon
- Mobile menu

---

## 04 Footer

- Company information
- Contact details
- Quick links
- Social links
- Newsletter section

---

# Phase 2 — Homepage

## 05 Hero Section

Premium boutique hero with smooth animations.

## 06 Category Section

- Fashion
- Shoes
- Accessories
- Home Essentials
- Beauty

## 07 Featured Products

Product grid using mock products.

## 08 Promotional Banner

Luxury sale section with burgundy sale tags.

## 09 Testimonials

Customer reviews.

## 10 Homepage Complete

Responsive and animation validation.

---

# Phase 3 — Search & Browse

## 11 Search UI

- SearchBar
- SearchInput
- SearchResults

## 12 Search Functionality

- Case-insensitive search
- Debounced search
- Product name search
- Category search

Advanced filters postponed.

---

# Phase 4 — Products

## 13 Product Grid

Mock products.

## 14 Product Details

- Image gallery
- Product information
- Quantity selector
- Add to Cart
- Related products
- WhatsApp order button

## 15 Product Logic

- Quantity control
- Add to cart

---

# Phase 5 — Cart

## 16 Cart Drawer UI

Animated right-side drawer with overlay and body scroll lock.

## 17 Cart Logic

- Add item
- Remove item
- Quantity update
- Subtotal

## 18 Cart Page

Cart items, summary and empty state.

## 19 Cart Persistence

localStorage restore.

---

# Phase 6 — Checkout

## 20 Checkout UI

Customer info, order summary and bank transfer section.

## 21 Validation

React Hook Form + Zod.

## 22 Place Order

Create pending order in Supabase.

## 23 WhatsApp Order

Generate message and redirect to WhatsApp.

---

# Phase 7 — Admin Dashboard

## 24 Dashboard

## 25 Product Management

Add, edit and delete products.

## 26 Orders

Statuses:

- pending
- confirmed
- completed
- cancelled

---

# Phase 8 — Backend Integration

## 27 Supabase Database

Products, Orders, Order Items, Categories and Customers.

## 28 Product Fetching

Retrieve products from Supabase.

## 29 Orders Integration

Save and update orders.

## 30 Authentication

Future feature.

---

# Phase 9 — Extra Pages

31 About

32 Contact

33 FAQ

34 Delivery Information

---

# Phase 10 — Polish

35 Loading States

36 Empty States

37 Toast Notifications

38 Mobile Optimization

39 Performance

40 Final QA
