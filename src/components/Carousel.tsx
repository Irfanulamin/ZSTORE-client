"use client";
import { TProduct } from "@/types/producttypes";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

import { CiCirclePlus } from "react-icons/ci";

export default function Carousel({ products }: { products: TProduct[] }) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla mx-auto my-1 md:my-6 lg:my-12  " ref={emblaRef}>
      <div className="embla__container">
        {products.slice(2, 6).map((product, index: number) => (
          <div key={index} className=" embla__slide w-full">
            <div className=" relative">
              <Image
                alt={product?.product_name}
                className="rounded-lg h-80 w-full object-cover "
                src={product?.product_image}
                width={500}
                height={500}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
