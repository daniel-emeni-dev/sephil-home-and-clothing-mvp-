"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const accountLinks = [
  {
    label: "Profile",
    href: "/account/profile",
  },
  {
    label: "Orders",
    href: "/account/orders",
  },
  {
    label: "Wishlist",
    href: "/account/wishlist",
  },
  {
    label: "Addresses",
    href: "/account/addresses",
  },
  {
    label: "Payments",
    href: "/account/payments",
  },
];

export function AccountNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Account Navigation"
      className="overflow-x-auto"
    >
      <ul
        className="
          flex
          min-w-max
          gap-3
          pb-1
        "
      >
        {accountLinks.map((link) => {
          const isActive =
            pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                  flex
                  items-center
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  whitespace-nowrap
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "border border-border bg-surface text-text-primary hover:bg-surface-secondary"
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}