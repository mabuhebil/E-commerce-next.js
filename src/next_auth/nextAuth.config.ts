import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Fresh Cart Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "ex:MohamedAli@gmail.com",
          type: "email",
        },
        password: {
          label: "Password",
          placeholder: "Password",
          type: "password",
        },
      },
      authorize: async function (credentials) {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "post",
            body: JSON.stringify(credentials),
            headers: { "content-type": "application/json" },
          },
        );

        const finalRes = await res.json();
        console.log("next auth", finalRes);

        return null;
      },
    }),
  ],
};
