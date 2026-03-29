import { nextAuthConfig } from "-/next_auth/nextAuth.config";
import { getServerSession } from "next-auth/next";

import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonAdd, IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import LogoutButton from "./LogoutButton";

export default async function Header() {
  console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);
  console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);

  const res = await getServerSession();

  console.log("sessionRes", res);
  const userName = res?.user?.name;
  const isUserAuthenticated = !!userName;

  console.log("isUserAuthenticated", isUserAuthenticated, userName);
  return (
    <div className="flex justify-between px-5 py-3">
      <div className="flex gap-1">
        <h6>Free on orders 500 EGP</h6>
        <h6>new Arrivals daily</h6>
      </div>

      <div className="flex gap-2">
        <a href="#" className="flex gap-2 items-center">
          {" "}
          <FaPhoneAlt />
          (800) 123-456
        </a>
        <a href="#" className="flex gap-2 items-center">
          <MdEmail /> support@freschcart.com
        </a>
        {isUserAuthenticated ? (
          <>
            <Link href="/profile" className="flex gap-2 items-center">
              <IoPersonAdd /> {userName}
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link href="/login" className="flex gap-2 items-center">
              <IoPersonAdd /> Sign in
            </Link>
            <Link href="/register" className="flex gap-2 items-center">
              <IoPersonSharp /> Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
