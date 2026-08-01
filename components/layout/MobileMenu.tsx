import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);

  return (
  <>
    <button
      type="button"
      aria-label="Open menu"
      onClick={() => setIsOpen(true)}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        text-text-primary
        transition-colors
        duration-200
        hover:bg-surface-secondary
        lg:hidden
      "
    >
      <Menu
        size={22}
        strokeWidth={1.8}
      />
    </button>

    {isOpen && (
      <>
      </>
    )}
  </>
);
}