import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="bg-background pt-20 pb-16 lg:pt-28 lg:pb-24">
      <Container>
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
          "
        >
          {/* Content */}
          <div className="max-w-lg">
            <Badge variant="featured">
              Boutique Collection
            </Badge>

            <h1
              className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                text-text-primary
                md:text-5xl
                lg:text-6xl
              "
            >
              Curated Living
              <br />
              For Modern Homes
            </h1>

            <p
              className="
                mt-6
                text-base
                leading-8
                text-text-secondary
                md:text-lg
              "
            >
              Discover carefully selected fashion,
              home essentials, beauty products,
              and lifestyle pieces designed to
              elevate everyday living.
            </p>

            <div className="mt-10">
              <Link href="/shop">
                <Button className="px-6 py-3 font-semibold">
                  Shop Collection
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Area */}
          <div
            className="
              relative
              flex
              flex-col
              gap-6
            "
          >
            <div
              className="
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
                  mb-6
                  aspect-[4/3]
                  rounded-xl
                  bg-surface-secondary
                "
              />

              <p
                className="
                  text-sm
                  text-text-muted
                "
              >
                Featured Product
              </p>

              <h3
                className="
                  mt-2
                  text-lg
                  font-semibold
                  text-text-primary
                "
              >
                Premium Handbag
              </h3>

              <p
                className="
                  mt-1
                  text-text-secondary
                "
              >
                Elegant design for everyday use.
              </p>
            </div>

            <div
              className="
                grid
                gap-4
                sm:grid-cols-2
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  p-5
                  shadow-sm
                "
              >
                <p
                  className="
                    text-sm
                    text-text-muted
                  "
                >
                  Home Decor
                </p>

                <h4
                  className="
                    mt-2
                    font-medium
                    text-text-primary
                  "
                >
                  Decorative Vase
                </h4>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  p-5
                  shadow-sm
                "
              >
                <p
                  className="
                    text-sm
                    text-text-muted
                  "
                >
                  Fashion
                </p>

                <h4
                  className="
                    mt-2
                    font-medium
                    text-text-primary
                  "
                >
                  Luxury Sneakers
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}