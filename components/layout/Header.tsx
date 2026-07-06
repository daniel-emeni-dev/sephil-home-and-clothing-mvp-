"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

import { useCart } from "@/context/CartContext";

import { Container } from "@/components/ui/Container";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchBar } from "../search/SearchBar";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-border
        bg-surface
      "
    >
      <Container>
        <div
          className="
            flex
            h-16
            items-center
            justify-between
            lg:h-[72px]
          "
        >
          {/* ---------- Mobile Header ---------- */}
          <div
            className="
              flex
              w-full
              items-center
              justify-between
              lg:hidden
            "
          >
            {/* Logo */}
            <Link
              href="/"
              className="
                text-lg
                font-semibold
                tracking-tight
                text-text-primary
              "
            >
              Sephil
            </Link>

            {/* Right Icons */}
            <div className="flex items-center gap-2">
              <Link
                href="/search"
                aria-label="Search"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  text-text-primary
                  transition-colors
                  hover:bg-surface-secondary
                "
              >
                <Search
                  size={22}
                  strokeWidth={1.8}
                />
              </Link>

              {/* Cart */}
              <div className="relative shrink-0">
                <button
                  type="button"
                  aria-label="Cart"
                  onClick={() => setIsCartOpen(true)}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    text-text-primary
                    transition-colors
                    hover:bg-surface-secondary
                  "
                >
                  <ShoppingBag
                    size={22}
                    strokeWidth={1.8}
                  />
                </button>

                {cartCount > 0 && (
                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      z-50
                      flex
                      h-6
                      min-w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-primary
                      px-1
                      text-[10px]
                      font-semibold
                      leading-none
                      text-white
                    "
                  >
                    {cartCount}
                  </span>
                )}
              </div>

              <MobileMenu />
            </div>
          </div>

          {/* ---------- Desktop Header ---------- */}
          <div
            className="
              hidden
              w-full
              items-center
              justify-between
              gap-6
              lg:flex
            "
          >
            {/* Logo */}
            <Link
              href="/"
              className="
                whitespace-nowrap
                text-xl
                font-semibold
                text-text-primary
              "
            >
              Sephil
            </Link>

            {/* Search */}
            <div className="flex flex-1 justify-center">
              <SearchBar showResults />
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              <Link
                href="/"
                className="
                  text-sm
                  text-text-secondary
                  transition-colors
                  hover:text-text-primary
                "
              >
                Home
              </Link>

              <Link
                href="/shop"
                className="
                  text-sm
                  text-text-secondary
                  transition-colors
                  hover:text-text-primary
                "
              >
                Shop
              </Link>

              <Link
                href="/categories"
                className="
                  text-sm
                  text-text-secondary
                  transition-colors
                  hover:text-text-primary
                "
              >
                Categories
              </Link>

              <Link
                href="/about"
                className="
                  text-sm
                  text-text-secondary
                  transition-colors
                  hover:text-text-primary
                "
              >
                About
              </Link>

              <Link
                href="/contact"
                className="
                  text-sm
                  text-text-secondary
                  transition-colors
                  hover:text-text-primary
                "
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Cart */}
            <div className="relative">
              <button
                type="button"
                aria-label="Cart"
                onClick={() => setIsCartOpen(true)}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-border
                  bg-surface
                  transition-colors
                  duration-200
                  hover:bg-surface-secondary
                "
              >
                <ShoppingBag
                  size={22}
                  strokeWidth={1.8}
                />
              </button>

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    -top-2
                    -right-2
                    z-50
                    flex
                    h-6
                    min-w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-primary
                    px-1
                    text-[10px]
                    font-semibold
                    leading-none
                    text-white
                  "
                >
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </Container>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </header>
  );
}