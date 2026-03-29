"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handelLogOut() {
    await signOut({ redirect: false });
    router.push("/login");
  }

  return (
    <span onClick={handelLogOut} className="cursor-pointer">
      Logout
    </span>
  );
}
