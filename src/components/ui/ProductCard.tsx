"use client";

import { TProduct } from "@/types/producttypes";
import Image from "next/image";
import Link from "next/link";
import { Star, MoveRight } from "lucide-react";

const ProductCard = ({ product }: { product: TProduct }) => {
  const discountPercentage = (
    ((product.amount * 1.12 - product.amount) / (product.amount * 1.12)) *
    100
  ).toFixed(0);

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl group border">
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          alt={product.product_name}
          className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
          src={product.product_image}
          width={500}
          height={500}
        />
        {product.flash_sale && (
          <p className="absolute left-2 top-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
            -{discountPercentage}%
          </p>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <p className="text-white text-xl font-semibold text-center px-4">
            {product.product_name}
          </p>
        </div>
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-xl font-semibold text-gray-800 line-clamp-1">
          {product.product_name}
        </h6>
        <p className="mb-2 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <div className="mb-2 flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.min(Math.floor(product.rating), 5)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              fill="currentColor"
            />
          ))}
          <span className="ml-1 text-sm text-gray-600">
            ({Math.min(product.rating, 5).toFixed(1)})
          </span>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-black">
              ${product.amount.toFixed(2)}
            </p>
            {product.flash_sale && (
              <p className="text-sm text-gray-500 line-through">
                ${(product.amount * 1.12).toFixed(2)}
              </p>
            )}
          </div>
          <Link
            href={`/men-clothing/${product._id}`}
            className="group flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
          >
            <span className="text-sm font-medium">View</span>
            <MoveRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
