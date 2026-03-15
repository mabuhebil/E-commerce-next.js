import { getSpecificProduct } from "-/api/services/route.services";
import React from "react";
import { CiStar } from "react-icons/ci";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const productDetails = await getSpecificProduct(id);

  return (
    <div className="grid grid-cols-4 items-center">
      <div className="col-span-1">
        <img src={productDetails?.imageCover} alt={productDetails?.title} />
      </div>

      <div className="col-span-3">
        <h1 className="text-5xl text-center"> {productDetails?.title}</h1>
        <h1 className="text-center"> {productDetails?.description}</h1>

        <div className="flex gap-1 items-center">
          <CiStar />
          <p>
            {productDetails?.ratingsAverage}{" "}
            <span>{`(${productDetails?.ratingsQuantity})`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
