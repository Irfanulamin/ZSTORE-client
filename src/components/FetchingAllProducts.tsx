/* eslint-disable react/no-unescaped-entities */
import { TSearchParam } from "@/app/men-clothing/page";
import ProductCard from "../components/ui/ProductCard";

import { TProduct } from "../types/producttypes";

const FetchedProducts = async ({
  searchParams,
}: {
  searchParams: TSearchParam;
}) => {
  const { category, minAmount, maxAmount, rating } = searchParams;

  const res = await fetch(
    `http://localhost:5000/men-clothing?${
      category ? `category=${category}&` : ``
    }${
      minAmount && maxAmount
        ? `minAmount=${minAmount}&maxAmount=${maxAmount}&`
        : ``
    }${rating ? `rating=${rating}&` : ``}`,
    {
      cache: "no-store",
    }
  );

  const products = await res.json();

  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6 lg:gap-12">
      {products &&
        products.map((product: TProduct, index: number) => (
          <ProductCard product={product} key={index} />
        ))}
      {products.length === 0 && (
        <div className="flex justify-center items-center w-full">
          <p className="text-center">
            (Apologies, the product you're searching for isn't available at the
            moment. Please check back later for updates)
          </p>
        </div>
      )}
    </div>
  );
};

export default FetchedProducts;
