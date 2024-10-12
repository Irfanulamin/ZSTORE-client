export interface TProduct {
  _id: string;
  product_name: string;
  category: string;
  product_image: string;
  flash_sale: boolean;
  amount: number;
  description: string;
  keypoints: string[];
  reviews: number;
  rating: number;
  product_id: string;
}

export interface TOrder {
  id: number;
  cart: {
    amount: number;
    quantity: number;
  }[];
}
