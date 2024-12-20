import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiCardboardBox } from "react-icons/gi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { TProduct } from "@/types/producttypes";
import AddToCart from "@/components/ui/AddToCart";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

import AddReview from "@/components/ui/AddReview";

const singleProductPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `http://zstore-server.vercel.app/men-clothing/${params.id}`
  );
  const product = await res.json();

  const response = await fetch("http://zstore-server.vercel.app/men-clothing");

  const products = await response.json();

  return (
    <>
      <div className="min-h-[90vh] h-[100%] pt-12 md:pt-24 lg:pt-24">
        <Container>
          <div className="w-full py-6 lg:py-12 flex flex-col md:flex-row lg:flex-row justify-center items-center gap-1 md:gap-6 lg:gap-24">
            <Image
              src={product?.product_image}
              alt={product?.product_name}
              height={1500}
              width={1500}
              className=" h-[20rem] md:h-[30rem] lg:h-[30rem]  w-[20rem] md:w-[30rem] lg:w-[30rem] object-cover border-2 border-black rounded-sm"
            />
            <div className="py-4 ">
              <h1 className="text-xl md:text-3xl lg:text-5xl  font-bold space-x-12">
                {product?.product_name}
              </h1>
              <div className="flex justify-center items-center gap-1 py-1">
                <div>
                  <p className="text-lg md:text-2xl lg:text-4xl font-semibold">
                    {product?.amount}$ |
                  </p>
                </div>
                <div>
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={product?.rating}
                    readOnly
                  />
                </div>
                <div>
                  <p className="text-lg">( {product?.reviews} reviews )</p>
                </div>
              </div>
              <div>
                <p className="text-left py-2 md:py-8 lg:py-10 text-base md:text-xl lg:text-xl">
                  {product?.description}
                </p>
              </div>
              <div>
                {product?.keypoints.map((keypoint: string, index: number) => (
                  <p className="text-left text-lg font-medium" key={index}>
                    . {keypoint}
                  </p>
                ))}
                <div className="py-1 md:py-4 lg:py-8">
                  <div className="flex items-center gap-2">
                    <CiDeliveryTruck size={40} />
                    <p className="text-left text-base md:text-lg lg:text-lg font-medium">
                      Free worldwide shipping on all orders over $100
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiCardboardBox size={40} />
                    <p className="text-left text-base md:text-lg lg:text-lg font-medium">
                      Delivers in: 3-7 Working Days Shipping & Return
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-1 md:py-4 lg:py-8 flex justify-center items-center gap-1 w-full px-6">
                <AddReview
                  product_image={product.product_image}
                  product_name={product.product_name}
                />
                <AddToCart product={product} />
              </div>
            </div>
          </div>
          <div className="py-4 md:py-6 lg:py-12">
            <div className="py-6">
              <p className="text-left py-2 text-xl md:text-2xl lg:text-3xl  font-bold">
                Description
              </p>
              <p className="text-left text-lg md:text-2xl lg:text-4xl">
                {product?.description}
              </p>
            </div>
            <div>
              {product?.keypoints.map((keypoint: string, index: number) => (
                <p
                  className="text-left text-lg md:text-xl lg:text-2xl font-medium"
                  key={index}
                >
                  . {keypoint}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-12">
              {products &&
                products
                  .slice(0, 12)
                  .map((product: TProduct, index: number) => (
                    <ProductCard product={product} key={index} />
                  ))}
            </div>
            <div className="flex justify-center w-full">
              <Link href="/men-clothing">View All</Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export async function generateStaticParams() {
  const res = await fetch(`http://zstore-server.vercel.app/men-clothing`);
  const products = await res.json();

  return products.slice(0, 10).map((product: TProduct) => {
    id: product._id;
  });
}

export default singleProductPage;
