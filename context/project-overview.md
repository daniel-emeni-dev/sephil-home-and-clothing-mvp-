# Project Overview

## About the Project

Sephil is a web storefront for Sephil Home and Clothing, an established Nigerian retailer selling women's clothing, sewing materials, female shoes, slippers, and jewelry. The business currently runs entirely offline with no web presence. This project gives it one: a clean, modern catalog where customers browse products, build a cart, and place orders — paying via direct bank transfer, with every order landing instantly in the owner's WhatsApp as a formatted message, and simultaneously logged in a website inbox tied to the customer's email.

Customers can check out as a guest or create an account after their first order for returning benefits like order history, saved addresses, wishlists, and payment records.

The site is being built as a pitch — a working prototype to show the owner what's possible, so she can decide whether to bring it live. A five-minute look at a real, working version sells the idea better than any explanation could.

---

## The Problem It Solves

Right now, every sale at Sephil depends on someone physically walking into the shop or knowing to message the owner directly. There is no way to browse what is in stock from home, no way to discover the business online, and no record of who ordered what or when. Word of mouth is the entire marketing engine.

Sephil removes that ceiling. Customers can browse the full catalog anytime, build a cart, and place an order in under two minutes — without the owner having to learn any new software. She keeps doing exactly what she already does well: replying to customers on WhatsApp. The website makes sure the right message reaches her, formatted clearly, the moment an order is placed — and quietly keeps a record of it even if WhatsApp chat history gets lost or her phone changes.

---

## Pages

```
/                    → Homepage (storefront, advertising-first)
/shop                → Full catalog, filterable by category
/shop/[category]     → Clothing / Materials / Shoes / Slippers / Jewelry
/product/[id]        → Single product page + add to cart
/cart                → Cart review before checkout
/checkout            → Order form (contact info, delivery, payment)
/checkout/payment    → Bank transfer payment screen
/order-confirmation  → Confirmation screen + optional account creation prompt
/contact             → Direct WhatsApp chat link, shop location (Google Maps), shop info
/account/login       → Login page
/account/register    → Account creation page
/account/profile     → Profile management
/account/orders      → Order history
/account/addresses   → Saved addresses
/account/wishlist    → Saved wishlist items
/account/payments    → Payment records
/admin               → Owner product and order management (Daniel-operated for now)
```

---

## Navigation

Top navbar. Clean, boutique feel — modern and light. Fully responsive across all screen sizes.

**Desktop:**
```
Logo    Shop    Categories    Contact    [Wishlist icon]    [Cart icon]    [Account icon]    [WhatsApp icon]
```

**Mobile:**
Hamburger menu icon replaces the nav links. Clicking it opens an animated slide-in or dropdown menu containing all navigation items. Cart icon, WhatsApp icon, and the hamburger button remain visible in the mobile navbar at all times.

The WhatsApp icon stays pinned in the navbar across every page and screen size — direct chat is a first-class path to a sale, not a fallback.

No sidebar on the main site. No sidebar on any customer page.

---

## Design

**Theme:** Modern, clean, light. White and off-white backgrounds, clear typographic hierarchy, generous spacing. The site should feel like a boutique brand, not a generic marketplace.

**Responsiveness:** Every page and component is fully responsive. The layout adapts from desktop to tablet to mobile without breaking. The hamburger menu handles navigation on smaller screens with a smooth open/close animation.

**Toast Notifications:** Toast notifications appear for all confirmations and system feedback throughout the site — items added to cart, order submitted, email confirmed, account created, wishlist updated, address saved, errors, and anything else requiring acknowledgment. No silent operations.

**Branding:** The owner has an existing logo. Brand colors and logo assets will be supplied and applied before the final build. Visual identity is not being designed from scratch — it will follow the real Sephil brand.

---

## Core User Flow

### Homepage — The Advertising Layer

This is the heart of the site, and it is built to sell clothing first. Structure:

- Full-bleed hero banner with rotating featured pieces — styled like a lookbook, not a grid of thumbnails
- "New In" rail — most recently added clothing items, horizontally scrollable
- Category tiles — Clothing (large, dominant), Materials, Shoes, Slippers, Jewelry (smaller, supporting)
- "Shop the Look" style cards — curated outfit pairings (e.g. dress + matching jewelry) to encourage multi-item orders
- Trust strip — short line about the business (copy from owner) + WhatsApp button + "Find Us on Google Maps" button
- Footer — shop info, WhatsApp link, Google Maps link, social links if available

No login wall, no popups. The homepage's only job is to make someone want to click into a product within ten seconds.

### Browsing

- User clicks a category tile or an item in the "New In" rail
- Product grid loads — image-forward, price visible, no clutter
- Clicking a product opens the detail page: photos, price, available sizes and colors if applicable, short description, "Add to Cart" button, "Add to Wishlist" button (for logged-in users)

### Cart

- User adds one or more products across any category
- Cart icon in navbar updates with item count
- Cart page shows: product thumbnails, names, quantities, prices, order subtotal
- User can adjust quantities or remove items from cart
- "Proceed to Checkout" button leads to the checkout form

### Checkout — Contact and Delivery

- No login required to check out
- Checkout form collects:
  - Full name
  - Email address — **required**
  - WhatsApp number — **required**
  - Delivery address or pickup preference
  - Order notes (size, color, quantity details if not captured by variants)
- After submitting the form, the customer receives a confirmation email to the address they entered — they must confirm it before the order is finalized
- Toast notification fires on email confirmation success
- Once confirmed, the order is finalized and the customer proceeds to the payment screen

### Email Confirmation

- After checkout form submission, a confirmation email is sent to the customer's email address
- The email contains a confirmation link or code
- Customer must confirm their email before the order is locked in and sent to the owner's WhatsApp
- This keeps the order inbox clean and ensures the owner only receives real, intentional orders
- Toast notification fires once confirmation is successful: "Email confirmed. Your order has been sent."

### Paying — Bank Transfer

- After email confirmation, the customer lands on a dedicated, clearly designed payment screen:
  - Bank name
  - Account number — with a one-click copy button
  - Account name — placeholder for now, to be filled with the real account name before launch
  - Plain-language instructions: transfer the order total, then message on WhatsApp to confirm payment
  - A visible warning notice: the account the transfer is sent **from** should ideally match the full name entered at checkout — this helps the owner confirm payments quickly and avoids confusion when matching transfers to orders
  - No payment proof upload in this version
- The screen is designed to feel calm and legitimate: no rushed language, no countdown timers, clear typography — money is involved and the tone must earn trust on sight

### Order Submission

- Once the customer confirms their email, the order is sent:
  - A formatted order message lands instantly in the owner's WhatsApp (customer name, contact info, WhatsApp number, items ordered, delivery details)
  - The same order is saved to the website inbox and associated with the customer's email
  - The order confirmation screen loads

### Order Confirmation Screen

- Confirms what was ordered and what happens next
- Displays a prompt: "Want to save your details for next time? Create a free account." with a simple sign-up form (name, email already pre-filled from checkout, just needs a password)
- Customer can dismiss this and leave — account creation is completely optional
- Toast notification fires: "Order placed successfully."

### Optional Account Creation (Post-Order)

- Prompted only after a completed order — never before checkout
- Pre-fills name and email from the order just placed
- Customer sets a password and account is created
- No friction added to the ordering flow itself

### Logged-In Customer Features

When a customer creates an account and logs in, they get access to:

**Order History** — a chronological list of every order they have placed, with items, totals, dates, and status

**Saved Addresses** — stored delivery addresses so returning customers do not re-enter them at checkout; customer can add, edit, or delete addresses

**Profile Page** — name, email, WhatsApp number; customer can update any field

**Wishlist** — products saved from any product detail page; items can be moved to cart or removed

**Payment Records** — a log of every bank transfer associated with their orders, with dates and amounts for reference

### Replying — How the Owner Responds

- The owner receives each order as a normal WhatsApp message and replies to the customer directly in WhatsApp — no new app, no new workflow
- Every order is also stored in the website inbox as a permanent record, searchable by customer email
- There is no automatic two-way sync between WhatsApp replies and the website inbox — that would require WhatsApp's paid Business API. This version keeps the system free to run and within the owner's existing habits.

### Talking to the Owner Directly (Customer Service Path)

- Any visitor can click the pinned WhatsApp button to ask a question, request a custom size, or check stock availability before ordering
- This runs parallel to the ordering flow — both are always available on every page

### Finding the Shop

- A "Find Us on Google Maps" button appears on the homepage trust strip, the contact page, and the footer
- Clicking it opens the shop's actual location in Google Maps in a new tab
- Physical address is a placeholder for the prototype and will be updated before launch

### Admin Area (Daniel-operated for now)

- Product management: add, edit, mark sold out, remove items, organize by category
- Order inbox: every order placed on the site, searchable by customer email, with status (new / contacted / fulfilled)
- Built so the owner could run it herself eventually, but Daniel manages it directly for now

