import { TProduct } from "@/types/producttypes";
import Image from "next/image";
import React from "react";

const SingleTopProduct = ({ product }: { product: TProduct }) => {
  return (
    <div className="  w-full">
      <div>
        <Image
          alt={product?.product_name}
          className="h-36 md:h-44 lg:h-64 w-full object-cover rounded "
          src={product?.product_image}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default SingleTopProduct;
