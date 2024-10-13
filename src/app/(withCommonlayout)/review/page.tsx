"use client";
import Container from "@/components/ui/Container";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useGetReviewsQuery } from "@/redux/feature/reviewApi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ReviewPage = () => {
  const { data } = useGetReviewsQuery("");
  return (
    <div className="py-24 min-h-[90vh] h-full">
      <Container>
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-amber-600">Reviews</h1>
          <p className="text-lg text-gray-700">
            "At Zstore, we prioritize your feedback because it shapes our
            journey toward excellence."
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-2">
          {data &&
            data.map((review: any, index: number) => (
              <Card className="w-[350px] bg-amber-600 shadow-lg rounded-lg overflow-hidden">
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-between items-center">
                      <h1 className="text-lg font-semibold text-left">
                        {review.product_name} Review #{index + 1}
                      </h1>
                      <Image
                        width={40}
                        height={40}
                        src={review.product_image}
                        alt="product-pic"
                        className="w-10 h-10 rounded-full border border-gray-300 object-cover"
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8 pt-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <Image
                      width={40}
                      height={40}
                      src={
                        review.image
                          ? review.image
                          : "https://i.ibb.co.com/XWqvgyv/Minimalist-Avatar-Illustration.jpg"
                      }
                      className="w-10 h-10 rounded-full border border-gray-300 object-cover"
                      alt="profile-pic"
                    />
                    <p className="font-medium text-lg ">{review.name}</p>
                  </div>

                  <div>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={review.rating}
                      readOnly
                    />
                    <p className="text-sm text-left font-semibold">
                      {review.comment}
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
