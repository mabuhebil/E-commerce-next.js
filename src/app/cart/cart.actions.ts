"use server";

import { revalidatePath } from "next/cache";
import { decodeAuthenticatedUserToken } from "../Utils";
import { json } from "zod";

export async function addProductToCart(id: string) {
  const bodyObj = { productId: id };

  const userToken = await decodeAuthenticatedUserToken();

  if (userToken) {
    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
        method: "post",
        headers: { token: userToken, "Content-Type": "application/json" },
        body: JSON.stringify(bodyObj),
      });

      const finalRes = await res.json();

      if (res.ok) {
        return finalRes.numOfCartItems;
      } else {
        return null;
      }
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return new Error(" session ended");
  }
}

export async function DeleteItem(id: string) {
  const userToken = await decodeAuthenticatedUserToken();

  if (userToken) {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v2/cart/${id}`,
        {
          method: "DELETE",
          headers: { token: userToken },
        },
      );

      if (res.ok) {
        const finalRes = await res.json();
        console.log("DElete finalRes", finalRes);
        revalidatePath("/cart");
        return finalRes.numOfCartItems;
      } else {
        return null;
      }
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return new Error(" session ended");
  }
}

export async function EditingCount(id: string, newCount: number) {
  const userToken = await decodeAuthenticatedUserToken();

  if (userToken) {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v2/cart/${id}`,
        {
          method: "PUt",
          headers: { token: userToken, "Content-Type": "application/json" },
          body: JSON.stringify({ count: newCount }),
        },
      );
      const finalRes = await res.json();

      console.log("PutfinalRes", finalRes);
      if (res.ok) {
        revalidatePath("/cart");
        return finalRes.numOfCartItems;
      } else {
        return null;
      }
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return new Error(" session ended");
  }
}

export async function paymentFun(id: string, PaymentObj) {
  const userToken = await decodeAuthenticatedUserToken();

  if (userToken) {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v2/orders/${id}`,
        {
          method: "POST",
          headers: { token: userToken, "Content-Type": "application/json" },
          body: JSON.stringify(PaymentObj),
        },
      );
      const finalRes = await res.json();

      console.log("PaymentResponse", finalRes);
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return new Error(" session ended");
  }
}
