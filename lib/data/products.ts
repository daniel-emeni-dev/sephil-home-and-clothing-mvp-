import { mockProducts, type Product } from "./mockProducts";

export type { Product };

/**
 * Returns every product.
 */
export function getProducts(): Product[] {
  return mockProducts;
}

/**
 * Returns a single product by its id.
 */
export function getProductById(id: number): Product | undefined {
  return mockProducts.find((product) => product.id === id);
}

/**
 * Returns featured products.
 */
export function getFeaturedProducts(): Product[] {
  return mockProducts.filter((product) => product.featured);
}

/**
 * Returns products belonging to a category.
 */
export function getProductsByCategory(category: string): Product[] {
  return mockProducts.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Returns every unique product category. 
 */
export function getCategories(): string[] {
  return [...new Set(mockProducts.map((product) => product.category))];
}

export type CategorySummary = {
  name: string;
  productCount: number;
  image: string;
};

export function getCategorySummaries(): CategorySummary[] {
  const categories = new Map<
    string,
    CategorySummary
  >();

  for (const product of mockProducts) {
    const existing = categories.get(product.category);

    if (existing) {
      existing.productCount += 1;
    } else {
      categories.set(product.category, {
        name: product.category,
        productCount: 1,
        image: product.image,
      });
    }
  }

  return Array.from(categories.values());
}