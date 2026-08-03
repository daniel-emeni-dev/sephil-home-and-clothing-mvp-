import { ShopHero } from "@/components/shop/ShopHero";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getProducts } from "@/lib/data/products";

export default function ShopPage() {
  const products = getProducts();

  return (
    <Section>
      <Container>
        <ShopHero />

        <ProductGrid
          products={products}
        />
      </Container>
    </Section>
  );
}