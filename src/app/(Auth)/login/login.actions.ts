"use server";

import { LoginSchemaObjectType } from "./loginSchemaObjectType";

export async function LoginAction(data: LoginSchemaObjectType) {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      {
        method: "post",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      },
    );
    console.log("login_data", data);

    return res.ok;
  } catch (error) {
    console.log("error", error);
  }
}
