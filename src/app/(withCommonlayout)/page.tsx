import Categories from "@/components/Categories";
import FlashSale from "@/components/FlashSale";
import MostPopular from "@/components/MostPopular";
import Banner from "@/components/ui/Banner";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <FlashSale></FlashSale>
      <Categories></Categories>
      <MostPopular></MostPopular>
    </>
  );
}
