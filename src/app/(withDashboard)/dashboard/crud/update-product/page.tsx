"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Edit2, X } from "lucide-react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "@/redux/feature/crudApi";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

type Product = {
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
};

const categories = [
  "Footwear",
  "Sunglasses",
  "Jeans",
  "Jacket",
  "Watches",
  "Shirt",
];

export default function UpdatePage() {
  const { data: products } = useGetProductQuery("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [updateMutation] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Product>();

  const { fields, append, remove } = useFieldArray<any>({
    control,
    name: "keypoints",
  });

  const onSubmit = (data: Product) => {
    console.log(data);
    setIsOpen(false);
    const { _id, rating, reviews, ...updateProduct } = data;
    updateMutation({ id: _id, updateProduct });
    reset();
  };

  const openEditModal = (product: Product) => {
    setSelectedProduct(product);
    reset(product);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden md:table-cell">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.map((product: Product, index: number) => (
              <TableRow key={index}>
                <TableCell className="hidden md:table-cell">
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
                <TableCell className="hidden md:table-cell">
                  <Badge variant="secondary">{product.category}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-green-500">
                    ${Number(product.amount).toFixed(2)}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => openEditModal(product)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Product</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="product_id" className="text-sm font-medium">
                Product ID
              </label>
              <Input
                {...register("product_id", {
                  required: "Product ID is required",
                })}
                id="product_id"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="product_name" className="text-sm font-medium">
                Product Name
              </label>
              <Input
                {...register("product_name", {
                  required: "Product name is required",
                })}
                id="product_name"
              />
              {errors.product_name && (
                <p className="text-sm text-red-500">
                  {errors.product_name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <Controller
                name="category"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.category && (
                <p className="text-sm text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="product_image" className="text-sm font-medium">
                Image URL
              </label>
              <Input
                {...register("product_image", {
                  required: "Image URL is required",
                })}
                id="product_image"
              />
              {errors.product_image && (
                <p className="text-sm text-red-500">
                  {errors.product_image.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="amount" className="text-sm font-medium">
                Price
              </label>
              <Input
                {...register("amount", {
                  valueAsNumber: true,
                  required: "Price is required",
                  min: { value: 0, message: "Price must be positive" },
                })}
                id="amount"
                type="number"
                step="0.01"
              />
              {errors.amount && (
                <p className="text-sm text-red-500">{errors.amount.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                {...register("description", {
                  required: "Description is required",
                })}
                id="description"
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium">Keypoints</label>
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex items-center space-x-2 mt-2"
                >
                  <Input
                    {...register(`keypoints.${index}` as const, {
                      required: "Keypoint is required",
                    })}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => remove(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => append("")}
              >
                Add Keypoint
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Controller
                name="flash_sale"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="flash_sale"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <label htmlFor="flash_sale" className="text-sm font-medium">
                Flash Sale
              </label>
            </div>
            <Button type="submit">Update Product</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
