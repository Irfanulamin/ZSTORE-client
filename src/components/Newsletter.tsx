import Image from "next/image";
import React from "react";
import Container from "./ui/Container";

const Newsletter = () => {
  return (
    <Container>
      <div className="flex justify-center items-center w-full rounded-md gap-12 border-0 md:border-2 lg:border-2 border-black">
        <div className="w-full hidden md:block lg:block">
          <Image
            className="object-cover  rounded-l-md w-3/4"
            src="/newsletter.jpg"
            alt="Newsletter Image"
            width={300}
            height={300}
          />
        </div>

        <div className="w-full pr-0 md:pr-12  lg:pr-24">
          <div>
            <h2 className="text-left md:text-right lg:text-right text-xl md:text-2xl lg:text-4xl font-bold ">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-left md:text-right lg:text-right text-sm md:text-base lg:text-base">
              Subscribe now for the latest updates on our new arrivals in
              clothes, watches, and menswear. Stay connected and be the first to
              know about exclusive offers and trends! Join us today!
            </p>
          </div>
          <div className="flex py-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-1 md:px-4 lg:px-4 py-2 rounded-l-md focus:outline-black focus:ring-2 focus:ring-black focus:ring-opacity-50 flex-grow"
            />
            <button className=" transition-all px-2  md:px-3 lg:px-6 py-2 bg-black text-white rounded-r-md ml-2 hover:bg-white hover:text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;
