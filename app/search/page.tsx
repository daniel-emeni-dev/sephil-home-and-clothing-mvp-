import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

import { SearchBar } from "@/components/search/SearchBar";

export default function SearchPage() {
  return (
    <main className="bg-background">
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <h1
                className="
                  text-3xl
                  font-semibold
                  text-text-primary
                "
              >
                Search Products
              </h1>

              <p
                className="
                  mt-2
                  text-text-secondary
                "
              >
                Find products by name or category.
              </p>
            </div>

            <SearchBar showResults />
          </div>
        </Container>
      </Section>
    </main>
  );
}