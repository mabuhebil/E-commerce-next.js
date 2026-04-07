"use client";

import { Button } from "-/components/ui/button";
import { DeleteItem } from "./cart.actions";

export default function RemoveProductButton({ id }: { id: string }) {
  async function handelRemoveItem() {
    await DeleteItem(id);
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
