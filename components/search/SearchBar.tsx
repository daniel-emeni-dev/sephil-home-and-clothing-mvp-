"use client";

import { useEffect, useMemo, useState } from "react";

import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

type Product = {
  id: number;
  name: string;
  category: string;
};

type SearchBarProps = {
  showResults?: boolean;
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Classic Linen Shirt",
    category: "Fashion",
  },
  {
    id: 2,
    name: "Leather Hand Bag",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Minimal Wall Clock",
    category: "Home Essentials",
  },
  {
    id: 4,
    name: "Everyday Sneakers",
    category: "Shoes",
  },
  {
    id: 5,
    name: "Luxury Body Lotion",
    category: "Beauty",
  },
];

export function SearchBar({
  showResults = false,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [query]);

  const filteredProducts = useMemo(() => {
    const search = debouncedQuery.trim().toLowerCase();

    if (!search) {
      return [];
    }

    return mockProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      );
    });
  }, [debouncedQuery]);

  return (
    <div
      className="
        relative
        w-full
        max-w-xl
      "
    >
      <SearchInput
        value={query}
        onChange={setQuery}
      />

      {showResults && debouncedQuery.trim() !== "" && (
        <div
          className="
      absolute
      left-0
      right-0
      top-[calc(100%+0.75rem)]
      z-50
    "
        >
          <SearchResults
            results={filteredProducts}
          />
        </div>
      )}
    </div>
  );
}