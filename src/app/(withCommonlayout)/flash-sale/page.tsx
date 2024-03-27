import Container from "@/components/ui/Container";
import CountdownTimer from "@/components/ui/CountdownTimer";
import ProductCard from "@/components/ui/ProductCard";
import { TProduct } from "@/types/producttypes";

const FlashSalePage = async () => {
  const res = await fetch("http://localhost:5000/flash-sale");
  const products = await res.json();
  return (
    <div className="pt-24 min-h-[90vh] h-full">
      <Container>
        <div>
          <div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-bold space-x-6 text-left">
              Flash Sale
            </h4>
            <p className="text-left text-xs md:text-sm lg:text-sm text-black/80 py-2">
              Flash sale frenzy! Limited time, unbeatable deals await
              <br /> – grab them now
            </p>
            <div className="text-left">
              <CountdownTimer durationInSeconds={2592000}></CountdownTimer>
            </div>
          </div>
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6 lg:gap-12">
            {products.map((product: TProduct, index: number) => (
              <ProductCard product={product} key={index}></ProductCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FlashSalePage;
