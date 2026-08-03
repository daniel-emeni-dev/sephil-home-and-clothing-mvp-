type ShopHeroProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export function ShopHero({
  title = "Shop",
  description = "Explore carefully curated fashion, beauty, gadgets, home essentials and everyday products.",
  children,
}: ShopHeroProps) {

  return (
    <div className="mb-10">
  <p
    className="
      mb-2
      text-sm
      font-medium
      uppercase
      tracking-[0.18em]
      text-primary
    "
  >
    Boutique Collection
  </p>

  <h1
  className="
    text-4xl
    font-semibold
    tracking-tight
    text-text-primary
  "
>
  {title}
</h1>

  <p
  className="
    mt-4
    max-w-2xl
    leading-7
    text-text-secondary
  "
>
  {description}
</p>
      {children && (
        <div className="mt-8">
          {children}
        </div>
      )}
    </div>
  );
}