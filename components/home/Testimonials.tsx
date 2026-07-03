import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const testimonials = [
  {
    name: "Amaka O.",
    location: "Lagos",
    review:
      "The quality exceeded my expectations. Everything arrived beautifully packaged and looked exactly as pictured.",
  },
  {
    name: "Daniel A.",
    location: "Abuja",
    review:
      "Shopping was simple and the customer service felt very personal. I'll definitely be ordering again.",
  },
  {
    name: "Esther E.",
    location: "Port Harcourt",
    review:
      "I love how carefully the products are selected. The boutique feel really stands out from typical online stores.",
  },
];

export function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="featured">
            Customer Stories
          </Badge>

          <h2
            className="
              mt-5
              text-3xl
              font-semibold
              text-text-primary
              md:text-4xl
            "
          >
            Loved by customers across Nigeria
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-8
              text-text-secondary
            "
          >
            Every order is handled with care, from
            product selection to delivery. Here's
            what some of our customers have shared.
          </p>
        </div>

        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="
                rounded-2xl
                border
                border-border
                bg-surface
                p-6
                shadow-sm
              "
            >
              <p
                className="
                  text-base
                  leading-8
                  text-text-secondary
                "
              >
                "{testimonial.review}"
              </p>

              <div className="mt-8">
                <h3
                  className="
                    font-semibold
                    text-text-primary
                  "
                >
                  {testimonial.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-text-muted
                  "
                >
                  {testimonial.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}