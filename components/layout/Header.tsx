import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SearchBar } from "../search/SearchBar";
import { MobileMenu } from "./MobileMenu";

export function Header() {
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
                href="./search"
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
                <Search size={22} strokeWidth={1.8} />
              </Link>

              <button
                type="button"
                aria-label="Cart"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  text-text-primary
                  transition-opacity
                  duration-200
                  hover:opacity-70
                "
              >
                <ShoppingBag
                  size={22}
                  strokeWidth={1.8}
                />
              </button>

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

            {/* Cart */}
            <button
              type="button"
              aria-label="Cart"
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
          </div>
        </div>
      </Container>
    </header>
  );
}