import { getAllProducts } from "-/api/services/route.services";
import Product from "./_componates/Product/Product";
import Link from "next/link";
import MySwiper from "./_componates/MySwiper/MySwiper";

import image1 from "@imges/slider-image-1.jpeg";
import image2 from "@imges/slider-image-2.jpeg";
import image3 from "@imges/slider-image-3.jpeg";
import CategoriesSubPart from "./_componates/CategoriesSubPart/CategoriesSubPart";

export default async function HomeAppe() {
  const allProducts = await getAllProducts();

  return (
    <div>
      <MySwiper imageList={[image1.src, image2.src, image3.src]} />

      <CategoriesSubPart />
      <div className="p-10">
        <h2 className="text-3xl">Featured Products</h2>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 md:gap-8 p-8">
          {allProducts?.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <Product product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
