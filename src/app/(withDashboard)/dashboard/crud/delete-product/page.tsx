"use client";
import { TiDeleteOutline } from "react-icons/ti";
import React, { useState } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "@/redux/feature/crudApi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ReadPage = () => {
  const { data: products } = useGetProductQuery("");
  const [deleteMutation] = useDeleteProductMutation();

  interface TProduct {
    _id?: string;
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

  const [open, setOpen] = useState(false);

  const handleDelete = (id: any) => {
    deleteMutation(id);
    setOpen(false);
  };

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
              <TableHead className="hidden md:inline-block lg:inline-block">
                Category
              </TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
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
                  <TableCell className="hidden md:inline-block lg:inline-block">
                    <Badge variant="secondary">{product.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-green-500">
                      ${product.amount.toFixed(2)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <button>Delete Product</button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Delete Product</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete this product? This
                            action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <button onClick={() => setOpen(false)}>Cancel</button>
                          <button onClick={() => handleDelete(product._id)}>
                            Delete
                          </button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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
