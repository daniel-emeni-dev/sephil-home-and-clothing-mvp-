import Link from "next/link";

import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function FeaturedProducts() {
  return (
    <Section>
      <Container>
        <div className="space-y-12">
          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-text-muted
                "
              >
                Featured Collection
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  text-text-primary
                  md:text-4xl
                "
              >
                Carefully Selected For You
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-base
                  leading-8
                  text-text-secondary
                "
              >
                Explore a curated collection of fashion,
                beauty, accessories and home essentials
                selected to bring timeless elegance into
                your everyday lifestyle.
              </p>
            </div>

            <Link href="/shop">
              <Button variant="secondary">
                View All Products
              </Button>
            </Link>
          </div>

          <ProductGrid />
        </div>
      </Container>
    </Section>
  );
}