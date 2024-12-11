"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useGetReviewsQuery } from "@/redux/feature/reviewApi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { HeadingText } from "./ui/HeadingText";
import { CarouselContent, CarouselItem,Carousel } from "./ui/Carousel";


export default function ReviewSection() {
  const { data } = useGetReviewsQuery("");

  return (
    <div className="py-12 bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <HeadingText
          head="Customer Review"
          title="We Truly Value Our Customers Your Satisfaction is Our Priority"
        />
        {data && (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent>
              {data.slice(0, 6).map((review: any, index: number) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-96 h-64">
                      <CardHeader className="pb-2">
                        <CardTitle>
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-amber-900 truncate pr-2">
                              {review.product_name || "Unnamed Product"}
                            </h3>
                            <div className="relative w-12 h-12 rounded-full border-2 border-amber-200 overflow-hidden flex-shrink-0">
                              <Image
                                fill
                                src={review.product_image}
                                alt={review.product_name || "Product"}
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="relative w-10 h-10 rounded-full border-2 border-amber-200 overflow-hidden">
                            <Image
                              fill
                              src={review.profile_pic}
                              alt={review.name || "Reviewer"}
                              className="object-cover"
                            />
                          </div>
                          <p className="font-medium text-base text-amber-900">
                            {review.name || "Anonymous"}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Rating
                            value={review.rating}
                            readOnly
                            style={{ maxWidth: 120 }}
                          />
                          <p className="text-left text-sm text-amber-800 font-medium leading-relaxed line-clamp-3">
                            {review.comment || "No comment provided"}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carouse>
        )}
      </div>
    </div>
  );
}
