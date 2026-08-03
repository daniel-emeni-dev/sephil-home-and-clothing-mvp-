export function ShopEmptyState() {
  return (
    <div
      className="
        flex
        min-h-[320px]
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-border
        bg-surface
        px-6
        text-center
      "
    >
      <h3
        className="
          text-xl
          font-semibold
          text-text-primary
        "
      >
        No products found
      </h3>

      <p
        className="
          mt-3
          max-w-md
          text-sm
          leading-6
          text-text-secondary
        "
      >
        We couldn't find any products matching your search.
        Try another keyword or browse our full collection.
      </p>
    </div>
  );
}