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