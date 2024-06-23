import React from "react";
import Container from "./ui/Container";
import { TProduct } from "@/types/producttypes";
import ProductCard from "./ui/ProductCard";
import SingleTopProduct from "./ui/SingleTopProduct";

const TopProducts = async () => {
  const res = await fetch("http://zstore-server.vercel.app/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  return (
    <div className="pb-16">
      <div className="flex justify-center items-center w-full">
        <div>
          <h1 className="text-2xl space-x-6 md:text-5xl lg:text-5xl font-bold text-black text-center ">
            Top Products
          </h1>
          <p className="text-center py-2 md:py-4 lg:py-8 text-xs md:text-sm lg:text-lg text-black/70 px-2 md:px-12 lg:px-44">
            Discover our top-selling products! Explore the latest in fashion
            with our stylish clothes, elegant watches, and essential menswear.
            Stay ahead of the trend and find your favorites today!
          </p>
        </div>
      </div>
      <div className="bg_topproducts ">
        <Container>
          <div className="py-12 grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6 lg:gap-12">
            {products.slice(0, 6).map((product: TProduct, index: number) => (
              <SingleTopProduct
                key={index}
                product={product}
              ></SingleTopProduct>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TopProducts;
