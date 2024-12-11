import { TProduct } from "@/types/producttypes";

import Container from "./ui/Container";
import ProductCard from "./ui/ProductCard";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch("http://zstore-server.vercel.app/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  return (
    <div className="pt-24 pb-12">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-3xl font-bold space-x-6 text-left">
              Flash Sale
            </h4>
          </div>

          <div>
            <Link href="/flash-sale">View All</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {products
            .reverse()
            .slice(0, 4)
            .map((product: TProduct, index: number) => (
              <ProductCard key={index} product={product}></ProductCard>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;
