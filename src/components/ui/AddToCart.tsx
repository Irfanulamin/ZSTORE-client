"use client";

import { useToast } from "@/hooks/use-toast";
import { addToCart } from "@/redux/feature/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TProduct } from "@/types/producttypes";
import React from "react";
import { IoCartSharp } from "react-icons/io5";

type AddToCartProps = {
  product: TProduct;
};

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const { toast } = useToast();
  const addToCartData: any = {
    id: product._id,
    amount: product.amount,
    name: product.product_name,
    image: product.product_image, // Ensure this points to the correct field for the image URL
    description: product.description,
  };

  const dispatch = useAppDispatch();

  const addToCartSubmit = () => {
    dispatch(addToCart(addToCartData));
    toast({
      variant: "success",
      title: `${product.product_name}, has been added to your cart 😎✅`,
      description: "Buy More! What are you waiting for?",
    });
  };

  return (
    <button
      onClick={addToCartSubmit}
      className="rounded w-full py-4 bg-slate-600 text-base font-bold text-white border-slate-900 border-2 border-b-4 active:border-b-2 hover:border-slate-800"
    >
      Add To Cart <IoCartSharp className="inline-block w-6 h-6" />
    </button>
  );
};

export default AddToCart;
