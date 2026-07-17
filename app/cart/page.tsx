"use client";

import Link from "next/link";
import Image from "next/image";

import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { Trash2, Minus, Plus } from "lucide-react";


import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

import { CartEmptyState } from "@/components/cart/CartEmptyState";

export default function CartPage() {
    const {
        items,
        subtotal,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();
    return (
        <Container>
            <div className="py-10 lg:py-14">
                {/* Header */}
                <div
                    className="
            mb-10
            flex
            flex-col
            gap-4
            md:flex-row
            md:items-center
            md:justify-between
          "
                >
                    <div>
                        <h1
                            className="
                text-3xl
                font-semibold
                text-text-primary
              "
                        >
                            Shopping Cart
                        </h1>

                        <p
                            className="
                mt-2
                text-text-secondary
              "
                        >
                            Review your items before checkout.
                        </p>
                    </div>

                    <Link href="/shop">
                        <Button variant="secondary">
                            Continue Shopping
                        </Button>
                    </Link>
                </div>

                {/* Empty State */}
                {items.length === 0 ? (
                    <CartEmptyState
                        onContinueShopping={() => { }}
                    />
                ) : (
                    <div
                        className="
              grid
              gap-8
              lg:grid-cols-[2fr_1fr]
            "
                    >
                        {/* Cart Items Placeholder */}
                        <section
                            className="
                rounded-xl
                border
                border-border
                bg-surface
                p-6
              "
                        >
                            <h2
                                className="
                  mb-6
                  text-xl
                  font-semibold
                  text-text-primary
                "
                            >
                                Cart Items
                            </h2>

                            <div className="space-y-5">
                                {items.map((item) => (
                                    <div
                                        key={item.product.id}
                                        className="
        flex
        gap-5
        rounded-xl
        border
        border-border
        p-5
      "
                                    >
                                        {/* Product Image */}
                                        <Image
                                            src={item.product.image}
                                            alt={item.product.name}
                                            width={112}
                                            height={112}
                                            className="
    h-28
    w-28
    rounded-lg
    border
    border-border
    object-cover
  "
                                        />

                                        {/* Product Info */}
                                        <div className="flex flex-1 flex-col justify-between">
                                            <div>
                                                <h3
                                                    className="
              text-lg
              font-semibold
              text-text-primary
            "
                                                >
                                                    {item.product.name}
                                                </h3>

                                                <p
                                                    className="
              mt-1
              text-text-secondary
            "
                                                >
                                                    {item.product.category}
                                                </p>

                                                <p
                                                    className="
              mt-2
              font-medium
              text-primary
            "
                                                >
                                                    {formatCurrency(item.product.price)}
                                                </p>
                                            </div>

                                            {/* Quantity */}
                                            <div className="mt-5 flex items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        decreaseQuantity(item.product.id)
                                                    }
                                                    className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-md
              border
              border-border
              hover:bg-surface-secondary
            "
                                                >
                                                    <Minus size={16} />
                                                </button>

                                                <span
                                                    className="
              w-6
              text-center
              font-medium
            "
                                                >
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        increaseQuantity(item.product.id)
                                                    }
                                                    className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-md
              border
              border-border
              hover:bg-surface-secondary
            "
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Right Column */}
                                        <div
                                            className="
          flex
          flex-col
          items-end
          justify-between
        "
                                        >
                                            <button
                                                type="button"
                                                aria-label="Remove item"
                                                onClick={() =>
                                                    removeFromCart(item.product.id)
                                                }
                                                className="
            rounded-lg
            p-2
            text-error
            transition-colors
            hover:bg-error-light
          "
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Order Summary Placeholder */}
                        <aside
                            className="
    rounded-xl
    border
    border-border
    bg-surface
    p-6
    lg:sticky
    lg:top-24
    h-fit
  "
                        >
                            <h2
                                className="
      text-xl
      font-semibold
      text-text-primary
    "
                            >
                                Order Summary
                            </h2>

                            <div className="mt-6 flex justify-between">
                                <span className="text-text-secondary">
                                    Subtotal
                                </span>

                                <span className="font-semibold">
                                    {formatCurrency(subtotal)}
                                </span>
                            </div>

                            <p
                                className="
      mt-5
      text-sm
      text-text-secondary
    "
                            >
                                Shipping and bank transfer details will be calculated during checkout.
                            </p>

                            <div className="mt-6 border-t border-border pt-6">
                                <Link href="/checkout">
                                    <Button className="w-full">
                                        Proceed to Checkout
                                    </Button>
                                </Link>

                                <Link
                                    href="/shop"
                                    className="mt-3 block"
                                >
                                    <Button
                                        variant="secondary"
                                        className="w-full"
                                    >
                                        Continue Shopping
                                    </Button>
                                </Link>
                            </div>
                        </aside>
                    </div>
                )}
            </div>
        </Container>
    );
}