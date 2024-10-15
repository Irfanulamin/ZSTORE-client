"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useGetProductQuery } from "@/redux/feature/crudApi";

const ReadPage = () => {
  const { data: products } = useGetProductQuery("");

  interface TProduct {
    product_name: string;
    category: string;
    product_image: string;
    flash_sale: boolean;
    amount: number;
    description: string;
    keypoints: string[];
    reviews: number;
    rating: number;
    product_id: string;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="bg-white shadow-md rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden md:inline-block lg:inline-block">
                Image
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="hidden md:inline-block lg:inline-block">
                Rating
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products &&
              products.map((product: TProduct, index: number) => (
                <TableRow key={index}>
                  <TableCell className="hidden md:inline-block lg:inline-block">
                    <Image
                      src={product.product_image}
                      alt={product.product_name}
                      width={50}
                      height={50}
                      className="rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    {product.product_name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-green-500">
                      ${product.amount.toFixed(2)}
                    </span>
                  </TableCell>
                  <TableCell className="hidden md:inline-block lg:inline-block">
                    <div className="flex items-center">
                      {product.rating.toFixed(1)}
                      <div className="ml-2 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReadPage;
