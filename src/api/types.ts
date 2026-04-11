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

export interface CartType {
  _id: string;
  products: ItemType[];
  cartOwner: string;
  totalCartPrice: number;
}

export interface ItemType {
  count: number;
  _id: string;
  price: number;
  product: ProductType;
}

export interface PayType {
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
    postalCode: string;
  };
}
