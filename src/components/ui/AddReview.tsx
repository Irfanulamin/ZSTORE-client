"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MdOutlineRateReview } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@nextui-org/react";
import { useCreateReviewsMutation } from "@/redux/feature/reviewApi";

interface AddReviewProps {
  product_name: string;
  product_image: string;
}

const AddReview: React.FC<AddReviewProps> = ({
  product_name,
  product_image,
}) => {
  const [createReview] = useCreateReviewsMutation();
  const { handleSubmit, register, reset } = useForm();
  const [rating, setRatingValue] = useState<number>();

  // Form submission handler
  const onSubmit = (data: any) => {
    createReview({
      ...data,
      rating,
      product_image,
      product_name,
    });
    reset();
  };

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger asChild>
          <button className="rounded w-full py-4 bg-amber-600 text-base font-bold text-white border-amber-900 border-2 border-b-4 active:border-b-2 hover:border-amber-800">
            Review
            <MdOutlineRateReview className="inline-block w-6 h-6 mx-1" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  className="col-span-3  border border-black "
                  {...register("name", { required: true })}
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image URL
                </Label>
                <Input
                  id="image"
                  className="col-span-3  border border-black"
                  {...register("image", {
                    pattern: {
                      value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
                      message: "Please enter a valid URL",
                    },
                  })}
                />
              </div>

              <div>
                <Slider
                  size="md"
                  step={0.1}
                  color="foreground"
                  label="Rating"
                  maxValue={5}
                  minValue={0}
                  defaultValue={0}
                  onChangeEnd={(e) => setRatingValue(e as number)}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="comment" className="text-right">
                  Comment
                </Label>
                <textarea
                  id="comment"
                  className="col-span-3  border border-black rounded-md p-2"
                  {...register("comment", { required: true })}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddReview;