# Architecture

## Stack

| Layer | Tool | Purpose |
|---|---|---|
| Framework | Next.js 16 (App Router) | Full stack framework |
| Auth + DB + Storage | Supabase | Entire backend — auth, PostgreSQL, RLS, file storage |
| Styling | Tailwind CSS v4 + shadcn/ui | UI components and styling |
| Image CDN | Cloudinary | Product image storage, compression, responsive transforms |
| Transactional Email | Resend | Customer email confirmation + owner order notification |
| WhatsApp | wa.me click-to-chat | Pre-filled order message, customer sends manually |
| Cart State | Zustand | Client-side cart management for guest and logged-in users |
| Language | TypeScript | Throughout |
| Deployment | Vercel | Hosting and deploys |

---

## Next.js 16 — Changes That Affect This Project

| Change | Impact on Sephil |
|---|---|
| `middleware.ts` → `proxy.ts` | Route protection file renamed. Exported function is `proxy`, not `middleware` |
| `use cache` directive | Replaces ISR `revalidate` model. Caching is now explicit per component or page |
| `cacheLife` + `cacheTag` stable | `unstable_` prefix removed. Use `cacheLife()` and `cacheTag()` directly |
| `revalidateTag()` updated | Now requires a second argument — a `cacheLife` profile name |
| Turbopack default | Stable for dev and production. No webpack config needed. Faster builds out of the box |
| React Compiler stable | Auto-memoization opt-in via `reactCompiler: true` in `next.config.ts` — not enabled by default |
| `next lint` removed | Use ESLint directly. `next build` no longer runs linting |
| React 19.2 | Bundled. View Transitions, `useEffectEvent()`, `<Activity />` available |

---

## Folder Structure

```
/
├── context/
│   ├── project-overview.md
│   ├── architecture.md
│   ├── ui-tokens.md
│   ├── ui-rules.md
│   ├── ui-registry.md
│   ├── code-standards.md
│   ├── library-docs.md
│   ├── build-plan.md
│   └── progress-tracker.md
├── app/
│   ├── layout.tsx                          → Root layout, toast provider, Zustand provider
│   ├── page.tsx                            → Homepage
│   ├── (store)/
│   │   ├── shop/
│   │   │   ├── page.tsx                   → Full catalog, filterable by category
│   │   │   └── [category]/
│   │   │       └── page.tsx               → Category-filtered product grid
│   │   ├── product/
│   │   │   └── [id]/
│   │   │       └── page.tsx               → Product detail page
│   │   ├── cart/
│   │   │   └── page.tsx                   → Cart review
│   │   ├── checkout/
│   │   │   ├── page.tsx                   → Checkout form
│   │   │   └── payment/
│   │   │       └── page.tsx               → Bank transfer screen + wa.me link
│   │   ├── order-confirmation/
│   │   │   └── page.tsx                   → Post-order screen + optional account creation
│   │   └── contact/
│   │       └── page.tsx                   → WhatsApp link, Google Maps, shop info
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx                   → Login — email+password or Google OAuth
│   │   ├── register/
│   │   │   └── page.tsx                   → Account creation
│   │   └── callback/
│   │       └── route.ts                   → Supabase OAuth callback handler
│   ├── account/
│   │   ├── layout.tsx                     → Shared account sidebar nav
│   │   ├── profile/
│   │   │   └── page.tsx                   → Profile management
│   │   ├── orders/
│   │   │   └── page.tsx                   → Order history
│   │   ├── addresses/
│   │   │   └── page.tsx                   → Saved addresses
│   │   ├── wishlist/
│   │   │   └── page.tsx                   → Saved wishlist items
│   │   └── payments/
│   │       └── page.tsx                   → Payment records
│   ├── admin/
│   │   ├── layout.tsx                     → Admin layout, role guard
│   │   ├── page.tsx                       → Admin dashboard overview
│   │   ├── products/
│   │   │   ├── page.tsx                   → Product list + stock management
│   │   │   ├── new/
│   │   │   │   └── page.tsx               → Add new product
│   │   │   └── [id]/
│   │   │       └── page.tsx               → Edit product
│   │   └── orders/
│   │       └── page.tsx                   → Order inbox
│   └── api/
│       ├── orders/
│       │   ├── create/
│       │   │   └── route.ts               → Validate + save order, send confirmation email
│       │   └── confirm-email/
│       │       └── route.ts               → Verify token, finalize order, notify owner, build wa.me link
│       ├── wishlist/
│       │   └── route.ts                   → Add/remove wishlist items
│       └── upload/
│           └── route.ts                   → Admin product image upload to Cloudinary
├── actions/
│   ├── products.ts                        → Admin product CRUD (Server Actions)
│   ├── addresses.ts                       → Save, edit, delete customer addresses
│   ├── profile.ts                         → Update customer profile fields
│   └── orders.ts                          → Update order status (admin)
├── components/
│   ├── ui/                                → shadcn/ui base components only
│   ├── layout/
│   │   ├── Navbar.tsx                     → Responsive navbar, cart icon, WhatsApp icon
│   │   ├── HamburgerMenu.tsx              → Animated mobile slide-in menu
│   │   ├── Footer.tsx                     → Links, Maps button, social
│   │   └── WhatsAppPin.tsx                → Always-visible WhatsApp button
│   ├── home/
│   │   ├── HeroBanner.tsx                 → Rotating lookbook banner
│   │   ├── NewInRail.tsx                  → Horizontal scroll rail
│   │   ├── CategoryTiles.tsx              → Five category tiles
│   │   ├── ShopTheLook.tsx                → Curated outfit pairings
│   │   └── TrustStrip.tsx                 → WhatsApp + Google Maps buttons
│   ├── shop/
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx                → Image, name, price, sold-out badge
│   │   ├── CategoryFilter.tsx
│   │   └── SoldOutBadge.tsx
│   ├── product/
│   │   ├── ProductImages.tsx
│   │   ├── ProductInfo.tsx
│   │   ├── AddToCartButton.tsx
│   │   └── WishlistButton.tsx
│   ├── cart/
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── EmptyCart.tsx
│   ├── checkout/
│   │   ├── CheckoutForm.tsx
│   │   ├── EmailConfirmBanner.tsx         → Waiting-for-confirmation state
│   │   └── PaymentScreen.tsx              → Bank details, copy button, wa.me link, warning
│   ├── account/
│   │   ├── OrderHistoryList.tsx
│   │   ├── AddressBook.tsx
│   │   ├── WishlistGrid.tsx
│   │   └── PaymentRecords.tsx
│   ├── admin/
│   │   ├── ProductForm.tsx
│   │   ├── OrderInbox.tsx
│   │   └── StockToggle.tsx
│   └── ui-custom/
│       ├── Toast.tsx                      → Global toast system
│       ├── CopyButton.tsx                 → One-click copy (account number)
│       ├── SoldOutBadge.tsx
│       └── MapButton.tsx                  → Google Maps link button
├── lib/
│   ├── supabase/
│   │   ├── client.ts                      → Browser Supabase client
│   │   ├── server.ts                      → Server Supabase client (API routes + RSC)
│   │   └── proxy.ts                       → Session refresh helper used by proxy.ts (Next.js 16)
│   ├── resend/
│   │   ├── client.ts                      → Resend client init
│   │   └── templates/
│   │       ├── order-confirm-customer.tsx → Email to customer with confirm link
│   │       ├── owner-notification.tsx     → Order summary email to owner
│   │       └── welcome.tsx                → Post-account-creation welcome
│   ├── cloudinary/
│   │   └── client.ts                      → Upload + transform URL helpers
│   ├── whatsapp/
│   │   └── buildOrderLink.ts              → Builds wa.me URL with pre-filled order message
│   ├── cart/
│   │   └── cartStore.ts                   → Zustand cart store
│   └── utils/
│       ├── formatCurrency.ts              → Nigerian Naira (₦) formatting
│       ├── generateOrderNumber.ts         → SHC-YYYY-XXXX format
│       └── emailToken.ts                  → Generate + verify one-time email tokens
├── proxy.ts                               → Route protection for /account/* and /admin/* (Next.js 16)
├── next.config.ts                         → Next.js config (Turbopack default, no webpack needed)
├── .env.local
└── public/
    ├── logo.svg                           → Sephil brand logo
    └── og-image.png                       → Open Graph image
```

