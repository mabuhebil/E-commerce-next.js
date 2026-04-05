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

export default async function Cart() {
  const cartData = await getUserCart();

  const { totalCartPrice, products } = cartData as CartType;

  console.log("products", products);

  return (
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
              <Button>+</Button>
              {item.count}
              <Button>-</Button>
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
  );
}
