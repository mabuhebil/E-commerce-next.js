"use client";

import { CartContextType, useCart } from "-/app/_context/cartContext";
import { addProductToCart } from "-/app/cart/cart.actions";
import { Button } from "-/components/ui/button";
import React, { MouseEvent, ReactNode } from "react";
import { toast } from "sonner";

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
  const { updateNumberCartItems } = useCart() as CartContextType;
  async function handleClick(e: MouseEvent) {
    e.preventDefault();
    const numOfCartItems = await addProductToCart(id);

    console.log("numOfCartItems", numOfCartItems);

    if (numOfCartItems != null) {
      updateNumberCartItems(numOfCartItems);
      toast.success("Add To Cart is successful", {
        position: "top-right",
      });
    } else {
      toast.error("Add To Cart is faild", {
        position: "top-right",
      });
    }
  }

  return (
    <div>
      <Button className={className} onClick={handleClick}>
        {children}
      </Button>
    </div>
  );
}
