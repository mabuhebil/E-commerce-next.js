import { getUserCart } from "-/api/services/route.services";
import React from "react";

export default async function Cart() {
  await getUserCart();

  return <div>page</div>;
}
