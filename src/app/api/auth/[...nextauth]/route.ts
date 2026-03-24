import { nextAuthConfig } from "-/next_auth/nextAuth.config";
import NextAuth from "next-auth";

const routehandler = NextAuth(nextAuthConfig);

export { routehandler as GET, routehandler as POST };
