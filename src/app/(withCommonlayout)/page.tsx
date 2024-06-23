import Categories from "@/components/Categories";
import FlashSale from "@/components/FlashSale";
import MostPopular from "@/components/MostPopular";
import Newsletter from "@/components/Newsletter";
import TopProducts from "@/components/TopProducts";
import Banner from "@/components/ui/Banner";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <FlashSale></FlashSale>
      <TopProducts />
      <Categories></Categories>
      <MostPopular></MostPopular>
      <Newsletter />
    </>
  );
}
