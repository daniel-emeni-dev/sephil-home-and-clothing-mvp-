import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function PromotionalBanner() {
  return (
    <Section>
      <Container>
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-surface-secondary
          "
        >
          <div
            className="
              grid
              gap-10
              px-6
              py-12
              md:px-10
              lg:grid-cols-2
              lg:items-center
              lg:px-14
              lg:py-16
            "
          >
            {/* Content */}
            <div className="max-w-xl">
              <Badge
                variant="sale"
                className="mb-5"
              >
                Limited Collection
              </Badge>

              <h2
                className="
                  text-3xl
                  font-semibold
                  leading-tight
                  text-text-primary
                  md:text-4xl
                "
              >
                Timeless pieces,
                <br />
                thoughtfully selected
                <br />
                for your home.
              </h2>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-base
                  leading-8
                  text-text-secondary
                "
              >
                Enjoy exclusive savings on selected
                fashion, beauty and home essentials,
                carefully chosen to bring elegance to
                your everyday lifestyle.
              </p>

              <div className="mt-8">
                <Link href="/shop">
                  <Button>
                    Explore Offers
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative Panel */}
            <div
              className="
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  w-full
                  max-w-md
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  p-8
                  shadow-sm
                "
              >
                <div
                  className="
                    aspect-[4/3]
                    rounded-xl
                    bg-background
                  "
                />

                <div className="mt-6 space-y-3">
                  <Badge variant="featured">
                    Boutique Offer
                  </Badge>

                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-text-primary
                    "
                  >
                    Curated Seasonal Collection
                  </h3>

                  <p
                    className="
                      text-sm
                      leading-7
                      text-text-secondary
                    "
                  >
                    Elegant fashion and premium home
                    essentials selected with timeless
                    craftsmanship in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}