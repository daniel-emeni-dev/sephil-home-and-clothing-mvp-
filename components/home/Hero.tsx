"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronRight,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Section
      className="
        relative
        overflow-hidden
        min-h-[560px]
        py-10
        md:min-h-[620px]
        md:py-14
        lg:min-h-[680px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/products/mix.png"
          alt="Sephil Home & Business Collections"
          fill
          priority
          sizes="100vw"
          onLoad={() => setImageLoaded(true)}
          className={`
            object-cover
            object-[65%_center]
            transition-all
            duration-1000
            ease-out
            ${imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}
          `}
        />

        {/* Gradient fade: solid over the text on the left, clear over the image on the right */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-surface/95
            via-surface/95
            to-transparent
            lg:from-surface
            lg:via-surface/70
            lg:to-transparent
          "
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          max-w-xl
        "
      >
        <Badge variant="featured">
          Boutique Collection
        </Badge>

        <h1
          className="
            mt-6
            text-3xl
            font-semibold
            leading-[1.05]
            tracking-tight
            text-text-primary
            md:text-4xl
            lg:text-5xl
          "
        >
          Curated Living
          <br />
          For Modern Homes
        </h1>

        <p
          className="
            mt-4
            max-w-lg
            text-sm
            leading-6
            text-text-secondary
            md:text-base
            md:leading-7
          "
        >
          Discover carefully selected fashion,
          home essentials, beauty products and
          everyday lifestyle pieces curated for
          beautiful living.
        </p>

                <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            sm:flex-row
          "
        >
          <Link href="/shop">
            <Button variant="primary">
    Shop Collection
</Button>

          </Link>

          <Link href="/categories">
            <Button variant="outline">
    Browse Categories
</Button>
          </Link>
        </div>

                <div
          className="
            mt-6
            grid
            gap-3
            text-xs
            text-text-secondary
            sm:grid-cols-3
            md:text-sm
          "
        >
          <div className="flex items-center gap-2">
            <Check
              size={16}
              className="text-primary"
            />

            Carefully Curated
          </div>

          <div className="flex items-center gap-2">
            <Check
              size={16}
              className="text-primary"
            />

            Nationwide Delivery
          </div>

          <div className="flex items-center gap-2">
            <Check
              size={16}
              className="text-primary"
            />

            Secure Checkout
          </div>
        </div>

      </div>
    </Section>
  );
}