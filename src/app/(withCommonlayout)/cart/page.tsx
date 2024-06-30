/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "@/components/ui/Container";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { removeFromCartById } from "@/redux/feature/cartSlice";
import { divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { CiCircleMinus, CiCircleRemove } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateOrdersMutation } from "@/redux/feature/orderPostApi";

const CartPage = () => {
  const [createOrder] = useCreateOrdersMutation();
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const removeFromCartByIdSubmit = (id: any) => {
    dispatch(removeFromCartById({ id: id }));
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData: FieldValues) => {
    try {
      const orderData = {
        name: formData.name,
        email: formData.email,
        location: formData.location,
        cart,
        status: "pending",
      };
      createOrder(orderData);
    } catch (error: any) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="min-h-[90vh] h-[100%] pt-12 md:pt-24 lg:pt-24">
      <Container>
        {cart.length !== 0 && (
          <div className="grid grid-cols-1  lg:grid-cols-2 place-content-center gap-2">
            <div>
              <div className="bg-black rounded-sm py-4">
                <h4 className="text-white font-semibold text-lg">
                  Your Shopping Cart{" "}
                  <CgShoppingCart className="inline-block w-6 h-6 text-white" />
                </h4>
              </div>
              <div className="w-full flex flex-col gap-y-4 my-6 ">
                {cart &&
                  cart.map((item: any, index: number) => (
                    <div
                      key={item.id}
                      className="flex justify-start items-center gap-x-4"
                    >
                      <div className="hidden md:block lg:block">
                        <h4 className="text-semibold  text-xl">{index + 1}</h4>
                      </div>
                      <div>
                        <Image
                          src={item.image}
                          className="h-12 w-12 object-cover border-2 border-black"
                          width={100}
                          height={100}
                          alt={item.name}
                        />
                      </div>
                      <div>
                        <p className="text-xs md:text-lg lg:text-lg font-bold text-start">
                          {item.name}
                        </p>
                        <p className="text-xs hidden md:block lg:block">
                          {item.description.split(" ").slice(0, 6).join(" ")}
                        </p>
                      </div>
                      <div className="flex justify-start items-center gap-1">
                        <div>
                          <p className="text-base  font-semibold text-start">
                            x{item.quantity}
                          </p>
                        </div>
                        <div onClick={() => removeFromCartByIdSubmit(item.id)}>
                          <CiCircleMinus className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <p className="text-base text-red-400 font-semibold text-start">
                          {(item.amount * item.quantity).toFixed(2)}$
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <hr className="border-2 border-black my-4" />
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-xl">Total Amount :-</p>
                </div>
                <div>
                  <p className="font-semibold text-red-800 bg-white border-2 border-slate-900 px-2 rounded py-2 border-b-4">
                    {cart
                      .reduce(
                        (acc: any, item: any) =>
                          acc + item.amount * item.quantity,
                        0
                      )
                      .toFixed(2)}
                    $
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full  rounded-md p-8">
                <div>
                  <h2 className="text-left text-3xl py-4 lg:text-5xl font-semibold  text-slate-900">
                    Thanks For Ordering!
                  </h2>
                  <p className="text-black text-sm  py-2 lg:py-4 text-left ">
                    Thank you for ordering! Your purchase supports quality
                    products and exceptional service, delivered promptly to your
                    satisfaction.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col w-full">
                      <label className="text-left text-black font-semibold text-lg">
                        Name
                      </label>
                      <input
                        className="focus:outline-slate-900 text-slate-900 font-semibold rounded-md p-2 border-2 border-black"
                        required
                        type="text"
                        placeholder="username"
                        {...register("name")}
                        id="name"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-left text-black font-semibold text-lg">
                        Email
                      </label>
                      <input
                        className="focus:outline-slate-900 text-slate-900 font-semibold rounded-md p-2 border-2 border-black"
                        required
                        type="email"
                        placeholder="email"
                        {...register("email")}
                        id="email"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-black text-left font-semibold text-lg`">
                        Location
                      </label>
                      <textarea
                        className="focus:outline-slate-900 text-slate-900 font-semibold rounded-md p-2 py-3 border-2 border-black"
                        required
                        placeholder="location"
                        {...register("location")}
                        id="location"
                      />
                    </div>
                  </div>

                  <div className=" py-2">
                    <button
                      type="submit"
                      className="rounded w-full py-4 bg-slate-900 text-base font-bold text-white border-slate-900 border-2 border-b-4 active:border-b-2 hover:border-slate-800"
                    >
                      Buy Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {cart.length === 0 && (
          <>
            <h4 className="text-4xl py-4">
              "Your Cart Looks Empty , Get some products from"
            </h4>
            <Link
              href="/men-clothing"
              className="bg-white active:border-b-2 hover:border-red-900 font-bold border-2 border-red-800 border-b-4 rounded p-2"
            >
              Z-Store
            </Link>
          </>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
