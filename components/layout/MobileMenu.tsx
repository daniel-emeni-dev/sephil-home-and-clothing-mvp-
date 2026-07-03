import { Menu } from "lucide-react";

export function MobileMenu() {
  return (
    <button
      type="button"
      aria-label="Open menu"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        text-text-primary
        transition-colors
        duration-200
        hover:text-accent
        md:hidden
      "
    >
      <Menu
        size={20}
        strokeWidth={1.8}
      />
    </button>
  );
}