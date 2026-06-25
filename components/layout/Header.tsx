import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SearchBar } from "./SearchBar";
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
            h-[72px]
            items-center
            justify-between
            gap-4
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

          {/* Desktop Search */}
          <div className="hidden flex-1 justify-center md:flex">
            <SearchBar />
          </div>

          {/* Desktop Nav */}
          <nav
            className="
              hidden
              items-center
              gap-6
              lg:flex
            "
          >
            <Link
              href="/"
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              Shop
            </Link>

            <Link
              href="/categories"
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              Categories
            </Link>

            <Link
              href="/about"
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Cart */}
          <button
            type="button"
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
            "
            aria-label="Cart"
          >
            🛒
          </button>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}