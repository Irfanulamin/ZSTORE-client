import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { TProduct } from "@/types/producttypes";
import React from "react";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/men-clothing");
  const products = await res.json();
  return (
    <div className=" min-h-[90vh] h-[100%] pt-6 md:pt-24 lg:pt-24">
      <Container>
        <div className="grid grid-cols-6 gap-6">
          <div className=" col-start-1 col-end-2 bg-black p-6">
            <div>asxa</div>
            <div>asxa</div>
            <div>xaSX</div>
          </div>
          <div className="col-start-2  col-end-8 ">
            <div>
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold space-x-6 text-left">
                Our Collections
              </h4>
              <p className="text-left text-xs md:text-sm lg:text-sm text-black/80 py-2">
                Explore our latest arrivals and elevate your style with trendy
                picks
                <br /> – shop now before they are gone!
              </p>
            </div>

            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6 lg:gap-12">
              {products.map((product: TProduct, index: number) => (
                <ProductCard product={product} key={index}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
