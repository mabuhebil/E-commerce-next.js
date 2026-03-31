"use client";

import { addProductToCart } from "-/app/cart/cart.actions";
import { Button } from "-/components/ui/button";
import React, { MouseEvent, ReactNode } from "react";

interface addToCartButtonInterface {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function AddToCartButton({
  id,
  className = "",
  children,
}: addToCartButtonInterface) {
  async function handleClick(e: MouseEvent) {
    e.preventDefault();
    await addProductToCart(id);
  }

  return (
    <div>
      <Button className={className} onClick={handleClick}>
        {children}
      </Button>
    </div>
  );
}
