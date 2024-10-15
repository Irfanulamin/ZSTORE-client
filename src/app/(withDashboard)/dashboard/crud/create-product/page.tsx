"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useCreateProductMutation } from "@/redux/feature/crudApi";
import { useToast } from "@/hooks/use-toast";

type FormValues = {
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

export default function ModernProductForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();
  const [createOrder] = useCreateProductMutation();
  const { toast } = useToast();
  const onSubmit = (data: FormValues) => {
    const transformedData = {
      ...data,
      keypoints: data.keypoints
        .toString()
        .split(",")
        .map((item) => item.trim()),
      // Parse numeric fields
      amount: parseFloat(data.amount.toString()),
      reviews: parseInt(data.reviews.toString(), 10),
      rating: parseFloat(data.rating.toString()),
    };
    console.log(transformedData);
    createOrder(transformedData);
    toast({
      variant: "success",
      title: `Product has been succesfully added 😎✅`,
      description: "Check Out! New things!",
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Create a Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="product_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Name
            </label>
            <input
              {...register("product_name", {
                required: "Product name is required",
              })}
              id="product_name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.product_name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.product_name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">
                {errors.category.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="product_image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Image URL
          </label>
          <input
            {...register("product_image", {
              required: "Product image URL is required",
            })}
            id="product_image"
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.product_image && (
            <p className="mt-1 text-sm text-red-600">
              {errors.product_image.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price
            </label>
            <input
              {...register("amount", {
                required: "Price is required",
                min: { value: 0, message: "Price must be positive" },
              })}
              id="amount"
              type="number"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">
                {errors.amount.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="product_id"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product ID
            </label>
            <input
              {...register("product_id", {
                required: "Product ID is required",
              })}
              id="product_id"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.product_id && (
              <p className="mt-1 text-sm text-red-600">
                {errors.product_id.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            id="description"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="keypoints"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Key Points
          </label>
          <input
            {...register("keypoints", { required: "Key points are required" })}
            id="keypoints"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Separate points with commas"
          />
          {errors.keypoints && (
            <p className="mt-1 text-sm text-red-600">
              {errors.keypoints.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="reviews"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Number of Reviews
            </label>
            <input
              {...register("reviews", {
                required: "Number of reviews is required",
                min: { value: 0, message: "Reviews must be non-negative" },
              })}
              id="reviews"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.reviews && (
              <p className="mt-1 text-sm text-red-600">
                {errors.reviews.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Rating
            </label>
            <input
              {...register("rating", {
                required: "Rating is required",
                min: { value: 0, message: "Rating must be between 0 and 5" },
                max: { value: 5, message: "Rating must be between 0 and 5" },
              })}
              id="rating"
              type="number"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.rating && (
              <p className="mt-1 text-sm text-red-600">
                {errors.rating.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <input
            {...register("flash_sale")}
            id="flash_sale"
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="flash_sale"
            className="ml-2 block text-sm text-gray-900"
          >
            Flash Sale
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Creat A Product
        </button>
      </form>
    </div>
  );
}
