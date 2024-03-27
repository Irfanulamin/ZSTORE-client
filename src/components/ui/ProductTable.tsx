import { TProduct } from "@/types/producttypes";
import Image from "next/image";
import React from "react";

const ProductTable = ({
  product,
  index,
}: {
  product: TProduct;
  index: number;
}) => {
  const { product_image, product_name, category, product_id, amount } = product;
  return (
    <>
      <tbody>
        <tr>
          <th>
            <p className=" text-xl font-semibold">{index + 1}</p>
          </th>
          <td>
            <Image
              src={product_image}
              alt={product_name}
              width={100}
              height={100}
              className="w-24 h-24 object-cover"
            />
          </td>
          <td>
            <p className="text-sm ">{product_name}</p>
          </td>
          <td>
            <p className="text-sm">{category}</p>
          </td>
          <td>
            <p className=" text-sm ">{product_id}</p>
          </td>
          <td>
            <p className="font-semibold text-sm text-red-600">{amount}$</p>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ProductTable;
