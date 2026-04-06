"use server";

import { getUserCart } from "-/api/services/route.services";
import { RegisterSchemaObjectType } from "./registerSchemaObjectType";

export async function RegisterAction(data: RegisterSchemaObjectType) {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        method: "post",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      },
    );

    return res.ok;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getUserCartAfterLogin() {
  return await getUserCart();
}
