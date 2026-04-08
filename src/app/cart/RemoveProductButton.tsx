"use client";

import { Button } from "-/components/ui/button";
import { toast } from "sonner";
import { CartContextType, useCart } from "../_context/cartContext";
import { DeleteItem } from "./cart.actions";

export default function RemoveProductButton({ id }: { id: string }) {
  const { updateNumberCartItems } = useCart() as CartContextType;
  async function handelRemoveItem() {
    const numOfCartItems = await DeleteItem(id);

    if (numOfCartItems === null) {
      toast.error("Delete Item From Card Faild" );
    } else {
      updateNumberCartItems(numOfCartItems);
      toast.success("Delete haben Successfuly");
    }
  }
  return (
    <Button
      onClick={handelRemoveItem}
      className=" w-full mt-2"
      variant="destructive"
    >
      Remove
    </Button>
  );
}
