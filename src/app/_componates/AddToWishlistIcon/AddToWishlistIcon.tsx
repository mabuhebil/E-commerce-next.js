"use client";

import { addProductToWishlist, DeleteWishListItem } from "-/app/cart/cart.actions";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { toast } from "sonner";
import { id } from "zod/v4/locales";
import { FaHeart } from "react-icons/fa";

export default function AddToWishlistIcon({ id }: { id: string }) {
  const [isLike, setLslike] = useState(false);
  async function handelAddItem(e: MouseEvent) {
    setLslike( true);
    e.preventDefault();

    const IsaddedToWishlist = await addProductToWishlist(id);

    if (IsaddedToWishlist != null) {
      toast.success("Add To Wishlist is successful", {
        position: "top-right",
      });
    } else {
      toast.error("Add To Wishlist is faild", {
        position: "top-right",
      });
    }
  }

  async function handelDeleteItem(e: MouseEvent) {
    setLslike( false );
    e.preventDefault();

    const IsaddedToWishlist = await DeleteWishListItem(id);

    if (IsaddedToWishlist != null) {
      toast.success("deleting item has been successfully", {
        position: "top-right",
      });
    } else {
      toast.error("the Deleting Item  Faild", {
        position: "top-right",
      });
    }
  }

  return (
    <div>
      {isLike ? (
        <FaHeart
          className="absolute right-2 top-5   text-red-500 text-2xl"
          onClick={handelDeleteItem}
        />
      ) : (
        <CiHeart
          className="absolute right-2 text-2xl  top-5"
          onClick={handelAddItem}
        />
      )}
    </div>
  );
}