---

## System Boundaries

| Folder | Owns |
|---|---|
| `app/` | Pages and API routes only. No business logic. |
| `actions/` | Server Actions for UI-triggered mutations only — product CRUD, address management, profile updates, order status changes. |
| `components/` | UI only. No direct DB calls. No business logic. |
| `lib/` | Third-party client initialisation and shared utilities only. |
| `proxy.ts` | Route protection only. Nothing else. |

---

## Data Flow

### Order Creation (API Route)

```
Customer submits checkout form
        ↓
POST /api/orders/create
        ↓
Validate all fields (name, email, whatsapp, cart items, address)
        ↓
Generate order_number (SHC-YYYY-XXXX) + email_token
        ↓
Insert order row — email_confirmed: false
        ↓
Send confirmation email to customer via Resend
(contains: /api/orders/confirm-email?token=xxx)
        ↓
Return { orderId, message: 'Check your email to confirm your order' }
        ↓
Checkout page shows EmailConfirmBanner — waiting state
```

### Order Confirmation (API Route)

```
Customer clicks confirm link in email
        ↓
GET /api/orders/confirm-email?token=xxx
        ↓
Look up order by email_token
        ↓
Set email_confirmed: true, clear email_token
        ↓
Send owner notification email via Resend (full order details)
        ↓
Build wa.me URL with pre-filled order message
        ↓
Redirect → /order-confirmation?orderId=xxx&waLink=encodedURL
        ↓
Toast fires: "Order placed successfully"
Order confirmation page loads with wa.me button + account creation prompt
```

### UI Mutations (Server Actions)

```
User interaction in component
        ↓
Server Action in actions/
        ↓
Supabase DB write
        ↓
Revalidate path or redirect
        ↓
Toast fires on success or error
```

### Admin Product Update (Server Action)

```
Daniel edits product in admin area
        ↓
Server Action in actions/products.ts
        ↓
If new image — POST /api/upload → Cloudinary → returns URL
        ↓
Supabase products table updated
        ↓
cacheTag revalidated — /shop pages update on next request
```

---

## Supabase Database Schema

### `products`

| Column | Type | Notes |
|---|---|---|
| id | uuid | Primary key, gen_random_uuid() |
| name | text | |
| description | text | |
| category | text | 'clothing' / 'materials' / 'shoes' / 'slippers' / 'jewelry' |
| price | numeric(10,2) | In Nigerian Naira |
| images | text[] | Cloudinary URLs |
| sizes | text[] | Optional — e.g. ['S','M','L','XL'] |
| colors | text[] | Optional |
| in_stock | boolean | Default true. False = sold-out badge, add-to-cart disabled |
| featured | boolean | Default false. True = appears in hero + New In rail |
| created_at | timestamptz | |
| updated_at | timestamptz | |

### `orders`

| Column | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| order_number | text | Unique. SHC-YYYY-XXXX format |
| user_id | uuid | References auth.users — null for guest orders |
| customer_name | text | |
| customer_email | text | |
| customer_whatsapp | text | |
| delivery_address | text | |
| notes | text | Size, color, quantity details |
| items | jsonb | Snapshot of cart at time of order |
| total | numeric(10,2) | |
| status | text | 'pending' / 'confirmed' / 'fulfilled' |
| email_confirmed | boolean | Default false. Order not sent to owner until true |
| email_token | text | One-time token. Cleared after confirmation |
| created_at | timestamptz | |

### `profiles` (extends Supabase auth.users)

| Column | Type | Notes |
|---|---|---|
| id | uuid | References auth.users on delete cascade |
| full_name | text | |
| whatsapp | text | |
| avatar_url | text | |
| created_at | timestamptz | |

### `addresses`

| Column | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| user_id | uuid | References auth.users on delete cascade |
| label | text | e.g. 'Home', 'Office' |
| full_address | text | |
| is_default | boolean | Default false |
| created_at | timestamptz | |

### `wishlist_items`

| Column | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| user_id | uuid | References auth.users on delete cascade |
| product_id | uuid | References products on delete cascade |
| created_at | timestamptz | |
| | | Unique constraint on (user_id, product_id) |

