"use client";
import Image from "next/image";
import Container from "./ui/Container";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
// import { button } from "@nextui-org/react";

const Categories = () => {
  const [showAll, setShowAll] = useState(false);
  const categories = [
    {
      name: "Shoes",
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
      name: "Jackets",
      image:
        "https://i.ibb.co/4YTzFCY/Hair-Mould-Ani-Kang-spring-Autumn-Cool-Luxury-Short-Black-Soft-Light-Pu-Leather-Jacket-Men-Zipper-Ca.jpg",
    },
    {
      name: "Watches",
      image:
        "https://i.ibb.co/98GqzV1/997a74e5-4e7a-4631-810a-8199dde0fe2b.jpg",
    },
    {
      name: "Shirts",
      image:
        "https://i.ibb.co/cxcdzX5/H2-H-Mens-Casual-Slim-Fit-Long-Sleeve-Dress-Shirts-Basic-Designed-Business-Shirts.jpg",
    },
  ];
  return (
    <div id="categories">
      <Container>
        <div className="flex justify-center items-center w-full">
          <div>
            <h1 className="text-xl space-x-6 md:text-2xl lg:text-5xl font-bold text-black text-center ">
              Top Categories
            </h1>
            <p className="py-2 md:py-4 lg:py-8 text-xs md:text-sm lg:text-lg text-black/70 px-2 md:px-12 lg:px-44">
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
              </div>
            ))}
            <div>
              {categories.slice(1, 3).map((category) => (
                <div className="mt-2 relative" key={category.name}>
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
                </div>
              ))}
            </div>
            {categories.slice(3, 4).map((category) => (
              <div className=" mt-2 relative " key={category.name}>
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
              </div>
            ))}
          </div>
          {showAll && (
            <div className=" grid grid-cols-2 gap-6">
              {categories.slice(4, 6).map((category) => (
                <div key={category.name} className="mt-2 relative">
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
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center py-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className=" bg-black px-4 py-2 text-base text-white rounded-full"
          >
            <div className="flex items-center gap-1">
              {showAll ? "Show Less" : "View All"}
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
