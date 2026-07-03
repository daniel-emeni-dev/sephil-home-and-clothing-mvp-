import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

type SearchBarProps = {
  showResults?: boolean;
};

export function SearchBar({
  showResults = false,
}: SearchBarProps) {
  return (
    <div
      className="
        relative
        w-full
        max-w-xl
      "
    >
      <SearchInput />

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