### `payment_records`

| Column | Type | Notes |
|---|---|---|
| id | uuid | Primary key |
| order_id | uuid | References orders on delete cascade |
| user_id | uuid | References auth.users — null for guest |
| amount | numeric(10,2) | |
| transfer_date | timestamptz | |
| note | text | Customer-provided reference, optional |
| created_at | timestamptz | |

---

## Supabase Storage

| Bucket | Path | Contents |
|---|---|---|
| products | products/{product_id}/{filename} | Raw product images (before Cloudinary) |

Note: Cloudinary is the primary image CDN. Supabase Storage is a fallback upload stage only — images are pushed to Cloudinary from the upload API route and the Cloudinary URL is what gets stored in `products.images[]`.

---

## Authentication

- Provider: Supabase Auth
- Methods: Email + password, Google OAuth
- Protected routes: `/account/*`, `/admin/*`
- Public routes: everything else
- `proxy.ts` checks session on every request to protected routes (Next.js 16 — replaces `middleware.ts`)
- On login → redirect to homepage (or previous page)
- On logout → redirect to homepage
- Admin access: `role: 'admin'` set as custom claim in Supabase Auth metadata — set manually in Supabase dashboard, no self-serve admin registration

---

## Supabase Client Pattern

Two separate Supabase instances — never mix them:

```typescript
// lib/supabase/client.ts
// Browser-side — used in client components for auth state and cart sync
import { createBrowserClient } from '@supabase/ssr'
export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// lib/supabase/server.ts
// Server-side — used in API routes, Server Actions, RSC
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const createSupabaseServer = async () => {
  const cookieStore = await cookies()  // cookies() is async in Next.js 16 — always await
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        }
      }
    }
  )
}
```

---

## Proxy Pattern (Next.js 16)

`proxy.ts` replaces `middleware.ts`. The exported function is named `proxy`, not `middleware`.

```typescript
// proxy.ts — route protection for /account/* and /admin/*
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value)
            response.cookies.set(name, value, options)
          })
        }
      }
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  const isAccountRoute = request.nextUrl.pathname.startsWith('/account')
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')

  if (isAccountRoute && !user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isAdminRoute) {
    const role = user?.app_metadata?.role
    if (!user || role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return response
}

export const config = {
  matcher: ['/account/:path*', '/admin/:path*']
}
```

---

## Caching Pattern (Next.js 16)

Next.js 16 replaces the ISR `revalidate` export model with explicit `use cache` + `cacheLife()` + `cacheTag()`. The `unstable_` prefix on these APIs is removed.

```typescript
// Example — catalog page with explicit cache
import { cacheLife, cacheTag } from 'next/cache'

async function getProducts(category: string) {
  'use cache'
  cacheLife('hours')           // stale-while-revalidate profile
  cacheTag(`products-${category}`)  // tag for targeted invalidation

  const { data } = await createSupabaseServer()
    .from('products')
    .select('*')
    .eq('category', category)

  return data
}

// When admin updates a product, invalidate by tag:
import { revalidateTag } from 'next/cache'
revalidateTag('products-clothing')  // only clothing pages regenerate
```

---

## Cart Pattern (Zustand)

Cart lives entirely client-side for guest users. On account creation, localStorage cart is cleared.

```typescript
// lib/cart/cartStore.ts
interface CartItem {
  productId: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
  color?: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  total: () => number
}
```

---

## WhatsApp Message Pattern

Built server-side in `lib/whatsapp/buildOrderLink.ts`, URL-encoded and passed to the order confirmation page as a query param.

```
Hi Sephil! I just placed an order on your website.

Order No: SHC-YYYY-XXXX
Name: [Customer Name]
WhatsApp: [Customer WhatsApp]
Email: [Customer Email]

Items:
- [Item Name] x[Qty] — ₦[Price]
- [Item Name] x[Qty] — ₦[Price]

Total: ₦[Total]

Delivery: [Address or Pickup]
Notes: [Notes if any]

I will be making the bank transfer shortly.
```

---

## Rendering Strategy

Next.js 16 uses explicit `use cache` + `cacheLife` profiles instead of the old `revalidate` export. Pages tagged with `cacheTag` can be invalidated precisely when product data changes.

