import Link from "next/link";
import { FiFacebook, FiInstagram } from "react-icons/fi";

import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer
      className="
        border-t
        border-border
        bg-surface
      "
    >
      <Container>
        <div
          className="
            grid
            gap-10
            py-16
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          <div>
            <h3
              className="
                mb-4
                text-xl
                font-semibold
                text-text-primary
              "
            >
              Sephil
            </h3>

            <p
              className="
                text-sm
                leading-6
                text-text-secondary
              "
            >
              Curated fashion, home essentials,
              accessories, and lifestyle products
              thoughtfully selected for modern living.
            </p>
          </div>

          <div>
            <h4
              className="
                mb-4
                font-medium
                text-text-primary
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/shop"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="
                mb-4
                font-medium
                text-text-primary
              "
            >
              Contact
            </h4>

            <ul
              className="
                space-y-3
                text-sm
                text-text-secondary
              "
            >
              <li>support@sephil.com</li>
              <li>+234 XXX XXX XXXX</li>
              <li>Nigeria</li>
            </ul>
          </div>

          <div>
            <h4
              className="
      mb-4
      font-medium
      text-text-primary
    "
            >
              Follow Us
            </h4>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-border
        bg-surface
        text-text-secondary
        transition-colors
        hover:bg-surface-secondary
        hover:text-accent
      "
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-border
        bg-surface
        text-text-secondary
        transition-colors
        hover:bg-surface-secondary
        hover:text-accent
      "
              >
                <FiFacebook size={18} />
              </a>
            </div>
          </div>
        </div>
        <div
          className="
            border-t
            border-border
            py-6
            text-center
            text-sm
            text-text-muted
          "
        >
          © 2026 Sephil Home & Business.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
}