import { ProductGrid } from "@/components/product/ProductGrid";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function ShopPage() {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <h1
            className="
              text-4xl
              font-bold
              text-text-primary
            "
          >
            Shop
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              text-text-secondary
            "
          >
            Discover carefully selected fashion, beauty, home essentials,
            accessories, and more from our boutique collection.
          </p>
        </div>

        <ProductGrid />
      </Container>
    </Section>
  );
}