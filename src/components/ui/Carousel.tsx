"use client";
import { TProduct } from "@/types/producttypes";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

import { CiCirclePlus } from "react-icons/ci";

export default function Carousel({ products }: { products: TProduct[] }) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla mx-auto mt-1 md:mt-6 lg:mt-12  " ref={emblaRef}>
      <div className="embla__container">
        {products.slice(2, 6).map((product, index: number) => (
          <div key={index} className=" embla__slide w-full">
            <div className=" relative">
              <Image
                alt={product?.product_name}
                className="rounded h-80 w-full object-cover "
                src={product?.product_image}
                width={500}
                height={500}
              />
              <p className="absolute top-1 left-2 bg-black/90 rounded-full px-2 py-1 text-white text-xs">
                -12%
              </p>
            </div>
            <div className="p-2">
              <div>
                <h6 className="text-white text-xl font-semibold">
                  {product?.product_name}
                </h6>
              </div>
              <div className=" flex justify-between gap-2 items-center py-2">
                <div className="flex justify-center items-center gap-1">
                  <p className="text-lg line-through text-white/80">
                    {(product?.amount * 1.12).toFixed(2)}$
                  </p>
                  <p className="text-xl text-white">{product?.amount}$</p>
                </div>
                <div>
                  <Link href={`/men-clothing/${product?._id}`}>
                    <CiCirclePlus size={40} className="text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
