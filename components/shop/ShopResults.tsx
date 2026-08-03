type ShopResultsProps = {
  totalProducts: number;
};

export function ShopResults({
  totalProducts,
}: ShopResultsProps) {
  return (
    <div
      className="
          mb-8
          flex
          items-center
          justify-between
          border-b
          border-border
          pb-4
     "
    >
      <p
        className="
          text-sm
          text-text-secondary
        "
      >
        Showing{" "}
        <span
          className="
            font-medium
            text-text-primary
          "
        >
          {totalProducts}
        </span>{" "}
        {totalProducts === 1
          ? "product"
          : "products"}
      </p>
    </div>
  );
}