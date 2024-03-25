import { TProduct } from "@/types/producttypes";
import CustomButton from "./ui/Button";
import Container from "./ui/Container";
import ProductCard from "./ui/ProductCard";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/flash-sale");
  const products = await res.json();
  return (
    <div className="pt-24 pb-12">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-2xl font-bold space-x-6 text-left">
              Flash Sale
            </h4>
          </div>
          <div>
            <CustomButton link="/flash-sale" content="View All" />
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
