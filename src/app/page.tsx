import { getAllProducts } from "-/api/services/route.services";
import React from "react";
import Product from "./_componates/Product/Product";
import Link from "next/link";

export default async function HomeAppe() {
  const allProducts = await getAllProducts();

  console.log(allProducts);

  return (
    <div>
      <h2 className="text-3xl">Featured Products</h2>
      <div className="grid md:grid-cols-4 lg:grid-cols-5 md:gap-8 p-8">
        {allProducts?.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Product product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