---

## Data Architecture

### Product Data

- Lives in a `products` table — category, name, price, images, description, available sizes and colors, stock status
- Edited only through the admin area
- Never modified by any customer-facing action

### Cart Data

- Lives client-side (localStorage or session) for guest users
- Merged into the user's account cart on login if an account exists
- Not persisted in the database until checkout is submitted

### Order Data

- Lives in an `orders` table — linked to customer email and optionally to a user account, includes WhatsApp number, items ordered, delivery info, notes, timestamp, and status
- Created once, on checkout submission after email confirmation
- Permanent record, independent of WhatsApp conversation history

### Customer Account Data

- Lives in a `users` table — name, email, hashed password, WhatsApp number
- Linked to `orders`, `addresses`, `wishlist`, and `payment_records` tables
- Created only after a completed guest order, by customer choice

### Wishlist Data

- Lives in a `wishlist_items` table — linked to user account, references product IDs

### Saved Addresses

- Lives in an `addresses` table — linked to user account, supports multiple saved addresses per customer

### Payment Records

- Lives in a `payment_records` table — linked to order and user account, stores amount, date, and bank transfer reference if provided

---

## Features In Scope

- Advertising-first homepage — hero/lookbook banner, New In rail, category tiles, shop-the-look pairings
- Full catalog across five categories: Clothing, Materials, Shoes, Slippers, Jewelry
- Product detail pages with add-to-cart and add-to-wishlist
- Multi-item cart with quantity adjustment and item removal
- Fully responsive layout across desktop, tablet, and mobile
- Animated hamburger menu for mobile navigation
- Guest checkout — no login required
- Checkout requires both email address and WhatsApp number
- Email confirmation step after checkout form submission — order only finalizes after email is confirmed
- Toast notifications for all confirmations and system feedback throughout the site
- Instant formatted order notification to owner's WhatsApp on order finalization
- Parallel website inbox logging every order against customer email
- Pinned WhatsApp button across all pages for direct customer service chat
- "Find Us on Google Maps" button (homepage, contact page, footer)
- Bank transfer payment screen — account details, one-click copy, name-matching warning, trust-focused design
- Order confirmation screen with optional post-order account creation prompt
- Customer accounts — order history, saved addresses, profile page, wishlist, payment records
- Admin area for product management and order inbox

---

## Features Out of Scope

- Forced account creation before or during checkout
- Two-way WhatsApp to website sync (requires WhatsApp Business API)
- Payment proof or screenshot upload
- Card or online payment gateway (bank transfer only for now)
- Automated order status updates pushed back to customer after placement
- Reviews or ratings
- Discount codes or promotions engine
- Multi-vendor or multi-branch support
- Owner self-service onboarding (admin is Daniel-operated for now)
- Mobile app (this is a web application)
- Email marketing or newsletter system

---

## Target User

Two distinct users, both important:

**The Customer** — a woman browsing for clothing, materials, shoes, or jewelry on desktop or mobile browser, who wants to see what is available without visiting the shop, and who is comfortable paying by bank transfer and chatting on WhatsApp — both familiar habits in this market.

**The Owner (Sephil)** — not a tech user. The system has to work without asking her to learn anything new. Her job stays exactly the same: read WhatsApp, reply to customers. The website does everything else quietly in the background.

---

## Success Criteria

- A customer can land on the homepage and understand what the shop sells within seconds
- A customer can browse, build a cart, confirm their email, and complete an order in under three minutes
- The order arrives on the owner's WhatsApp instantly, formatted clearly enough to understand without explanation
- Every order is retrievable from the website inbox by customer email
- The bank transfer screen feels trustworthy enough that a first-time visitor is comfortable sending money
- The email confirmation step prevents fake or accidental orders from reaching the owner
- Toast notifications make every action feel acknowledged and responsive
- The site is fully usable on mobile, including the hamburger menu, cart, and checkout
- Logged-in customers can view their full order history, manage addresses, and maintain a wishlist
- The admin area lets product updates happen fast enough that the catalog never feels stale
- The finished prototype is strong enough on its own to convince the business owner to say yes

---

## Open Questions (to resolve before or during build)

- What is the shop's actual physical address, for the Google Maps button?
- What is the real bank account name and number, for the payment screen?
- What logo files and brand color values does the owner have available?
- Should out-of-stock products still appear in the catalog (greyed out / "sold out" badge), or be hidden entirely?