/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-[90vh] h-full py-24">
      <Container>
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-4xl">
            About Z-Store
          </h1>
          <p className="text-left mt-4 text-sm lg:text-xl text-gray-600">
            Welcome to Z-Store, your one-stop destination for all your shopping
            needs. At Z-Store, we pride ourselves on offering a wide range of
            high-quality products at affordable prices. Whether you're looking
            for electronics, fashion, home goods, or gifts, we've got you
            covered. Our mission is to provide our customers with a seamless
            shopping experience and top-notch customer service. Thank you for
            choosing Z-Store. Happy shopping!
          </p>
        </div>
        <div className="mt-8 text-left">
          <p className="text-white bg-black p-1">Facilities:</p>
          <ul className="list-disc list-inside mt-2">
            <li className="text-gray-600">
              Wide range of high-quality products
            </li>
            <li className="text-gray-600">Affordable prices</li>
            <li className="text-gray-600">Seamless shopping experience</li>
            <li className="text-gray-600">Top-notch customer service</li>
          </ul>
        </div>
        <div className="mt-8 text-left">
          <p className="text-white bg-black p-1">Why Choose Us:</p>
          <ul className="list-disc list-inside mt-2">
            <li className="text-gray-600">Exceptional quality products</li>
            <li className="text-gray-600">Competitive prices</li>
            <li className="text-gray-600">User-friendly shopping platform</li>
            <li className="text-gray-600">Dedicated customer support</li>
            <li className="text-gray-600">Fast and reliable shipping</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
