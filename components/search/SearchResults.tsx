import Link from "next/link";

type SearchResult = {
  id: number;
  name: string;
  category: string;
};

const mockResults: SearchResult[] = [
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
];

export function SearchResults() {
  return (
    <div
      className="
        mt-3
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface
        shadow-sm
      "
    >
      <ul>
        {mockResults.map((item) => (
          <li key={item.id}>
            <Link
              href="/"
              className="
                flex
                items-center
                justify-between
                px-4
                py-3
                transition-colors
                duration-200
                hover:bg-surface-secondary
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    font-medium
                    text-text-primary
                  "
                >
                  {item.name}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-text-secondary
                  "
                >
                  {item.category}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}