import Categories from "@/components/Categories";
import FlashSale from "@/components/FlashSale";
import MostPopular from "@/components/MostPopular";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/ui/Banner";
import CustomButton from "@/components/ui/Button";
import Image from "next/image";

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
