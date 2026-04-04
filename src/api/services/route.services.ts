import { decodeAuthenticatedUserToken } from "-/app/Utils";
import { CartType, CategoryType, ProductType } from "../types";

export async function getAllProducts(): Promise<ProductType[] | undefined> {
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products", {
      cache: "force-cache",
    });
    const finalRes = await res.json();
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getSpecificProduct(
  id: string,
): Promise<ProductType | undefined> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    );
    const finalRes = await res.json();
    console.log("spicefc", finalRes);
    console.log("spicefc", finalRes);
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getAllCategories(): Promise<CategoryType[] | undefined> {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories",
    );
    const finalRes = await res.json();
    return finalRes.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getUserCart(): Promise<CartType | Error | undefined> {
  const userToken = await decodeAuthenticatedUserToken();

  if (userToken) {
    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
        headers: {
          token: userToken,
        },
      });
      const finalRes = await res.json();

      console.log("finalResGetCart", finalRes);
      return finalRes.data;
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return new Error("session ended login again");
  }
}
