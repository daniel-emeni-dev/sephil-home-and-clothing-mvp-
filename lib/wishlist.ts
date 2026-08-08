import type { Product } from "@/lib/data/products";

const STORAGE_KEY = "sephil-wishlist";

export function getWishlist(): Product[] {
  if (typeof window === "undefined") {
    return [];
  }

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}


export function isInWishlist(id: number) {
  return getWishlist().some(
    (product) => product.id === id
  );
}

export function toggleWishlist(
  product: Product
) {
  const wishlist = getWishlist();

  const exists = wishlist.some(
    (item) => item.id === product.id
  );

  if (exists) {
    const updated = wishlist.filter(
      (item) => item.id !== product.id
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );

    return false;
  }

  wishlist.unshift(product);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(wishlist)
  );

  return true;
}

export function addToWishlist(
  product: Product
) {
  const wishlist = getWishlist();

  const exists = wishlist.some(
    (item) => item.id === product.id
  );

  if (exists) {
    return;
  }

  wishlist.unshift(product);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(wishlist)
  );
}

export function removeFromWishlist(
  id: number
) {
  const updated = getWishlist().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}