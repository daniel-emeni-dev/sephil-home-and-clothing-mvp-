"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type CartContextValue = {
  cartCount: number;
  addToCart: (quantity?: number) => void;
};

const CartContext = createContext<CartContextValue | null>(
  null
);

type CartProviderProps = {
  children: React.ReactNode;
};

export function CartProvider({
  children,
}: CartProviderProps) {
  const [cartCount, setCartCount] = useState(0);

  function addToCart(quantity = 1) {
    setCartCount((current) => current + quantity);
  }

  const value = useMemo(
    () => ({
      cartCount,
      addToCart,
    }),
    [cartCount]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider."
    );
  }

  return context;
}