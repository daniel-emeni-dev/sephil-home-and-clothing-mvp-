"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Product } from "@/lib/data/products";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

import { SearchInput } from "@/components/search/SearchInput";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ShopEmptyState } from "@/components/shop/ShopEmptyState";
import { ShopHero } from "@/components/shop/ShopHero";
import { ShopResults } from "@/components/shop/ShopResults";

type ShopContentProps = {
    products: Product[];
};

export function ShopContent({
    products,
}: ShopContentProps) {
    const [query, setQuery] = useState("");

    const searchParams = useSearchParams();

    const selectedCategory = searchParams.get("category");

    const filteredProducts = useMemo(() => {
        let filtered = products;

        if (selectedCategory) {
            filtered = filtered.filter(
                (product) =>
                    product.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
            );
        }

        const search = query.trim().toLowerCase();

        if (!search) {
            return filtered;
        }

        return filtered.filter((product) => {
            return (
                product.name.toLowerCase().includes(search) ||
                product.category.toLowerCase().includes(search)
            );
        });
    }, [products, query, selectedCategory]);

    return (
        <Section>
            <Container>
                <ShopHero
                    title={
                        selectedCategory
                            ? selectedCategory.charAt(0).toUpperCase() +
                            selectedCategory.slice(1)
                            : "Shop"
                    }
                >
                    <SearchInput
                        value={query}
                        onChange={setQuery}
                    />
                </ShopHero>


                <div className="space-y-8">
                    <ShopResults
                        totalProducts={filteredProducts.length}
                    />

                    {filteredProducts.length > 0 ? (
                        <ProductGrid
                            products={filteredProducts}
                        />
                    ) : (
                        <ShopEmptyState />
                    )}
                </div>
            </Container>
        </Section>
    );
}