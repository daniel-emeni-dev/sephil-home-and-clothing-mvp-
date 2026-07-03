"use client";

import { useEffect, useState } from "react";

import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

type SearchBarProps = {
  showResults?: boolean;
};

export function SearchBar({
  showResults = false,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [query]);

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

      {showResults && (
        <div
          className="
            absolute
            left-0
            right-0
            top-[calc(100%+0.75rem)]
            z-50
          "
        >
          <SearchResults />
        </div>
      )}
    </div>
  );
}