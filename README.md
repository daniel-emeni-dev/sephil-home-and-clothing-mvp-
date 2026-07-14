# Sephil — Web Storefront

> A modern, boutique web storefront for an established Nigerian clothing and accessories retailer — built as a working pitch prototype to bring an offline business online.

---

## What Is This?

Sephil Home and Clothing is a real Nigerian retail shop selling women's clothing, sewing materials, shoes, slippers, and jewelry. Every sale today depends on a customer physically walking in or already knowing to message the owner on WhatsApp. There is no online presence, no catalog to browse from home, and no record of who ordered what.

This project changes that.

Sephil is a full-featured web storefront where customers browse the catalog, build a cart, and place an order in under three minutes — without the owner learning any new software. The moment an order is confirmed, a pre-formatted WhatsApp message routes straight to her phone and the order is logged in the database. She keeps doing what she already does well. The site handles the rest.

Built as a pitch — a working prototype she can click through and decide: *do I want this live?*

---

## Features

**Storefront**
- Advertising-first homepage — hero banner, "New In" rail, category tiles, outfit pairings
- Full product catalog filterable by category (Clothing, Materials, Shoes, Slippers, Jewelry)
- Sold-out items stay visible in the catalog with a badge — not silently removed
- Product pages with image gallery, size/color options, wishlist, and add-to-cart

**Cart & Checkout**
- Persistent cart with drawer UI — survives page refresh
- Guest checkout — no account required to place an order
- Three delivery options with dynamic total calculation (Pickup / City Dispatch / Interstate Waybill)
- Email OTP verification via Resend — 6-digit inline code, no tab switching, no magic links
- Bank transfer payment screen with one-click copy helpers

**Order Flow**
- Pre-filled WhatsApp message generated on order confirmation — customer just hits send
- Every order simultaneously saved to the database — no data lost if WhatsApp history clears
- Order confirmation page with optional post-order account creation
- Automated Supabase Edge Function purges unverified orders older than 24 hours

**Accounts**
- Optional customer accounts — created post-order using checkout data already entered
- Order history, saved addresses, wishlist, and payment records
- Protected account routes via middleware

**Admin**
- Product management — add, edit, delete, mark sold out
- Order inbox with statuses: Pending / Confirmed / Completed / Cancelled
- Searchable by customer email

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database & Auth | Supabase (PostgreSQL + RLS) |
| Email | Resend |
| Forms | React Hook Form + Zod |
| State | Zustand |
| Deployment | Vercel |

---

## Database Schema

```
products        — id, category, name, price, images, description, sizes[], colors[], stock_status
orders          — id, user_id?, email, whatsapp_number, items[], delivery_method, delivery_fee,
                  delivery_address, subtotal, grand_total, sender_account_name_input,
                  notes, status, email_verified, timestamp
users           — id, name, email, password_hash, whatsapp_number
wishlist_items  — id, user_id, product_id
addresses       — id, user_id, address_line, state, is_default
payment_records — id, order_id, user_id, amount, date, registered_transfer_name, reference_code
```

---

## Build Approach

UI is built and validated before any backend logic is wired.

Every page is built with mock data first — layout, responsiveness, spacing, animations, and interactions are confirmed working before Supabase is touched. No backend-first development.

**Build phases:**
1. Foundation — setup, shared components, header, footer
2. Homepage — hero, categories, featured products, promotions, testimonials
3. Search & Browse
4. Products — grid, detail pages, sold-out states, wishlist
5. Cart — drawer, logic, persistence
6. Checkout — form, OTP verification, order placement, confirmation page
7. Admin Dashboard
8. Backend Integration — Supabase, cron cleanup, authentication
9. Account Pages
10. Polish — loading states, empty states, toasts, mobile optimization, QA

---

## Project Status

Currently in active development. UI-first build in progress.

| Phase | Status |
|---|---|
| Foundation | ✅ Complete |
| Homepage | ✅ Complete |
| Search & Browse | ✅ Complete |
| Products | ✅ Complete |
| Cart | ✅ Complete |
| Checkout | 🔄 In Progress |
| Admin Dashboard | ⏳ Pending |
| Backend Integration | ⏳ Pending |
| Account Pages | ⏳ Pending |
| Polish & QA | ⏳ Pending |

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/daniel-emeni-dev/sephil.git
cd sephil

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Supabase URL, anon key, and Resend API key

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
```

---

## Scope

**In scope**
- Guest checkout with email OTP verification
- WhatsApp order routing with pre-formatted messages
- Full catalog with sold-out badge behavior
- Optional post-order account creation
- Admin product and order management
- Automated cleanup of unverified orders via Supabase cron

**Out of scope**
- Live payment gateway (Paystack, Flutterwave, etc.)
- Automated two-way WhatsApp sync (would require paid WhatsApp Business API)
- Bank screenshot uploads
- Customer-facing order status push notifications
- Public reviews or discount/coupon system

---

## Built By

**Daniel Emeni** — [@DoreBuild](https://x.com/DoreBuild) · [LinkedIn](https://linkedin.com/in/daniel-emeni) · [GitHub](https://github.com/daniel-emeni-dev)

Founder, DoreBuild — a digital solutions studio helping Nigerian small businesses build their web presence.
