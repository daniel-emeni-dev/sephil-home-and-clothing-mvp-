"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { Product } from "@/lib/data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  cartCount: number;
  subtotal: number;

  addToCart: (
    product: Product,
    quantity?: number
  ) => void;

  removeFromCart: (
    productId: number
  ) => void;

  increaseQuantity: (
    productId: number
  ) => void;

  decreaseQuantity: (
    productId: number
  ) => void;

  clearCart: () => void;

  getItemQuantity: (
    productId: number
  ) => number;
};

const CartContext =
  createContext<CartContextValue | null>(
    null
  );

type CartProviderProps = {
  children: React.ReactNode;
};

export function CartProvider({
  children,
}: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>(
    []
  );
  useEffect(() => {
    const savedCart = localStorage.getItem(
      "sephil-cart"
    );

    if (!savedCart) return;

    try {
      setItems(JSON.parse(savedCart));
    } catch {
      console.error(
        "Failed to load saved cart."
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "sephil-cart",
      JSON.stringify(items)
    );
  }, [items]);

  function addToCart(
    product: Product,
    quantity = 1
  ) {
    setItems((current) => {
      const existing = current.find(
        (item) =>
          item.product.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? {
              ...item,
              quantity:
                item.quantity + quantity,
            }
            : item
        );
      }

      return [
        ...current,
        {
          product,
          quantity,
        },
      ];
    });
  }

  function removeFromCart(
    productId: number
  ) {
    setItems((current) =>
      current.filter(
        (item) =>
          item.product.id !== productId
      )
    );
  }

  function increaseQuantity(
    productId: number
  ) {
    setItems((current) =>
      current.map((item) =>
        item.product.id === productId
          ? {
            ...item,
            quantity:
              item.quantity + 1,
          }
          : item
      )
    );
  }

  function decreaseQuantity(
    productId: number
  ) {
    setItems((current) =>
      current
        .map((item) =>
          item.product.id === productId
            ? {
              ...item,
              quantity:
                item.quantity - 1,
            }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  }

  function clearCart() {
    setItems([]);
  }

  function getItemQuantity(
    productId: number
  ) {
    return (
      items.find(
        (item) =>
          item.product.id === productId
      )?.quantity ?? 0
    );
  }

  const cartCount = items.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const subtotal = items.reduce(
    (total, item) =>
      total +
      item.product.price *
      item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      items,
      cartCount,
      subtotal,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      getItemQuantity,
    }),
    [items, cartCount, subtotal]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider."
    );
  }

  return context;
}