import React from "react";
import Container from "./ui/Container";
import { TProduct } from "@/types/producttypes";
import ProductCard from "./ui/ProductCard";
import SingleTopProduct from "./ui/SingleTopProduct";
import { HeadingText } from "./ui/HeadingText";

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
        <HeadingText
          head="Top Products"
          title="Discover our top-selling products! Explore the latest in fashion
            with our stylish clothes, elegant watches, and essential menswear.
            Stay ahead of the trend and find your favorites today!"
        />
      </div>
      <div className="bg_topproducts ">
        <Container>
          <div className="py-12 grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-12 place-content-center place-items-center">
            {products.slice(0, 8).map((product: TProduct, index: number) => (
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
