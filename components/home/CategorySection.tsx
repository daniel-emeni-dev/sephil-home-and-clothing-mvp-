import { Container } from "@/components/ui/Container";
import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "Fashion",
    description:
      "Timeless clothing and accessories curated for everyday elegance.",
    image: "/images/products/handbag.jpg",
    href: "/shop?category=fashion",
  },
  {
    title: "Shoes",
    description:
      "Luxury footwear designed for comfort and everyday confidence.",
    image: "/images/products/sneakers.jpg",
    href: "/shop?category=shoes",
  },
  {
    title: "Home Essentials",
    description:
      "Beautiful pieces designed to make every space feel warm and inviting.",
    image: "/images/products/vase.jpg",
    href: "/shop?category=home-essentials",
  },
  {
    title: "Beauty",
    description:
      "Self-care products selected for quality, comfort, and confidence.",
    image: "/images/products/perfume.jpg",
    href: "/shop?category=beauty",
  },
  {
    title: "Accessories",
    description:
      "Complete every look with carefully selected finishing touches.",
    image: "/images/products/watch.jpg",
    href: "/shop?category=accessories",
  },
];

export function CategorySection() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.2em]
              text-text-muted
            "
          >
            Shop by Category
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-semibold
              text-text-primary
              md:text-4xl
            "
          >
            Curated Collections
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-7
              text-text-secondary
            "
          >
            Discover thoughtfully selected collections designed to bring style,
            comfort, and elegance into your everyday life.
          </p>
        </div>

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {categories.map((category) => (
            <CategoryCard
  key={category.title}
  title={category.title}
  description={category.description}
  image={category.image}
  href={category.href}
/>
          ))}
        </div>
      </Container>
    </section>
  );
}