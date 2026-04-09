import { getUserCart } from "-/api/services/route.services";
import { CartType } from "-/api/types";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "-/components/ui/table";
import { Button } from "-/components/ui/button";
import RemoveProductButton from "./RemoveProductButton";
import AddCartButton from "./AddCartButton";
import Link from "next/link";

export default async function Cart() {
  const cartData = await getUserCart();

  if (!cartData) {
    return new Error(" UserCart not found");
  }
  const { totalCartPrice, products, _id } = cartData as CartType;

  console.log("products", products);

  return (
    <>
      <div className="flex justify-between bg-red-700">
        <div className=" flex gap-3">
          <span>Price:</span>
          <span>{totalCartPrice}</span>
        </div>
        <div>
          <Link href={`/cart/${_id}`}>
            <Button>Go to Pay</Button>
          </Link>
        </div>
      </div>

      <Table className="w-6xl m-auto">
        <TableCaption>A list of your Products</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="">Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Actions</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">
                <img
                  src={item.product.imageCover}
                  alt={item.product.title}
                  className="w-full max-w-50"
                />
              </TableCell>
              <TableCell>{item.product.title}</TableCell>
              <TableCell>
                <div>
                  <div className="flex gap-2 items-center justify-center">
                    <AddCartButton
                      isAdd={false}
                      newCount={item.count - 1}
                      id={item.product.id}
                    />
                    {item.count}
                    <AddCartButton
                      isAdd
                      newCount={item.count + 1}
                      id={item.product.id}
                    />
                  </div>
                  <RemoveProductButton id={item.product.id} />
                </div>
              </TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{totalCartPrice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
