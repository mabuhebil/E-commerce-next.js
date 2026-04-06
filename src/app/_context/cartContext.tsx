"use client";

import { CartType } from "-/api/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

export interface CartContextType {
  numberCartItems: number;
  updateNumberCartItems: (num: number) => void;
}

export const CartContext = createContext<CartContextType>({
  numberCartItems: 0,
  updateNumberCartItems: () => {},
});

export default function CartContextProvider({
  children,
  res,
}: {
  children: ReactNode;
  res: CartType | undefined;
}) {
  const [numberCartItems, setNumberCartItems] = useState(() => {
    return res === undefined ? 0 : (res as CartType).products.length;
  });

  function updateNumberCartItems(num: number) {
    setNumberCartItems(num);
  }

  return (
    <CartContext.Provider value={{ numberCartItems, updateNumberCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const res = useContext(CartContext);

  if (!res) {
    return new Error("cannot use cart context outside its context");
  } else {
    return res;
  }
}
