import { Input } from "@/components/ui/Input";

export function SearchBar() {
  return (
    <div className="w-full max-w-xl">
      <Input
        type="text"
        placeholder="Search products..."
      />
    </div>
  );
}