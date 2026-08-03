import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type CategoryCardProps = {
  name: string;
  image: string;
};

export function CategoryCard({
  name,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={`/shop?category=${encodeURIComponent(name)}`}
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 25vw"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div
        className="
          flex
          items-center
          justify-between
          p-5
        "
      >
        <h2
          className="
            text-lg
            font-semibold
            text-text-primary
          "
        >
          {name}
        </h2>

        <ChevronRight
          size={20}
          className="
            text-text-muted
            transition-transform
            duration-200
            group-hover:translate-x-1
          "
        />
      </div>
    </Link>
  );
}