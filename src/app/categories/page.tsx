"use client";
import Image from "next/image";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Container from "../../components/ui/Container";
// import { button } from "@nextui-org/react";

const Categories = () => {
  const categories = [
    {
      name: "Footwear",
      image: "https://i.ibb.co/g4PDQ9H/The-Connaught-Oxford-in-Black.jpg",
    },
    {
      name: "Sunglasses",
      image: "https://i.ibb.co/YQfnzrJ/y2k-Sunglasses.jpg",
    },
    {
      name: "Jeans",
      image: "https://i.ibb.co/w0rSKnn/Men-Slant-Pocket-Straight-Leg-Jeans.jpg",
    },
    {
      name: "Jacket",
      image:
        "https://i.ibb.co/4YTzFCY/Hair-Mould-Ani-Kang-spring-Autumn-Cool-Luxury-Short-Black-Soft-Light-Pu-Leather-Jacket-Men-Zipper-Ca.jpg",
    },
    {
      name: "Watches",
      image:
        "https://i.ibb.co/98GqzV1/997a74e5-4e7a-4631-810a-8199dde0fe2b.jpg",
    },
    {
      name: "Shirt",
      image:
        "https://i.ibb.co/cxcdzX5/H2-H-Mens-Casual-Slim-Fit-Long-Sleeve-Dress-Shirts-Basic-Designed-Business-Shirts.jpg",
    },
  ];
  return (
    <div className="py-24 min-h-[90vh] h-full">
      <Container>
        <div className="w-full">
          <div className="w-full md:w-1/2 lg:w-1/2">
            <h1 className=" text-left text-xl space-x-6 md:text-2xl lg:text-5xl font-bold text-black  ">
              Top Categories
            </h1>
            <p className="text-left py-2 md:py-4 lg:py-8 text-xs md:text-sm lg:text-lg text-black/70 ">
              From thrilling adventures to heartwarming tales, find your next
              favorite book in our vast collection. Let the pages transport you
              to worlds unknown and characters unforgettable.
            </p>
          </div>
        </div>

        <div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-6 lg:gap-6">
            {categories.slice(0, 1).map((category) => (
              <div key={category.name} className="mt-2  relative">
                <Link href={`/men-clothing?category=${category.name}`}>
                  <Image
                    className="w-full h-24 md:h-full lg:h-full object-cover rounded-md brightness-50"
                    src={category.image}
                    width={500}
                    height={500}
                    alt={category.name}
                  ></Image>
                  <p className="hidden md:block lg:block absolute bottom-2 left-2 px-2 py-1 text-white text-3xl font-semibold">
                    {category.name}
                  </p>
                </Link>
              </div>
            ))}
            <div>
              {categories.slice(1, 3).map((category) => (
                <div className="mt-2 relative" key={category.name}>
                  <Link href={`/men-clothing?category=${category.name}`}>
                    <Image
                      src={category.image}
                      className="w-full h-24 md:h-96 lg:h-96 object-cover rounded-md brightness-50"
                      width={500}
                      height={500}
                      alt={category.name}
                    ></Image>
                    <p className="hidden md:block lg:block absolute bottom-2 left-2 px-2 py-1 text-white text-3xl font-semibold">
                      {category.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            {categories.slice(3, 4).map((category) => (
              <div className=" mt-2 relative " key={category.name}>
                <Link href={`/men-clothing?category=${category.name}`}>
                  <Image
                    src={category.image}
                    className="w-full h-24 md:h-full lg:h-full object-cover rounded-md brightness-50"
                    width={500}
                    height={500}
                    alt={category.name}
                  ></Image>
                  <p className="hidden md:block lg:block absolute bottom-2 left-2 px-2 py-1 text-white text-3xl font-semibold">
                    {category.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          <div className=" grid grid-cols-2 gap-6">
            {categories.slice(4, 6).map((category) => (
              <div key={category.name} className="mt-2 relative">
                <Link href={`/men-clothing?category=${category.name}`}>
                  <Image
                    className="mt-2 relative w-full h-96 object-cover rounded-md brightness-50"
                    src={category.image}
                    width={500}
                    height={500}
                    alt={category.name}
                  ></Image>
                  <p className="hidden md:block lg:block absolute bottom-2 left-2 px-2 py-1 text-white text-3xl font-semibold">
                    {category.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
