import { Search } from "lucide-react";

export function ShopHero() {
  return (
    <div className="mb-14">
      <h1
        className="
          text-4xl
          font-semibold
          tracking-tight
          text-text-primary
        "
      >
        Shop
      </h1>

      <p
        className="
          mt-4
          max-w-2xl
          text-base
          leading-7
          text-text-secondary
        "
      >
        Discover carefully selected fashion, beauty, home essentials,
        accessories, and more from our boutique collection.
      </p>

      {/* Search (UI only for now) */}
      <div className="mt-8 max-w-xl">
        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-border
            bg-surface
            px-4
            py-3
          "
        >
          <Search
            size={20}
            className="text-text-muted"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="
              w-full
              bg-transparent
              text-text-primary
              placeholder:text-text-muted
              outline-none
            "
          />
        </div>
      </div>
    </div>
  );
}