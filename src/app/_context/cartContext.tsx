"use client";

import { CartType } from "-/api/types";
import React, { createContext, ReactNode, useState } from "react";

const CartContext = createContext({});

export default function CartContextProvider({
  children,
  res,
}: {
  children: ReactNode;
  res: CartType | Error | undefined;
}) {
  const [numberCartItems, setNumberCartItems] = useState(() => {
    return res === undefined ? 0 : (res as CartType).products.length;
  });

  return (
    <CartContext.Provider value={{ numberCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