| Page | Strategy | Reason |
|---|---|---|
| `/` | `use cache` + `cacheLife('hours')` | Product data changes infrequently, SEO matters |
| `/shop`, `/shop/[category]` | `use cache` + `cacheLife('hours')` | Catalog changes occasionally, SEO matters |
| `/product/[id]` | `use cache` + `cacheLife('hours')` | Same as above |
| `/cart` | Client component | Cart state is local, no server render needed |
| `/checkout` | Client component | Form state, real-time validation |
| `/checkout/payment` | Client component | Dynamic wa.me link |
| `/order-confirmation` | Client component | Dynamic post-order state |
| `/account/*` | Server component + client islands | Session-dependent, per-user data |
| `/admin/*` | Server component + client islands | Admin data, role-protected |
| `/contact` | Static | Never changes |

---

## RLS Policies

```sql
-- Products: anyone can read, only admin can write
create policy "Public read products"
  on products for select using (true);

create policy "Admin write products"
  on products for all
  using (auth.jwt() ->> 'role' = 'admin');

-- Orders: guest access by email match, account access by user_id
create policy "Customer read own orders"
  on orders for select
  using (
    customer_email = auth.jwt() ->> 'email'
    or user_id = auth.uid()
  );

-- Wishlist: user sees and manages only their own
create policy "User wishlist"
  on wishlist_items for all
  using (user_id = auth.uid());

-- Addresses: user sees and manages only their own
create policy "User addresses"
  on addresses for all
  using (user_id = auth.uid());

-- Payment records: user sees only their own
create policy "User payment records"
  on payment_records for select
  using (user_id = auth.uid());
```

---

## Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Resend
RESEND_API_KEY=
RESEND_FROM_EMAIL=orders@sephil.ng
OWNER_EMAIL=                           # Receives order notification emails

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# WhatsApp
NEXT_PUBLIC_OWNER_WHATSAPP=            # International format e.g. 2348012345678

# App
NEXT_PUBLIC_SITE_URL=                  # https://sephil.vercel.app
```

---

## Third-Party Services

| Service | Purpose | Cost |
|---|---|---|
| Supabase | DB, Auth, RLS | Free tier |
| Vercel | Hosting + deploys | Free tier |
| Resend | Transactional email | Free up to 3,000 emails/month |
| Cloudinary | Image CDN + optimization | Free up to 25GB |
| Google OAuth | Social login | Free |
| wa.me | WhatsApp click-to-chat | Free, always |

**Total cost to run the pitch build: ₦0**

---

## Invariants

Rules that must never be violated:

- API routes contain no UI logic. Components contain no DB calls.
- Server Actions in `actions/` handle mutations only — no email sends, no external API calls beyond Supabase.
- All Supabase server-side reads and writes use `createSupabaseServer()` — never the browser client on the server.
- No hardcoded hex values or raw Tailwind color classes in components — use CSS variables from `ui-tokens.md`.
- Every order must have `email_confirmed: true` before the owner notification email fires. Never notify the owner of an unconfirmed order.
- The `items` column in `orders` is always a full snapshot of the cart at checkout time — never a reference to product IDs alone. Product data can change after the order is placed.
- Cart state lives in Zustand only. Never write cart data to Supabase during guest sessions.
- Always scope Supabase queries to the current `user_id` or `customer_email` — never query orders, addresses, wishlist, or payment records without a user filter.
- `in_stock: false` products must always appear in the catalog with a sold-out badge — never hidden. The add-to-cart button is disabled, not removed.
- The wa.me link is always built server-side in `lib/whatsapp/buildOrderLink.ts` — never constructed inline in a component.
- Admin role is set manually in Supabase Auth metadata only — never granted through any customer-facing flow.
- Route protection lives in `proxy.ts` only — never `middleware.ts`. The exported function is named `proxy`.
- `cookies()`, `headers()`, and route `params` are always awaited — they are async in Next.js 16. Never call them synchronously.
- Cache invalidation uses `revalidateTag()` with a tag name — never bare `revalidatePath()` for product catalog pages.
- Never use `unstable_cacheLife` or `unstable_cacheTag` — both are stable in Next.js 16 and the prefix is removed.