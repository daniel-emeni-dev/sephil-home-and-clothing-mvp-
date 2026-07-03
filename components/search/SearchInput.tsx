import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchInput({
  value,
  onChange,
  placeholder = "Search products...",
}: SearchInputProps) {
  return (
    <div
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        border
        border-border
        bg-surface
        px-4
        py-3
        transition-colors
        duration-200
        focus-within:border-accent
      "
    >
      <Search
        size={18}
        strokeWidth={1.8}
        className="text-text-muted"
      />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="
          w-full
          bg-transparent
          text-sm
          text-text-primary
          placeholder:text-text-muted
          outline-none
        "
      />
    </div>
  );
}