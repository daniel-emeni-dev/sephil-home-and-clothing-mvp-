import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

import { CategoriesGrid } from "@/components/categories/CategoriesGrid";

import { getCategorySummaries } from "@/lib/data/products";

export default function CategoriesPage() {
  const categories = getCategorySummaries();

  return (
    <Section>
      <Container>
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
            Browse
          </p>

          <h1
            className="
              text-4xl
              font-semibold
              tracking-tight
              text-text-primary
            "
          >
            Categories
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-text-secondary
            "
          >
            Explore products by category and discover curated collections for every lifestyle.
          </p>
        </div>

        <CategoriesGrid
          categories={categories}
        />
      </Container>
    </Section>
  );
}