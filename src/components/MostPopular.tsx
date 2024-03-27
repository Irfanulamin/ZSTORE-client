import { TProduct } from "@/types/producttypes";
import CustomButton from "./ui/Button";
import Container from "./ui/Container";
import ProductCard from "./ui/ProductCard";

const MostPopular = async () => {
  const res = await fetch("http://localhost:5000/trending-products", {
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
            <h4 className="text-lg md:text-xl lg:text-2xl font-bold space-x-6 text-left">
              Most Popular Products
            </h4>
            <p className="text-left text-xs md:text-sm lg:text-sm text-black/80">
              Discover the allure of our best-sellers, where quality meets
              demand,
              <br /> and satisfaction awaits with every purchase.
            </p>
          </div>
          <div>
            <CustomButton link="/men-clothing" content="View All" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {products.slice(0, 8).map((product: TProduct, index: number) => (
            <ProductCard key={index} product={product}></ProductCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MostPopular;
