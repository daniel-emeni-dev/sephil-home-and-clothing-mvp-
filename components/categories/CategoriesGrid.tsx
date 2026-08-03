import { CategoryCard } from "./CategoryCard";

type Category = {
    name: string;
    image: string;
};

type CategoriesGridProps = {
    categories: Category[];
};

export function CategoriesGrid({
    categories,
}: CategoriesGridProps) {
    return (
        <div
            className="
        grid
        gap-5
        sm:grid-cols-2
      "
        >
            {categories.map((category) => (
                <CategoryCard
                    key={category.name}
                    name={category.name}
                    image={category.image}
                />
            ))}
        </div>
    );
}