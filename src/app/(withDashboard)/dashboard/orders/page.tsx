"use client";
import {
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from "@/redux/feature/orderPostApi";

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RiTimer2Line } from "react-icons/ri";
import { Switch } from "@nextui-org/switch";
import { SubmitHandler } from "react-hook-form";
import { IoMdDoneAll } from "react-icons/io";

const OrderControlPanel = () => {
  const { data } = useGetOrdersQuery("");
  const [updateMutation] = useUpdateOrderMutation();

  const onSubmit: any = async (id: any) => {
    try {
      const { data }: any = await updateMutation({
        id,
      });
      console.log(data);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <div className="w-full flex flex-col gap-y-4 my-6 ">
        {data &&
          data.map((item: any, index: number) => (
            <div
              key={item._id}
              className="flex justify-start items-center gap-x-4"
            >
              <div className="hidden md:block lg:block">
                <h4 className="text-semibold  text-xl">{index + 1}</h4>
              </div>
              <div>
                <p className="text-xs md:text-lg lg:text-lg font-bold text-start">
                  {item.name}
                </p>
                <p className="text-xs font-semibold hidden md:block lg:block">
                  {item.email}
                </p>
              </div>
              <div>
                <div className=" flex justify-center">
                  <FaLocationDot className="w-4 h-4  text-red-500" />
                  <div>
                    <p className="text-xs  font-semibold ">{item.location}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-green-500 font-semibold text-start">
                  {item.cart.map((item: any, index: number) => (
                    <div key={index}>
                      <span className="text-black">{item.name}</span>
                      <span className="mx-1 text-red-500">
                        x{item.quantity}
                      </span>
                    </div>
                  ))}
                </p>
              </div>
              <div>
                <p className="text-xs text-green-700 font-semibold text-start">
                  {item.cart
                    .reduce(
                      (acc: any, item: any) =>
                        acc + item.amount * item.quantity,
                      0
                    )
                    .toFixed(2)}
                  $
                </p>
              </div>
              {item.status === "pending" && (
                <div className="flex justify-center items-center">
                  <RiTimer2Line className="text-yellow-500 w-4 h-4" />
                  <div>
                    <p className="text-yellow-500 text-xs">{item.status}</p>
                  </div>
                </div>
              )}
              {item.status === "Delivered" && (
                <div className="flex justify-center items-center">
                  <RiTimer2Line className="text-green-500 w-4 h-4" />
                  <div>
                    <p className="text-green-500 text-xs">{item.status}</p>
                  </div>
                </div>
              )}
              <div>
                <button
                  onClick={() => onSubmit(item._id)}
                  className="font-medium text-xs active:border-b-2 text-black bg-green-600 border-2 border-green-700 border-b-4 p-2 rounded   "
                >
                  <IoMdDoneAll className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderControlPanel;
