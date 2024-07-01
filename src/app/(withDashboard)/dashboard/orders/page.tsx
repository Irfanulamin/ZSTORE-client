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
import { Avatar } from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";

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
    <div className="w-full flex flex-col gap-y-4 my-6  p-6">
      {data &&
        data
          .slice()
          .reverse()
          .map((item: any, index: number) => (
            <div
              key={item._id}
              className="flex justify-between items-center gap-x-1 md:gap-x-4 lg:gap-x-8 w-full"
            >
              <div className="hidden md:block lg:block">
                <h4 className="text-semibold  text-xl">{index + 1}</h4>
              </div>
              <div>
                <Avatar
                  isBordered
                  src="https://i.ibb.co/XWqvgyv/Minimalist-Avatar-Illustration.jpg"
                />
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
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="shadow">
                      Ordered Items <FaShoppingCart />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    {item.cart.map((item: any, index: number) => (
                      <DropdownItem key={index}>
                        <span className="text-black font-semibold">
                          {item.name}
                        </span>
                        <span className="mx-1 text-red-500 font-semibold">
                          x{item.quantity}
                        </span>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>

              <div>
                <p className="text-xs md:text-base lg:text-base text-green-500 font-semibold text-start"></p>
              </div>
              <div>
                <p className="text-xs md:text-base lg:text-base text-green-700 font-semibold text-start">
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
  );
};

export default OrderControlPanel;
