"use client";

import React from "react";
import { useAppSelector } from "@/redux/hook";
import {
  useGetInfoByEmailQuery,
  useUpdateUserMutation,
} from "@/redux/feature/loginApi";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaUserCircle, FaEnvelope, FaUserTag, FaImage } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const email = useAppSelector((state) => state.auth.email);
  const { data } = useGetInfoByEmailQuery(email);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: data?.user.name,
      photoUrl: data?.user.photo || "/placeholder.svg",
    },
  });

  const [updateMutation] = useUpdateUserMutation();
  const onSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
    updateMutation({ email, name: formData?.name, photo: formData?.photoUrl });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Update Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex justify-center mb-6">
            <Image
              src={data?.user.photo}
              width={100}
              height={100}
              alt="Profile picture"
              className="rounded-full border-4 border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <FaUserCircle className="text-primary" />
              Name
            </Label>
            <Input id="name" {...register("name")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photoUrl" className="flex items-center gap-2">
              <FaImage className="text-primary" />
              Photo URL
            </Label>
            <Input
              id="photoUrl"
              {...register("photoUrl")}
              placeholder="Enter image URL"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              Email{" "}
              <span className="text-red-500 text-xs">You cannot change it</span>
            </Label>
            <Input
              id="email"
              value={data?.user.email}
              readOnly
              className="bg-muted"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type" className="flex items-center gap-2">
              <FaUserTag className="text-primary" />
              User Type{" "}
              <span className="text-red-500 text-xs">You cannot change it</span>
            </Label>
            <Input
              id="type"
              value={data?.user.type}
              readOnly
              className="bg-muted capitalize"
            />
          </div>

          <Button type="submit" className="w-full">
            Update Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
