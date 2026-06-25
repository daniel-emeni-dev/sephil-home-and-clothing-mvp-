export function MobileMenu() {
  return (
    <button
      type="button"
      aria-label="Open menu"
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
        md:hidden
      "
    >
      <span className="text-lg text-text-primary">
        ☰
      </span>
    </button>
  );
}