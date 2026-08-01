import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export function CategoryCard({
  title,
  description,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        block
        overflow-hidden
        rounded-3xl
        bg-surface
      "
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/65
            via-black/10
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-6
            text-white
          "
        >
          <p className="text-sm opacity-80">
            Collection
          </p>

          <h3
            className="
              mt-2
              text-2xl
              font-semibold
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-white/80
            "
          >
            {description}
          </p>

          <span
            className="
              mt-5
              inline-flex
              items-center
              font-medium
            "
          >
            Shop Collection →
          </span>
        </div>
      </div>
    </Link>
  );
}