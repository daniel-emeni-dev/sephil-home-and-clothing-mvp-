import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
};

export function CategoryCard({
  title,
  description,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        block
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div
        className="
          aspect-[4/3]
          bg-surface-secondary
          transition-colors
          duration-300
          group-hover:bg-surface-muted
        "
      />

      <div className="p-6">
        <h3
          className="
            text-lg
            font-semibold
            text-text-primary
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-text-secondary
          "
        >
          {description}
        </p>

        <span
          className="
            mt-5
            inline-flex
            items-center
            text-sm
            font-medium
            text-accent
          "
        >
          Shop Collection →
        </span>
      </div>
    </Link>
  );
}