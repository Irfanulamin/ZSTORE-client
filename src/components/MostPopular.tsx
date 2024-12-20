import { TProduct } from "@/types/producttypes";

import Container from "./ui/Container";
import ProductCard from "./ui/ProductCard";

import Link from "next/link";
import { HeadingText } from "./ui/HeadingText";
import { Eye } from "lucide-react";

const MostPopular = async () => {
  const res = await fetch("http://zstore-server.vercel.app/trending-products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  return (
    <div className="pt-24 pb-12">
      <Container>
        <HeadingText
          head="Most Popular Products"
          title="Discover the allure of our best-sellers, where quality meets
              demand, and satisfaction awaits with every purchase."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 py-12">
          {products.slice(0, 8).map((product: TProduct, index: number) => (
            <ProductCard key={index} product={product}></ProductCard>
          ))}
        </div>
        <div>
          <Link href="\men-clothing">
            <button className="text-white bg-black px-4 py-2 rounded-lg text-base font-semibold">
              View All
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MostPopular;
