/* eslint-disable react/no-unescaped-entities */

import { TSearchParam } from "@/app/(withCommonlayout)/men-clothing/page";
import ProductCard from "../components/ui/ProductCard";

import { TProduct } from "../types/producttypes";

const FetchedProducts = async ({
  searchParams,
}: {
  searchParams: TSearchParam;
}) => {
  const { category, minAmount, maxAmount, rating } = searchParams;

  try {
    const res = await fetch(
      `http://zstore-server.vercel.app/men-clothing?${
        category ? `category=${category}&` : ""
      }${
        minAmount && maxAmount
          ? `minAmount=${minAmount}&maxAmount=${maxAmount}&`
          : ""
      }${rating ? `rating=${rating}&` : ""}`,
      {
        cache: "no-store",
      }
    );

    // Check if the response is okay (status 200)
    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }

    // Try to parse the JSON
    const products = await res.json();

    // Check if products is an array
    if (!Array.isArray(products)) {
      throw new Error("Received data is not an array");
    }

    return (
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-6 lg:gap-12">
        {products.length > 0 ? (
          products.map((product: TProduct, index: number) => (
            <ProductCard product={product} key={index} />
          ))
        ) : (
          <div className="flex justify-center items-center w-full">
            <p className="text-center">
              (Apologies, the product you're searching for isn't available at
              the moment. Please check back later for updates)
            </p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching or parsing data:", error);

    return (
      <div className="flex justify-center items-center w-full">
        <p className="text-center">
          Sorry, we couldn't fetch products at the moment. Please try again
          later.
        </p>
      </div>
    );
  }
};

export default FetchedProducts;
