"use client";
import { GiClothes } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { Checkbox, Select, SelectItem, Slider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { categories } from "@/util/categories";

const SortingSection = () => {
  const router = useRouter();
  const [amountValue, setAmountValue] = useState<number[]>([0, 0]);
  const [ratingValue, setRatingValue] = useState<number>();
  const [categoryValue, setCategoryValue] = useState<string>();

  const handleSelectionChange = (e: any) => {
    setCategoryValue(e.target.value);
  };

  useEffect(() => {
    if (
      categoryValue !== undefined ||
      amountValue[1] !== 0 ||
      ratingValue !== undefined
    ) {
      router.push(
        `/men-clothing?${categoryValue ? `category=${categoryValue}&` : ``}${
          amountValue && amountValue[1] !== 0
            ? `minAmount=${amountValue[0]}&maxAmount=${amountValue[1]}&`
            : ``
        }${ratingValue ? `rating=${ratingValue}&` : ``}`
      );
    }
  }, [router, categoryValue, amountValue, ratingValue]);

  return (
    <>
      <div className="border my-5 border-black/10 rounded flex flex-col justify-center items-start gap--12">
        <div className="border-l-4 border-black my-1 rounded">
          <p className="text-sm font-semibold p-1">Price Range</p>
        </div>

        <Slider
          color="foreground"
          label="Price Range"
          step={100}
          minValue={0}
          maxValue={300}
          defaultValue={[0, 0]}
          formatOptions={{ style: "currency", currency: "USD" }}
          className="max-w-sm p-4"
          onChangeEnd={(e) => setAmountValue(e as number[])}
        />
      </div>
      <div className="border my-5 border-black/10 rounded flex flex-col justify-center items-start p-2">
        <div className="border-l-4 border-black my-1 rounded">
          <p className="text-sm font-semibold p-1">Category</p>
        </div>

        <Select
          label="Select Your Category"
          placeholder="category"
          startContent={<GiClothes />}
          className="max-w-xs"
          onChange={handleSelectionChange}
        >
          {categories.map((category) => (
            <SelectItem key={category.name} value={category.name}>
              {category.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="border my-5 border-black/10 rounded flex flex-col justify-center items-start ">
        <div className="border-l-4 border-black my-1 rounded">
          <p className="text-sm font-semibold p-1">Ratings</p>
        </div>
        <Slider
          size="md"
          step={0.1}
          color="foreground"
          label="Score"
          maxValue={5}
          minValue={0}
          defaultValue={0}
          className="max-w-sm p-4"
          onChangeEnd={(e) => setRatingValue(e as number)}
        />
      </div>
    </>
  );
};

export default SortingSection;
