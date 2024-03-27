"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, Slider } from "@nextui-org/react";

import Link from "next/link";
import { useRouter } from "next/navigation";

const SortingSection = () => {
  const router = useRouter();
  const [amountValue, setAmountValue] = useState<number[]>([0, 0]);
  const [ratingValue, setRatingValue] = useState<number>();
  const [categoryValue, setCategoryValue] = useState<string>();
  console.log(amountValue);
  console.log(ratingValue);
  console.log(categoryValue);
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
        <Checkbox radius="none" onClickCapture={() => setCategoryValue("")}>
          <span className="text-xs">All Products</span>
        </Checkbox>
        <Checkbox
          radius="none"
          onClickCapture={() => setCategoryValue("Shirt")}
        >
          <span className="text-xs">Shirt</span>
        </Checkbox>
        <Checkbox
          radius="none"
          onClickCapture={() => setCategoryValue("Jeans")}
        >
          <span className="text-xs">Jeans</span>
        </Checkbox>
        <Checkbox
          radius="none"
          onClickCapture={() => setCategoryValue("Sunglasses")}
        >
          <span className="text-xs">Sunglasses</span>
        </Checkbox>
        <Checkbox
          radius="none"
          onClickCapture={() => setCategoryValue("Footwear")}
        >
          <span className="text-xs">Footwear</span>
        </Checkbox>
        <Checkbox
          radius="none"
          onClickCapture={() => setCategoryValue("Jacket")}
        >
          <span className="text-xs">Jacket</span>
        </Checkbox>
        <Checkbox
          radius="none"
          onClickCapture={() => setCategoryValue("Watches")}
        >
          <span className="text-xs">Watch</span>
        </Checkbox>
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
