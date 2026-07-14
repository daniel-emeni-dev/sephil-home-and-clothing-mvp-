# Sephil — Build Plan

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
- OtpInput ← NEW

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

- Sold-out items render with a "Sold Out" badge overlay on the product card ← NEW
- Sold-out items are not removed from the grid

## 14 Product Details

- Image gallery
- Product information
- Quantity selector
- Add to Cart
- Add to Wishlist button ← NEW
- Related products
- WhatsApp order button

## 15 Product Logic

- Quantity control
- Add to cart
- Disable add-to-cart and quantity selector for sold-out items ← NEW
- Wishlist toggle (add/remove) ← NEW

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

## 22 Email OTP Verification ← NEW

- On checkout form submission, send a 6-digit OTP to the customer's email via Resend
- Display an inline modal overlay on the same page — no tab switching, no redirect
- OtpInput component handles the 6-digit entry
- Order submission is blocked until OTP is verified
- Toast confirms successful verification
- Resend code option with cooldown timer

## 23 Place Order

- Create pending order in Supabase only after OTP is verified
- Order row includes `email_verified: true` flag

## 24 Order Confirmation Page ← NEW

- Dedicated `/order-confirmation` page
- Displays order number, items summary, grand total, and delivery method
- Shows bank transfer details with copy helpers
- Pre-filled WhatsApp message trigger button
- Optional account creation prompt: "Want to save your details for next time? Create a free account."
- Account creation uses pre-filled checkout data — customer only sets a password

## 25 WhatsApp Order

Generate message and redirect to WhatsApp.

---

# Phase 7 — Admin Dashboard

## 26 Dashboard

## 27 Product Management

- Add, edit and delete products
- Mark items as Sold Out / Back in Stock

## 28 Orders

Statuses:

- pending
- confirmed
- completed
- cancelled

---

# Phase 8 — Backend Integration

## 29 Supabase Database

Products, Orders, Order Items, Categories and Customers.

- Orders table includes `email_verified` boolean field

## 30 Product Fetching

Retrieve products from Supabase.

## 31 Orders Integration

Save and update orders.

## 32 Supabase Edge Function — Cron Cleanup ← NEW

- Edge Function runs on a cron schedule (every few hours)
- Deletes orders where `email_verified = false` and `created_at` is older than 24 hours
- Keeps the database clean without any manual intervention
- Prevents unverified ghost orders from appearing in the admin inbox or triggering WhatsApp noise

## 33 Authentication

- Email and password sign up and login
- Session persistence
- Protected account routes
- Post-order account creation flow using pre-filled checkout data

---

# Phase 9 — Extra Pages

## 34 Account Pages ← EXPANDED

- `/account/login`
- `/account/register`
- `/account/profile`
- `/account/orders` — order history with statuses
- `/account/addresses` — add, edit, remove saved addresses
- `/account/wishlist` — saved wishlist items with add-to-cart option ← NEW
- `/account/payments` — past payment records

## 35 About

## 36 Contact

## 37 FAQ

## 38 Delivery Information

---

# Phase 10 — Polish

## 39 Loading States

## 40 Empty States

## 41 Toast Notifications

- Item added to cart
- Item added to wishlist / removed from wishlist ← NEW
- OTP sent
- OTP verified
- Order placed
- Account created
- Address saved
- Errors

## 42 Mobile Optimization

## 43 Performance

## 44 Final QA
