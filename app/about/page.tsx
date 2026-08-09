import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p
              className="
                mb-3
                text-sm
                font-medium
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              Our Story
            </p>

            <h1
              className="
                text-4xl
                font-semibold
                tracking-tight
                text-text-primary
                md:text-5xl
              "
            >
              About Sephil
            </h1>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-text-secondary
              "
            >
              Sephil is built on carefully chosen clothing and accessories,
              trusted quality, and the belief that every customer deserves the
              same thoughtful experience whether it is their first order or
              their fiftieth.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-secondary">
        <Container>
          <div className="max-w-3xl space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-text-primary">
                How Sephil Started
              </h2>

              <p className="mt-4 leading-8 text-text-secondary">
                Sephil began small, the way most things worth trusting do. What
                started as a modest clothing and accessories offering grew piece
                by piece, customer by customer, built on nothing fancier than
                good product and keeping our word.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-text-primary">
                What We Stand For
              </h2>

              <p className="mt-4 leading-8 text-text-secondary">
                Sephil stands for quality you can feel and trust you can rely
                on. We believe clothing and accessories should feel as good as
                they look, and that every customer deserves the same care
                whether it is their first order or their fiftieth.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-text-primary">
                Five Years of Trust
              </h2>

              <p className="mt-4 leading-8 text-text-secondary">
                For over 5 years, Sephil has been serving customers with
                clothing and accessories chosen with care. Five years of showing
                up, getting it right, and earning trust one order at a time.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-text-primary">
                What Makes Sephil Different
              </h2>

              <p className="mt-4 leading-8 text-text-secondary">
                We did not grow fast, we grew right. Every piece we carry is
                chosen because it holds up, not because it is trending. That
                patience is what has kept customers coming back for years, and
                it is what will keep them coming back for years more.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-text-primary">
                The Story Behind Sephil
              </h2>

              <p className="mt-4 leading-8 text-text-secondary">
                Sephil was not built overnight. It was built slowly,
                deliberately, on the belief that if you take care of quality and
                take care of people, the business takes care of itself. Five
                years in, that belief has not changed. It is still what Sephil
                stands on today.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div
            className="
              rounded-3xl
              border
              border-border
              bg-surface
              p-8
              text-center
              md:p-12
            "
          >
            <h2 className="text-2xl font-semibold text-text-primary">
              Ready to find something you love?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-text-secondary">
              Explore Sephil&apos;s carefully curated collection or chat with us
              directly on WhatsApp if you have a question before ordering.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:justify-center
              "
            >
              <Link href="/shop">
                <Button className="w-full sm:w-auto">
                  Shop Now
                </Button>
              </Link>

              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}