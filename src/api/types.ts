export interface ProductType {
  id: string;
  title: string;
  images: string[];
  imageCover: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  category: CategoryType;
  brand: BrandType;
}

export interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface BrandType {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
