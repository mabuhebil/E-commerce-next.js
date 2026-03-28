import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { jwtDecode } from "jwt-decode";

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

        if (res.ok) {
          const { name, email } = finalRes.user;

          // that is userObj  will  not be show in tkn  thats is real data

          const data: { id: string } = jwtDecode(finalRes.token);
          return {
            name,
            email,
            id: data.id,
            tokenCredentials: finalRes.token,
          };
        }

        return null;
      },
    }),
  ],

  callbacks: {
    jwt: function (param) {
      // param.token that is defualt valus will be shown in tkn

      if (param.user) {
        param.token.routeToken = param.user.tokenCredentials;
        param.token.id = param.user.id;
      }

      console.log("jwt param", param);
      return param.token;
    },
    session: function (param) {
      param.session.user.id = param.token.id;
      console.log("param from session", param);
      return param.session;
    },
  },

  jwt: {
    maxAge: 60 * 60 * 24 * 3,
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
