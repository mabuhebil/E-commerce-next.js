import React from "react";
import { ProductProps } from "./Product.typs";
import { CiStar } from "react-icons/ci";
import { Button } from "-/components/ui/button";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

export default function Product({ product }: ProductProps) {
  return (
    <div className="border rounded-lg p-2" key={product.id}>
      <img src={product.imageCover} alt={product.title} />
      <div className="text-gray-500">{product.category.name}</div>
      <h2 className="text-xl font-bold">
        {product.title.split(" ", 2).join(" ")}
      </h2>
      <div className="flex gap-1 items-center">
        <CiStar />
        <p>
          {product.ratingsAverage} <span>{`(${product.ratingsQuantity})`}</span>
        </p>
      </div>

      <div className="flex justify-between">
        <h2>
          {product.priceAfterDiscount ? (
            <>
              <span className=" text-red-500 line-through me-3 ">
                {product.price}
              </span>
              <span>{product.priceAfterDiscount}</span>
            </>
          ) : (
            <span>{product.price}</span>
          )}
        </h2>

        <AddToCartButton id={product.id}>+</AddToCartButton>
      </div>
    </div>
  );
}
