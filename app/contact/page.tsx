import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
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
              Get in Touch
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
              Contact Sephil
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-text-secondary
              "
            >
              Have a question about a product, your order, or anything
              else? We&apos;re here to help.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact options */}
      <Section className="bg-surface-secondary">
        <Container>
          <div
            className="
              grid
              gap-6
              lg:grid-cols-2
            "
          >
            {/* WhatsApp */}
            <div
              className="
                rounded-3xl
                border
                border-border
                bg-surface
                p-8
                md:p-10
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#25D366]/10
                  text-[#25D366]
                "
              >
                <span
                  className="
                    text-xl
                    font-semibold
                  "
                >
                  W
                </span>
              </div>

              <h2
                className="
                  mt-6
                  text-2xl
                  font-semibold
                  text-text-primary
                "
              >
                Chat with us
              </h2>

              <p
                className="
                  mt-3
                  max-w-md
                  leading-7
                  text-text-secondary
                "
              >
                WhatsApp is the easiest way to reach Sephil. Ask about
                products, availability, orders, or anything you need
                help with.
              </p>

              <WhatsAppButton
                className="mt-8"
                message="Hello Sephil, I'd like to make an enquiry."
              />
            </div>

            {/* Location */}
            <div
              className="
                rounded-3xl
                border
                border-border
                bg-surface
                p-8
                md:p-10
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-surface-secondary
                  text-text-primary
                "
              >
                <span
                  className="
                    text-lg
                    font-semibold
                  "
                >
                  ↗
                </span>
              </div>

              <h2
                className="
                  mt-6
                  text-2xl
                  font-semibold
                  text-text-primary
                "
              >
                Find our shop
              </h2>

              <p
                className="
                  mt-3
                  leading-7
                  text-text-secondary
                "
              >
                Visit the Sephil shop in person. Our physical shop
                location will be added here before launch.
              </p>

              <div
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  p-4
                "
              >
                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-text-muted
                  "
                >
                  Shop Address
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-text-secondary
                  "
                >
                  Address to be added
                </p>
              </div>

              <Button
                type="button"
                variant="secondary"
                className="mt-6 w-full sm:w-auto"
                disabled
              >
                Find Us on Google Maps
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Help section */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="
                text-sm
                font-medium
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              We&apos;re Here to Help
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-tight
                text-text-primary
              "
            >
              Need help before you order?
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                leading-7
                text-text-secondary
              "
            >
              If you have questions about a product or need help
              deciding what to order, reach out to us directly on
              WhatsApp.
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
              <WhatsAppButton />

              <Link href="/shop">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Browse the Collection
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}