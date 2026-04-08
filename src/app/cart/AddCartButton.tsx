"use client";

import { Button } from "-/components/ui/button";
import { toast } from "sonner";
import { EditingCount } from "./cart.actions";

export default function AddCartButton({
  isAdd,
  newCount,
  id,
}: {
  isAdd: boolean;
  newCount: number;
  id: string;
}) {
  async function handelEditingCount() {
    const numOfCartItems = await EditingCount(id, newCount);
    if (numOfCartItems) {
      toast.success(
        ` Item  ${isAdd ? "increment" : " descrement"} successfuly`,
      );
    } else {
      toast.error("Faild");
    }
  }

  return (
    <Button onClick={handelEditingCount}  disabled={newCount <=0} variant="outline">
      {isAdd ? "+" : "-"}
    </Button>
  );
}
