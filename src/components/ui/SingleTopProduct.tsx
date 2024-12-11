import { TProduct } from "@/types/producttypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleTopProduct = ({ product }: { product: TProduct }) => {
  return (
    <Link href={`/men-clothing/${product._id}`}>
      <div className=" h-36 md:h-44 lg:h-80 w-36 md:w-44 lg:w-80 relative group overflow-hidden rounded-lg">
        <div className="relative">
          <Image
            alt={product?.product_name}
            className="h-36 md:h-44 lg:h-80 w-36 md:w-44 lg:w-80  object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75 group-hover:contrast-125"
            src={product?.product_image}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-4xl font-semibold uppercase">
            {product?.category}
          </p>
          <p className="text-gray-400 text-sm font-semibold">
            {product?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleTopProduct;
