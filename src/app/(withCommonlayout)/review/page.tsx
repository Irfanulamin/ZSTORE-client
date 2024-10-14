"use client";
import Container from "@/components/ui/Container";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useGetReviewsQuery } from "@/redux/feature/reviewApi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ReviewPage = () => {
  const { data, isLoading } = useGetReviewsQuery("");

  if (isLoading) {
    return (
      <Card className="w-full max-w-[350px] bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg rounded-lg overflow-hidden">
        <CardContent className="p-4">
          <p className="text-amber-800">Review data is Loading</p>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="py-24 min-h-[90vh] h-full">
      <Container>
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-amber-600">Reviews</h1>
          <p className="text-lg text-gray-700">
            At Zstore, we prioritize your feedback because it shapes our journey
            toward excellence.
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-2">
          {data &&
            data.map((review: any, index: number) => (
              <Card className="w-full max-w-[350px] bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <CardTitle>
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-amber-900 truncate pr-2">
                        {review.product_name || "Unnamed Product"}
                      </h2>
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
                    <p className="text-left text-sm text-amber-800 font-medium leading-relaxed">
                      {review.comment || "No comment provided"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default ReviewPage;
