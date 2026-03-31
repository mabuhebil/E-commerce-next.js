"use server";

import { decodeAuthenticatedUserToken } from "../Utils";

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
      console.log("finalRes cart", finalRes);
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return new Error(" session ended");
  }
}
